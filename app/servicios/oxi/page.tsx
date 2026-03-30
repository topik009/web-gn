import { Metadata } from "next";
import Oxi from '@/components/pages/servicios/oxi';

export const metadata: Metadata = {
    title: "Gestión y Ejecución de Obras por Impuestos OXI | GRUPO NAVARRO",
    description: "Transformamos tus impuestos en infraestructura visible. Más de 12 años de experiencia desarrollando proyectos de Obras por Impuestos en todo el Perú.",
    keywords: [
        "obras por impuestos", 
        "OxI Perú", 
        "proyectos OxI", 
        "ley de obras por impuestos", 
        "ejecución de obras públicas", 
        "infraestructura visible",
        "inversión pública privada Perú",
        "consultoría OxI"
    ],
    openGraph: {
        title: "Proyectos de Obras por Impuestos OXI | GRUPO NAVARRO",
        description: "Con más de 12 años de experiencia nacional, asesoramos y ejecutamos proyectos de infraestructura pública financiados mediante el mecanismo OxI.",
        url: "https://www.gruponavarro.com.pe/servicios/oxi",
        type: "website",
        images: [
        {
            url: "https://www.gruponavarro.com.pe/img/s_oxi.jpg",
            width: 1200,
            height: 630,
            alt: "Gestión de Proyectos de Obras por Impuestos",
        },
        ],
    },
};

export default function OxiPagina() {
    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Asesoría y Ejecución de Obras por Impuestos OXI",
                "serviceType": "Public Infrastructure Investment",
                "provider": {
                "@type": "Organization",
                "name": "GRUPO NAVARRO",
                "url": "https://www.gruponavarro.com.pe",
                "foundingDate": "2012"
                },
                "areaServed": {
                "@type": "Country",
                "name": "Peru"
                },
                "description": "Servicio integral para la formulación, gestión y ejecución de proyectos de infraestructura bajo el mecanismo legal de Obras por Impuestos (OxI) en el Perú.",
                "offers": {
                "@type": "Offer",
                "description": "Transformamos impuestos en infraestructura visible con más de 12 años de experiencia comprobada y presencia en diversas regiones del Perú."
                }
            }),
            }}
        />
        
        <Oxi />
        </>
    );
}