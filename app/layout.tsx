import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Top from "@/components/modules/top";
import Header from "@/components/modules/header";
import {Menu} from "@/components/modules/menu";
import {Footer} from "@/components/modules/footer";
import "./globals.css";
import AwasoneConfig from "./awasone";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Grupo Navarro",
  description: "",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <head>
        <AwasoneConfig/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={poppins.className}>
        <Top/>
        <Header/>
        <Menu/>
        {children}
        <Toaster position="top-center" richColors />
        <Footer/>
      </body>
    </html>
  );
}
