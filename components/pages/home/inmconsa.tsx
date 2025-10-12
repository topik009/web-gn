"use client"
import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

type CardsInm = { title: string; src: string; alt?: string };

const services = [
    { title: "ELABORACIÓN EXPEDIENTES TÉCNICOS", src: "/img/planos.jpg" },
    { title: "TOPOGRAFÍA", src: "/img/topografia.jpg" },
    { title: "DISEÑO INSTALACIONES SANITARIAS", src: "/img/sanitarias.jpg" },
    { title: "DISEÑO INSTALACIONES ELÉCTRICAS", src: "/img/electricas.jpg" },
    { title: "OBRAS CIVILES", src: "/img/oxi.jpg" },
    { title: "SUPERVISIÓN OBRAS", src: "/img/supervision.png" },
];

export function ServiciosInmconsa({ title, src, alt }: CardsInm) {
    return (
        <div className="flex flex-col overflow-hidden rounded-md bg-[#f59521] shadow-md">
            <div className="relative h-20 md:h-40 w-full">
                <Image
                src={src}
                alt={alt ?? title}
                fill
                className="object-cover p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                priority
                />
            </div>
            <div className="md:p-4 p-2 text-center">
                <h3 className="text-sm md:text-lg uppercase leading-tight tracking-wide text-white">
                    {title}
                </h3>
            </div>
        </div>
    );
}

export function InmconsaModal({ open, onOpenChange }: Props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] sm:!max-w-3xl md:!max-w-5xl lg:!max-w-5xl max-h-[95vh]">
                <DialogHeader>
                    <DialogTitle>
                        <BlurFade delay={0.20} inView>
                            <h2 className="text-3xl md:text-6xl tracking-tighter text-blue-950 md:mt-0 mt-5">
                                Consorcio Inmconsa
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.20 * 2} inView>
                            <span className="text-pretty text-xl md:text-3xl tracking-tighter text-orange-600">
                                Compromiso, exigencia, servicio
                            </span>
                        </BlurFade>
                    </DialogTitle>
                </DialogHeader>

                <div className="text-justify  md:text-2xl md:mt-5">
                    Aplicamos nuestra experiencia y tecnologías existentes para, Diseñar, Desarrollar y Mejorar sus productos, servicios o instalaciones.
                </div>

                <div className="md:py-10 md:p-20">
                    <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-3">
                    {services.map((s) => (
                        <ServiciosInmconsa key={s.title} title={s.title} src={s.src} />
                    ))}
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}