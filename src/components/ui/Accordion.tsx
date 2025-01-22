'use client';
import { Accordion, AccordionItem } from "@heroui/accordion";


const AccordionComponent = () => {

    const itemsClasses = {
        title: "text-medium text-4xl",
    };

    const items = [
        {
            title: "Desarrollo Web",
            content: "Crea aplicaciones web y sitios web que no solo impresionen, sino que también ofrezcan una experiencia de usuario fluida y memorable. Desde los flujos de usuario y mood boards hasta aplicaciones web y móviles totalmente funcionales, me aseguraré de que tu presencia digital sea intuitiva, precisa y respaldada por un sistema de diseño coherente. Tus usuarios disfrutarán de una experiencia que nunca olvidarán",
            wordKeys: ["Aplicaciones Web", "Diseño de Sistemas"]
        },
        {
            title: "Experiencias Web",
            content: "Transforma tu presencia digital en una experiencia interactiva y cautivadora. Ya sea a través de prototipos o pequeñas interacciones, elevaré tu marca diseñando interfaces web intuitivas y visualmente atractivas que cuenten tu historia y resuenen con tu audiencia.",
            wordKeys: ["Prototipado", "Interacciones"]

        },
        {
            title: "SEO y Branding",
            content: "Impulsa la visibilidad y el reconocimiento de tu marca con técnicas estratégicas de SEO y marketing. Desde la optimización de tu sitio para motores de búsqueda hasta la creación de una identidad de marca inolvidable, te ayudaré a llegar a tu audiencia, generar tráfico y establecer una presencia digital duradera. Trabajemos juntos para construir una marca que destaque y deje una impresión perdurable.",
            wordKeys: ["SEO", "Identidad de Marca"]
        }
    ];

    return (

        <Accordion itemClasses={itemsClasses}>
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                    <div className='flex flex-col gap-1 mt-5'>
                        {item.wordKeys.map((word, index) => (
                            <span key={index} className="text-base text-gray-400">{word}</span>
                        ))}
                    </div>
                </AccordionItem>
            ))}
        </Accordion>

    );
};

export default AccordionComponent;
