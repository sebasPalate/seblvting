import Footer from "@/components/global/Footer";
import { PlatformIcons } from "@/components/sections/projects/IconsDev";
import { projects } from "@/data/projects";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

const NotFound = () => (
    <div className="mt-16 mx-4">
        <h1>Proyecto no encontrado</h1>
    </div>
);

const ProjectBackground = ({ image, title }: { image: string; title: string }) => (
    <section className="relative h-screen">
        <Image
            src={image}
            alt={title}
            fill
            className="absolute inset-0 object-cover w-full h-full"
            priority
        />
        <div className="relative z-10 h-full bg-black/50">
            <div className="absolute bottom-0 left-0 ml-20 mb-20 text-white">
                <span className="text-medium">Conoce a</span>
                <h1 className="text-4xl md:text-7xl font-semibold text-white">{title}</h1>
            </div>
        </div>
    </section>
);

const ProjectKeywords = ({ keywords }: { keywords: string[] }) => (
    <div className="absolute left-0 ml-20 top-20 flex flex-col gap-1">
        {keywords.map((keyword, idx) => (
            <span key={idx} className="text-gray-300">
                {keyword}
            </span>
        ))}
    </div>
);

interface ProjectProps {
    title: string
    description: string,
    detail: string
    reason: string
    team: string[]
    wordKeys: string[],
    image: string
    imageBackground: string
    link: string
    challenge: {
        title: string
        description: string
    }
    platform: {
        title: string,
        description: string,
        technologies: string[],
    },
    input: string,
    githubUrl: string
}
const ProjectDetails = ({ title, description, reason, team, challenge, platform, input, githubUrl }: ProjectProps) => (
    <div>
        {/* Primera sección: Motivo y equipo */}
        <section className="flex my-20 mx-4 gap-12">
            {/* Bloque de motivo y equipo */}
            <div className="flex flex-col w-1/5">
                <span className="font-semibold">Motivo</span>
                <p className="text-gray-400">{reason}</p>
                <span className="font-semibold mt-3">Equipo</span>
                <div className="flex flex-col text-gray-400">
                    {team.map((member, idx) => (
                        <span key={idx}>{member}</span>
                    ))}
                </div>

            </div>
            {/* Bloque de título y descripción */}
            <div className="flex flex-col w-2/3">
                <h2 className="text-2xl md:text-7xl  mb-6">{title}</h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{description}</p>
            </div>
        </section>

        {/* Segunda sección: El desafío */}
        <section className="flex my-20 mx-4 gap-12">
            {/* Bloque del desafío */}
            <div className="w-1/5">
                <span className="text-gray-400">El Desafío</span>
            </div>
            {/* Bloque de título y descripción */}
            <div className="flex flex-col w-2/3">
                <h2 className="text-2xl md:text-5xl md:leading-snug w-3/4 font-normal mb-6">{challenge.title}</h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{challenge.description}</p>
            </div>
        </section>

        {/* Tercera sección: Plataforma */}
        <section className="flex my-20 mx-4 gap-12">
            {/* Bloque del desafío */}
            <div className="w-1/5">
                <span className="text-gray-400">La Plataforma</span>
            </div>
            {/* Bloque de título y descripción */}
            <div className="flex flex-col w-2/3">
                <h2 className="text-2xl md:text-5xl md:leading-snug w-3/4 font-normal mb-6">{platform.title}</h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{platform.description}</p>
                <PlatformIcons technologies={platform.technologies} />
            </div>
        </section>

        {/* Tercera sección: Aporte */}
        <section className="flex my-20 mx-4 gap-12">
            {/* Bloque del desafío */}
            <div className="w-1/5">
                <span className="text-gray-400">Aporte</span>
            </div>
            {/* Bloque de título y descripción */}
            <div className="flex flex-col w-2/3">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{input}</p>
            </div>
        </section>

        {/* Tercera sección: Proyecto */}
        <section className="flex my-20 mx-4 gap-12">
            {/* Bloque del desafío */}
            <div className="w-1/5">
                <span className="text-gray-400">Proyecto</span>
            </div>
            {/* Bloque de título y descripción */}
            <div className="flex flex-col items-center w-2/3">
                <div className="text-lg md:text-xl">

                    <a href={githubUrl} target='_blank'>
                        <SiGithub className="text-black text-6xl" />
                    </a>


                </div>
            </div>
        </section>
    </div>

);

export default function Page({ params }: { params: { title: string } }) {
    const project = projects.find((project) => project.title === params.title);

    if (!project) return <NotFound />;

    return (
        <div>
            <ProjectBackground image={project.imageBackground} title={project.title} />
            <ProjectKeywords keywords={project.wordKeys} />
            <ProjectDetails
                challenge={{
                    title: project.challenge?.title || 'Título no disponible',
                    description: project.challenge?.descripcion || 'Descripción no disponible',
                }}
                platform={{
                    title: project.platform?.title || 'Título no disponible',
                    description: project.platform?.descripcion || 'Descripción no disponible',
                    technologies: project.platform?.technologies || [],
                }}
                input={project.input || 'Aporte no disponible'}
                githubUrl={project.githubUrl || 'Proyecto no disponible'}
                reason={project.reason}
                team={project.team}
                title={project.title}   
                description={project.description}
                detail={project.detail}
                wordKeys={project.wordKeys}
                image={project.image}
                imageBackground={project.imageBackground}
                link={project.link}
            />
            <Footer />
        </div>
    );
}
