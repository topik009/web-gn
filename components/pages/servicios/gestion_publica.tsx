"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/magicui/text-animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import img1 from "@/public/img/s_gestionp1.jpg";
import img2 from "@/public/img/s_gestionp2.jpg";
import img3 from "@/public/img/s_gestionp3.jpg";
import img4 from "@/public/img/s_gestionp4.jpeg";

export default function GestionPublicaPagina() {
    return (
        <>

        <div className="md:mb-10 relative bg-cover bg-center bg-no-repeat w-full h-[45vh] md:h-[55vh]" style={{ backgroundImage: "url('/img/s_gestionp.jpg')" }}>
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="md:hidden absolute left-0 md:left-70 top-1/2 -translate-y-1/2 w-full md:w-[35rem] md:h-70 flex flex-col md:bg-orange-400 justify-center items-center md:items-start text-center md:text-left px-3 md:px-10 md:py-10 text-white md:shadow-lg z-20">
                <h1 className="text-3xl font-bold mb-2">
                    Gestión Pública Regional y Municipal
                </h1>
                <div className="text-sm">
                    Fortalecemos la gestión local con soluciones modernas y eficientes para mejorar la calidad de vida ciudadana.
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
                            {`Gestión Pública Regional y Municipal`}
                        </TextAnimate>
                    </h1>
                    <div className="text-sm md:text-lg">
                        <TextAnimate animation="fadeIn" by="line" as="p" delay={1.1} duration={0.8}>
                            {`Fortalecemos la gestión local con soluciones modernas y eficientes para mejorar la calidad de vida ciudadana.`}
                        </TextAnimate>
                    </div>
                </motion.div>
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 md:mb-10">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                <div className="space-y-6 order-2 md:order-1">
                    <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(2,8,23,.06)] ring-1 ring-slate-100 hover:ring-slate-200 transition">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-50 ring-1 ring-slate-200 mb-3 md:mb-0">
                                <FontAwesomeIcon icon={faPeopleGroup} size='2xl' className="text-blue-950" />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-950 text-justify text-sm md:text-base leading-relaxed">
                                    Desde el año 2002, mediante una reforma de la Constitución vigente, se retomó uno de los más importantes procesos de reforma del Estado peruano: 
                                    la descentralización, con foco en su componente de regionalización. Según mandato del reformado artículo 188 de la Constitución, la 
                                    descentralización –constituyendo una política permanente de Estado, de carácter obligatorio, que tiene como objetivo fundamental el desarrollo 
                                    integral del país– es un proceso que debía realizarse por etapas, en forma progresiva y ordenada conforme a criterios que permitan una adecuada 
                                    asignación de competencias y transferencia de recursos del gobierno nacional hacia los gobiernos regionales y locales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className='grid grid-cols-2 gap-4 order-1 md:order-2'>
                    <Image
                        src={img1}
                        alt=""
                        width={800}
                        height={600}
                        className="rounded-xl w-full h-auto md:mt-5"
                    />
                    <Image
                        src={img2}
                        alt=""
                        width={800}
                        height={600}
                        className="rounded-xl w-full h-auto md:mt-45"
                    />
                </section>
            </section>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 md:mb-10">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Imágenes */}
                <section className='grid grid-cols-2 gap-4'>
                    <Image
                        src={img3}
                        alt=""
                        width={800}
                        height={600}
                        className="rounded-xl w-full h-auto md:mt-45"
                    />
                    <Image
                        src={img4}
                        alt=""
                        width={800}
                        height={600}
                        className="rounded-xl w-full h-auto md:mt-5"
                    />
                </section>

                <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(2,8,23,.06)] ring-1 ring-slate-100 hover:ring-slate-200 transition">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-50 ring-1 ring-slate-200 mb-3 md:mb-0">
                                <FontAwesomeIcon icon={faPeopleGroup} size='2xl' className="text-blue-950" />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-950 text-justify text-sm md:text-base leading-relaxed">
                                    Dentro del contexto de los fines de la descentralización, el objetivo de la gestión pública regional y local es promover el desarrollo 
                                    integral con igualdad de oportunidades en todo el país; lo que se debe traducir en acercar a la población y mejorar la prestación de los 
                                    servicios públicos a través de los gobiernos locales, en beneficio de los ciudadanos. Para tal efecto, es necesario que las autoridades, 
                                    funcionarios y servidores de los gobiernos regionales y locales se encuentren debidamente capacitados sobre la organización del Estado, el 
                                    rol de los gobiernos regionales y locales en ella, los principales instrumentos de gobierno y gestión a nivel subnacional, y los escenarios 
                                    de futuro para el proceso de descentralización. El objetivo es situar de manera integradora los principales desafíos que 
                                    debe enfrentar la gestión pública regional y municipal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        </>
    )
}