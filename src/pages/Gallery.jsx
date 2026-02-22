import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import './Gallery.css';

const Gallery = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const images = [
        'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'
    ];

    // Create different parallax speeds for columns
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="gallery-header">
                <motion.h1
                    className="gallery-title"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Parallax Portfolio
                </motion.h1>
                <motion.p
                    className="gallery-subtitle"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    A curated collection of our finest work, blending art and precision.
                </motion.p>
            </div>

            <section className="gallery-container" ref={containerRef}>
                <div className="gallery-column">
                    <motion.div style={{ y: y1 }} className="parallax-group">
                        <div className="gallery-item squircle magnetic-area"><img src={images[0]} alt="Gallery 1" /></div>
                        <div className="gallery-item squircle magnetic-area"><img src={images[3]} alt="Gallery 4" /></div>
                        <div className="gallery-item squircle magnetic-area"><img src={images[6]} alt="Gallery 7" /></div>
                    </motion.div>
                </div>

                <div className="gallery-column">
                    <motion.div style={{ y: y2 }} className="parallax-group middle-column">
                        <div className="gallery-item squircle magnetic-area"><img src={images[1]} alt="Gallery 2" /></div>
                        <div className="gallery-item squircle magnetic-area"><img src={images[4]} alt="Gallery 5" /></div>
                        <div className="gallery-item squircle magnetic-area"><img src={images[7]} alt="Gallery 8" /></div>
                    </motion.div>
                </div>

                <div className="gallery-column">
                    <motion.div style={{ y: y3 }} className="parallax-group">
                        <div className="gallery-item squircle magnetic-area"><img src={images[2]} alt="Gallery 3" /></div>
                        <div className="gallery-item squircle magnetic-area"><img src={images[5]} alt="Gallery 6" /></div>
                        <div className="gallery-item squircle magnetic-area"><img src={images[8]} alt="Gallery 9" /></div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </motion.div>
    );
};

export default Gallery;
