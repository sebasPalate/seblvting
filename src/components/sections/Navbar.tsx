'use client';

import { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

// Definir el tipo del estado
type FontColor = "text-black" | "text-white";

export default function NavbarComponent() {
    const [fontColor, setFontColor] = useState<FontColor>("text-black"); // Color inicial

    // Implementar la lógica del Intersection Observer
    useEffect(() => {
        // Definir los colores para cada sección
        const sectionFontColors: { [key: string]: FontColor } = {
            "hero-section": "text-black", // Fondo claro, texto oscuro
            "video-section": "text-white", // Fondo oscuro (GIF), texto blanco
            "impacto-experiencia": "text-black", // Fondo claro, texto oscuro
            "work": "text-black", // Fondo claro, texto oscuro
        };

        // Implementación del IntersectionObserver
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const color = sectionFontColors[entry.target.id] || "text-black"; // Color predeterminado
                    setFontColor(color); // Establecer el color
                }
            },
            { threshold: 0.5 } // Umbral de visibilidad (50% de la sección visible)
        );

        // Seleccionamos las secciones que vamos a observar
        const sections = [
            document.getElementById("hero-section"),
            document.getElementById("video-section"),
            document.getElementById("impacto-experiencia"),
            document.getElementById("work"),
        ];

        // Observamos cada una de las secciones si existen
        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        // Cleanup
        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="fixed top-0 w-full z-50 justify-between" role="navigation">
            <Navbar isBlurred={false} maxWidth="xl">
                <NavbarContent justify="start">
                    <NavbarBrand>
                        <Link
                            href={"/"}
                            className={`${fontColor} font-semibold transition-colors duration-200 ease-in-out`}
                            aria-label="Página principal de Sebas Palate"
                        >
                            Sebas.Palate
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent justify="end" className={`${fontColor} font-semibold transition-colors duration-200 ease-in-out`}>
                    <NavbarItem>
                        <Link href="/work" aria-label="Página de trabajo de Sebas Palate">
                            Work
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/about" aria-label="Acerca de Sebas Palate">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/contact" aria-label="Formulario de contacto">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
}
