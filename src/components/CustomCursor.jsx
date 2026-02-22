import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('magnetic')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            backgroundColor: 'rgba(17, 17, 17, 0)',
            border: '2px solid rgba(17, 17, 17, 0.5)',
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 1.5,
            backgroundColor: 'rgba(17, 17, 17, 0.1)',
            border: '2px solid rgba(17, 17, 17, 0)',
        },
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 1,
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 0,
        },
    };

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return null; // hide custom cursor on mobile
    }

    return (
        <>
            <motion.div
                className="cursor-outline"
                variants={variants}
                animate={isHovering ? 'hover' : 'default'}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            />
            <motion.div
                className="cursor-dot"
                variants={dotVariants}
                animate={isHovering ? 'hover' : 'default'}
                transition={{ type: 'spring', stiffness: 1000, damping: 20 }}
            />
        </>
    );
};

export default CustomCursor;
