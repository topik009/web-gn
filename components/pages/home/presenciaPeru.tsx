import React from "react";
import Image from "next/image";
import mapa from "@/public/img/mapa.png";

import {ScrollVelocityContainer,ScrollVelocityRow,} from "@/components/magicui/scroll-based-velocity";


export function PresenciaPeru() {
    return (
        <section className="relative mt-10 mb-20 bg-white min-h-[70vh] flex items-center justify-center">
            <div className="pointer-events-none absolute top-20 right-0 md:w-[50vw] h-[50vh] w-[100vw] overflow-hidden z-0">
                <ScrollVelocityContainer className="text-blue-950 text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
                <ScrollVelocityRow baseVelocity={10} direction={1}>
                    Obras por impuestos de proyectos&nbsp;
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={10} direction={-1}>
                    Seguridad ciudadana&nbsp;
                </ScrollVelocityRow>
                </ScrollVelocityContainer>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>

            <div className="pointer-events-none absolute -bottom-15 left-0 md:w-[65vw] md:h-[36vh] h-[20vh] w-[85vw] overflow-hidden z-0">
                <ScrollVelocityContainer className="text-blue-950 text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
                <ScrollVelocityRow baseVelocity={10} direction={-1}>
                    Carreteras, Pistas y Veredas, Saneamiento, Centros Educativos,&nbsp;
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={10} direction={1}>
                    Hospitales, Estadios, Defensas Rivereñas, Puentes,&nbsp;
                </ScrollVelocityRow>
                </ScrollVelocityContainer>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>

            <div className="relative z-10">
                <Image
                src={mapa}
                alt="Mapa del Perú"
                width={1000}
                height={700}
                className="w-full max-w-3xl h-auto mx-auto"
                priority
                />
            </div>
        </section>
    );
}