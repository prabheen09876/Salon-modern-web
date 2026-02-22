import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InteractiveServices.css';

const servicesList = [
    { id: '001', name: 'Premium Haircut', category: 'Precision', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80' },
    { id: '002', name: 'Keratin Filler Lift', category: 'Treatment', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80' },
    { id: '003', name: 'Color & Highlights', category: 'Transformation', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80' },
    { id: '004', name: 'Balayage Special', category: 'Artistry', img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80' },
    { id: '005', name: 'Brow & Face Threading', category: 'Detailing', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80' },
    { id: '006', name: 'Manicure & Pedicure', category: 'Grooming', img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=800&q=80' },
    { id: '007', name: 'Spa Facial', category: 'Relaxation', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80' },
];

const InteractiveServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Preload all images on component mount so hover transitions are instant
    useEffect(() => {
        servicesList.forEach((service) => {
            const img = new Image();
            img.src = service.img;
        });
    }, []);

    return (
        <section className="interactive-services" id="menu">
            <div className="is-container">

                <div className="is-image-section squircle">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeIndex}
                            src={servicesList[activeIndex].img}
                            alt={servicesList[activeIndex].name}
                            initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                            className="is-image"
                        />
                    </AnimatePresence>
                </div>

                <div className="is-list-section">
                    {servicesList.map((service, index) => (
                        <div
                            key={service.id}
                            className={`is-list-item magnetic-area ${activeIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span className="is-id">{service.id}</span>
                            <h3 className="is-name">{service.name}</h3>
                            <span className="is-category">{service.category} ↗</span>

                            <motion.div
                                className="is-progress-line"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default InteractiveServices;
