import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-space-dark/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="text-2xl font-display font-bold text-white flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/images/MINDSHIFT_LOGO_MINI-removebg-preview.png" 
              alt="MindshiftX Logo" 
              className="h-10 mr-2"
            />
            <span className="text-glow">MindShift</span>
          </motion.a>
          
          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
            <a href="#products" className="text-white hover:text-purple-400 transition-colors">Products</a>
            <a href="#about-us" className="text-white hover:text-purple-400 transition-colors">About</a>
            <a href="#testimonials" className="text-white hover:text-purple-400 transition-colors">Testimonials</a>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 bg-space-dark/90 backdrop-blur-md rounded-lg p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-white hover:text-purple-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#products" className="text-white hover:text-purple-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
              <a href="#about-us" className="text-white hover:text-purple-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#testimonials" className="text-white hover:text-purple-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;