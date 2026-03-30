import { NextResponse, type NextRequest } from "next/server";
import {
  INTERNAL_NOT_FOUND_ROUTE,
  isAllowedAppRoute,
  normalizePathname,
} from "@/lib/site-routes";

const PUBLIC_FILE_PATTERN = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname);
  const accept = request.headers.get("accept") ?? "";

  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  if (
    pathname === INTERNAL_NOT_FOUND_ROUTE ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/img/") ||
    pathname.startsWith("/brochures/") ||
    pathname.startsWith("/.well-known/") ||
    PUBLIC_FILE_PATTERN.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (!accept.includes("text/html")) {
    return NextResponse.next();
  }

  if (isAllowedAppRoute(pathname)) {
    return NextResponse.next();
  }

  const notFoundUrl = request.nextUrl.clone();
  notFoundUrl.pathname = INTERNAL_NOT_FOUND_ROUTE;
  notFoundUrl.search = "";

  return NextResponse.rewrite(notFoundUrl);
}
