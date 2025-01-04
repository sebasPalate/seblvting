'use client';
import Link from "next/link";
import { useState } from "react";

export default function Work() {

    const projects = [
        { title: "SisDocx", image: "/projects/sisdocx.webp", description: ["FullStack Project", "UX/UI Design"] },
        { title: "JCI Ambato", image: "/projects/lexel.webp", description: ["Frontend Project", "UX/UI Design"] },
        { title: "Lexel", image: "/projects/lexel.webp", description: ["Frontend Project"] },
        { title: "Factx", image: "/projects/lexel.webp", description: ["Frontend Project"] },
    ];

    const [bgImageState, setBgImage] = useState<string>("");
    const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null); // Índice del proyecto activo

    const handleMouseEnter = (index: number, image: string) => {
        setBgImage(image); // Cambiar el fondo cuando el puntero se acerque
        setActiveProjectIndex(index); // Establecer el proyecto activo
    };

    const handleMouseLeave = () => {
        setBgImage(""); // Restablecer el fondo cuando el puntero salga
        setActiveProjectIndex(null); // Restablecer el proyecto activo
    };

    return (
        <section
            className="h-screen w-full bg-cover bg-center transition-background-image duration-200"
            style={{ backgroundImage: bgImageState ? `url(${bgImageState})` : "none" }}
        >
            <ul className="flex flex-col gap-4 p-4">
                {projects.map((project, index) => (
                    <li key={index} className="flex items-center justify-between mt-10">
                        <div
                            className="group"
                            onMouseEnter={() => handleMouseEnter(index, project.image)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href="#"
                                aria-label={`Ver el proyecto ${project.title}`}
                                className="text-9xl group-hover:text-gray-200 transition-colors duration-200"
                            >
                                {project.title}
                            </Link>
                        </div>

                        {/* Mostrar solo la descripción del proyecto activo */}
                        <div className={`${activeProjectIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                            {project.description.map((desc, idx) => (
                                <p key={idx}>{desc}</p>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
