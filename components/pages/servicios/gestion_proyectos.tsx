"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/magicui/text-animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import styles from "@/components/styles/imagesFlota.module.css";
import Image from "next/image";
import img1 from "@/public/img/s_consultoria1.jpg";
import img4 from "@/public/img/s_consultoria2.jpg";
import {Card,CardContent} from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam"

export default function OxiPagina() {
    return (
        <>
        <div className="md:mb-20 relative bg-cover bg-center bg-no-repeat w-full h-[45vh] md:h-[55vh]" style={{ backgroundImage: "url('/img/s_consultoria.jpg')" }}>
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="md:hidden absolute left-0 md:left-70 top-1/2 -translate-y-1/2 w-full md:w-[35rem] md:h-70 flex flex-col md:bg-orange-400 justify-center items-center md:items-start text-center md:text-left px-3 md:px-10 md:py-10 text-white md:shadow-lg z-20">
                <h1 className="text-3xl font-bold mb-2">
                    Consultoría en Gestión de Proyectos
                </h1>
                <div className="text-sm">
                    Planificación y control para cumplir plazo, costo y calidad.
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
                            {`Consultoría en Gestión de Proyectos`}
                        </TextAnimate>
                    </h1>
                    <div className="text-sm md:text-lg">
                        <TextAnimate animation="fadeIn" by="line" as="p" delay={1.1} duration={0.8}>
                            {`Planificación y control para cumplir plazo, costo y calidad.`}
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
                            <FontAwesomeIcon icon={faUserTie} size='2xl' className="text-blue-950"/>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-950 text-justify">
                                Una parte importante de los problemas que deben enfrentarse durante el desarrollo de los Contratos/Proyectos, provienen de su fase 
                                pre-inversional, alertando claramente en la importancia que tiene el hecho de involucrar tempranamente a profesionales de experiencia en 
                                estos procesos.
                            </p>
                            <p className="text-gray-950 text-justify">
                                El Desarrollo de Proyectos/Contratos en diversas áreas, del sector privado como; minería, textil, agroindustria, construcción y del sector 
                                público, demandan una gran cantidad de horas para la generación de acuerdos, tanto para bienes como para servicios; estos acuerdos deben ser 
                                formalizados mediante contratos que establecen los compromisos entre las partes, tanto para propietarios, contratistas, subcontratistas y otros 
                                proveedores.
                            </p>
                            <p className="text-gray-950 text-justify">
                                Una de las claves para evitar complicaciones durante la ejecución de un contrato, está en la etapa de formación de este, donde se debe establecer 
                                claramente el alcance del acuerdo, especialmente, matrices de responsabilidad, comunicación entre otros.
                                En este escenario, la administración eficiente y profesional de los contratos pasa a tener una relevancia no menor, convirtiéndose en un factor 
                                crítico de éxito para el cumplimiento de las metas y objetivos.
                            </p>
                            <p className="text-gray-950 text-justify">
                                Una adecuada administración de los contratos durante el desarrollo de un proyecto, puede convertir a un proyecto deficitario en rentable.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                <section className={styles.flotaContenedor}>
                    <div className={styles.relativoWrapper}>
                        <div className={`${styles.flotaItem} ${styles.pose1}`}>
                            <Image
                                src={img1}
                                alt=""
                                width={970}
                                height={500}
                                className="rounded-xl w-48 md:w-96 h-auto"
                            />
                        </div>
                        <div className={`${styles.flotaItem} ${styles.pose2}`}>
                            <Image
                                src={img4}
                                alt=""
                                width={200}
                                height={500}
                                className="rounded-xl w-48 md:w-52 h-auto"
                            />
                        </div>
                    </div>
                </section>
            </section>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 mt-40 md:mt-0 md:mb-10">
            <section>
                <h1 className='text-3xl md:text-4xl font-bold text-center text-blue-950'>
                    Dentro del alcance de la Administración de Contratos, podemos incluir a las siguientes actividades:
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-20 gap-8 md:gap-0 justify-items-center'>
                    <Card className="relative w-[350px] overflow-hidden">
                        <CardContent>
                            <h1 className='text-2xl text-center'>Acompañamiento durante el proceso de estudio y análisis de riesgos para las estrategias de contratación.</h1>
                        </CardContent>
                        <BorderBeam
                            duration={6}
                            size={250}
                            className="from-transparent via-orange-400 to-transparent"
                        />
                        <BorderBeam
                            duration={6}
                            delay={3}
                            size={250}
                            borderWidth={2}
                            className="from-transparent via-blue-950 to-transparent"
                        />
                    </Card>
                    <Card className="relative w-[350px] overflow-hidden">
                        <CardContent>
                            <h1 className='text-2xl text-center'>Acompañamiento durante el proceso de licitación.</h1>
                        </CardContent>
                        <BorderBeam
                            duration={6}
                            size={250}
                            className="from-transparent via-orange-400 to-transparent"
                        />
                        <BorderBeam
                            duration={6}
                            delay={3}
                            size={250}
                            borderWidth={2}
                            className="from-transparent via-blue-950 to-transparent"
                        />
                    </Card>
                    <Card className="relative w-[350px] overflow-hidden">
                        <CardContent>
                            <h1 className='text-2xl text-center'>Acompañamiento en etapa de Ejecución, Monitoreo, Control y Cierre.</h1>
                        </CardContent>
                        <BorderBeam
                            duration={6}
                            size={250}
                            className="from-transparent via-orange-400 to-transparent"
                        />
                        <BorderBeam
                            duration={6}
                            delay={3}
                            size={250}
                            borderWidth={2}
                            className="from-transparent via-blue-950 to-transparent"
                        />
                    </Card>
                </div>
            </section>
        </div>
        </>
    )
}