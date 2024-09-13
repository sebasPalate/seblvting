import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col px-4">

      <div>
        <section>
          <Image
            src="/espalda.jpg"
            alt="Hero"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />

          {/* Texto grande "Levting" */}
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold text-center mt-0">
            LEVTING
          </h1>

          {/* Sección de Columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-start mt-5">
            <div className="p-2">
              <h2 className="font-semibold text-lg text-gray-500">Actualmente</h2>
              <p className="text-sm">FullStack Developer</p>
            </div>

            <div className="p-2">
              <h2 className="font-semibold text-lg text-gray-500">Dedicación</h2>
              <p className="text-sm">Desarrollo de Interfaces Web orientado la experiencia de usuario</p>
            </div>
            <div className="p-2">
              <h2 className="font-semibold text-lg text-gray-500">Especialización</h2>
              <p className="text-sm">Rendimiento y Accesibilidad</p>
            </div>
            <div className="p-2">
              <h2 className="font-semibold text-lg text-gray-500">Especialización</h2>
              <p className="text-sm">Performance y Accesibilidad</p>
            </div>
            <div className="p-2">
              <h2 className="font-semibold text-lg text-gray-500">Entusiasta por</h2>
              <p className="text-sm">Desarrollo, Arte y Tecnología</p>
            </div>
            <div className="p-2">
              <h2 className="font-semibold text-lg text-gray-500">De</h2>
              <p className="text-sm">Ecuador</p>
            </div>
          </div>
        </section>
      </div>

      {/* Impacto y Experiencia */}
      <div className="w-full max-w-screen-lg mx-auto text-start mt-32 mb-32">
        <section>
          <p className="text-2xl sm:text-3xl lg:text-5xl mb-8">
            Levitar a las empresas hacia la experiencia de usuario, inpulsando la innovación y ofreciendo soluciones de diseño impecables.
          </p>

          <div className="flex flex-col md:flex-row justify-start space-y-8 md:space-y-0 md:space-x-16">
            <div>
              <p className="text-6xl sm:text-7xl lg:text-9xl font-semibold">+5</p>
              <p className="text-lg text-gray-500">Proyectos desarrollados</p>
            </div>
            <div>
              <p className="text-6xl sm:text-7xl lg:text-9xl font-semibold">•1</p>
              <p className="text-lg text-gray-500">Año de experiencia</p>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}
