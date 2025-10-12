"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import eficiencia from "@/public/img/efici.png";
import mejorar from "@/public/img/mejor.png";
import trabajo from "@/public/img/traba.png";
import trans from "@/public/img/trans.png";
import control from "@/public/img/control.png";

export function OrbitingCirclesGN() {
    return (
        <div className="relative flex h-[370px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={150}>
                <Icons.ans1 />
                <Icons.ans2 />
                <Icons.ans3 />
                <Icons.ans4 />
                <Icons.ans5 />
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
            </OrbitingCircles>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-5xl font-bold text-orange-400">
                    BIM
                </span>
            </div>
        </div>
    );
}

const Icons = {
    ans1: () => (
        <Image src={eficiencia} alt=''/>
    ),
    ans2: () => (
        <Image src={mejorar} alt=''/>
    ),
    ans3: () => (
        <Image src={trabajo} alt=''/>
    ),
    ans4: () => (
        <Image src={trans} alt=''/>
    ),
    ans5: () => (
        <Image src={control} alt=''/>
    ),
};

export default function BimPagina() {
    return (
        <>

        <div className="md:mb-10 relative bg-cover bg-center bg-no-repeat w-full h-[45vh] md:h-[55vh]" style={{ backgroundImage: "url('/img/s_bim.jpg')" }}>
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="md:hidden absolute left-0 md:left-70 top-1/2 -translate-y-1/2 w-full md:w-[35rem] md:h-70 flex flex-col md:bg-orange-400 justify-center items-center md:items-start text-center md:text-left px-3 md:px-10 md:py-10 text-white md:shadow-lg z-20">
                <h1 className="text-3xl font-bold mb-2">
                    Metodologia BIM
                </h1>
                <div className="text-sm">
                    Integramos disciplinas en un modelo 3D colaborativo.
                </div>
            </div>

            <div className="relative grid-cols-2 h-full z-20 hidden md:block">
                <motion.div
                    className="absolute left-0 md:left-70 top-1/2 -translate-y-1/2 w-full md:w-[35rem] md:h-70 flex flex-col md:bg-orange-400 justify-center items-center md:items-start text-center md:text-left px-3 md:px-10 md:py-10 text-white md:shadow-lg z-20"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ transformOrigin: 'top' }}>
                    <h1 className="text-3xl md:text-4xl font-bold md:mb-4 mb-2">
                        <TextAnimate animation="fadeIn" by="line" as="p" delay={0.8} duration={0.8}>
                            {`Metodologia BIM`}
                        </TextAnimate>
                    </h1>
                    <div className="text-sm md:text-lg">
                        <TextAnimate animation="fadeIn" by="line" as="p" delay={1.1} duration={0.8}>
                            {`Integramos disciplinas en un modelo 3D colaborativo.`}
                        </TextAnimate>
                    </div>
                </motion.div>
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 md:mb-10">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(2,8,23,.06)] ring-1 ring-slate-100 hover:ring-slate-200 transition">
                        <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                            <FontAwesomeIcon icon={faBoltLightning} size='2xl' className="text-blue-950"/>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-950 text-justify">
                                Integramos información detallada para cada fase del proyecto de construcción, desde el diseño inicial, sostenibilidad, hasta la demolición. 
                                Nuestro servicio de arquitectura, ingeniería y construcción utilizando las herramientas necesarias para planificar, diseñar, construir y 
                                administrar de manera más eficiente.
                            </p>
                            <br />
                            <p className="text-gray-950 text-justify">
                                <strong>Así facilitamos la colaboración entre todos los participantes del proyecto</strong>, mejorando la toma de decisiones y optimizando 
                                los procesos de diseño, construcción y operación de edificaciones e infraestructuras.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="relatve">
                    <OrbitingCirclesGN/>
                </div>
            </section>
        </div>

        </>
    )
}