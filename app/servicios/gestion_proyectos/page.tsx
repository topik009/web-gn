import { Metadata } from "next";
import GestionProyectos from "@/components/pages/servicios/gestion_proyectos";

export const metadata: Metadata = {
    title: "Consultoría en Gestión de Proyectos | GRUPO NAVARRO",
    description: "Aseguramos el éxito de tus proyectos cumpliendo plazo, costo y calidad. Brindamos acompañamiento en análisis de riesgos, licitaciones y administración de contratos.",
    keywords: [
        "consultoría en gestión de proyectos", 
        "administración de contratos", 
        "análisis de riesgos en construcción", 
        "acompañamiento en licitaciones", 
        "gestión de proyectos mineros", 
        "control de proyectos",
        "PMO Perú",
        "Perú"
    ],
    openGraph: {
        title: "Consultoría en Gestión de Proyectos | GRUPO NAVARRO",
        description: "Planificación y control experto para cumplir con el plazo, costo y calidad de tus obras. Convierte proyectos riesgosos en rentables.",
        url: "https://www.gruponavarro.com.pe/servicios/gestion_proyectos",
        type: "website",
        images: [
        {
            url: "https://www.gruponavarro.com.pe/img/s_consultoria.jpg",
            width: 1200,
            height: 630,
            alt: "Consultoría en Gestión de Proyectos",
        },
        ],
    },
};

export default function GestionProyectosPagina() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Consultoría en Gestión de Proyectos",
                    "serviceType": "Project Management",
                    "provider": {
                    "@type": "Organization",
                    "name": "GRUPO NAVARRO",
                    "url": "https://www.gruponavarro.com.pe"
                    },
                    "areaServed": "PE",
                    "description": "Servicios de planificación, control y administración eficiente de contratos para proyectos de inversión pública y privada (minería, agroindustria, construcción).",
                    "offers": {
                    "@type": "Offer",
                    "description": "Nuestros servicios incluyen: Acompañamiento en estudio y análisis de riesgos para estrategias de contratación, soporte durante el proceso de licitación, y acompañamiento en las etapas de ejecución, monitoreo, control y cierre del proyecto."
                    }
                }),
                }}
            />
            <GestionProyectos />
        </>
);
}