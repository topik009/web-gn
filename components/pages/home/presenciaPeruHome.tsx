import React from "react";
import Image from "next/image";
import mapa from "@/public/img/mapa.jpg";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { AnimatedListOxi } from "@/components/pages/home/listaOxi";
import { AnimatedListOxi2 } from "@/components/pages/home/listaOxi2";


export function PresenciaPeru() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 items-start justify-items-center gap-8 mb-10 p-2 md:p-0">
            <div className="max-w-2xl mx-auto w-full mt-5">
                <BlurFade delay={0.25} inView>
                <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-orange-400 mb-5">
                    OBRAS POR IMPUESTOS
                </h2>
                </BlurFade>
                <BlurFade delay={0.50} inView>
                <h2 className="text-3xl md:text-3xl font-bold tracking-tighter text-blue-950">
                    LA FORMA MÁS
                </h2>
                </BlurFade>
                <BlurFade delay={0.75} inView>
                <h2 className="text-3xl md:text-3xl font-bold tracking-tighter text-blue-950">
                    EFICIENTE DE EJECUTAR
                </h2>
                </BlurFade>
                <BlurFade delay={1.00} inView>
                <h2 className="text-3xl md:text-3xl font-bold tracking-tighter text-blue-950">
                    INVERSIONES CON
                </h2>
                </BlurFade>
                <BlurFade delay={1.25} inView>
                <h2 className="text-3xl md:text-3xl font-bold tracking-tighter text-blue-950">
                    PARTICIPACIÓN
                </h2>
                </BlurFade>
                <BlurFade delay={1.50} inView>
                <h2 className="text-3xl md:text-3xl font-bold tracking-tighter text-blue-950">
                    DE LA EMPRESA PRIVADA
                </h2>
                </BlurFade>

                <BlurFade className="mt-20" delay={1.75} inView>
                <span className="block mt-4 text-lg md:text-3xl font-bold tracking-tighter text-pretty text-orange-400">
                    <FontAwesomeIcon icon={faCheck} size="sm" /> ASESORÍA TÉCNICA LEGAL Y PROCEDIMENTAL DEL PROYECTO
                </span>
                </BlurFade>
                <BlurFade delay={2.00} inView>
                <span className="block mt-4 text-lg md:text-3xl font-bold tracking-tighter text-pretty text-orange-400">
                    <FontAwesomeIcon icon={faCheck} size="sm" /> FINANCIAMIENTO
                </span>
                </BlurFade>
                <BlurFade delay={2.25} inView>
                <span className="block mt-4 text-lg md:text-3xl font-bold tracking-tetter text-pretty text-orange-400">
                    <FontAwesomeIcon icon={faCheck} size="sm" /> EJECUCIÓN
                </span>
                </BlurFade>
                <BlurFade delay={2.50} inView>
                <span className="block mt-4 text-lg md:text-3xl font-bold tracking-tighter text-pretty text-orange-400">
                    <FontAwesomeIcon icon={faCheck} size="sm" /> SUPERVISIÓN
                </span>
                </BlurFade>
                <div className="w-full flex items-center justify-center overflow-hidden mt-10 mb-10">
                    <BoxReveal boxColor={"#f59521"} duration={0.5}>
                        <h1 className="text-2xl md:text-4xl text-blue-950 font-semibold md:mb-0 md:mt-0">
                            ¿QUE INVERSIONES EJECUTAMOS A TRAVES DE OBRAS POR IMPUESTOS?
                        </h1>
                    </BoxReveal>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <AnimatedListOxi/>
                    <AnimatedListOxi2/>
                </div>

            </div>

            <div className="relative z-10 w-full md:self-center">
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