"use client";

import { motion } from 'framer-motion';

interface TextProps {
    title: string;
}

const AnimatedText = ({ title }: TextProps) => {
    return (
        <motion.h2
            className='text-4xl sm:text-5xl md:text-5xl font-semibold'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            {title}
        </motion.h2>
    );
};

export default AnimatedText;
