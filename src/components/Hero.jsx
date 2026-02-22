import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ImageTrail from './ImageTrail';
import './Hero.css';

const trailImages = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80', // haircut
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80', // salon interior
  'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&w=400&q=80', // hair tools
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80', // face
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', // beauty
  'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=400&q=80'  // aesthetic person
];

const Hero = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleBookingClick = () => {
    navigate('/booking');
  };

  return (
    <section className="hero" ref={containerRef}>
      <ImageTrail items={trailImages} containerRef={containerRef} />
      <motion.div
        className="hero-background"
        style={{ y: backgroundY }}
      />
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        style={{ y: textY, opacity }}
      >
        <motion.h1
          className="hero-title"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          Radiance & Elegance
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
        >
          Discover the ultimate premium salon experience tailored for your unique beauty.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
        >
          <motion.button
            className="btn-primary magnetic"
            onClick={handleBookingClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
