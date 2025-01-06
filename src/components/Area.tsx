'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface AreaComponentProps {
    title: string;
    imageUrl: string;
}

const AreaComponent = ({ title, imageUrl }: AreaComponentProps) => {
    return (
        <div className="flex items-end gap-2">
            {/* <h2 className="text-4xl md:text-7xl">{title}</h2> */}

            <motion.h2
                className="text-4xl md:text-7xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {title}
            </motion.h2>


            {/* <div className="relative w-28 h-20  md:w-48 md:h-28">
                <Image
                    alt="Image"
                    src={imageUrl}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                />
            </div> */}

            <motion.div
                className="relative w-28 h-20 md:w-48 md:h-28"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Image
                    alt="Image"
                    src={imageUrl}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>
        </div>

    );
};

export default AreaComponent;
