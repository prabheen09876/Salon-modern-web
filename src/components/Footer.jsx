import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2>Sculpting Elegance</h2>
                    <p>A premium sanctuary</p>
                </div>
                <div className="footer-links">
                    <Link to="/" className="magnetic">Home</Link>
                    <Link to="/about" className="magnetic">About</Link>
                    <Link to="/booking" className="magnetic">Book Now</Link>
                </div>
                <div className="footer-contact">
                    <p>123 Elegance Blvd, NY 10001</p>
                    <p>+1 (555) 123-4567</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Radiance Salon. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
