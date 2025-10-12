"use client"
import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Cctv, AlarmSmoke, RadioTower, CircuitBoard, Siren, Rss, Code, ServerCog, Handshake, ThermometerSnowflake } from "lucide-react"

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function BoxRevealNavsa() {
    return (
        <div className="w-full flex overflow-hidden md:mt-5 md:mb-5">
            <BoxReveal boxColor={"#f59521"} duration={0.5}>
                <h1 className="text-3xl md:text-6xl text-blue-950 font-semibold">
                    Nuestra Empresa
                </h1>
            </BoxReveal>
        </div>
    );
}

export function CarouselNavsa() {
    const items = [
        { Icon: Cctv, title: "Camaras de video vigilancia" },
        { Icon: AlarmSmoke, title: "Sistemas contra incendio" },
        { Icon: RadioTower, title: "Obras de Telecomunicaciones" },
        { Icon: CircuitBoard, title: "Instalaciones eléctricas" },
        { Icon: Siren, title: "Sistema de alarmas" },
        { Icon: Rss, title: "Redes LAN y Fibra Óptica" },
        { Icon: Code, title: "Desarrollo de software" },
        { Icon: ServerCog, title: "Redes negocio y hogar" },
        { Icon: Handshake, title: "Consultoría en TIC" },
        { Icon: ThermometerSnowflake, title: "Sistema de refrigeración" },
    ]

    return (
        <Carousel
        opts={{
            align: "start",
        }}
        plugins={[
            Autoplay({
            delay: 2000,
            }),
        ]}
        className="w-full max-w-sm"
        >
        <CarouselContent>
            {items.map(({ Icon, title }, index) => (
            <CarouselItem key={index} className="basis-1/1 md:basis-1/2">
                <div className="p-1">
                    <Card>
                        <CardContent className="flex flex-col h-32 md:h-auto items-center justify-center gap-3 p-6 aspect-square">
                            <Icon className="w-16 h-16 md:w-20 md:h-20" aria-hidden />
                            <p className="text-center text-sm font-medium">{title}</p>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    )
}

export function NavsaModal({ open, onOpenChange }: Props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] sm:!max-w-3xl md:!max-w-5xl lg:!max-w-5xl max-h-auto">
                <DialogHeader>
                <DialogTitle>
                    <BoxRevealNavsa/>
                </DialogTitle>
                </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="relative text-justify text-sm md:text-2xl">
                            <div
                                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10"
                                style={{ backgroundImage: "url('/img/navsa.png')" }}
                            ></div>

                            <div className="relative z-10">
                                Navsa ha desarrollado sus más importantes proyectos en tecnología de la información en el sector privado y público.
                                Nuestra experiencia ha otorgado a la Empresa el suficiente respaldo y confianza para brindar a todos nuestros clientes 
                                un servicio eficiente y de calidad, así mismo nos permite estar presente en diversos proyectos de tecnología de la información, 
                                eléctrico, comercial e industrial para clientes con un alto grado de exigencia y estándares de calidad.
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:p-0 p-4">
                            <CarouselNavsa/>
                        </div>
                    </div>

            </DialogContent>
        </Dialog>
    )
}