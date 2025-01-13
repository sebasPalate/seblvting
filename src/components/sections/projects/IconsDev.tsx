import { DiReact, DiPython, DiJava, DiPostgresql, DiHtml5 } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiSpringboot, SiPostman, SiPrisma, SiNextui, SiRedux, SiTypescript, SiJavascript, SiStrapi, SiApachetomcat, SiGooglecloud } from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
    React: <DiReact className="text-blue-500 text-6xl" />,
    TailwindCSS: <SiTailwindcss className="text-teal-400 text-6xl" />,
    TypeScript: <SiTypescript className="text-blue-700 text-6xl" />,
    JavaScript: <SiJavascript className="text-yellow-500 text-6xl" />,
    Django: <DiPython className="text-green-500 text-6xl" />,
    NextJS: <SiNextdotjs className="text-gray-800 text-6xl" />,
    NextUI: <SiNextui className="text-gray-800 text-6xl" />,
    Java: <DiJava className="text-blue-500 text-6xl" />,
    SpringBoot: <SiSpringboot className="text-green-500 text-6xl" />,
    PostgreSQL: <DiPostgresql className="text-green-700 text-6xl" />,
    Postman: <SiPostman className="text-orange-500 text-6xl" />,
    HTML: <DiHtml5 className="text-orange-500 text-6xl" />,
    Prisma: <SiPrisma className="text-yellow-500 text-6xl" />,
    Redux: <SiRedux className="text-purple-600 text-6xl" />,
    Strapi: <SiStrapi className="text-blue-600 text-6xl" />,
    ApacheTomcat: <SiApachetomcat className="text-red-500 text-6xl" />,
    GoogleCloud: <SiGooglecloud className="text-blue-500 text-6xl" />,
};

export const PlatformIcons = ({ technologies }: { technologies: string[] }) => (
    <div className="flex flex-wrap justify-center gap-5 p-5">
        {technologies.map((tech) => (
            <div key={tech} className="flex flex-col items-center">
                {techIcons[tech] || (
                    <span className="text-gray-500 text-sm">{tech}</span>
                )}
            </div>
        ))}
    </div>
);
