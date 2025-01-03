import Image from 'next/image';

interface AreaComponentProps {
    title: string;
    imageUrl: string;
}

const AreaComponent = ({ title, imageUrl }: AreaComponentProps) => {
    return (
        <div className="flex items-end gap-2">
            <h2 className="text-4xl md:text-7xl">{title}</h2>
            <div className="relative w-28 h-20  md:w-48 md:h-28">
                <Image
                    alt="Image"
                    src={imageUrl}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>

    );
};

export default AreaComponent;
