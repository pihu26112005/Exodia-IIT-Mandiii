"use client";

import { motion } from "framer-motion";

interface TextAnimationProps {
    text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({text}) => {
    return (
        <div>
            {text.split("").map((char, index) => {
                return (
<<<<<<< HEAD
                    <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5, delay: (index) * 0.1 }}>
=======
<<<<<<< HEAD
                    <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5, delay: (index) * 0.1 }}>
=======
                    <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5, delay: index * 0.1 }}>
>>>>>>> b9cc671 (Your commit message)
>>>>>>> 5572e05 ( commit)
                        {char}
                    </motion.span>
                );
            })}
        </div>
    )
};

export default TextAnimation;