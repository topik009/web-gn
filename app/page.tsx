import Hero from "@/components/pages/home/hero";
import { BentoServicios } from "@/components/pages/home/servicios";
import  IntegrationDiagram  from "@/components/pages/home/conect";
import { AuroraText } from "@/components/magicui/aurora-text";
import { PorqueGN } from "@/components/pages/home/porqueGN";
import { SeccionMision } from "@/components/pages/home/seccionMision";
import { MarqueeHorizontalUno } from "@/components/pages/home/marque";
import { MarqueeHorizontalDos } from "@/components/pages/home/marque2";
import { PresenciaPeru } from "@/components/pages/home/presenciaPeruHome";
import { Holding } from "@/components/pages/home/holding";
import { Soluciones } from "@/components/pages/home/soluciones";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-12 md:mt-10 md:mb-20 md:mr-30 md:ml-30">
        <div className="col-span-6 text-center px-10 md:text-left md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl mb-10 font-bold mt-10 text-blue-950">¿Qué hacemos?</h1>
          <BentoServicios/>
        </div>
        <div className="col-span-6 mt-10">
          <h1 className="text-center md:ml-20 text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl md:text-left text-blue-950 mb-15 md:mb-15">
              Confia en <AuroraText>Nosotros</AuroraText>
          </h1>
          <IntegrationDiagram/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-950 px-3 md:p-20">
        <PorqueGN/>
      </div>
      <SeccionMision/>
      <h1 className="text-5xl font-bold text-center text-blue-950 md:mb-0 mb-10">¿Para quién lo hacemos?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-20 md:gap-40 md:-mt-3">
        <MarqueeHorizontalUno/>
        <MarqueeHorizontalDos/>
      </div>
      <PresenciaPeru/>
      <div className=" bg-blue-950 md:p-20 p-5">
        <Holding/>
      </div>
      <div>
        <Soluciones/>
      </div>
    </main>
  );
}