import React from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";

export function SeccionMision() {
    return (
        <>
        <section className="relative bg-orange-100 mx-auto max-w-screen-7xl w-full h-[600px] md:h-96 px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 md:ml-50">
                <div className="text-3xl md:text-4xl text-center md:text-left font-semibold mt-5 mb-10 md:mb-20 md:w-100 md:mt-20">
                    Estamos orgullosos de nuestros trabajos
                </div>

                <div className="flex flex-col items-center mb-8 md:mb-0 md:mt-20">
                    <div className="text-5xl text-blue-950">
                        <NumberTicker
                            value={12}
                            className="whitespace-pre-wrap text-5xl font-semibold tracking-tighter text-blue-950"
                        />
                        +
                    </div>
                    <span className="mt-2 text-xl text-center font-medium text-black">
                        Experiencia
                    </span>
                </div>

                <div className="flex flex-col items-center mb-8 md:mb-0 md:mt-20">
                    <div className="text-5xl text-blue-950">
                    <NumberTicker
                        value={80}
                        className="whitespace-pre-wrap text-5xl font-semibold tracking-tighter text-blue-950"
                    />
                    +
                    </div>
                    <span className="mt-2 text-xl text-center font-medium text-black">
                    Proyectos
                    </span>
                </div>

                <div className="flex flex-col items-center md:mt-20">
                    <div className="text-5xl text-blue-950">
                    <NumberTicker
                        value={5200}
                        className="whitespace-pre-wrap text-5xl font-semibold tracking-tighter text-blue-950"
                    />
                    +
                    </div>
                    <span className="mt-2 text-xl text-center font-medium text-black">
                    Clientes
                    </span>
                </div>
            </div>
        </section>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 -mt-25 z-10">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">Misión</h1>
                        <p className="text-gray-900 leading-relaxed text-justify">
                            Ser reconocidos como grupo líder en el Perú y Latinoamérica en la gerencia de servicios en; obras por impuestos, seguridad ciudadana, 
                            consultoría en gestión de proyectos, arquitectura, tecnologías de la información y la comunicación y consultoría de ingeniería civil, 
                            contribuyendo de manera sostenible al desarrollo de las comunidades a las que servimos.
                        </p>
                    </div>

                    <div className="md:w-1/2 p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 bg-gray-50">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">Visión</h1>
                        <p className="text-gray-900 leading-relaxed text-justify">
                            Mejora continua, en el desarrollo sistemas y soluciones para nuestros clientes en la vanguardia de la sostenibilidad y competitividad, adaptando 
                            nuestra gerencia de servicios conformados por especialistas altamente calificados a nivel nacional y en Latinoamérica.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
