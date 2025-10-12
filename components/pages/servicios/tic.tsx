"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimate } from "@/components/magicui/text-animate";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList,faCode,faChessKnight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import s_tic7 from "@/public/img/s_tic7.png";
import s_tic8 from "@/public/img/s_tic8.png";
import s_tic9 from "@/public/img/s_tic9.png";
import s_tic10 from "@/public/img/s_tic10.png";
import s_tic11 from "@/public/img/s_tic11.png";
import s_tic12 from "@/public/img/s_tic12.png";
import s_tic13 from "@/public/img/s_tic13.png";
import s_tic14 from "@/public/img/s_tic14.png";
import s_tic15 from "@/public/img/s_tic15.png";

type Servicios = {
    title: string;
    subtitle: string;
    img: string;
};

const servicios: Servicios[] = [
    {
        title: "Infraestructura y conectividad",
        subtitle: "Servicios de telecomunicaciones.",
        img: "/img/s_tic1.jpg",
    },
    {
        title: "Desarrollo y soporte de software",
        subtitle: "Desarrollo ágil de software empresarial.",
        img: "/img/s_tic2.jpg",
    },
    {
        title: "Ciberseguridad",
        subtitle: "Protección avanzada de datos, seguridad en la nube.",
        img: "/img/s_tic3.jpg",
    },
    {
        title: "Servicios digitales y de innovación",
        subtitle: "Inteligencia artificial aplicada.",
        img: "/img/s_tic4.jpg",
    },
    {
        title: "Servicios de gestión y consultoría",
        subtitle: "Transformación digital empresarial.",
        img: "/img/s_tic5.jpg",
    },
];

export function OrbitingCirclesGN() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={45}>
        <Icons.ans1 />
        <Icons.ans2 />
        <Icons.ans3 />
        <Icons.ans4 />
        <Icons.ans5 />
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
        <Icons.ans6 />
        <Icons.ans7 />
        <Icons.ans8 />
        <Icons.ans9 />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  ans1: () => (
    <Image src={s_tic7} alt=''/>
  ),
  ans2: () => (
    <Image src={s_tic8} alt=''/>
  ),
  ans3: () => (
    <Image src={s_tic9} alt=''/>
  ),
  ans4: () => (
    <Image src={s_tic12} alt=''/>
  ),
  ans5: () => (
    <Image src={s_tic11} alt=''/>
  ),
  ans6: () => (
    <Image src={s_tic10} alt=''/>
  ),
  ans7: () => (
    <Image src={s_tic13} alt=''/>
  ),
  ans8: () => (
    <Image src={s_tic14} alt=''/>
  ),
  ans9: () => (
    <Image src={s_tic15} alt=''/>
  ),
};

export default function TicPagina() {
    return (
        <>
            <div className="relative bg-cover bg-center bg-no-repeat w-full h-[55vh]" style={{ backgroundImage: "url('/img/s_tic.jpg')" }}>

            <div className="md:hidden absolute left-0 md:left-70 top-1/2 -translate-y-1/2 w-full md:w-[35rem] md:h-70 flex flex-col md:bg-orange-400 justify-center items-center md:items-start text-center md:text-left px-3 md:px-10 md:py-10 text-white md:shadow-lg z-20">
                <h1 className="text-3xl font-bold mb-2">
                    Tecnologías de la Información y la Comunicación
                </h1>
                <div className="text-sm">
                    Conectividad e innovación al servicio de todos.
                </div>
            </div>

            <div className="relative grid-cols-2 h-full z-20 hidden md:block">
                    <motion.div
                        className="absolute left-0 md:left-70 top-1/2 -translate-y-1/2 w-full md:w-[35rem] md:h-70 flex flex-col md:bg-orange-400 justify-center items-center md:items-start text-center md:text-left px-3 md:px-10 md:py-10 text-white md:shadow-lg z-20"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{ transformOrigin: 'top' }}>
                        <h1 className="text-4xl font-bold mb-4">
                            <TextAnimate animation="fadeIn" by="line" as="p" delay={0.8} duration={0.8}>
                                {`Tecnologías de la Información y la Comunicación`}
                            </TextAnimate>
                        </h1>
                        <div className="text-lg">
                            <TextAnimate animation="fadeIn" by="line" as="p" delay={1.1} duration={0.8}>
                                {`Conectividad e innovación al servicio de todos.`}
                            </TextAnimate>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="p-5 md:py-20 md:mt-0 mt-10">
                <div className="max-w-7xl mx-auto">
                    <p className="uppercase tracking-[0.12em] text-[12px] font-bold text-orange-400 mb-4 text-center md:text-left">
                        SERVICIOS QUE OFRECEMOS
                    </p>
                    <h2 className="text-blue-950 font-extrabold text-[40px] leading-[1.05] md:text-[64px] text-center md:text-left mb-14">
                        Construyamos algo inteligente juntos
                    </h2>
                </div>

                <section className="max-w-7xl mx-auto mt-8 grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-5">
                    {servicios.map((s) => (
                    <article
                        key={s.title}
                        className="relative group overflow-hidden rounded-2xl shadow-sm bg-neutral-100"
                    >
                        <div className="relative aspect-[4/6] w-full">
                        <Image
                            src={s.img}
                            alt={s.title}
                            fill
                            sizes="256px"
                            className="object-cover"
                        />
                        </div>

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-5">
                            <h3 className="text-white text-lg font-semibold">{ s.title }</h3>
                            <p className="mt-1 text-white/85 text-sm leading-snug">
                                { s.subtitle }
                            </p>
                        </div>

                        <div className="absolute inset-0 ring-1 ring-black/10 rounded-2xl group-hover:ring-black/20 transition" />
                    </article>
                    ))}
                </section>
            </div>
            <div className="relative bg-cover bg-center bg-no-repeat w-full md:h-[90vh] " style={{ backgroundImage: "url('/img/s_tic6.png')" }}>
                <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
                    <div className="mb-10">
                        <h2 className="mt-6 text-3xl leading-[1.05] text-blue-950 md:text-5xl">
                        Transformación digital: La clave para la
                        <br />
                        <span className="text-orange-400">Ventaja Competitiva.</span>
                        </h2>
                    </div>

                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div className="space-y-6">
                          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(2,8,23,.06)] ring-1 ring-slate-100 hover:ring-slate-200 transition">
                              <div className="flex items-start gap-4">
                                <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                                  <FontAwesomeIcon icon={faClipboardList} size='2xl' className="text-gray-600"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-950">Diagnóstico y diseño de la solución</h3>
                                    <p className="mt-1 text-gray-950">
                                    Analizamos las necesidades de cada cliente, evaluamos su infraestructura actual y definimos la estrategia tecnológica adecuada.
                                    </p>
                                </div>
                              </div>
                          </div>

                          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(2,8,23,.06)] ring-1 ring-slate-100 hover:ring-slate-200 transition">
                              <div className="flex items-start gap-4">
                                <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                                  <FontAwesomeIcon icon={faCode} size='2xl' className="text-gray-600"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-950">Implementación y desarrollo</h3>
                                    <p className="mt-1 text-gray-950">
                                    Ejecutamos el proyecto aplicando metodologías ágiles y las mejores prácticas en tecnología.
                                    </p>
                                </div>
                              </div>
                          </div>

                          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(2,8,23,.06)] ring-1 ring-slate-100 hover:ring-slate-200 transition">
                              <div className="flex items-start gap-4">
                                <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                                  <FontAwesomeIcon icon={faChessKnight} size='2xl' className="text-gray-600"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-950">Acompañamiento y optimización continua</h3>
                                    <p className="mt-1 text-gray-950">
                                    Brindamos soporte técnico, mantenimiento proactivo y consultoría estratégica.
                                    </p>
                                </div>
                              </div>
                          </div>
                        </div>

                        <div className="relative">
                            <OrbitingCirclesGN/>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}