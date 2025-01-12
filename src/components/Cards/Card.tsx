import Link from 'next/link';
import Image from 'next/image';
import { Card, CardFooter, CardHeader } from "@nextui-org/card";

interface CardComponentProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
}

const CardComponent = ({ title, description, imageUrl, linkUrl }: CardComponentProps) => {
    return (
        <Card radius="none" isHoverable className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
            <Link href={linkUrl}>
                <CardHeader className="absolute z-10">
                    <h2 className="text-base text-gray-100">{title}</h2>
                </CardHeader>
                <Image
                    alt={`Imagen representativa de ${title}`}
                    className="z-0 object-cover"
                    fill={true}
                    src={imageUrl}
                />
                <CardFooter className="absolute bottom-0 z-10">
                    <p className="text-base text-gray-100">{description}</p>
                </CardFooter>
            </Link>
        </Card>

    );
};

export default CardComponent;
