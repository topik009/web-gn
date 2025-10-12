"use client";
import { BoxReveal } from "@/components/magicui/box-reveal";

import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";

import Image from "next/image";
import logoNavacord from "@/public/img/h-navacord.png";
import logoNavacord1 from "@/public/img/n1.jpg";
import logoNavsa from "@/public/img/h-navsa.png";
import logoNavsa1 from "@/public/img/s_seguci.jpg";
import logoInmconsa from "@/public/img/h-inmconsa.png";
import logoInmconsa1 from "@/public/img/n2.jpg";
import logoVirmaran from "@/public/img/h-virmaran.png";
import logoVirmaran1 from "@/public/img/s_arquitectura.jpg";

import {AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { NavsaModal } from "./navsa"
import { NavacordModal } from "./navacord"
import { InmconsaModal } from "./inmconsa"
import { VirmaranModal } from "./virmaran"

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { toast } from "sonner";
import React from "react";

export function BoxRevealHolding() {
    return (
        <div className="w-full flex items-center justify-center overflow-hidden md:mt-0 mt-5">
            <BoxReveal boxColor={"#f59521"} duration={0.5}>
                <h1 className="text-4xl md:text-6xl text-center text-gray-100 font-semibold">
                    Empresas del Grupo Navarro
                </h1>
            </BoxReveal>
        </div>
    );
}

export function Holding() {
    const [openModal, setOpenModal] = React.useState<null | "navsa" | "navacord" | "inmconsa" | "virmaran">(null);
    return (
        <>
        <div>
            <BoxRevealHolding />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
                <div className="text-lg text-gray-100 text-justify">
                    <Card className="relative max-w-md shadow-none">
                        <CardHeader>
                            <div className="relative group overflow-hidden rounded-lg">

                                <Image
                                src={logoNavacord}
                                alt="Corporación Navacord"
                                width={500}
                                height={500}
                                className="block transition-opacity duration-500 group-hover:opacity-0"
                                />

                                <Image
                                src={logoNavacord1}
                                alt=""
                                width={500}
                                height={500}
                                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />

                                <span
                                    className="
                                    pointer-events-none
                                    absolute
                                    -inset-[50%]
                                    bg-gradient-to-tr from-transparent via-white/50 to-transparent
                                    rotate-45
                                    translate-y-full
                                    group-hover:-translate-y-full
                                    transition-transform duration-700 ease-out hidden md:block
                                    "
                                />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-2xl">Corporación Navacord</CardTitle>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="cursor-pointer" onClick={() => setOpenModal("navacord")}>Conocer más</Button>
                            <AlertBrochure pdf="/brochures/navacord.pdf" />
                        </CardFooter>
                    </Card>
                </div>
                <NavacordModal open={openModal === "navacord"} onOpenChange={(o) => !o && setOpenModal(null)} />
                <div className="text-lg text-gray-100 text-justify">
                    <Card className="relative max-w-md shadow-none">
                        <CardHeader>
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src={logoNavsa}
                                    alt="Corporation Navsa"
                                    width={500}
                                    height={500}
                                />
                                <Image
                                src={logoNavsa1}
                                alt=""
                                width={500}
                                height={500}
                                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />

                                <span
                                    className="
                                    pointer-events-none
                                    absolute
                                    -inset-[50%]
                                    bg-gradient-to-tr from-transparent via-white/50 to-transparent
                                    rotate-45
                                    translate-y-full
                                    group-hover:-translate-y-full
                                    transition-transform duration-700 ease-out hidden md:block
                                    "
                                />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-2xl">Corporation Navsa</CardTitle>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="cursor-pointer" onClick={() => setOpenModal("navsa")}>Conocer más</Button>
                            <AlertBrochure pdf="/brochures/navsa.pdf" />
                        </CardFooter>
                    </Card>
                </div>
                <NavsaModal open={openModal === "navsa"} onOpenChange={(o) => !o && setOpenModal(null)} />
                <div className="text-lg text-gray-100 text-justify">
                    <Card className="relative max-w-md shadow-none">
                        <CardHeader>
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src={logoInmconsa}
                                    alt="Consorcio Inmconsa"
                                    width={500}
                                    height={500}
                                />
                                <Image
                                src={logoInmconsa1}
                                alt=""
                                width={500}
                                height={500}
                                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />

                                <span
                                    className="
                                    pointer-events-none
                                    absolute
                                    -inset-[50%]
                                    bg-gradient-to-tr from-transparent via-white/50 to-transparent
                                    rotate-45
                                    translate-y-full
                                    group-hover:-translate-y-full
                                    transition-transform duration-700 ease-out hidden md:block
                                    "
                                />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-2xl">Consorcio Inmconsa</CardTitle>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="cursor-pointer" onClick={() => setOpenModal("inmconsa")}>Conocer más</Button>
                            <AlertBrochure pdf="/brochures/inmconsa.pdf" />
                        </CardFooter>
                    </Card>
                </div>
                <InmconsaModal open={openModal === "inmconsa"} onOpenChange={(o) => !o && setOpenModal(null)} />
                <div className="text-lg text-gray-100 text-justify">
                    <Card className="relative max-w-md shadow-none">
                        <CardHeader>
                            <div className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src={logoVirmaran}
                                    alt="Virmaran"
                                    width={500}
                                    height={500}
                                />
                                <Image
                                src={logoVirmaran1}
                                alt=""
                                width={500}
                                height={500}
                                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                />

                                <span
                                    className="
                                    pointer-events-none
                                    absolute
                                    -inset-[50%]
                                    bg-gradient-to-tr from-transparent via-white/50 to-transparent
                                    rotate-45
                                    translate-y-full
                                    group-hover:-translate-y-full
                                    transition-transform duration-700 ease-out hidden md:block
                                    "
                                />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-2xl">Virmaran</CardTitle>
                        </CardContent>
                        <CardFooter className="space-x-4">
                            <Button className="cursor-pointer" onClick={() => setOpenModal("virmaran")}>Conocer más</Button>
                            <AlertBrochure pdf="/brochures/inmconsa.pdf" />
                        </CardFooter>
                    </Card>
                </div>
                <VirmaranModal open={openModal === "virmaran"} onOpenChange={(o) => !o && setOpenModal(null)} />
            </div>
        </div>
        </>
    );
}

function AlertBrochure({ pdf }: { pdf: string }) {
    return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button className="cursor-pointer" variant="secondary">
            Brochure
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Estas a punto de descargar nuestro Brochure</AlertDialogTitle>
            <AlertDialogDescription>
                Gracias por tu interés. Da clic en descargar para obtener nuestro brochure.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction asChild>
                <Link
                href={pdf}
                download
                onClick={() =>
                    toast("¡Descarga exitosa!", {
                        description: "Tu brochure se está descargando.",
                        action: {
                            label: "Cerrar",
                            onClick: () => ("Cerrar"),
                        },
                    })
                }
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
                >
                Descargar
                </Link>
            </AlertDialogAction>

            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    );
}