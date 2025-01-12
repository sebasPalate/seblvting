import { projects } from "@/data/projects"

export default function Page({ params }: { params: { title: string } }) {

    // Obtener el proyecto en base al nombre
    const project = projects.find(project => project.title === params.title)

    // Si el proyecto no existe, mostrar un mensaje
    if (!project) {
        return (
            <div className="mt-16 mx-4">
                <h1>Proyecto no encontrado</h1>
            </div>
        )
    }

    return (
        <div className="mt-16 mx-4">
            <h1>{project.title}</h1>
        </div>
    )
}