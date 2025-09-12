import { Button } from "@heroui/button";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Presentacion() {
    return (
        <section className="my-10 mx-auto lg:mx-7">
            <div className="grid grid-cols-2 grid-rows-2 gap-8">

                <h2 className="flex flex-col max-w-lg gap-0 col-start-1 row-start-1">
                    <p className="text-white text-5xl">
                        Ingeniero de Software,
                    </p>
                    <p className="text-white text-5xl">
                        Desarrollo basado en soluciones Full Stack.
                    </p>
                </h2>

                <div className="col-start-2 row-start-2">
                    <div className="flex flex-col gap-7">
                        <p className="text-white text-lg opacity-50">
                            Soy Sebastián, ingeniero de software y desarrollador web full stack con base en Ecuador. Mi enfoque se centra en crear soluciones innovadoras, funcionales y estéticamente atractivas, abordando desafíos con una perspectiva única y creativa. Estoy comprometido con la excelencia en el diseño y el desarrollo de productos digitales de alta calidad.
                        </p>

                        <div className="flex gap-8">
                            <Link href="/">
                                <button className="text-white font-semibold text-lg flex items-center gap-2">
                                    <HiOutlineArrowRight />
                                    Servicios
                                </button>
                            </Link>
                            <Link href="https://cal.com/seblvting" target="_blank">
                                <button className="text-white font-semibold text-lg flex items-center gap-2">
                                    <HiOutlineArrowRight />
                                    Llamada de Descubrimiento
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}