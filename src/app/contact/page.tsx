import Footer from "@/components/global/Footer";

export default function Page() {
    return (
        <main className="flex flex-col mt-16">
            {/* Bienvenida */}
            <section className="max-w-5xl mb-10 px-4">
                <h1 className="text-5xl md:text-6xl">
                    CREEMOS IMPACTO JUNTOS
                </h1>
            </section>

            {/* Descripción */}
            <section aria-labelledby="description" className="flex flex-col gap-2 px-4">
                <h2 id="description" className="text-gray-400 text-3xl">
                    {/* Open to work! */}
                    Abierto a trabajar!
                </h2>
                <p className="text-gray-400 text-3xl">
                    {/* Reach out about a project */}
                    Contáctame para hablar sobre un proyecto.
                </p>
                <p className="text-gray-400 text-3xl">
                    {/* Or just to say hello */}
                    O simplemente para saludar.
                </p>
            </section>

            {/* Sección de contacto */}
            <section aria-labelledby="contact-section" className="flex justify-center items-center h-[50vh] mb-[10vh] md:mb-[16vh]">
                <div className="text-3xl md:text-6xl">
                    <a
                        id="contact-section"
                        href="mailto:sebas.palate11@gmail.com"
                        aria-label="Enviar un correo a Sebas Palate"
                        className="underline-animation"
                    >
                        sebas.palate11@gmail.com
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
