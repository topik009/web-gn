"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ContactoForm } from "@/components/magicui/contacto-form"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Obras por impuestos",
        href: "/servicios/oxi",
        description:
        "Transformamos impuestos en infraestructura visible.",
    },
    {
        title: "Gestión Pública Regional y Municipal",
        href: "/servicios/gestion_publica",
        description:
        "Fortalecemos la gestión local con soluciones modernas y eficientes para mejorar la calidad de vida ciudadana.",
    },
    {
        title: "Metodilogía BIM",
        href: "/servicios/metodologia_bim",
        description:
        "Integramos disciplinas en un modelo 3D colaborativo para detectar interferencias y optimizar costo, plazo y calidad desde el diseño hasta la obra.",
    },
    {
        title: "Consultoría y elaboración de Expedientes Técnicos",
        href: "/servicios/expedientes",
        description:
        "Desarrollamos expedientes técnicos sólidos y viables, garantizando proyectos bien planificados y ejecutables.",
    },
    {
        title: "Consultoría en Gestión de Proyectos",
        href: "/servicios/gestion_proyectos",
        description:
        "Planificación y control para cumplir plazo, costo y calidad.",
    },
    {
        title: "Saneamiento Físico Legal de Predios Rústicos y Urbanos",
        href: "/servicios/saneamiento",
        description:
        "Regularizamos predios rústicos y urbanos, saneando su situación física y legal para brindar seguridad jurídica e impulsar la inversión.",
    },
    {
        title: "Tecnologías de la Información y la Comunicación",
        href: "/servicios/tic",
        description:
        "Conectividad e innovación al servicio de todos.",
    },
]

export function Menu() {
const [contactOpen, setContactOpen] = React.useState(false)
return (
    <>
        <div className="flex justify-center px-0 md:px-30 mt-5 border-t border-b border-gray-300 text-blue-950">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="text-sm md:text-lg font-medium">
                    <Link href="/">Inicio</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm md:text-lg">Nuestros Servicios</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[350px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-blue-950">
                            {components.map((component) => (
                            <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                            >
                                {component.description}
                            </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            setContactOpen(true) 
                        }}
                        className={`${navigationMenuTriggerStyle()} text-sm md:!text-lg`}
                        >
                            Contáctanos
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <ContactoForm open={contactOpen} onOpenChange={setContactOpen} />
        </div>
        
    </>
    )
}

const ListItem = React.forwardRef<
React.ElementRef<"a">,
React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "/", ...props }, ref) => {
return (
    <li>
        <NavigationMenuLink asChild>
            <Link
            href={href}
            ref={ref}
            className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
            )}
            {...props}
            >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
            </p>
            </Link>
        </NavigationMenuLink>
    </li>
)
})
ListItem.displayName = "ListItem"