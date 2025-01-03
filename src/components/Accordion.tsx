'use client';
import { Accordion, AccordionItem } from '@nextui-org/accordion';


const AccordionComponent = () => {

    const itemsClasses = {
        title: "text-medium text-4xl",
    };

    const items = [
        {
            title: "Web Development",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia et earum nesciunt quidem cum, aspernatur rem magnam quisquam voluptatem dolore vel quibusdam, debitis aliquam. Magni quas hic earum tempore?"
        },
        {
            title: "Web Development",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia et earum nesciunt quidem cum, aspernatur rem magnam quisquam voluptatem dolore vel quibusdam, debitis aliquam. Magni quas hic earum tempore?"
        },
        {
            title: "Web Development",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia et earum nesciunt quidem cum, aspernatur rem magnam quisquam voluptatem dolore vel quibusdam, debitis aliquam. Magni quas hic earum tempore?"
        }
    ];

    return (

        <Accordion itemClasses={itemsClasses}>
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </Accordion>

    );
};

export default AccordionComponent;
