import AccordionComponent from "@/components/ui/Accordion";
import AreaComponent from "@/components/Area";
import Footer from "@/components/global/Footer";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/animations/AnimatedText";
import { projects } from "@/data/projects";
import { sections } from "@/data/sections";
import CardComponent from "@/components/cards/Card";


export default function Home() {

  return (
    <main className="flex flex-col mt-16">

      {/* Hero Section */}
      <header id="hero-section" className="px-4">
        {/* Image */}
        <div className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh]">
          <Image
            src="/assets/lvg.svg"
            alt="Imagen de portada de Sebas Palate"
            fill={true}
            priority={true}
            className="object-cover object-center"
          />
        </div>

        {/* Title */}
        <div className="w-full mb-5 text-center">
          <h1 className="text-[12vw] font-semibold">
            SEBAS.PALATE
          </h1>
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 justify-between">
          {/* Columna 1: Tres primeras secciones */}
          <div className="flex flex-col gap-5 lg:flex-row justify-start">
            {sections.slice(0, 3).map((item, index) => (
              <div key={index} className="w-auto">
                <h2 className="font-semibold text-base sm:text-xl text-gray-400">{item.title}</h2>
                <p className="text-sm sm:text-base">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Columna 2: Tres secciones restantes */}
          <div className="flex flex-col gap-5 lg:flex-row justify-end">
            {sections.slice(3, 6).map((item, index) => (
              <div key={index} className="w-auto">
                <h2 className="font-semibold text-base sm:text-xl text-gray-400">{item.title}</h2>
                <p className="text-sm sm:text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Video/Image Section */}
      <section id="video-section" className="mt-36 mb-36">
        <div className="relative w-full h-[75vh] sm:h-[85vh] lg:h-[95vh]">
          <Image
            src="/heros/slow.gif"
            alt="Imagen de fondo adicional"
            fill={true}
            priority
            className="object-cover object-center"
            unoptimized={true}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-20"></div>

          {/* Text Over GIF */}
          <div className="absolute inset-0 flex items-center justify-center px-4 z-30">
            <p className="text-[clamp(2rem,5vw,4rem)] md:text-[clamp(1rem,4vw,3rem)] font-bold text-white opacity-90 text-center">
              ¿Listo?
            </p>
          </div>
        </div>
      </section>

      {/* Impacto y Experiencia */}
      <section id="impacto-experiencia" className="px-4">
        <div className="sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          {/* Texto introductorio */}
          <p className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-left mb-5 ">
            Levitar proyectos digitales con soluciones innovadoras, creando experiencias de usuario que transforman y elevan cada interacción.
          </p>

          {/* Números */}
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between font-medium lg:text-center pt-16">
            <div className="flex flex-col">
              <div className="text-[15vh] sm:text-[18vw] leading-none">
                +7
              </div>

              <p className="text-lg text-gray-500 xl:text-xl">Proyectos Totales</p>
            </div>

            <div className="flex flex-col">
              <p className="text-[15vh] sm:text-[18vw] leading-none">
                •1
              </p>
              <p className="text-lg text-gray-500 xl:text-xl">Año/s de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 my-14">
        <div className="flex justify-between items-center mt-40 mb-10">
          <AnimatedText title="Proyectos Destacados" />
          <Link href="/work" aria-label="Ver todos los proyectos" className="text-xl">Ver Todos</Link>
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

      {/* Areas of Work */}
      <section id="areas-work" className="px-4 my-14">
        <div>
          <h6 className="text-base text-gray-800">
            {/* Areas of Work */}
            Áreas de Trabajo
          </h6>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap items-baseline gap-5 my-3">
            <AreaComponent title="Desarrollo Web" imageUrl="/areas/webdeveloper.jpg" />
            <AreaComponent title="Transformación Digital" imageUrl="/areas/digitaltransformation.png" />
          </div>

          <div className="flex flex-wrap items-baseline gap-5 my-3">
            <AreaComponent title="Documentos" imageUrl="/areas/documentmanagement.png" />
            <AreaComponent title="Automatización" imageUrl="/areas/processautomation.jpg" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-4 my-14">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <h4 className="text-3xl mb-3">
              {/* Services */}
              Servicios
            </h4>
            <p className="max-w-lg text-gray-500 md:max-w-sm lg:max-w-md">
              Desde la visión inicial hasta el producto final, me enfoco en crear soluciones innovadoras y experiencias inolvidables, fusionando diseño, funcionalidad y tecnología para llevar tus ideas a nuevas alturas.
            </p>
          </div>

          <div className="flex-1">
            <AccordionComponent />
          </div>
        </div>
      </section>

      {/* Second Hero Section */}
      <section id="hero2-section">
        <div className="relative w-full h-[35vh] sm:h-[45vh] lg:h-[55vh]">
          <Image
            src="/heros/slow.gif"
            alt="Imagen de fondo adicional"
            fill={true}
            priority
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
