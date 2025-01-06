/* import CardComponent from "@/components/Card"; */
import Footer from "@/components/sections/Footer";
import { Divider } from "@nextui-org/divider";
/* import Image from "next/image"; */

export default function Page() {
    return (
        <main className="flex flex-col mt-16">
            {/* Header de bienvenida */}
            <header className="max-w-xl md:max-w-3xl mb-10 px-4">
                <h1 className="text-5xl md:text-6xl">ELEVAR, CREAR Y DISFRUTAR EL CAMINO</h1>
            </header>

            {/* Imagen */}
            {/* <section aria-labelledby="about-image">
                <div className="relative w-full h-[45vh] sm:h-[45vh] lg:h-[75vh] ">
                    <Image
                        src="/hero/pic4.webp"
                        alt="Imagen representativa del autor, Sebastián Palate, trabajando"
                        fill={true}
                        priority
                        className="object-cover object-center"
                    />
                </div>
            </section> */}

            {/* Descripción */}
            <section aria-labelledby="about-description" className="max-w-2xl md:max-w-4xl my-24 px-4">
                <p className="text-3xl md:text-4xl md:leading-normal">
                    {/* I am Sebastián Palate, a passionated designer, manager and keen observer. Specialized in immersive web experiences, I blend elegant aesthetics, interactive engaging animations, as well as intuitive usability to make the best of every project. */}

                    {/* Soy Sebastián Palate, un desarrollador apasionado, aprendiz constante y observador creativo. Me enfoco en crear experiencias web atractivas, combinando diseño elegante con usabilidad intuitiva. Estoy comprometido con perfeccionar mis habilidades y aportar soluciones que destaquen y generen impacto. */}

                    Soy Sebastián Palate, un desarrollador apasionado y aprendiz constante. Creo experiencias web atractivas, combinando diseño elegante con usabilidad intuitiva, mientras perfecciono mis habilidades y busco generar impacto.
                </p>
            </section>

            {/* Experiencia */}
            <section aria-labelledby="experience-section" className="flex flex-col gap-10 px-4 mb-10">
                <h2 id="experience-section" className="text-5xl md:text-7xl mb-8">
                    {/* Work and Experience */}
                    Trabajo y Experiencia
                </h2>

                <div className="flex flex-col w-full justify-end">
                    <h3 className="text-3xl md:text-5xl">
                        {/* 2024 - Present */}
                        2024 - Presente
                    </h3>
                    <Divider className="mt-3" />
                    <div className="flex flex-col gap-3 w-full">
                        <div className="md:w-1/2 md:ml-auto">
                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base">EEASA</span>
                                <p className="text-base">Frontend Developer</p>
                            </div>

                            <Divider className="mt-3" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base">JCI AMBATO</span>
                                <p className="text-base">Web Project Manager</p>
                            </div>

                            <Divider className="mt-3" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base">Levting</span>
                                <p className="text-base">Freelance as Developer Web</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl mt-10">2023</h3>
                    <Divider className="my-2" />
                    <div className="flex flex-col gap-2 w-full">
                        <div className="md:w-1/2 md:ml-auto">
                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base">seblvting (Sebas.Palate)</span>
                                <p className="text-base">
                                    {/* Portfolio design and development */}
                                    Diseño y Desarrollo de Portafolio
                                </p>
                            </div>

                            <Divider className="mt-3" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base">
                                    {/* IT Support Technician */}
                                    Técnico de Soporte de TI
                                </span>
                                <p className="text-base">
                                    {/* UTA Technical Support Center (CST) */}
                                    Centro de Soporte Técnico UTA (CST)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FreeTime / Proyectos */}
            {/* <section aria-labelledby="freetime-section" className="flex flex-col gap-10 px-4 mb-28">
                <h2 id="freetime-section" className="text-5xl md:text-7xl mt-20 mb-10">
                    Aventuras, Naturaleza, Lugares
                    </h2>

                <div className="flex flex-col md:flex-row justify-between gap-3">
                    <CardComponent
                        title="FullStack Project"
                        description="SisDocx"
                        imageUrl="/projects/SisDocx.jpg"
                        linkUrl="#"
                    />
                    <CardComponent
                        title="FullStack Project"
                        description="SisDocx"
                        imageUrl="/projects/SisDocx.jpg"
                        linkUrl="#"
                    />
                    <CardComponent
                        title="FullStack Project"
                        description="SisDocx"
                        imageUrl="/projects/SisDocx.jpg"
                        linkUrl="#"
                    />
                    <CardComponent
                        title="FullStack Project"
                        description="SisDocx"
                        imageUrl="/projects/SisDocx.jpg"
                        linkUrl="#"
                    />
                </div>
            </section> */}

            {/* Footer */}
            <Footer />
        </main>
    );
}
