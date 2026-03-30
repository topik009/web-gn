import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Top from "@/components/modules/top";
import Header from "@/components/modules/header";
import {Menu} from "@/components/modules/menu";
import {Footer} from "@/components/modules/footer";
import "./globals.css";
import AwasoneConfig from "./awasone";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import { NavigationPreloaderProvider } from "@/components/providers/Preloader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Grupo Navarro",
  description: "Somos un grupo de empresas con más de 13 años comprometidas en el desarrollo, ejecución, optimización de proyectos y contratos.",
  keywords: [
    "consultoria", "seguridad", "obras civiles", "chincha", "construcción",
    "mantenimiento", "Perú", "cámaras de seguridad", "expedientes",
    "obras por impuestos", "OXI", "construcción civil", "política", "obras",
    "chincha alta", "seguridad ciudadana", "telecomunicaciones",
    "municipalidades", "AMPE", "Grupo Navarro", "Navarro"
  ],
  authors: [{ name: "Grupo Navarro" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Grupo Navarro | Somos un grupo de empresas con más de 13 años",
    description: "Somos un grupo de empresas con más de 13 años comprometidas en el desarrollo, ejecución, optimización de proyectos y contratos.",
    url: "https://gruponavarro.com.pe",
    siteName: "Grupo Navarro",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://gruponavarro.com.pe/logo-gn.png",
        width: 1454,
        height: 850,
        alt: "Grupo Navarro",
      },
    ],
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <head>
        <AwasoneConfig/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vs3diybbn3");
          `}
        </Script>

        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-4CQSKRCTYR" 
          strategy="afterInteractive" 
        />
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4CQSKRCTYR');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Grupo Navarro",
              url: "https://gruponavarro.com.pe",
              logo: "https://gruponavarro.com.pe/logo-gn.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Los Angeles 148, Chincha Alta",
                addressLocality: "Chincha",
                addressRegion: "Ica",
                postalCode: "11702",
                addressCountry: "PE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+51 933 653 488",
                contactType: "customer service",
              },
            }),
          }}
        />

      </head>
      <body className={poppins.className}>
        <NavigationPreloaderProvider>
          <Top/>
          <Header/>
          <Menu/>
          {children}
          <Toaster position="top-center" richColors />
          <Footer/>
        </NavigationPreloaderProvider>
      </body>
    </html>
  );
}
