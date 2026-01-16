import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ children, className, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ scale: 1.01 }}
            className={`bg-card border border-white/5 p-6 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500 shadow-xl ${className}`}
        >
            {/* Subtle Glow Effect on Hover */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {children}
        </motion.div>
    );
};

export default BentoCard;