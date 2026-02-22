import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import './PageStyles.css';

const Booking = () => {
    return (
        <motion.main
            className="page-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <section className="page-header">
                <h1 className="page-title">Book Appointment</h1>
                <p className="page-subtitle">Reserve your luxury experience.</p>
            </section>

            <section className="page-content container booking-section">
                <form className="booking-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Jane Doe" className="magnetic-input" />
                    </div>
                    <div className="form-group">
                        <label>Service</label>
                        <select className="magnetic-input">
                            <option>Hair Styling</option>
                            <option>Coloring</option>
                            <option>Spa Treatment</option>
                            <option>Bridal Package</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Preferred Date</label>
                        <input type="date" className="magnetic-input" />
                    </div>
                    <button type="button" className="btn-primary magnetic-btn">Confirm Booking</button>
                </form>
            </section>
            <Footer />
        </motion.main>
    );
};

export default Booking;
