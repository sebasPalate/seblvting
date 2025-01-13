import Footer from "@/components/global/Footer";
import { activities } from "@/data/activities";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";

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
            {/* <section aria-labelledby="about-description" className="max-w-2xl md:max-w-4xl my-24 px-4">
                <p className="text-3xl md:text-4xl md:leading-normal">
                    Soy Sebastián Palate, un desarrollador apasionado y aprendiz constante. Creo experiencias web atractivas, combinando diseño elegante con usabilidad intuitiva, mientras perfecciono mis habilidades y busco generar impacto.
                </p>
            </section> */}

            <section className="flex flex-col-reverse md:flex-row items-center sm:justify-center gap-10 md:gap-20 my-10 md:my-20 px-4">
                {/* Texto descriptivo */}
                <div className="text-left max-w-xl md:max-w-4xl">
                    <p className="text-xl md:text-3xl leading-relaxed md:leading-normal">
                        Soy Sebastián Palate, un desarrollador apasionado y aprendiz constante. Creo experiencias web atractivas, combinando diseño elegante con usabilidad intuitiva, mientras perfecciono mis habilidades y busco generar impacto.
                    </p>
                </div>

                {/* Imagen */}
                <div className="flex justify-center items-center w-full">
                    <Image
                        src="/heros/sebas.png"
                        alt="Imagen representativa del autor, Sebastián Palate."
                        priority
                        width={320}
                        height={320}
                        className="object-cover object-center"
                    />
                </div>
            </section>


            {/* Experiencia */}
            <section aria-labelledby="experience-section" className="flex flex-col gap-10 px-4 mb-20">
                <h2 id="experience-section" className="text-5xl md:text-7xl mb-8">
                    Trabajo y Experiencia
                </h2>

                <div className="flex flex-col w-full justify-end">
                    <h3 className="text-3xl md:text-5xl">
                        2024 - Presente
                    </h3>
                    <Divider className="mt-3" />
                    <div className="flex flex-col gap-3 w-full">
                        <div className="md:w-1/2 md:ml-auto">
                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">EEASA | SisDocx</span>
                                <p className="text-base">Desarrollador Frontend</p>
                            </div>

                            <Divider className="mt-3" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">seblvting (Sebas.Palate)</span>
                                <p className="text-base">
                                    Diseño y Desarrollo de Portafolio
                                </p>
                            </div>

                            <Divider className="mt-3" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">JCI AMBATO</span>
                                <p className="text-base">Miembro y Director de Proyectos Tecnológicos</p>
                            </div>

                            <Divider className="mt-3" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">Levting</span>
                                <p className="text-base">Freelance como Desarrollador Web</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl mt-10">2023</h3>
                    <Divider className="my-2" />
                    <div className="flex flex-col gap-2 w-full">
                        <div className="md:w-1/2 md:ml-auto">

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">Factx | Frontend</span>
                                <p className="text-base">
                                    Desarrollo de Frontend
                                </p>
                            </div>

                            <Divider className="mt-3" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">
                                    Auditor Informático | Pasante
                                </span>
                                <p className="text-base">
                                    Departamento de Tecnologías del Cuerpo de Bomberos (CBA)
                                </p>
                            </div>

                            <Divider className="mt-3" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">
                                    Técnico de Soporte de TI | Pasante
                                </span>
                                <p className="text-base">
                                    Centro de Soporte Técnico UTA (CST)
                                </p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl mt-10">2022</h3>
                    <Divider className="my-2" />
                    <div className="flex flex-col gap-2 w-full">
                        <div className="md:w-1/2 md:ml-auto">

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">LCK-Service | FullStack</span>
                                <p className="text-base">
                                    Sistema de Gestión de Servicios Veterinarios
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educación */}
            <section className="flex flex-col gap-10 px-4 mb-10">
                <h2 id="education-section" className="text-5xl md:text-7xl mb-8">
                    Educación y Formación
                </h2>

                <div className="flex flex-col w-full justify-end">
                    <h3 className="text-3xl md:text-5xl">
                        2019 - Presente
                    </h3>
                    <Divider className="mt-3" />
                    <div className="flex flex-col gap-3 w-full">
                        <div className="md:w-1/2 md:ml-auto">
                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">Ingeniería de Software | Ingeniero</span>
                                <p className="text-base">Universidad Técnica de Ambato</p>
                                <p className="text-xs">Desarrolando Proyecto de Titulación</p>
                            </div>

                            <Divider className="mt-3" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">Desarrollador Front-end</span>
                                <p className="text-base">Coursea y Meta</p>
                                <p className="text-xs">Concluyendo el Último Módulo</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl mt-10">2024</h3>
                    <Divider className="my-2" />

                    <div className="flex flex-col gap-2 w-full">
                        <div className="md:w-1/2 md:ml-auto">
                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">CSEI 24</span>
                                <p className="text-base">Universidad Ténica de Ambato</p>
                                <p className="text-xs">Congreso Anual de Tecnología</p>
                            </div>

                            <Divider className="my-5" />

                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">LAL #2 | Miembro del Capítulo</span>
                                <p className="text-base">JCI Ambato</p>
                                <p className="text-xs">Gestión del Proyectos, Finanzas, Comunicación Efectiva, Negociación y Resolución de Conflictos</p>
                            </div>

                        </div>
                    </div>


                    <h3 className="text-3xl md:text-5xl mt-10">2023</h3>
                    <Divider className="my-2" />

                    <div className="flex flex-col gap-2 w-full">
                        <div className="md:w-1/2 md:ml-auto">
                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">HatunSoft 2023 | Organizador</span>
                                <p className="text-base">Universidad Técnica de Ambato y UTA Microsoft Community</p>
                                <p className="text-xs">Encargado de diseñar los desafíos, gestionar los auspiciantes y coordinar las ponencias del 1er Concurso de Programación HatunSoft 2023,</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl mt-10">2022</h3>
                    <Divider className="my-2" />

                    <div className="flex flex-col gap-2 w-full">
                        <div className="md:w-1/2 md:ml-auto">
                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">CSEI 22</span>
                                <p className="text-base">Universidad Ténica de Ambato</p>
                                <p className="text-xs">Congreso Anual de Tecnología</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl mt-10">2021</h3>
                    <Divider className="my-2" />

                    <div className="flex flex-col gap-2 w-full">
                        <div className="md:w-1/2 md:ml-auto">
                            <div className="flex flex-col gap-2 my-3">
                                <span className="text-base font-semibold">CSEI 21</span>
                                <p className="text-base">Universidad Ténica de Ambato</p>
                                <p className="text-xs">Congreso Anual de Tecnología</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FreeTime / Proyectos */}
            <section aria-labelledby="freetime-section" className="flex flex-col gap-10 px-4 mb-28">
                <h2 id="freetime-section" className="text-5xl md:text-7xl mt-20 mb-10">
                    Aventuras, Naturaleza, Lugares
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {activities.map((activity, index) => (
                        <div key={index} aria-label={`Actividad titulada ${activity.title}`}>
                            <Card radius="none" shadow="none">
                                <CardBody className='h-[70vh] md:h-[80vh] lg:h-[90vh]'>
                                    <Image
                                        alt={`Imagen representativa de ${activity.title}`}
                                        className="object-cover h-full"
                                        fill={true}
                                        src={activity.image}
                                    />
                                </CardBody>

                                <CardFooter className="flex flex-col items-start mt-3 p-0 gap-1">
                                    <h2 className="text-md text-black uppercase">{activity.title}</h2>
                                    <p className="text-sm text-gray-500">{activity.wordKeys.join(', ')}</p>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
