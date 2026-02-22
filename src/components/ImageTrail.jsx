import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageTrail.css';

const ImageTrail = ({ items = [], containerRef }) => {
    const [trail, setTrail] = useState([]);
    const lastPosition = useRef({ x: 0, y: 0 });
    const activeIndex = useRef(0);

    // Ref for cleanup timeouts
    const timeoutsRef = useRef(new Map());

    const distanceThreshold = 80;
    const maxItems = 7;

    useEffect(() => {
        const handleMouseMove = (e) => {
            const currentPos = { x: e.clientX, y: e.clientY };

            // Distance calculation
            const dx = currentPos.x - lastPosition.current.x;
            const dy = currentPos.y - lastPosition.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If we've moved enough
            if (distance > distanceThreshold) {
                lastPosition.current = currentPos;
                const newId = Date.now() + Math.random();

                const item = items[activeIndex.current % items.length];
                activeIndex.current += 1;

                const rotation = Math.random() * 30 - 15; // -15 to +15

                const newItem = {
                    id: newId,
                    x: currentPos.x,
                    y: currentPos.y,
                    item,
                    rotation
                };

                setTrail((prev) => {
                    const next = [...prev, newItem];
                    if (next.length > maxItems) {
                        return next.slice(next.length - maxItems);
                    }
                    return next;
                });

                // Remove after some time
                const timeout = setTimeout(() => {
                    setTrail((prev) => prev.filter((t) => t.id !== newId));
                    timeoutsRef.current.delete(newId);
                }, 800); // Life span of the image

                timeoutsRef.current.set(newId, timeout);
            }
        };

        const targetElement = containerRef?.current || window;
        targetElement.addEventListener('mousemove', handleMouseMove);
        return () => {
            targetElement.removeEventListener('mousemove', handleMouseMove);
            // Cleanup timeouts
            timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
        };
    }, [items, containerRef]);

    return (
        <div className="image-trail-container">
            <AnimatePresence>
                {trail.map((t, i) => (
                    <motion.div
                        key={t.id}
                        className="image-trail-item squircle"
                        initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%', rotate: t.rotation }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%', rotate: t.rotation }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        style={{
                            left: t.x,
                            top: t.y,
                            zIndex: 10 + i
                        }}
                    >
                        <img src={t.item} alt="trail element" />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ImageTrail;
