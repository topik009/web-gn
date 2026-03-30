import { Metadata } from "next";
import Bim from "@/components/pages/servicios/metodologia_bim";

export const metadata: Metadata = {
    title: "Implementación y Consultoría en Metodología BIM | GRUPO NAVARRO",
    description: "Optimiza tus proyectos de construcción con nuestra Metodología BIM. Integramos arquitectura e ingeniería en un modelo 3D colaborativo altamente eficiente.",
    keywords: [
        "metodología BIM", 
        "modelado 3D construcción", 
        "consultoría BIM Perú", 
        "integración arquitectura e ingeniería", 
        "gestión de proyectos BIM", 
        "optimización de construcción",
        "BIM management"
    ],
    openGraph: {
        title: "Servicios de Metodología BIM | GRUPO NAVARRO",
        description: "Planifica, diseña y construye de manera eficiente. Facilitamos la colaboración y toma de decisiones mediante modelos 3D integrados para todo el ciclo de vida del proyecto.",
        url: "https://www.gruponavarro.com.pe/servicios/metodologia_bim",
        type: "website",
        images: [
        {
            url: "https://www.gruponavarro.com.pe/img/s_bim.jpg",
            width: 1200,
            height: 630,
            alt: "Metodología BIM en Construcción e Ingeniería",
        },
        ],
    },
};

export default function BimPagina() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Consultoría e Implementación de Metodología BIM",
                    "serviceType": "Arquitectura, Ingeniería y Construcción (AEC)",
                    "provider": {
                    "@type": "Organization",
                    "name": "GRUPO NAVARRO",
                    "url": "https://www.gruponavarro.com.pe"
                    },
                    "areaServed": "PE",
                    "description": "Integración de disciplinas mediante Metodología BIM en un modelo 3D colaborativo para planificar, diseñar, construir y administrar proyectos de manera eficiente.",
                    "offers": {
                    "@type": "Offer",
                    "description": "Abarcamos cada fase del proyecto de construcción: desde el diseño inicial y la sostenibilidad hasta la demolición. Optimizamos la toma de decisiones y la colaboración entre todos los participantes del proyecto."
                    }
                }),
                }}
            />

            <Bim />
        </>
    );
}