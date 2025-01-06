import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/sections/Navbar";


const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  /* title: "Sebas.Palate - Frontend Developer, Web Designer", */
  title: "Sebas.Palate — Desarrollador Frontend, Diseñador Web",
  /*  description: "Hi, Levting a frontend developer and web designer. I create websites and web applications with a focus on performance, accessibility, and user experience.", */
  description: "Hola, Sebas Palate un desarrollador frontend y diseñador web. Creo sitios web y aplicaciones web con un enfoque en rendimiento, accesibilidad y experiencia de usuario.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={`${inter.className} scroll-smooth`}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
