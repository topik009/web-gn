// "@/components/magicui/animated-beam.tsx"
"use client";

import { motion } from "motion/react";
import { RefObject, useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;

  /** NUEVO: segmentos ortogonales */
  shape?: "curve" | "elbow" | "segments";
  pattern?: "h" | "v" | "hv" | "vh" | "hvh" | "vhv";
  /** “Spine” alineado al borde del destino para hv* */
  alignToTargetEdge?: boolean;  // default true
  edgeGap?: number;             // separación del borde, default 12
  spineX?: number;              // opcional: forzar X del “spine”
  spineY?: number;              // opcional: forzar Y del “spine”

  curvature?: number;           // para "curve"
  elbowMode?: "auto" | "hv" | "vh"; // compatibilidad con versión anterior
  reverse?: boolean;

  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  gutter?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,

  // defaults
  shape = "segments",
  pattern = "hv",
  alignToTargetEdge = true,
  edgeGap = 12,
  spineX,
  spineY,

  curvature = 0,
  elbowMode = "auto",
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.25,
  gradientStartColor = "#1b1a61",
  gradientStopColor = "#f59521",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  gutter = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const gradientCoordinates = reverse
    ? { x1: ["90%", "-10%"], x2: ["100%", "0%"], y1: ["0%", "0%"], y2: ["0%", "0%"] }
    : { x1: ["10%", "110%"], x2: ["0%", "100%"],  y1: ["0%", "0%"], y2: ["0%", "0%"] };

  useEffect(() => {
    const updatePath = () => {
      const g = gutter;
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      setSvgDimensions({
        width:  containerRect.width  + 2 * g,
        height: containerRect.height + 2 * g,
      });

      const sx = rectA.left - containerRect.left + rectA.width / 2 + startXOffset + g;
      const sy = rectA.top  - containerRect.top  + rectA.height / 2 + startYOffset + g;
      const ex = rectB.left - containerRect.left + rectB.width / 2 + endXOffset + g;
      const ey = rectB.top  - containerRect.top  + rectB.height / 2 + endYOffset + g;

      const targetLeft = rectB.left - containerRect.left + g;
      const targetTop  = rectB.top  - containerRect.top + g;

      // “spines” por defecto junto al destino
      const autoSpineX = (alignToTargetEdge ? targetLeft - edgeGap : (sx + ex) / 2);
      const autoSpineY = (alignToTargetEdge ? targetTop  - edgeGap : (sy + ey) / 2);
      const spX = spineX ?? autoSpineX;
      const spY = spineY ?? autoSpineY;

      let d = "";

      if (shape === "segments") {
        switch (pattern) {
        case "h":
            // horizontal hasta la columna (spine) a la izquierda del destino
            d = `M ${sx},${sy} L ${spX},${sy}`;
            break;
          case "v":
            // vertical hasta la fila (spine) por encima del destino
            d = `M ${sx},${sy} L ${sx},${ey}`;
            break;
          case "hv":
            d = `M ${sx},${sy} L ${spX},${sy} L ${spX},${ey} L ${ex},${ey}`;
            break;
          case "vh":
            d = `M ${sx},${sy} L ${sx},${spY} L ${ex},${spY} L ${ex},${ey}`;
            break;
          case "hvh": // doble L (horizontal → vertical → horizontal)
            d = `M ${sx},${sy} L ${spX},${sy} L ${spX},${ey} L ${ex},${ey}`;
            break;
          case "vhv": // doble L (vertical → horizontal → vertical)
            d = `M ${sx},${sy} L ${sx},${spY} L ${ex},${spY} L ${ex},${ey}`;
            break;
          default:
            d = `M ${sx},${sy} L ${ex},${ey}`;
        }
      } else if (shape === "elbow") {
        const mode: "hv" | "vh" =
          elbowMode === "auto"
            ? (Math.abs(ex - sx) >= Math.abs(ey - sy) ? "hv" : "vh")
            : (elbowMode as "hv" | "vh");
        d =
          mode === "hv"
            ? `M ${sx},${sy} L ${spX},${sy} L ${spX},${ey} L ${ex},${ey}`
            : `M ${sx},${sy} L ${sx},${spY} L ${ex},${spY} L ${ex},${ey}`;
      } else {
        // curva (legacy)
        const controlY = sy - curvature;
        d = `M ${sx},${sy} Q ${(sx + ex) / 2},${controlY} ${ex},${ey}`;
      }

      setPathD(d);
    };

    const ro = new ResizeObserver(updatePath);
    if (containerRef.current) ro.observe(containerRef.current);
    updatePath();
    return () => ro.disconnect();
  }, [
    gutter, containerRef, fromRef, toRef,
    shape, pattern, alignToTargetEdge, edgeGap, spineX, spineY,
    elbowMode, curvature,
    startXOffset, startYOffset, endXOffset, endYOffset,
  ]);

  return (
    <svg
      fill="none"
      style={{ left: -gutter, top: -gutter, position: "absolute" }}
      width={svgDimensions.width}
      height={svgDimensions.height}
      className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={pathD} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity}
            strokeLinecap="round" strokeLinejoin="round" />
      <path d={pathD} stroke={`url(#${id})`} strokeWidth={pathWidth} strokeOpacity="1"
            strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
          animate={gradientCoordinates}
          transition={{ delay, duration, ease: [0.16, 1, 0.3, 1], repeat: Infinity }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
