import { Metadata } from "next";
import GestionPublica from "@/components/pages/servicios/gestion_publica";

export const metadata: Metadata = {
    title: "Gestión Pública Regional y Municipal | GRUPO NAVARRO",
    description: "Fortalecemos la gestión local y regional con soluciones eficientes. Asesoría integral en descentralización, políticas públicas y prestación de servicios.",
    keywords: [
        "gestión pública regional y municipal", 
        "asesoría para municipalidades", 
        "descentralización en el Perú", 
        "capacitación para funcionarios públicos", 
        "políticas públicas locales", 
        "desarrollo integral regional",
        "gobiernos locales Perú"
    ],
    openGraph: {
        title: "Gestión Pública Regional y Municipal | GRUPO NAVARRO",
        description: "Impulsamos el desarrollo integral mediante soluciones modernas para gobiernos locales y regionales, mejorando la calidad de vida de los ciudadanos.",
        url: "https://www.gruponavarro.com.pe/servicios/gestion_publica",
        type: "website",
        images: [
        {
            url: "https://www.gruponavarro.com.pe/img/s_gestionp.jpg",
            width: 1200,
            height: 630,
            alt: "Gestión Pública y Asesoría a Municipalidades",
        },
        ],
    },
};

export default function GestionPublicaPagina() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Gestión Pública Regional y Municipal",
                    "serviceType": "Public Sector Consulting",
                    "provider": {
                    "@type": "Organization",
                    "name": "GRUPO NAVARRO",
                    "url": "https://www.gruponavarro.com.pe"
                    },
                    "areaServed": "PE",
                    "audience": {
                    "@type": "Audience",
                    "audienceType": "Gobiernos Regionales, Municipalidades, Funcionarios Públicos, Autoridades Locales"
                    },
                    "description": "Servicios de fortalecimiento, asesoría y capacitación para gobiernos regionales y locales en el Perú, enfocados en descentralización y modernización del Estado.",
                    "offers": {
                    "@type": "Offer",
                    "description": "Brindamos soporte en la organización del Estado, asignación de competencias, instrumentos de gobierno subnacional y mejora en la prestación de servicios públicos."
                    }
                }),
                }}
            />
            
            <GestionPublica />
        </>
    );
}