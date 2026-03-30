import { Metadata } from "next";
import Expedientes from "@/components/pages/servicios/expedientes";

export const metadata: Metadata = {
    title: "Elaboración de Expedientes Técnicos y Consultoría | GRUPO NAVARRO",
    description: "Desarrollamos expedientes técnicos sólidos y viables para obras civiles. Incluye memoria descriptiva, metrados, planos de ejecución y estudios de suelos.",
    keywords: [
        "expedientes técnicos", 
        "consultoría de obras", 
        "planos de ejecución", 
        "metrados", 
        "presupuesto de obra", 
        "fórmulas polinómicas",
        "estudio de suelos",
        "Perú"
    ],
    openGraph: {
        title: "Consultoría y Elaboración de Expedientes Técnicos",
        description: "Garantizamos el cumplimiento de los más altos estándares técnicos y normativos para tus proyectos de construcción.",
        url: "https://www.gruponavarro.com.pe/servicios/expedientes",
        type: "website",
        images: [
        {
            url: "https://www.gruponavarro.com.pe/img/s_expedientes.jpg",
            width: 1200,
            height: 630,
            alt: "Elaboración de Expedientes Técnicos",
        },
        ],
    },
};

export default function ExpedientesPagina() {
    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Consultoría y Elaboración de Expedientes Técnicos",
                "serviceType": "Ingeniería y Construcción",
                "provider": {
                "@type": "Organization",
                "name": "GRUPO NAVARRO",
                "url": "https://www.gruponavarro.com.pe",
                },
                "areaServed": "PE",
                "description": "Elaboración de expedientes técnicos para proyectos de construcción bajo estrictas metodologías. Proporcionamos documentación precisa y conforme a ley.",
                "offers": {
                "@type": "Offer",
                "description": "Incluye memoria descriptiva, especificaciones técnicas, planos de ejecución de obra, metrados, presupuesto, fórmulas polinómicas y estudios complementarios (suelos, geológico, impacto ambiental)."
                }
            }),
            }}
        />
            <Expedientes />
        </>
    );
}