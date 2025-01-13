import Footer from "@/components/global/Footer";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Page({ params }: { params: { title: string } }) {
    // Obtener el proyecto en base al nombre
    const project = projects.find((project) => project.title === params.title);

    // Si el proyecto no existe, mostrar un mensaje
    if (!project) {
        return (
            <div className="mt-16 mx-4">
                <h1>Proyecto no encontrado</h1>
            </div>
        );
    }

    return (
        <div>
            {/* Sección del background del proyecto */}
            <section className="relative h-screen">
                <Image
                    src={project.imageBackground}
                    alt={project.title}
                    fill={true}
                    className="absolute inset-0 object-cover w-full h-full"
                    priority
                />
                {/* Contenido encima del background */}
                <div className="relative z-10 h-full bg-black/50">
                    <div className="absolute bottom-0 left-0 ml-20 mb-20 text-white w-auto">
                        <span className="text-medium">
                            Conoce a
                        </span>
                        <h1 className="text-4xl md:text-7xl font-semibold text-white">
                            {project.title}
                        </h1>
                    </div>

                    <div className="absolute left-0 ml-20 top-20">
                        {/* Mostrar las palabras clave */}
                        <div className="flex flex-col gap-1">
                            {project.wordKeys.map((keyword, idx) => (
                                <span key={idx} className="text-gray-300">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección adicional con más información */}
            <section className="flex mt-[10vh] mx-4 gap-10">

                <div className="flex flex-col max-w-60">
                    <span className="font-semibold">
                        Motivo
                    </span>
                    <p className="text-gray-400">{project.reason}</p>

                    <span className="font-semibold mt-3">
                        Equipo
                    </span>

                    <div className="flex flex-col text-gray-400">
                        <span>{project.team}</span>
                    </div>

                </div>

                <div className="flex flex-col max-w-9xl">
                    <h2 className="text-2xl md:text-7xl font-semibold mb-6">
                        {project.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
