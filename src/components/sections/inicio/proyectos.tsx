import AnimatedText from "@/components/animations/AnimatedText";
import CardComponent from "@/components/cards/Card";
import { projects } from "@/data/projects";
import { Button } from "@heroui/button";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Proyectos() {
    return (
        <section className="my-10 mx-auto lg:mx-7">
            <div className="grid grid-cols-2 grid-rows-2 gap-8">

                <h2 className="flex flex-col max-w-lg gap-0 col-start-1 row-start-1">
                    <p className="text-white text-5xl">
                        Mira mis proyectos
                    </p>
                    <p className="text-white text-5xl">
                        Desde lo académico, hasta para clientes.
                    </p>
                </h2>

                <div className="col-start-2 row-start-2">
                    <div className="flex flex-col gap-7">
                        <p className="text-white text-lg opacity-50">
                            Mis proyectos demuestran la versatilidad del trabajo que he realizado. Echa un vistazo a mi portafolio, que destaca la diversa gama de proyectos de diseño web y desarrollo de sistemas para diversas industrias.
                        </p>
                    </div>
                </div>

            </div>

            <section className="">
                <div className="flex justify-between items-center">

                    {/* <Link href="/work" aria-label="Ver todos los proyectos" className="text-xl">Ver Todos</Link> */}
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-3">
                    <CardComponent
                        title={projects[0].title}
                        detail={projects[0].detail}
                        image={projects[0].image}
                        linkUrl={projects[0].link}
                    />
                    <CardComponent
                        title={projects[1].title}
                        detail={projects[1].detail}
                        image={projects[1].image}
                        linkUrl={projects[1].link}
                    />
                    <CardComponent
                        title={projects[2].title}
                        detail={projects[2].detail}
                        image={projects[2].image}
                        linkUrl={projects[2].link}
                    />
                </div>
            </section>
        </section>
    )
}