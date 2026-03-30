import { NavigationPreloaderLink as Link } from "@/components/providers/Preloader";

export default function NotFound() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,149,33,0.24),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <span className="inline-flex rounded-full border border-blue-950/50 px-4 py-1 font-semibold uppercase tracking-[0.24em] text-orange-300 text-xl">
            Error 404
          </span>

          <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] md:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl text-blue-950">
                La pagina que buscas no existe.
              </h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-blue-950">
                Revisa el enlace o vuelve a una seccion oficial de Grupo Navarro.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-white transition"
                >
                  Volver al inicio
                </Link>
                <Link
                  href="/servicios/oxi"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explorar servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
