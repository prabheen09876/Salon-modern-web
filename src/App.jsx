import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import './App.css';
import 'lenis/dist/lenis.css';

function App() {
  return (
    <ReactLenis root>
      <Router>
        <div className="app">
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
