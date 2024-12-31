import CardComponent from "@/components/Card";
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
    <div className="flex flex-col">

      {/* Hero Section */}
      <section id="hero-section" className="px-4">
        {/* Image */}
        <div className="relative w-full h-[65vh] sm:h-[75vh] lg:h-[85vh]">
          <Image
            src="/pic4.webp"
            alt="Hero - Levting Portfolio"
            fill={true}
            priority
            className="object-cover object-center"
          />
        </div>


        {/* Title */}
        <div className="w-full mb-8 text-center">
          <h1 className="text-5xl sm:text-8xl lg:text-9xl font-semibold">
            SEBLVTING
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

      </section>

      {/* Video/Image Section */}
      <section id="video-section">
        <div className="relative mt-36 mb-52 min-h-[60vh]">

          {/* GIF */}
          <Image
            src="/press.gif"
            alt="Descripción del GIF"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover z-10"
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
      <section id="impacto-experiencia" className="px-4 my-15">
        <div className="max-w-3xl sm:max-w-2xl lg:max-w-3xl xl:max-w-7xl">

          {/* Texto introductorio */}
          <p className="text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl text-left mb-5 leading-tight">
            Levitating digital projects with innovative solutions, creating user experiences that transform and elevate every interaction.
          </p>

          {/* Números */}
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between font-medium lg:text-center pt-16">

            {/* Proyectos*/}
            <div className="flex flex-col">
              <p className="text-[10rem] sm:text-[9rem] md:text-[13rem] lg:text-[13rem] xl:text-[19rem] leading-none">+5</p>
              <p className="text-lg text-gray-500 xl:text-xl">Proyectos desarrollados</p>
            </div>

            {/* Experiencia */}
            <div className="flex flex-col">
              <p className="text-[10rem] sm:text-[9rem] md:text-[13rem] lg:text-[13rem] xl:text-[19rem] leading-none">•1</p>
              <p className="text-lg text-gray-500 xl:text-xl">Año de experiencia</p>
            </div>

          </div>
        </div>
      </section>


      {/* Proyectos */}
      <section id="proyectos" className="px-4">
        <div className="flex justify-between items-center mt-40 mb-10">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold">Featured Projects</h3>
        <Link href="#" className="text-2xl">See All</Link>
        </div>

        <div className="flex justify-between gap-5">

          <CardComponent
            title="FullStack Project"
            description="SisDocx"
            imageUrl="/SisDocx.jpg"
            linkUrl="#"
          />

          <CardComponent
            title="FullStack Project"
            description="SisDocx"
            imageUrl="/SisDocx.jpg"
            linkUrl="#"
          />

          <CardComponent
            title="FullStack Project"
            description="SisDocx"
            imageUrl="/SisDocx.jpg"
            linkUrl="#"
          />

        </div>
      </section>


    </div>
  );
}
