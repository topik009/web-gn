import Link from "next/link";
import React from "react";
import Image from 'next/image';
import Logo from '@/public/img/logo-gn-footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobilePhone } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
    const añoActual = new Date().getFullYear();
    return (
        <footer className="bg-blue-950 dark:bg-gray-900 md:pt-10 md:p-0 p-3">
            <div className="mx-auto w-full max-w-[1500px] py-5 md:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <Link href="/" className="flex items-center mx-auto md:mx-0 w-fit">
                            <Image src={Logo} alt="Grupo Navarro" className="w-50 h-auto" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-0">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-orange-400 uppercase dark:text-white">
                                Nosotros
                            </h2>
                            <ul className="text-gray-100 dark:text-gray-400 font-medium text-sm">
                                <li className="mb-4">
                                <Link href="/" className="hover:underline">
                                    Nuestro Inicio
                                </Link>
                                </li>
                                <li>
                                <Link href="/" className="hover:underline">
                                    Nuestra Historia
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-orange-400 uppercase dark:text-white">
                                Servicios Top
                            </h2>
                            <ul className="text-gray-100 dark:text-gray-400 font-medium text-sm">
                                <li className="mb-4">
                                <Link href="/servicios/oxi" className="hover:underline">
                                    Obras por Impuestos
                                </Link>
                                </li>
                                <li>
                                <Link href="/servicios/gestion_publica" className="hover:underline">
                                    Gestión Pública
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h2 className="mb-6 text-sm font-semibold text-orange-400 uppercase dark:text-white">
                                Contactos
                            </h2>
                            <ul className="text-gray-100 dark:text-gray-400 font-medium text-sm">
                                <li className="mb-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-white mr-2" size="lg"/> jnavarro@gruponavarro.com.pe
                                </li>
                                <li className="mb-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-white mr-2" size="lg"/> proyectos@gruponavarro.com.pe
                                </li >
                                <li className="mb-2">
                                    <FontAwesomeIcon icon={faMobilePhone} className="text-white mr-3" size="lg"/> +51 933-653-488
                                </li>
                                <li className="mb-2">
                                    <FontAwesomeIcon icon={faMobilePhone} className="text-white mr-3" size="lg"/> +51 936-218-330
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLocationDot} className="text-white mr-2" size="lg"/> Calle Los Angeles N°148 Chincha-Ica-Lima-Perú
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-100 sm:text-center dark:text-gray-100">
                        © 2018 - {añoActual}{" "}
                        <Link href="/" className="hover:underline">
                        Grupo Navarro
                        </Link>
                        . Todos los derechos reservados.
                    </span>
                </div>
            </div>
        </footer>
    );
}