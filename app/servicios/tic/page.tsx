import { Metadata } from "next";
import Tic from "@/components/pages/servicios/tic";

export const metadata: Metadata = {
    title: "Consultoría TIC, Desarrollo de Software y Ciberseguridad | GRUPO NAVARRO",
    description: "Impulsamos la transformación digital de tu empresa. Ofrecemos infraestructura de red, desarrollo ágil de software, ciberseguridad e inteligencia artificial.",
    keywords: [
        "tecnologías de la información", 
        "servicios TIC Perú", 
        "desarrollo de software empresarial", 
        "ciberseguridad corporativa", 
        "transformación digital", 
        "infraestructura de telecomunicaciones",
        "consultoría TI",
        "inteligencia artificial aplicada"
    ],
    openGraph: {
        title: "Servicios de Tecnologías de la Información (TIC) | GRUPO NAVARRO",
        description: "Conectividad e innovación al servicio de tu empresa. Construimos soluciones inteligentes mediante desarrollo de software y transformación digital.",
        url: "https://www.gruponavarro.com.pe/servicios/tic",
        type: "website",
        images: [
        {
            url: "https://www.gruponavarro.com.pe/img/s_tic.jpg",
            width: 1200,
            height: 630,
            alt: "Servicios TIC, Software y Transformación Digital",
        },
        ],
    },
};

export default function TicPagina() {
    return (
        <>

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Servicios de Tecnologías de la Información y la Comunicación (TIC)",
                "serviceType": "Information Technology (IT) Consulting & Software Development",
                "provider": {
                "@type": "Organization",
                "name": "GRUPO NAVARRO",
                "url": "https://www.gruponavarro.com.pe"
                },
                "areaServed": "PE",
                "description": "Soluciones tecnológicas integrales para potenciar la ventaja competitiva empresarial mediante la transformación digital. Incluye diagnóstico, desarrollo e implementación ágil.",
                "offers": {
                "@type": "Offer",
                "description": "Nuestros pilares de servicio incluyen: 1) Infraestructura y conectividad, 2) Desarrollo y soporte de software ágil, 3) Ciberseguridad y protección en la nube, 4) Servicios digitales con Inteligencia Artificial, 5) Consultoría en Transformación Digital."
                }
            }),
            }}
        />

        <Tic />
        </>
    );
}