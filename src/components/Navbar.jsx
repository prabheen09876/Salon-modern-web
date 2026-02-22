import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 50 },
        open: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.3 + (i * 0.1), duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        })
    };

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Booking', path: '/booking' },
    ];

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <NavLink to="/" className="nav-logo magnetic">
                        <span style={{ fontWeight: 700, letterSpacing: '-2px' }}>Sculpting</span> Elegance
                    </NavLink>
                    <button className="nav-toggle magnetic" onClick={toggleMenu}>
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fullscreen-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="menu-container">
                            <button className="menu-close magnetic" onClick={toggleMenu}>
                                <X size={36} />
                            </button>
                            <nav className="menu-links">
                                {links.map((link, i) => (
                                    <motion.div key={link.name} custom={i} variants={linkVariants}>
                                        <NavLink
                                            to={link.path}
                                            className="menu-link magnetic"
                                            onClick={toggleMenu}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
