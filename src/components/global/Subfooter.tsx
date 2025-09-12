import Link from "next/link";
import LinkIconComponent from "@/components/ui/LinkIcon";
import Image from "next/image";
import { Button } from "@heroui/button";


export default function Subfooter() {


    return (
        <section id="subfooter" className="relative select-none">

            <div className="w-full h-[1px] mb-20 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="flex flex-col w-full items-center gap-5">

                <div className="flex flex-col items-center gap-3">
                    <p className="text-white text-6xl">Hagámos esto oficial, </p>
                    <p className="text-white text-6xl">contáctate conmigo.</p>
                </div>

                <div className="flex items-center gap-3 relative h-[3.125em] px-[1.5em] text-white  backdrop-blur-sm rounded-lg">
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
                            <Image
                                src="/assets/sebas.jpg"
                                alt="Sebas Overlay"
                                width={32}
                                height={32}
                                className="absolute -right-10 w-6 h-6 rounded-full object-cover"
                            />
                        </div>
                        <span className="font-xs ml-10 opacity-50">10+ clientes</span>
                    </div>
                </div>

                <Button radius="sm" size="lg" className="font-semibold">
                    Contactame
                </Button>
            </div>
            <div className="w-full h-[1px] mt-20 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        </section>
    )
}