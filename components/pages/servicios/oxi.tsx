"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/magicui/text-animate";
import { PresenciaPeru } from "@/components/pages/home/presenciaPeruHome";

export default function OxiPagina() {
    return (
        <>
        <div className="md:mb-20 relative bg-cover bg-center bg-no-repeat w-full h-[45vh] md:h-[55vh]" style={{ backgroundImage: "url('/img/s_oxi.jpg')" }}>
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="md:hidden absolute left-0 md:left-70 top-1/2 -translate-y-1/2 w-full md:w-[35rem] md:h-70 flex flex-col md:bg-orange-400 justify-center items-center md:items-start text-center md:text-left px-3 md:px-10 md:py-10 text-white md:shadow-lg z-20">
                <h1 className="text-3xl font-bold mb-2">
                    Obras por Impuestos
                </h1>
                <div className="text-sm">
                    Transformamos impuestos en infraestructura visible.
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
                            {`Obras por Impuestos`}
                        </TextAnimate>
                    </h1>
                    <div className="text-sm md:text-lg">
                        <TextAnimate animation="fadeIn" by="line" as="p" delay={1.1} duration={0.8}>
                            {`Transformamos impuestos en infraestructura visible.`}
                        </TextAnimate>
                    </div>
                </motion.div>
            </div>
        </div>
        <div className="relative py-20 overflow-hidden md:-mb-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

                <div className="relative md:w-1/2 flex items-start ml-auto text-right">

                <h2 className="absolute top-1/2 right-0 -translate-y-1/2 text-[10rem] md:text-[12rem] lg:text-[14rem] font-extrabold text-gray-200 select-none pointer-events-none z-0">
                    12+
                </h2>

                <h3 className="relative top-15 text-6xl md:text-6xl lg:text-7xl font-bold text-blue-950 z-10 ml-auto">
                    Experiencia
                </h3>
                </div>

            </div>
        </div>
        <PresenciaPeru/>
        </>
    )
}