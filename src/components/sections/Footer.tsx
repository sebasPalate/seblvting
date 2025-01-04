import Link from "next/link";
import LinkIconComponent from "@/components/LinkIcon";

export default function Footer() {
    return (
        <footer id="footer" className="bg-black px-4" >
            <div className="flex flex-col mt-14">
                {/* Top Content */}
                <section className="flex flex-col md:flex-row gap-5 justify-between mb-14 md:mb-20">
                    <div className="max-w-3xl sm:max-w-4xl">
                        <h4 className="text-gray-400 text-3xl sm:text-4xl md:text-5xl mb-5">Interested in working with me?</h4>
                        <h4 className="text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight ">Together, we hold the power to design the world that we envision</h4>
                    </div>

                    <div>
                        <p className="text-gray-400 text-nowrap">1° 15&apos; 20.3&quot; S / 78° 37&apos; 26.3&quot; W</p>
                        <p className="text-white">Remote from Ecuador</p>
                    </div>
                </section>

                {/* Middle Conntent */}
                <section className="flex flex-col md:flex-row justify-between">
                    <div className="mb-14">
                        <h5 className="text-gray-400 mb-2">Send a message</h5>
                        <a className="text-white" href="mailto:sebas.palate11@gmail.com">sebas.palate11@gmail.com</a>
                    </div>

                    <nav className="flex flex-col mr-[8%] gap-4 text-white">
                        <div className="flex flex-col gap-1">
                            <LinkIconComponent
                                title="Linkedin"
                                urlPage="https://www.linkedin.com/in/sebastianpalate1/"
                            />
                            <LinkIconComponent
                                title="Instagram"
                                urlPage="https://www.instagram.com/sebastianpalate1/"
                            />
                            <LinkIconComponent
                                title="GitHub"
                                urlPage="https://github.com/sebasPalate"
                            />
                        </div>

                        <div className="mt-10">
                            <Link href="/work" target="_blank">Work By Sebas</Link>
                        </div>
                    </nav>
                </section>

                {/* End Content */}
                <section className="flex flex-col md:flex-row mt-14 md:mt-28 mb-5 gap-2">
                    <p className="text-xs text-white">Copyright © 2025 Sebas.Palate. All rights reserved.</p>
                    <p className="text-xs text-gray-400">Development by Sebas.Palate</p>
                    {/* <p className="text-xs text-gray-300">Inspired by Cris.Araújo</p> */}
                </section>
            </div>
        </footer >
    )
}