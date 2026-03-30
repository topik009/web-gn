"use client";

import Link, { type LinkProps } from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import {Suspense,createContext,forwardRef,useCallback,useContext,useEffect,useMemo,useRef,useState,} from "react";
import type { UrlObject } from "url";

const MIN_VISIBLE_MS = 380;
const FAILSAFE_MS = 1000;

type NavigationPreloaderContextValue = {
    startNavigationPreloader: (href: LinkProps["href"]) => void;
};

const NavigationPreloaderContext = createContext<NavigationPreloaderContextValue | null>(null);
const inertNavigationPreloaderContextValue: NavigationPreloaderContextValue = {
    startNavigationPreloader: () => {},
};

function normalizePathname(pathname: string) {
    if (!pathname || pathname === "/") {
        return "/";
    }

    const normalizedPath = pathname.replace(/\/+$/, "");
    return normalizedPath === "" ? "/" : normalizedPath;
}

function buildRouteKey(url: URL) {
    const pathname = normalizePathname(url.pathname);
    const search = url.searchParams.toString();
    return `${pathname}?${search}`;
}

function shouldShowForNextUrl(nextUrl: URL, currentUrl: URL) {
    if (nextUrl.origin !== currentUrl.origin) {
        return false;
    }

    if (nextUrl.pathname === currentUrl.pathname && nextUrl.search === currentUrl.search) {
        return false;
    }

    return true;
}

function parseNextUrl(rawUrl: string | URL | null | undefined) {
    if (rawUrl === undefined || rawUrl === null) {
        return null;
    }

    try {
        return new URL(String(rawUrl), window.location.href);
    } catch {
        return null;
    }
}

function stringifyQueryValue(
    value:
        | string
        | number
        | bigint
        | boolean
        | null
        | undefined
        | readonly (string | number | bigint | boolean)[]
) {
    if (value === undefined || value === null) {
        return [];
    }

    if (Array.isArray(value)) {
        return value.map((item) => String(item));
    }

    return [String(value)];
}

function hrefToString(href: LinkProps["href"]) {
    if (typeof href === "string") {
        return href;
    }

    const urlObject = href as UrlObject;
    const pathname = urlObject.pathname ?? "";
    const searchParams = new URLSearchParams();

    if (urlObject.query) {
        Object.entries(urlObject.query).forEach(([key, value]) => {
            stringifyQueryValue(value).forEach((item) => {
                searchParams.append(key, item);
            });
        });
    }

    const search = searchParams.toString();
    const hash = urlObject.hash ?? "";

    return `${pathname}${search ? `?${search}` : ""}${hash}`;
}

function PreloaderOverlay({ isVisible }: { isVisible: boolean }) {
    return (
        <div
            aria-hidden="true"
            className={`fixed inset-0 isolate overflow-hidden transition-opacity duration-300 ${
                isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
            style={{ zIndex: 1600, backgroundColor: "var(--azul)" }}
        >
            <div className="preloader-premium-bg absolute inset-0 z-0" />
            <div className="preloader-premium-overlay absolute inset-0 z-10" />
            <div className="relative z-20 flex h-full w-full items-center justify-center px-6">
                <div className="preloader-logo-shell">
                    <Image
                        src="/img/grupo_navarro_white.png"
                        alt="Grupo Navarro"
                        width={727}
                        height={229}
                        priority
                        className="preloader-logo-pulse h-auto w-full"
                    />
                </div>
            </div>
        </div>
    );
}

function NavigationPreloaderContent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const routeKey = useMemo(
        () => `${normalizePathname(pathname)}?${searchParams.toString()}`,
        [pathname, searchParams]
    );
    const [isVisible, setIsVisible] = useState(true);
    const startAtRef = useRef(0);
    const hideTimerRef = useRef<number | null>(null);
    const failsafeTimerRef = useRef<number | null>(null);
    const pendingRouteKeyRef = useRef<string | null>(null);
    const previousRouteKeyRef = useRef(routeKey);

    const clearHideTimer = useCallback(() => {
        if (hideTimerRef.current !== null) {
            window.clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }
    }, []);

    const clearFailsafeTimer = useCallback(() => {
        if (failsafeTimerRef.current !== null) {
            window.clearTimeout(failsafeTimerRef.current);
            failsafeTimerRef.current = null;
        }
    }, []);

    const hidePreloader = useCallback(() => {
        pendingRouteKeyRef.current = null;
        setIsVisible(false);
        clearHideTimer();
        clearFailsafeTimer();
    }, [clearFailsafeTimer, clearHideTimer]);

    const scheduleHide = useCallback(() => {
        clearHideTimer();

        const elapsed = Date.now() - startAtRef.current;
        const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

        hideTimerRef.current = window.setTimeout(() => {
            hidePreloader();
        }, remaining);
    }, [clearHideTimer, hidePreloader]);

    const showPreloader = useCallback(
        (targetRouteKey?: string | null) => {
            if (targetRouteKey && pendingRouteKeyRef.current === targetRouteKey && isVisible) {
                return;
            }

            startAtRef.current = Date.now();
            if (targetRouteKey) {
                pendingRouteKeyRef.current = targetRouteKey;
            }

            setIsVisible(true);
            clearHideTimer();
            clearFailsafeTimer();
            failsafeTimerRef.current = window.setTimeout(() => {
                hidePreloader();
            }, FAILSAFE_MS);
        },
        [clearFailsafeTimer, clearHideTimer, hidePreloader, isVisible]
    );

    const startNavigationPreloader = useCallback(
        (href: LinkProps["href"]) => {
            const currentUrl = new URL(window.location.href);
            const nextUrl = parseNextUrl(hrefToString(href));

            if (!nextUrl || !shouldShowForNextUrl(nextUrl, currentUrl)) {
                return;
            }

            const nextRouteKey = buildRouteKey(nextUrl);
            if (nextRouteKey === routeKey) {
                return;
            }

            showPreloader(nextRouteKey);
        },
        [routeKey, showPreloader]
    );

    useEffect(() => {
        startAtRef.current = Date.now();
        clearHideTimer();
        clearFailsafeTimer();

        hideTimerRef.current = window.setTimeout(() => {
            hidePreloader();
        }, MIN_VISIBLE_MS);

        failsafeTimerRef.current = window.setTimeout(() => {
            hidePreloader();
        }, FAILSAFE_MS);
    }, [clearFailsafeTimer, clearHideTimer, hidePreloader]);

    useEffect(() => {
        const previousRouteKey = previousRouteKeyRef.current;
        previousRouteKeyRef.current = routeKey;

        if (previousRouteKey !== routeKey && pendingRouteKeyRef.current !== null) {
            scheduleHide();
        }
    }, [routeKey, scheduleHide]);

    useEffect(() => {
        const handlePopState = () => {
            startNavigationPreloader(window.location.href);
        };

        const originalPushState = window.history.pushState.bind(window.history);
        const originalReplaceState = window.history.replaceState.bind(window.history);

        window.history.pushState = ((state: unknown, unused: string, url?: string | URL | null) => {
            if (url) {
                startNavigationPreloader(url);
            }

            return originalPushState(state, unused, url);
        }) as History["pushState"];

        window.history.replaceState = ((state: unknown, unused: string, url?: string | URL | null) => {
            if (url) {
                startNavigationPreloader(url);
            }

            return originalReplaceState(state, unused, url);
        }) as History["replaceState"];

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
            window.removeEventListener("popstate", handlePopState);
            clearHideTimer();
            clearFailsafeTimer();
        };
    }, [clearFailsafeTimer, clearHideTimer, startNavigationPreloader]);

    return (
        <NavigationPreloaderContext.Provider value={{ startNavigationPreloader }}>
            {children}
            <PreloaderOverlay isVisible={isVisible} />
        </NavigationPreloaderContext.Provider>
    );
}

export function useNavigationPreloader() {
    const context = useContext(NavigationPreloaderContext);

    if (!context) {
        throw new Error("useNavigationPreloader must be used within NavigationPreloaderProvider.");
    }

    return context;
}

type NavigationPreloaderLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export const NavigationPreloaderLink = forwardRef<HTMLAnchorElement, NavigationPreloaderLinkProps>(
    function NavigationPreloaderLink({ href, onNavigate, ...props }, ref) {
        const { startNavigationPreloader } = useNavigationPreloader();

        return (
            <Link
                ref={ref}
                href={href}
                onNavigate={(event) => {
                    onNavigate?.(event);
                    startNavigationPreloader(href);
                }}
                {...props}
            />
        );
    }
);

NavigationPreloaderLink.displayName = "NavigationPreloaderLink";

function InitialPreloaderFallback({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <NavigationPreloaderContext.Provider value={inertNavigationPreloaderContextValue}>
            {children}
            <PreloaderOverlay isVisible />
        </NavigationPreloaderContext.Provider>
    );
}

export function NavigationPreloaderProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense fallback={<InitialPreloaderFallback>{children}</InitialPreloaderFallback>}>
            <NavigationPreloaderContent>{children}</NavigationPreloaderContent>
        </Suspense>
    );
}
