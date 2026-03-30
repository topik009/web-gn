import { Metadata } from "next";
import Saneamiento from '@/components/pages/servicios/saneamiento';

export const metadata: Metadata = {
    title: "Saneamiento Físico Legal de Predios Rústicos y Urbanos | GRUPO NAVARRO",
    description: "Regulariza y formaliza tu derecho de propiedad. Asesoría experta en saneamiento físico legal para inscripción en Registros Públicos (SUNARP) según Ley N° 27157 y 29090.",
    keywords: [
        "saneamiento físico legal de predios", 
        "formalización de predios urbanos", 
        "regularización de predios rústicos", 
        "inscripción en registros públicos", 
        "declaratoria de fábrica", 
        "Ley 27157 Perú",
        "Ley 29090 Perú",
        "Ley 29151 SNBE",
        "SUNARP"
    ],
    openGraph: {
        title: "Saneamiento Físico Legal de Predios | GRUPO NAVARRO",
        description: "Saneamos la situación física y legal de tus inmuebles, garantizando la titulación idónea para su inscripción registral.",
        url: "https://www.gruponavarro.com.pe/servicios/saneamiento",
        type: "website",
        images: [
        {
            url: "https://www.gruponavarro.com.pe/img/s_sana.jpg",
            width: 1200,
            height: 630,
            alt: "Saneamiento Físico Legal de Predios en Perú",
        },
        ],
    },
};

export default function SaneamientoPagina() {
    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Saneamiento Físico Legal de Predios Rústicos y Urbanos",
                "serviceType": "Legal & Property Consulting",
                "provider": {
                "@type": "Organization",
                "name": "GRUPO NAVARRO",
                "url": "https://www.gruponavarro.com.pe"
                },
                "areaServed": {
                "@type": "Country",
                "name": "Peru"
                },
                "description": "Proceso integral de regularización y formalización del derecho de propiedad, garantizando la titulación para inscripción en Registros Públicos (SUNARP).",
                "offers": {
                "@type": "Offer",
                "description": "Servicios de saneamiento registral amparados en el marco normativo peruano: regularización de edificaciones (Ley N° 27157), habilitaciones urbanas (Ley N° 29090) y gestión de predios estatales (Ley N° 29151)."
                }
            }),
            }}
        />

        <Saneamiento />
        </>
    );
}