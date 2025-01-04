import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/sections/Navbar";


const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Levting - Frontend Developer, Web Designer",
  description: "Hi, Levting a frontend developer and web designer. I create websites and web applications with a focus on performance, accessibility, and user experience.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
