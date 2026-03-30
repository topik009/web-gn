export const INTERNAL_NOT_FOUND_ROUTE = "/_route-not-found";

export const PUBLIC_APP_ROUTES = [
  "/",
  "/servicios/expedientes",
  "/servicios/gestion_proyectos",
  "/servicios/gestion_publica",
  "/servicios/metodologia_bim",
  "/servicios/oxi",
  "/servicios/saneamiento",
  "/servicios/tic",
] as const;

export const PUBLIC_ROUTE_CARDS = [
  {
    href: "/",
    label: "Inicio",
    summary: "Regresa a la portada principal de Grupo Navarro.",
  },
  {
    href: "/servicios/oxi",
    label: "Obras por Impuestos",
    summary: "Infraestructura y ejecucion mediante OXI.",
  },
  {
    href: "/servicios/gestion_publica",
    label: "Gestion Publica",
    summary: "Soluciones para gobiernos locales y regionales.",
  },
  {
    href: "/servicios/metodologia_bim",
    label: "Metodologia BIM",
    summary: "Coordinacion tecnica y modelado colaborativo.",
  },
  {
    href: "/servicios/expedientes",
    label: "Expedientes Tecnicos",
    summary: "Consultoria y desarrollo de expedientes viables.",
  },
  {
    href: "/servicios/gestion_proyectos",
    label: "Gestion de Proyectos",
    summary: "Planificacion, control y seguimiento de proyectos.",
  },
  {
    href: "/servicios/saneamiento",
    label: "Saneamiento Fisico Legal",
    summary: "Regularizacion tecnica y legal de predios.",
  },
  {
    href: "/servicios/tic",
    label: "Servicios TIC",
    summary: "Software, conectividad y transformacion digital.",
  },
] as const;

const PUBLIC_APP_ROUTE_SET = new Set<string>(PUBLIC_APP_ROUTES);

export function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const normalizedPath = pathname.replace(/\/+$/, "");
  return normalizedPath === "" ? "/" : normalizedPath;
}

export function isAllowedAppRoute(pathname: string) {
  return PUBLIC_APP_ROUTE_SET.has(normalizePathname(pathname));
}
