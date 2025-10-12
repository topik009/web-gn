//import { Button } from "@/components/ui/button"
import {Card,CardContent,} from "@/components/ui/card"
import {Tabs,TabsContent,TabsList,TabsTrigger,} from "@/components/ui/tabs"
import { WordRotate } from "@/components/magicui/word-rotate";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextAnimate } from "@/components/magicui/text-animate";

import Image from 'next/image';
import oxi from '@/public/img/oxi.jpg';
import gestion from '@/public/img/s_gestionp1.jpg';
import proyectos from '@/public/img/s_consultoria.jpg';
import tic from '@/public/img/ciudades.jpg';

export function Soluciones() {
  return (
    <>
      <div className="relative bg-orange-100 py-10 mb-10 max-w-full text-center">
        <WordRotate
          className="text-5xl md:text-6xl font-bold text-blue-950 dark:text-white"
          words={["Soluciones Innovadoras", "Soluciones Inteligentes", "Soluciones Confiables", "Soluciones Efectivas", "Soluciones Prácticas"]}
        />
      </div>
      <div className="flex w-full max-w-full flex-col gap-6 md:pr-20 md:pl-20 mb-20 p-5 md:p-0">
        <Tabs defaultValue="oxi" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full justify-items-center h-auto md:h-20">
            <TabsTrigger className="text-lg md:text-xl cursor-pointer" value="oxi">Obras por Impuestos</TabsTrigger>
            <TabsTrigger className="text-lg md:text-xl cursor-pointer" value="gestion">Gestión Pública Regional y Municipal</TabsTrigger>
            <TabsTrigger className="text-lg md:text-xl cursor-pointer" value="proyectos">Gestión de Proyectos</TabsTrigger>
            <TabsTrigger className="text-lg md:text-xl cursor-pointer" value="tic">Tecnologías de la Información</TabsTrigger>
          </TabsList>
          <TabsContent value="oxi" className="justify-center">
            <Card>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 p-5">
                  <div className="flex justify-center items-center mb-8 md:mb-0">
                    <Image
                      src={oxi}
                      alt="Obras por Impuestos"
                      className="rounded-[30px] object-cover"
                      width={400}
                      height={360}
                      priority={false}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-4">
                    <TypingAnimation className="text-blue-950 text-2xl md:text-3xl">“Transformamos impuestos en infraestructura visible”</TypingAnimation>
                    <TextAnimate className="text-orange-600 text-lg md:text-xl" delay={5.5} duration={0.6} animation="blurIn" as="h1">
                      Conectamos recursos y gestión para que cada obra cuente.
                    </TextAnimate>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="gestion">
            <Card>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 p-5">
                  <div className="flex justify-center items-center mb-8 md:mb-0">
                    <Image
                      src={gestion}
                      alt="Gestión Pública Regional y Municipal"
                      className="rounded-[30px] object-cover"
                      width={400}
                      height={360}
                      priority={false}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-4">
                    <TypingAnimation className="text-blue-950 text-2xl md:text-3xl">“Fortalecemos la gestión local con soluciones modernas y eficientes”</TypingAnimation>
                    <TextAnimate className="text-orange-600 text-lg md:text-xl" delay={5.5} duration={0.6} animation="blurIn" as="h1">
                      Innovamos para servir mejor a las comunidades.
                    </TextAnimate>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="proyectos">
            <Card>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 p-5">
                  <div className="flex justify-center items-center mb-8 md:mb-0">
                    <Image
                      src={proyectos}
                      alt="Consultoría en Gestión de Proyectos"
                      className="rounded-[30px] object-cover"
                      width={400}
                      height={360}
                      priority={false}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-4">
                    <TypingAnimation className="text-blue-950 text-2xl md:text-3xl">“Planificación y control para cumplir plazo, costo y calidad”</TypingAnimation>
                    <TextAnimate className="text-orange-600 text-lg md:text-xl" delay={5.5} duration={0.6} animation="blurIn" as="h1">
                      Aseguramos el éxito de cada proyecto con enfoque estratégico.
                    </TextAnimate>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tic">
            <Card>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 p-5">
                  <div className="flex justify-center items-center mb-8 md:mb-0">
                    <Image
                      src={tic}
                      alt="Obras por Impuestos"
                      className="rounded-[30px] object-cover"
                      width={400}
                      height={360}
                      priority={false}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-4">
                    <TypingAnimation className="text-blue-950 text-2xl md:text-3xl">“Conectividad e innovación al servicio de todos”</TypingAnimation>
                    <TextAnimate className="text-orange-600 text-lg md:text-xl" delay={5.5} duration={0.6} animation="blurIn" as="h1">
                      Impulsamos la transformación digital en instituciones y comunidades.
                    </TextAnimate>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}