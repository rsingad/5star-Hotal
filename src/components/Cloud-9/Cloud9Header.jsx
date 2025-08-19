import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// Inline SVG component for the hamburger menu icon.
const MenuIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Inline SVG component for the close (X) icon.
const CloseIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

function Cloud9Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Scrolled threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = (
    <>
      <li><Link smooth to="/#home" className="text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium">Home</Link></li>
      <li><Link smooth to="/#features" className="text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium">Features</Link></li>
      <li><Link smooth to="/#pricing" className="text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium">Pricing</Link></li>
      <li><Link smooth to="/#about" className="text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium">About Us</Link></li>
      <li><Link smooth to="/#contact" className="text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium">Contact</Link></li>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ease-in-out
      ${scrolled ? 'bg-blue-800 bg-opacity-90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link to="/#home" className="flex items-center text-white text-3xl font-extrabold tracking-tight">
          <span className="text-blue-200 mr-2">☁️</span> Cloud 9
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks}
          </ul>
          <Link
            to="/#get-started"
            className="ml-6 bg-white text-blue-800 px-6 py-2 rounded-full font-semibold text-lg
                       hover:bg-blue-100 hover:shadow-xl transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <CloseIcon size={30} className="text-white" /> : <MenuIcon size={30} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-blue-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white" aria-label="Close menu">
            <CloseIcon size={36} />
          </button>
          <ul className="flex flex-col space-y-6 text-2xl">
            {navLinks}
            <li>
              <Link
                to="/#get-started"
                className="block bg-white text-blue-800 px-8 py-3 rounded-full font-semibold
                           hover:bg-blue-100 transition duration-300 ease-in-out mt-8"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Cloud9Header;
