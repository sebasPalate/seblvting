import AccordionComponent from "@/components/Accordion";
import AreaComponent from "@/components/Area";
import CardComponent from "@/components/Card";
import LinkIconComponent from "@/components/LinkIcon";
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
            src="/hero/pic4.webp"
            alt="Hero - Levting Portfolio"
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

      </section>

      {/* Video/Image Section */}
      <section id="video-section" className="mt-36 mb-36">
        <div className="relative w-full  h-[70vh] sm:h-[80vh] lg:h-[90vh]">

          {/* GIF */}
          <Image
            src="/press.gif"
            alt="Descripción del GIF"
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

            {/* Proyectos*/}
            <div className="flex flex-col">
              <p className="text-[10rem] sm:text-[9rem] md:text-[13rem] lg:text-[13rem] xl:text-[19rem] leading-none">+5</p>
              <p className="text-lg text-gray-500 xl:text-xl">Proyectos Desarrollados</p>
            </div>

            {/* Experiencia */}
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
          <h3 className="text-4xl sm:text-5xl md:text-5xl font-semibold">Featured Projects</h3>
          <Link href="#" className="text-xl">See All</Link>
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

            <AreaComponent
              title="Web Development"
              imageUrl="/areas/webdeveloper.jpg"
            />

            <AreaComponent
              title="Digital Transformation"
              imageUrl="/areas/digitaltransformation.png"
            />
          </div>

          <div className="flex flex-wrap items-baseline gap-5 my-3">
            <AreaComponent
              title="Document Management"
              imageUrl="/areas/documentmanagement.png"
            />
            <AreaComponent
              title="Process Automation"
              imageUrl="/areas/processautomation.jpg"
            />

          </div>
        </div>

      </section>

      {/* Services */}
      <section id="services" className="px-4 my-14">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <h4 className="text-3xl mb-3">Services</h4>
            <p className="max-w-lg text-gray-500 md:max-w-sm lg:max-w-md ">
            From discovery to delivering a full product, my mission is to help businesses build amazing experiences through a first-class design. Despite my main expertise UI/UX Design, a large range of skillset, from visual identity to motion, is part of my work.
            </p>
          </div>

          <div className="flex-1">
            <AccordionComponent />
          </div>

        </div>
      </section>

      {/* Second Hero Section */}
      <section id="hero2-section">
        {/* Image */}
        <div className="relative w-full h-[35vh] sm:h-[45vh] lg:h-[55vh]">
          <Image
            src="/hero/pic4.webp"
            alt=""
            fill={true}
            priority
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Footer */}
      <section id="footer" className="bg-black px-4">
        <div className="flex flex-col mt-14">
          {/* Top Content */}
          <div className="flex flex-col md:flex-row gap-5 justify-between mb-14 md:mb-20">
            <div className="max-w-3xl sm:max-w-4xl">
              <h4 className="text-gray-500 text-3xl sm:text-4xl md:text-5xl mb-5">Interested in working with me?</h4>
              <h4 className="text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight ">Together, we hold the power to design the world that we envision</h4>
            </div>

            <div className="">
              <p className="text-gray-500 text-nowrap">1°15&apos;20.3&quot;S 78°37&apos;26.3&quot;W</p>
              <p className="text-white">Remote from Ecuador</p>
            </div>
          </div>

          {/* Middle Conntent */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-14">
              <h5 className="text-gray-500 mb-2">Send a message</h5>
              <a className="text-white" href="mailto:sebas.palate11@gmail.com">sebas.palate11@gmail.com</a>
            </div>

            <div className="flex flex-col mr-[8%] gap-4 text-white">
              <div className="flex flex-col gap-1">
                <LinkIconComponent
                  title="Linkedin"
                  urlPage="http://"
                />
                <LinkIconComponent
                  title="Instagram"
                  urlPage="http://"
                />
                <LinkIconComponent
                  title="GitHub"
                  urlPage="http://"
                />
              </div>

              <div className="mt-10">
                <a href="http://">Work By Sebas</a>
              </div>
            </div>
          </div>

          {/* End Content */}
          <div className="flex flex-col md:flex-row mt-14 md:mt-28 mb-5 gap-2">
            <p className="text-xs text-white">Copyright © 2025 Sebas.Palate. All rights reserved.</p>
            <p className="text-xs text-gray-300">Development by Sebas.Palate</p>
            {/* <p className="text-xs text-gray-300">Inspired by Cris.Araújo</p> */}
          </div>
        </div>
      </section>

    </div>
  );
}
