"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/magicui/text-animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/styles/imagesFlota.module.css";
import Image from "next/image";
import img1 from "@/public/img/s_expedientes1.jpg";
import img2 from "@/public/img/servicios3.jpg";

const comprende = [
    {titulo: "Memoria descriptiva"},
    {titulo: "Especificaciones técnicas"},
    {titulo: "Planos de ejecución de obra"},
    {titulo: "Metrados"},
    {titulo: "Presupuesto de obra"},
    {titulo: "Valor referencial"},
    {titulo: "Fecha del presupuesto"},
    {titulo: "Análisis de precios"},
    {titulo: "Calendario de avance de obra valorizado"},
    {titulo: "Fórmulas polinómicas"},
    {titulo: "Estudio Complementarios"},
    {titulo: "Estudio de suelos"},
    {titulo: "Estudio geológico"},
    {titulo: "Impacto ambiental"},
    {titulo: "Otros complementarios"},
];

export default function ExpedientesPagina() {
    return (
        <>

        <div className="md:mb-10 relative bg-cover bg-bottom bg-no-repeat w-full h-[45vh] md:h-[55vh]" style={{ backgroundImage: "url('/img/s_expedientes.jpg')" }}>
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="md:hidden absolute left-0 md:left-70 top-1/2 -translate-y-1/2 w-full md:w-[35rem] md:h-70 flex flex-col md:bg-orange-400 justify-center items-center md:items-start text-center md:text-left px-3 md:px-10 md:py-10 text-white md:shadow-lg z-20">
                <h1 className="text-3xl font-bold mb-2">
                    Consultoría y elaboración de Expedientes Técnicos
                </h1>
                <div className="text-sm">
                    Desarrollamos expedientes técnicos sólidos y viables, garantizando proyectos bien planificados y ejecutables.
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
                            {`Consultoría y elaboración de Expedientes Técnicos`}
                        </TextAnimate>
                    </h1>
                    <div className="text-sm md:text-lg">
                        <TextAnimate animation="fadeIn" by="line" as="p" delay={1.1} duration={0.8}>
                            {`Desarrollamos expedientes técnicos sólidos y viables, garantizando proyectos bien planificados y ejecutables.`}
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
                            <FontAwesomeIcon icon={faPenRuler} size='2xl' className="text-blue-950"/>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-950 text-justify">
                                La <strong>elaboración de expedientes técnicos para proyectos de construcción</strong>, bajo estrictas metodología y organización garantizamos el cumplimiento 
                                de los más altos estándares técnicos y normativos vigentes. Nuestro objetivo es proporcionar documentación precisa, completa y debidamente 
                                sustentada que permita la ejecución segura, eficiente y conforme a ley de obras civiles, industriales o de infraestructura.
                            </p>
                            <p className="text-gray-950 text-justify">
                                Proporcionamos asesoramiento y gestión en la documentación legal y administrativa requerida para los proyectos eléctricos, incluyendo permisos, 
                                licencias y trámites ante entidades gubernamentales.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                <section className={styles.flotaContenedor}>
                    <div className={styles.relativoWrapper}>
                        <div className={`${styles.flotaItem} ${styles.pose3}`}>
                            <Image
                                src={img1}
                                alt=""
                                width={200}
                                height={600}
                                className="rounded-xl w-48 md:w-52 h-auto"
                            />
                        </div>
                        <div className={`${styles.flotaItem} ${styles.pose4}`}>
                            <Image
                                src={img2}
                                alt=""
                                width={200}
                                height={600}
                                className="rounded-xl w-48 md:w-52 h-auto"
                            />
                        </div>
                    </div>
                </section>
            </section>
        </div>
        <section className="py-16 px-4 text-center bg-white mt-30 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-12">
                Comprende
            </h2>

            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                {comprende.map((item, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-full shadow-sm px-6 py-3 hover:shadow-md transition-all duration-300">
                    <span className="text-sm md:text-lg font-semibold text-gray-900 whitespace-nowrap">
                    {item.titulo}
                    </span>
                </div>
                ))}
            </div>
        </section>
        </>
    )
}