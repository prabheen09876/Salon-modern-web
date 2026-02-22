import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
};

const Services = () => {
    const navigate = useNavigate();

    return (
        <section className="services" id="services">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVariants}
                >
                    Our Services
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVariants}
                >
                    Experience our signature treatments
                </motion.p>

                <div className="bento-grid">
                    <motion.div
                        className="bento-item squircle item-large magnetic-area"
                        style={{ background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={itemVariants}
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="bento-content">
                            <h3>Hair Styling & Cut</h3>
                            <p>Expert styling tailored to highlight your best features with precision and care.</p>
                            <button className="btn-primary" onClick={() => navigate('/booking')}>Book Session</button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bento-item squircle magnetic-area"
                        style={{ background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={itemVariants}
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="bento-content">
                            <h3>Coloring</h3>
                            <p>Vibrant, lasting colors using premium products.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bento-item squircle magnetic-area"
                        style={{ background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={itemVariants}
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="bento-content">
                            <h3>Wellness</h3>
                            <p>Relax and rejuvenate physically and mentally.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
