"use client";

import { useRef, forwardRef } from "react";
import Image from "next/image";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";

type TileProps = {
title: string;
src: string;
className?: string;
};
const Tile = forwardRef<HTMLDivElement, TileProps>(({ title, src, className }, ref) => {
return (
    <div
    ref={ref}
    className={cn(
        "flex h-[80px] w-[80px] md:h-[120px] md:w-[140px] items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-black/5 px-1 md:py-0",
        className
    )}
    title={title}
    >
        <Image src={src} alt={title} width={100} height={100} />
    </div>
);
});
Tile.displayName = "Tile";

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = () => setMatches(mql.matches);
        onChange();
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [query]);
    return matches;
}

export default function IntegrationDiagram() {
const containerRef = useRef<HTMLDivElement | null>(null);

const navsa = useRef<HTMLDivElement | null>(null);
const imnconsa = useRef<HTMLDivElement | null>(null);
const virmaran = useRef<HTMLDivElement | null>(null);
const gn = useRef<HTMLDivElement | null>(null);
const navacord = useRef<HTMLDivElement | null>(null);

const isMd = useMediaQuery("(min-width: 768px)");

return (
<div ref={containerRef} className="relative mx-auto w-full max-w-[150px] h-[250px] md:max-w-[400px] md:h-[350px] rounded-2xl bg-white p-6 md:mt-25 md:mb-0 mb-55">
    <AnimatedBeam
        shape="segments" pattern="hvh"
        containerRef={containerRef}
        fromRef={navsa}
        toRef={gn}
        alignToTargetEdge edgeGap={isMd ? 120 : 60}
        endYOffset={-15}
        pathOpacity={0.25} pathWidth={2}
    />

    <AnimatedBeam
        shape="segments" pattern="h"
        containerRef={containerRef}
        fromRef={imnconsa}
        toRef={gn}
        alignToTargetEdge edgeGap={1}
        pathOpacity={0.25} pathWidth={2}
    />

    <AnimatedBeam
        gutter={150}
        shape="segments" pattern="hvh"
        containerRef={containerRef}
        fromRef={virmaran}
        toRef={gn}
        alignToTargetEdge edgeGap={isMd ? 120 : 60}
        endYOffset={15}
        pathOpacity={0.25} pathWidth={2}
    />

    <AnimatedBeam
        gutter={150}
        shape="segments" pattern="v"
        containerRef={containerRef}
        fromRef={gn}
        toRef={navacord}
        alignToTargetEdge edgeGap={0}
        startXOffset={-2}
        pathOpacity={0.25} pathWidth={2}
    />

    <div className="pointer-events-none absolute inset-0 -z-10" />
        <Tile ref={navsa}   title="navsa"   src="/img/navsa.png"        className="absolute -left-20 top-4" />
        <Tile ref={imnconsa}title="imnconsa"src="/img/imnconsa.png"     className="absolute -left-20 top-[150px] md:top-[200px]" />
        <Tile ref={virmaran}  title="virmaran"  src="/img/virmaran.png"       className="absolute -left-20 -bottom-30 md:-bottom-40" />
        <Tile ref={gn}      title="grupo navarro"      src="/img/logo-gn.png"     className="absolute left-30 md:left-90 top-[150px] md:top-[200px]" />
        <Tile ref={navacord}      title="navacord"  src="/img/navacord.png"className="absolute left-30 md:left-90 -bottom-30 md:-bottom-40" />
    </div>

    );
}