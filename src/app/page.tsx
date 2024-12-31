import Image from "next/image";

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
        <Image
          src="/pic4.webp"
          alt="Hero - Levting Portfolio"
          width={1920}
          height={1080}
          priority
          className="w-full object-cover h-[55vh] sm:h-[65vh] lg:h-[75vh]"
        />
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-semibold text-center mb-8">
          SEBLVTING
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-full gap-8 justify-between">
          {/* Columna 1: Tres primeras secciones (en fila horizontal para pantallas grandes, en fila vertical para pantallas medianas) */}
          <div className="flex flex-col gap-5 sm:flex-col md:flex-col lg:flex-row justify-start">
            {sections.slice(0, 3).map((item, index) => (
              <div key={index} className="w-auto">
                <h2 className="font-semibold text-lg sm:text-base text-gray-400">{item.title}</h2>
                <p className="text-sm sm:text-sm">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Columna 2: Tres secciones restantes (en fila horizontal para pantallas grandes, en fila vertical para pantallas medianas) */}
          <div className="flex flex-col gap-5 sm:flex-col md:flex-col lg:flex-row justify-end">
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
        <div className="relative mt-36 mb-52 min-h-[70vh]">
          {/* GIF */}
          <Image
            src="/press.gif"
            alt="Descripción del GIF"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />

          {/* Text Over GIF */}
          <div className="absolute inset-0 flex items-center justify-center z-30 px-4">
            <h2 className="text-[clamp(1rem,4vw,3rem)] font-bold text-white opacity-90 text-center">
              ¿Ready?
            </h2>
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-70 z-20"></div>
        </div>
      </section>

      {/* Secciones */}
      <div >

        {/* Impacto y Experiencia */}
        <section id="impacto-experiencia" className="px-4">
          <div className="max-w-3xl sm:max-w-2xl lg:max-w-3xl xl:max-w-7xl">
            <p className="text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl text-left mb-8 leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
              Levitating digital projects with innovative solutions, creating user experiences that transform and elevate every interaction.
            </p>

            {/* Numbers */}
            <div className="flex flex-col gap-10 sm:flex-row sm:justify-between font-medium lg:text-center pt-16">
              <div className="flex flex-col">
                <p className="text-[10rem] sm:text-[9rem] md:text-[13rem] lg:text-[13rem] xl:text-[19rem] leading-none">+17</p>
                <p className="text-lg text-gray-500 xl:text-xl">Proyectos desarrollados</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[10rem] sm:text-[9rem] md:text-[13rem] lg:text-[13rem] xl:text-[19rem] leading-none">•1</p>
                <p className="text-lg text-gray-500 xl:text-xl">Año de experiencia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="px-4">
          Hola
        </section>
      </div>

    </div>

  );
}
