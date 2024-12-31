// components/CardComponent.js
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
        <Card radius="none" isHoverable className="relative w-full h-[90vh] bg-red-100">
            <Link href={linkUrl}>
                <CardHeader className="absolute z-10">
                    <p className="text-xl text-gray-100">{title}</p>
                </CardHeader>
                <Image
                    alt="Relaxing app background"
                    className="z-0 object-cover"
                    fill={true} // Esto asegura que la imagen ocupe toda el área del contenedor
                    src={imageUrl}
                />
                <CardFooter className="absolute bottom-0 z-10">
                    <p className="text-xl text-gray-100">{description}</p>
                </CardFooter>
            </Link>
        </Card>

    );
};

export default CardComponent;
