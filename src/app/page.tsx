import AccordionComponent from "@/components/Accordion";
import AreaComponent from "@/components/Area";
import CardComponent from "@/components/Card";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const sections = [
    { title: "Currently", content: "FullStack Developer at EEASA" },
    { title: "Freelancer", content: "Levting & others" },
    { title: "Experienced in", content: "Fullstack Development, AI & User Interaction" },
    { title: "Empowering", content: "Innovative Digital Solutions & Intelligent Products" },
    { title: "Enthusiastic about", content: "Art, Technology, AI & User-Centered Design" },
    { title: "From", content: "Ecuador" },
  ];

  return (
    <main className="flex flex-col mt-16">

      {/* Hero Section */}
      <header id="hero-section" className="px-4">
        {/* Image */}
        <div className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[85vh]">
          <Image
            src="/hero/pic4.webp"
            alt="Imagen de portada de Sebas Palate"
            fill={true}
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Title */}
        <div className="w-full mb-8 text-center">
          <h1 className="text-5xl sm:text-8xl lg:text-9xl font-semibold">
            SEBAS.PALATE
          </h1>
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 justify-between">
          {/* Columna 1: Tres primeras secciones */}
          <div className="flex flex-col gap-5 lg:flex-row justify-start">
            {sections.slice(0, 3).map((item, index) => (
              <div key={index} className="w-auto">
                <h2 className="font-semibold text-lg sm:text-base text-gray-400">{item.title}</h2>
                <p className="text-sm sm:text-sm">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Columna 2: Tres secciones restantes */}
          <div className="flex flex-col gap-5 lg:flex-row justify-end">
            {sections.slice(3, 6).map((item, index) => (
              <div key={index} className="w-auto">
                <h2 className="font-semibold text-lg sm:text-base text-gray-400">{item.title}</h2>
                <p className="text-sm sm:text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Video/Image Section */}
      <section id="video-section" className="mt-36 mb-36">
        <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh]">
          {/* GIF */}
          <Image
            src="/press.gif"
            alt="GIF mostrando una demostración visual de los proyectos digitales innovadores de Sebas Palate"
            fill={true}
            className="object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70 z-20"></div>

          {/* Text Over GIF */}
          <div className="absolute inset-0 flex items-center justify-center px-4 z-30">
            <h2 className="text-[clamp(1rem,4vw,3rem)] font-bold text-white opacity-90 text-center">
              ¿Ready?
            </h2>
          </div>
        </div>
      </section>

      {/* Impacto y Experiencia */}
      <section id="impacto-experiencia" className="px-4">
        <div className="max-w-3xl sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
          {/* Texto introductorio */}
          <p className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-left mb-5 leading-tight">
            Levitating digital projects with innovative solutions, creating user experiences that transform and elevate every interaction.
          </p>

          {/* Números */}
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between font-medium lg:text-center pt-16">
            <div className="flex flex-col">
              <p className="text-[10rem] sm:text-[9rem] md:text-[13rem] lg:text-[13rem] xl:text-[19rem] leading-none">+5</p>
              <p className="text-lg text-gray-500 xl:text-xl">Proyectos Desarrollados</p>
            </div>

            <div className="flex flex-col">
              <p className="text-[10rem] sm:text-[9rem] md:text-[13rem] lg:text-[13rem] xl:text-[19rem] leading-none">•1</p>
              <p className="text-lg text-gray-500 xl:text-xl">Año/s de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-4 my-14">
        <div className="flex justify-between items-center mt-40 mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold">Featured Projects</h2>
          <Link href="#" aria-label="Ver todos los proyectos" className="text-xl">See All</Link>
        </div>

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
        </div>
      </section>

      {/* Areas of Work */}
      <section id="areas-work" className="px-4 my-14">
        <div>
          <h6 className="text-base text-gray-800">Areas of Work</h6>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap items-baseline gap-5 my-3">
            <AreaComponent title="Web Development" imageUrl="/areas/webdeveloper.jpg" />
            <AreaComponent title="Digital Transformation" imageUrl="/areas/digitaltransformation.png" />
          </div>

          <div className="flex flex-wrap items-baseline gap-5 my-3">
            <AreaComponent title="Document Management" imageUrl="/areas/documentmanagement.png" />
            <AreaComponent title="Process Automation" imageUrl="/areas/processautomation.jpg" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-4 my-14">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <h4 className="text-3xl mb-3">Services</h4>
            <p className="max-w-lg text-gray-500 md:max-w-sm lg:max-w-md">
              From discovery to delivering a full product, my mission is to help businesses build amazing experiences through a first-class design.
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
            src="/hero/pic4.webp"
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
