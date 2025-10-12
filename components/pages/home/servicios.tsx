import {MoveIcon,FileTextIcon,GlobeIcon,GearIcon,} from "@radix-ui/react-icons";
import { Disc2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const files = [
    {
        name: "Ley 29230",
        body: "La Ley N.º 29230 (2008) creó el mecanismo de Obras por Impuestos, que permite a empresas financiar proyectos de inversión pública a cambio de crédito fiscal en el Impuesto a la Renta.",
    },
    {
        name: "Impacto",
        body: "Más de 500 proyectos ejecutados en salud, educación, transporte, saneamiento y electrificación, beneficiando a millones de peruanos.",
    },
    {
        name: "Ventajas",
        body: "Las OxI aceleran la ejecución de obras, reducen brechas de infraestructura y mejoran la imagen social de las empresas participantes.",
    },
    {
        name: "Sectores",
        body: "Los proyectos pueden abarcar sectores como educación, salud, agua potable, infraestructura vial, telecomunicaciones, seguridad ciudadana y patrimonio cultural.",
    },
    {
        name: "Ejemplos",
        body: "Construcción de colegios en zonas rurales, hospitales regionales, carreteras en la sierra y plantas de tratamiento de agua.",
    },
];

const files2 = [
    {
        name: "Infraestructura y conectividad",
        body: "Servicios de telecomunicaciones, redes de alta velocidad, soluciones de conectividad fija y móvil que garantizan acceso seguro y confiable a Internet incluso en zonas rurales.",
    },
    {
        name: "Desarrollo y soporte de software",
        body: "Desarrollo ágil de software empresarial, aplicaciones a medida, integración de sistemas y soporte técnico continuo para optimizar procesos y mejorar la productividad.",
    },
    {
        name: "Ciberseguridad",
        body: "Protección avanzada de datos, seguridad en la nube, monitoreo de amenazas en tiempo real, gestión de identidades y cumplimiento normativo para garantizar la confidencialidad de la información.",
    },
    {
        name: "Servicios digitales y de innovación",
        body: "Inteligencia artificial aplicada, automatización de procesos, análisis de datos, soluciones de big data y tecnologías emergentes que impulsan la innovación en los negocios.",
    },
    {
        name: "Servicios de gestión y consultoría",
        body: "Transformación digital empresarial, asesoría en estrategia tecnológica, modernización de infraestructuras y acompañamiento en la adopción de nuevas herramientas digitales.",
    },
];

const features = [
    {
        Icon: FileTextIcon,
        name: "Consultoría en Gestión de Proyectos",
        description: "Soluciones técnicas y estratégicas mediante el análisis, diseño y optimización de proyectos.",
        href: "/servicios/gestion_proyectos",
        cta: "Leer más",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: GearIcon,
        name: "Obras por Impuesto",
        description: "Mejorar la operación y maximizar el valor del servicio ofrecido.",
        href: "/servicios/oxi",
        cta: "Leer más",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                <figure
                    key={idx}
                    className={cn(
                    "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                    "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                    )}
                >
                    <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white ">
                        {f.name}
                        </figcaption>
                    </div>
                    </div>
                    <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                </figure>
                ))}
            </Marquee>
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: GlobeIcon,
        name: "Metodilogía BIM",
        description: "Integramos disciplinas en un modelo 3D colaborativo.",
        href: "/servicios/metodologia_bim",
        cta: "Leer más",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: MoveIcon,
        name: "Gestión Pública Regional y Municipal",
        description: "Fortalecemos la gestión local con soluciones modernas.",
        href: "/servicios/gestion_publica",
        cta: "Leer más",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: Disc2Icon,
        name: "Tecnologías de la Información y la Comunicación",
        description: "Impulsando la comunicación global.",
        href: "/servicios/tic",
        cta: "Leer más",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files2.map((f, idx) => (
                <figure
                    key={idx}
                    className={cn(
                    "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                    "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                    )}
                >
                    <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white ">
                        {f.name}
                        </figcaption>
                    </div>
                    </div>
                    <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                </figure>
                ))}
            </Marquee>
        ),
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];

export function BentoServicios() {
    return (
        <BentoGrid className="grid-rows-1 md:grid-rows-3 lg:grid-rows-3">
        {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
        ))}
        </BentoGrid>
    );
}