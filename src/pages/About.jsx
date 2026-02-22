import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import './About.css';

// Reusable character reading reveal
const Char = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);
    // Optional: Add a subtle y-axis translation for a cooler effect
    const y = useTransform(progress, range, [5, 0]);
    return (
        <motion.span style={{ opacity, y, display: "inline-block" }}>
            {children}
        </motion.span>
    );
};

const Word = ({ word, progress, range }) => {
    const characters = word.split("");
    const amount = range[1] - range[0];
    const step = amount / word.length;

    return (
        <span style={{ display: "inline-block", marginRight: "0.25em" }}>
            {characters.map((char, i) => {
                const start = range[0] + (i * step);
                const end = range[0] + ((i + 1) * step);
                return (
                    <Char key={i} progress={progress} range={[start, end]}>
                        {char}
                    </Char>
                );
            })}
        </span>
    );
};

const RevealText = ({ text }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 80%", "start 25%"] // Tighter offset for more dramatic reveal
    });

    const words = text.split(" ");

    return (
        <span ref={container} className="reveal-text-container" style={{ display: "flex", flexWrap: "wrap" }}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
            })}
        </span>
    );
};

// Marquee Component
const Marquee = ({ text, direction = "left", speed = 20 }) => {
    return (
        <div className="marquee-container">
            <motion.div
                className="marquee-track"
                animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
                <h2>{text} &nbsp; {text} &nbsp; {text} &nbsp; {text}</h2>
            </motion.div>
        </div>
    );
};

// Hover Interaction Component
const HoverItem = ({ title, imgUrl, subtitle }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="hover-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3>{title}</h3>
            <span className="hover-subtitle">{subtitle}</span>
            <motion.img
                src={imgUrl}
                className="hover-reveal-img"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                    rotate: isHovered ? 5 : -10
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
        </div>
    );
};

const About = () => {
    const heroRef = useRef(null);
    const videoRef = useRef(null);

    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const { scrollYProgress: videoScroll } = useScroll({
        target: videoRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
    const scale = useTransform(heroScroll, [0, 1], [1, 0.9]);

    // Video scaling effect on scroll
    const videoScale = useTransform(videoScroll, [0, 0.5, 1], [0.8, 1, 0.8]);
    const videoRadius = useTransform(videoScroll, [0, 0.5, 1], ["40px", "0px", "40px"]);

    return (
        <main className="vision-page">
            {/* Massive Hero Section */}
            <section className="vision-hero" ref={heroRef}>
                <motion.div
                    className="vision-hero-inner"
                    style={{ y, scale }}
                >
                    <motion.h1
                        className="vision-huge-text"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    >
                        SCULPTING <br />
                        <span className="indent">ELEGANCE</span>
                    </motion.h1>
                </motion.div>
            </section>

            {/* NEW: Multi-Marquee Section */}
            <section className="marquee-wrapper">
                <Marquee text="ARTISTRY • PRECISION • ELEGANCE • INNOVATION" direction="left" speed={30} />
                <Marquee text="LUXURY • MASTERY • BEAUTY • TRANSFORMATION" direction="right" speed={25} />
            </section>

            {/* Sticky Scrolling Section */}
            <section className="vision-scroll-section">
                <div className="vision-sticky-container">
                    {/* Left Sticky Header */}
                    <div className="vision-left-col">
                        <div className="vision-sticky-header">
                            <h2>LA VISION <br /> AU COEUR</h2>
                            <p className="vision-meta">THE ESSENCE OF OUR EXPERTISE.</p>
                        </div>
                    </div>

                    {/* Right Scrolling Content */}
                    <div className="vision-right-col">
                        <div className="vision-prose">
                            <RevealText text="Founded with a singular vision: to craft luxury experiences that transcend the ordinary. Every cut, color, and treatment is an orchestration of art and precision, designed to reveal your ultimate self." />
                        </div>
                        <div className="vision-prose">
                            <RevealText text="We reject the mundane. Our sanctuary is built on the philosophy that beauty is not just applied—it is meticulously sculpted. Our master artisans are perpetually pushing the boundaries of aesthetics." />
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Full Screen Video Section with Scroll Animation */}
            <section className="vision-video-wrapper" ref={videoRef}>
                <motion.div
                    className="vision-video-container"
                    style={{ scale: videoScale, borderRadius: videoRadius }}
                >
                    <video autoPlay muted loop playsInline className="vision-video">
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-hairdresser-cutting-hair-with-scissors-and-comb-41716-large.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            </section>

            {/* NEW: Random Cool Hover Interaction Section */}
            <section className="hover-interaction-section">
                <h4 className="hover-interaction-title">Our Core Pillars</h4>
                <HoverItem
                    title="CRAFT"
                    subtitle="Meticulous Details"
                    imgUrl="/images/craft_pillar.png"
                />
                <HoverItem
                    title="AURA"
                    subtitle="Inner Radiance"
                    imgUrl="/images/aura_pillar.png"
                />
                <HoverItem
                    title="FORM"
                    subtitle="Structural Elegance"
                    imgUrl="/images/form_pillar.png"
                />
            </section>

            {/* Massive Parallax Image Footer Break */}
            <section className="vision-image-break">
                <img
                    src="/images/vision_parallax.png"
                    alt="Salon Aesthetic"
                    className="vision-parallax-img"
                />
            </section>

            <Footer />
        </main>
    );
};

export default About;
