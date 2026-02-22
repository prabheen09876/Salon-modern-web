import React from 'react';
import { motion } from 'framer-motion';
import './Experts.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
};

const Experts = () => {
    const experts = [
        { name: 'Elena Rostova', role: 'Master Stylist', img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80' },
        { name: 'Marcus Jin', role: 'Color Specialist', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
        { name: 'Sarah Jenkins', role: 'Esthetician', img: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=400&q=80' },
    ];

    return (
        <section className="experts" id="experts">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVariants}
                >
                    Meet Our Experts
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVariants}
                >
                    Dedicated professionals at your service
                </motion.p>

                <motion.div
                    className="experts-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {experts.map((expert, idx) => (
                        <motion.div
                            className="expert-card"
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                        >
                            <div className="expert-img-wrapper magnetic-area">
                                <img src={expert.img} alt={expert.name} className="expert-img" />
                            </div>
                            <h3 className="expert-name">{expert.name}</h3>
                            <p className="expert-role">{expert.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experts;
