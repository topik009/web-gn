"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/magicui/text-animate";
import { FaBalanceScale, FaGavel, FaFileAlt } from "react-icons/fa";

export default function SaneamientoPagina() {
    return (
        <>

        <div className="md:mb-10 relative bg-cover bg-bottom bg-no-repeat w-full h-[45vh] md:h-[55vh]" style={{ backgroundImage: "url('/img/s_sana.jpg')" }}>
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="md:hidden absolute left-0 md:left-70 top-1/2 -translate-y-1/2 w-full md:w-[35rem] md:h-70 flex flex-col md:bg-orange-400 justify-center items-center md:items-start text-center md:text-left px-3 md:px-10 md:py-10 text-white md:shadow-lg z-20">
                <h1 className="text-3xl font-bold mb-2">
                    Saneamiento Físico Legal de Predios Rústicos y Urbanos
                </h1>
                <div className="text-sm">
                    Regularizamos predios rústicos y urbanos, saneando su situación física y legal.
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
                            {`Saneamiento Físico Legal de Predios Rústicos y Urbanos`}
                        </TextAnimate>
                    </h1>
                    <div className="text-sm md:text-lg">
                        <TextAnimate animation="fadeIn" by="line" as="p" delay={1.1} duration={0.8}>
                            {`Regularizamos predios rústicos y urbanos, saneando su situación física y legal.`}
                        </TextAnimate>
                    </div>
                </motion.div>
            </div>
        </div>

        <section className="mx-auto max-w-7xl px-4 py-10 md:mb-10">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-blue-950 mb-4">
                Saneamiento Físico Legal de Predios
                </h2>
                <p className="text-gray-900 text-lg leading-relaxed max-w-3xl mx-auto">
                El <strong>saneamiento físico legal de predios</strong> es el proceso que
                permite la <strong>regularización y formalización del derecho de propiedad</strong>,
                garantizando la titulación o acreditación idónea para su inscripción en
                los Registros Públicos.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
                <div>
                <h3 className="text-3xl font-semibold text-orange-400 mb-4 md:text-left text-center">
                    ¿Qué es el saneamiento físico legal?
                </h3>
                <p className="text-gray-900 leading-relaxed text-justify">
                    Es un conjunto de acciones destinadas a lograr que en el Registro de
                    Predios figure inscrita la realidad jurídica actual de los inmuebles,
                    en concordancia con los derechos reales que ejercen las entidades
                    propietarias, según lo establecido en el <strong>artículo 21 del TUO de la Ley 29151</strong>.
                </p>
                <p className="mt-4 text-gray-900 leading-relaxed text-justify">
                    Antes de registrar un bien, es indispensable <strong>sanear el título de propiedad</strong>,
                    acreditando la titularidad del terreno sobre el cual se construye o se desarrolla
                    cualquier edificación.
                </p>
                </div>
                <div className="relative">
                    <div className="bg-blue-900/10 rounded-2xl p-10 shadow-lg">
                        <FaBalanceScale className="text-blue-950 text-7xl mx-auto mb-4" />
                        <p className="text-gray-900 font-medium text-2xl text-center">
                        Regulariza. Formaliza. Protege tu propiedad.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-semibold text-blue-950 mb-6">
                Principales leyes que regulan el saneamiento
                </h3>
                <p className="text-gray-900 max-w-2xl mx-auto">
                En el Perú, el saneamiento físico legal de predios se encuentra
                regulado por diversas leyes que establecen los procedimientos
                para su formalización e inscripción en los Registros Públicos.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <FaFileAlt className="text-blue-950 text-5xl mb-4" />
                <h4 className="text-xl font-semibold text-orange-400 mb-2">
                    Ley N° 27157
                </h4>
                <p className="text-gray-900 text-sm">
                    Regula la regularización de edificaciones, la declaratoria de fábrica
                    y el régimen de propiedad exclusiva y común.
                </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <FaGavel className="text-blue-950 text-5xl mb-4" />
                <h4 className="text-xl font-semibold text-orange-400 mb-2">
                    Ley N° 29151
                </h4>
                <p className="text-gray-900 text-sm">
                    Establece el marco legal para la gestión, adquisición y administración
                    de predios estatales a través del Sistema Nacional de Bienes Estatales (SNBE).
                </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <FaBalanceScale className="text-blue-950 text-5xl mb-4" />
                <h4 className="text-xl font-semibold text-orange-400 mb-2">
                    Ley N° 29090
                </h4>
                <p className="text-gray-900 text-sm">
                    Regula la regularización de habilitaciones urbanas y la inscripción
                    de predios en los Registros Públicos.
                </p>
                </div>
            </div>
        </section>

        </>
    )
}