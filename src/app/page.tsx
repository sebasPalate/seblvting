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
      <div className="px-4">
        <section>
          <Image
            src="/pic1.jpg"
            alt="Hero"
            width={1920}
            height={1080}
            priority
            className="w-full h-96 object-cover"
          />
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold text-center my-4">
            LEVTING
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-full gap-8 justify-between">
            {/* Columna 1: Tres primeras secciones (en fila horizontal para pantallas grandes, en fila vertical para pantallas medianas) */}
            <div className="flex flex-col gap-8 sm:flex-col md:flex-col lg:flex-row justify-start">
              {sections.slice(0, 3).map((item, index) => (
                <div key={index} className="w-auto">
                  <h2 className="font-semibold text-lg sm:text-base text-gray-400">{item.title}</h2>
                  <p className="text-sm sm:text-sm">{item.content}</p>
                </div>
              ))}
            </div>

            {/* Columna 2: Tres secciones restantes (en fila horizontal para pantallas grandes, en fila vertical para pantallas medianas) */}
            <div className="flex flex-col gap-8 sm:flex-col md:flex-col lg:flex-row justify-end">
              {sections.slice(3, 6).map((item, index) => (
                <div key={index} className="w-auto">
                  <h2 className="font-semibold text-lg sm:text-base text-gray-400">{item.title}</h2>
                  <p className="text-sm sm:text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </div>



        </section>
      </div>

      {/* Video/Image Section */}
      <div className="relative h-screen w-full my-36">
        {/* GIF */}
        <Image
          src="/press.gif"
          alt="Descripción del GIF"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Text Over GIF */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-white opacity-70 text-center">
            ¿Ready?
          </h2>
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-20"></div>
      </div>

      {/* Impacto y Experiencia */}
      <div className="px-4">
        <section>
          <div className="max-w-5xl bg-red-100">
            <p className="text-3xl sm:text-4xl lg:text-5xl sm:text-left leading-relaxed">
              Levitar a las empresas hacia la experiencia de usuario, impulsando la innovación y
              ofreciendo soluciones de diseño impecables.
            </p>

            {/* Numbers */}
            <div className="flex flex-col md:flex-row justify-between font-semibold lg:text-center bg-blue-100 p-5">
              <div>
                <p className="text-[10rem] sm:text-[13rem]">+5</p>
                <p className="text-lg text-gray-500">Proyectos desarrollados</p>
              </div>
              <div>
                <p className="text-[10rem] sm:text-[13rem]">•1</p>
                <p className="text-lg text-gray-500">Año de experiencia</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
