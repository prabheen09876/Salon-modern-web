import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import InteractiveServices from '../components/InteractiveServices';
import Experts from '../components/Experts';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <InteractiveServices />
            <Services />
            <Experts />
            <Footer />
        </motion.main>
    );
};

export default Home;
