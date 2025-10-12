"use client"
import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { BoxReveal } from "@/components/magicui/box-reveal";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function BoxRevealNavacord() {
    return (
        <div className="w-full h-auto flex overflow-hidden">
            <BoxReveal boxColor={"#f59521"} duration={0.5}>
                <h1 className="text-2xl md:text-6xl text-blue-950 font-semibold text-left">
                    ¿Por qué eligir 
                    <br />
                    Navacord?
                </h1>
            </BoxReveal>
        </div>
    );
}

export function NavacordModal({ open, onOpenChange }: Props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] md:max-w-5xl max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle>
                        <div className="grid grid-cols-2 mt-5 mb-5">
                            <BoxRevealNavacord/>
                            <BlurFade delay={0.30} direction="right" inView>
                                <Image className="mt-5 ml-3 md:ml-10 w-96 h-auto" src="/img/navacord.png" alt="navacord" width={400} height={400}/>
                            </BlurFade>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                    <div className="grid md:grid-cols-2 mt-5 mb-5 gap-10">
                        <div>
                            <h1 className="text-xl md:text-2xl mb-8">Tu proyecto garantizado, con nuestra combinación de:</h1>
                            <div className="flex items-center gap-2 mb-3">
                                <FontAwesomeIcon icon={faCheck} size="2xl" className="text-orange-600" />
                                <span className="text-xl md:text-2xl">Beneficios</span>
                            </div> 
                            <div className="flex items-center gap-2 mb-3">
                                <FontAwesomeIcon icon={faCheck} size="2xl" className="text-orange-600" />
                                <span className="text-xl md:text-2xl">Experiencia</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <FontAwesomeIcon icon={faCheck} size="2xl" className="text-orange-600" />
                                <span className="text-xl md:text-2xl">Procesos estandarizados</span>
                            </div> 
                        </div>
                        <div className="mt-5 hidden md:block">
                            <DotLottieReact
                            src="/img/flecha.lottie"
                            speed={0.5}
                            loop
                            autoplay
                            className="w-80 h-auto -rotate-187 scale-y-[-1]"
                            />
                        </div>
                    </div>
            </DialogContent>
        </Dialog>
    )
}