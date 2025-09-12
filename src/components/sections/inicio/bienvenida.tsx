import { Button } from "@heroui/button";
import Image from "next/image";

export default function Bienvenida() {
    return (
        <section className="relative overflow-clip">
            <div className="mx-10">
                <div className="flex h-screen items-end"> {/* min-h-screen */}
                    <div className="flex flex-col w-full">{/* min-h-[70vh] */}
                        <div className="flex my-10">
                            <div className="flex w-1/3 justify-start items-start pt-6 gap-5 opacity-65">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-semibold">Software</p>
                                    <p className="text-white text-sm font-semibold">Interfaces</p>
                                    <p className="text-white text-sm font-semibold">Experiencia de Usuario</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-semibold">Optimización</p>
                                    <p className="text-white text-sm font-semibold">Diseño</p>
                                    <p className="text-white text-sm font-semibold">Experiencia</p>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col justify-start items-start">
                                <div className="flex flex-col gap-20">
                                    <div className="flex flex-col gap-10">
                                        <h1 className="text-[90px] text-white font-semibold leading-none tracking-tighter">
                                            {/* Crea sitios que no solo se visitan, sino que se viven. */}
                                            {/* Empieza a crear sitios web que la gente recuerde. */}
                                            Crea sitios que la gente recuerde
                                        </h1>
                                        <div className="flex flex-row gap-3">
                                            <Button radius="sm" size="lg" className="font-semibold">
                                                Connviertete en Miembro
                                            </Button>

                                            <button className="flex items-center gap-3 relative h-[3.125em] px-[1.5em] text-white bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/8 transition-all duration-300">
                                                <div className="flex items-center gap-2">
                                                    <div className="relative flex">
                                                        <Image
                                                            src="/assets/sebas.jpg"
                                                            alt="Sebas"
                                                            width={32}
                                                            height={32}
                                                            className="w-6 h-6 rounded-full object-cover"
                                                        />
                                                        <Image
                                                            src="/assets/sebas.jpg"
                                                            alt="Sebas Overlay"
                                                            width={32}
                                                            height={32}
                                                            className="absolute -right-5 w-6 h-6 rounded-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="font-medium ml-6">Sobre Nosotros</span>
                                                </div>
                                            </button>

                                            {/* <button className="flex items-center gap-3 relative h-[3.125em] px-[1.5em] text-white bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                                                <Image
                                                    src="/assets/sebas.jpg"
                                                    alt="Sebas"
                                                    width={32}
                                                    height={32}
                                                    className="w-6 h-6 rounded-full object-cover"
                                                />

                                                <span className="font-medium">Sobre Nosotros</span>

                                            </button> */}
                                        </div>
                                    </div>
                                    <div className="text-base text-white opacity-50 font-semibold max-w-md">
                                        <p>Levting came from constantly digging through old projects
                                            wondering, ‘How did I build that again?’ It is basically our
                                            personal toolbox, packed with components, techniques,
                                            tricks and tutorials—and it will keep growing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

            <div className="absolute z-10 bottom-5 right-5">
                <Image
                    src="/assets/lvg-icon-gray.svg" alt="Levting"
                    width={90} height={90}
                    className="w-90 h-90 opacity-50"
                />
            </div>
        </section>
    )
}


