'use client';
import { Accordion, AccordionItem } from '@nextui-org/accordion';


const AccordionComponent = () => {

    const itemsClasses = {
        title: "text-medium text-4xl",
    };

    const items = [
        {
            title: "Web Apps",
            content: "Create websites apps that impress and leave a memorable user experience. From crafting user flows and moodboards to designing web and mobile applications and websites, I will ensure that your digital presence is user-friendly and with precision, backed by a cohesive design system. Your customers are in for an experience they'll rave about.",
            wordKeys: ["Websites", "Design Systems"]
        },
        {
            title: "Interaction",
            content: "Elevate your brand with engaging interactions that tell your story and leave a lasting impact. From prototyping to small interactions, I will help you bring your brand's narrative to life.",
            wordKeys: ["Prototyping"]

        },
        {
            title: "Branding",
            content: "Craft a brand identity that's a true masterpiece, molding it into something that reflects your values and makes your audience envious. From captivating logos and unforgettable naming to style guides and eye-catching illustrations, we'll infuse your brand with a unique personality. Together, we'll design a brand that's truly exceptional.",
            wordKeys: ["Naming", "Brand Identity"]
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
