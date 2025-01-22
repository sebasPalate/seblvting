'use client';
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

export default function WorkClient() {

    const [bgImageState, setBgImage] = useState<string>(""); // Imagen activa para el fondo
    const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null); // Índice del proyecto activo
    const [isGridView, setIsGridView] = useState<boolean>(false); // Vista actual: lista o grid

    // Función para manejar el mouse sobre los proyectos
    const handleMouseEnter = (index: number, image: string) => {
        setBgImage(image); // Activar el fondo del proyecto
        setActiveProjectIndex(index); // Establecer el proyecto activo
    };

    // Función para restablecer el estado del mouse
    const handleMouseLeave = () => {
        setBgImage(""); // Desactivar el fondo
        setActiveProjectIndex(null); // Restablecer el proyecto activo
    };

    // Renderiza las tarjetas de los proyectos en vista grid
    const renderGridView = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
                <Link key={index} href={project.link} aria-label={`Acceder al proyecto titulado ${project.title}`}>
                    <Card
                        className={` h-[90vh] md:h-[100vh] lg:h-[110vh]
                         ${index % 3 === 1 ? 'lg:mt-20' : '' // Agregar margen superior a la segunda tarjeta del grupo
                            }`}
                        radius="none"
                        shadow="none"
                    >
                        <CardBody>
                            <Image
                                alt={`Imagen representativa de ${project.title}`}
                                className="object-cover h-full"
                                fill={true}
                                src={project.image}
                            />
                        </CardBody>

                        <CardFooter className="flex flex-col items-start m-0 mt-8 p-0">
                            <h2 className="text-3xl text-black">{project.title}</h2>
                            <p className="text-sm text-gray-500">{project.wordKeys.join(', ')}</p>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );

    // Renderiza la lista de proyectos
    const renderListView = () => (
        <ul className="flex flex-col gap-12">

            {projects.map((project, index) => (
                <div key={index} className="flex items-center justify-between">

                    <div className="group" onMouseEnter={() => handleMouseEnter(index, project.imageBackground)} onMouseLeave={handleMouseLeave}>
                        <Link href={project.link} aria-label={`Ir al proyecto: ${project.title}`} className="text-9xl underline-animation group-hover:text-gray-200">
                            {project.title}
                        </Link>
                    </div>

                    <div className="w-40 h-full">
                        <div className={`${activeProjectIndex === index ? 'opacity-100' : 'opacity-0'} text-gray-200 `}>
                            {project.wordKeys.map((desc, idx) => (
                                <p key={idx}>{desc}</p>
                            ))}

                        </div>
                    </div>
                </div>
            ))}
        </ul>
    );

    return (
        <div>
            {/* Contenedor del fondo estático */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center " /* transition-all duration-500 */
                style={{
                    backgroundImage: bgImageState ? `url(${bgImageState})` : "none",
                    opacity: bgImageState ? 1 : 0, // Control de opacidad
                }}
            />

            {/* Switch para alternar entre vista lista y grid. Disponible desde pantallas medianas */}
            <div className="fixed bottom-4 right-4 z-20 hidden lg:block">
                <div className="flex m-2 p-1 rounded-full bg-gray-100 gap-1">
                    <Button
                        size="lg"
                        radius="full"
                        className={`transition-all duration-300 ${!isGridView
                            ? "bg-black text-white"
                            : "text-gray-800 bg-gray-100"
                            }`}
                        onClick={() => setIsGridView(false)}
                    >
                        Lista
                    </Button>
                    <Button
                        size="lg"
                        radius="full"
                        className={`transition-all duration-300 ${isGridView
                            ? "bg-black text-white"
                            : "text-gray-800 bg-gray-100"
                            }`}
                        onClick={() => setIsGridView(true)}
                    >
                        Rejilla
                    </Button>
                </div>
            </div>


            {/* Contenido desplazable */}
            <div className="relative z-10 transition-all duration-500">
                {/* Vista por defecto grid en pantallas pequeñas, lista en pantallas medianas y grandes */}
                <div className="block lg:hidden">
                    {renderGridView()}
                </div>

                {/* Vista en lista, oculta en pantallas pequeñas, visible en medianas */}
                <div className="hidden lg:block">
                    {isGridView ? renderGridView() : renderListView()}
                </div>
            </div>
        </div>
    );
}
