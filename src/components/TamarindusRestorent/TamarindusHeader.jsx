import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling to sections

// Inline SVG for Hamburger Menu Icon
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

// Inline SVG for Close (X) Icon
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

function TamarindusHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#001F3F] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Combined Logo and Restaurant Title */}
        <div className="flex items-center">
          {/* Main Hotel Logo - Links to the main hotel homepage */}
          {/* IMPORTANT: Replace this placeholder with your actual main hotel logo path */}
          <Link to="/" className="mr-4">
            <img src="https://placehold.co/100x40/FFD700/001F3F?text=Taj+Logo" alt="The Taj Paradise Logo" className="h-12 w-auto object-contain" />
          </Link>
          {/* Restaurant Name */}
          <div className="text-3xl font-bold tracking-wide text-[#FFD700] font-serif">
            Tamarindus
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center"> {/* Added items-center for vertical alignment */}
          <ul className="flex space-x-8"> {/* Changed to ul with flex and space-x */}
            <li><Link smooth to="/TamarindusRestaurant#home" className="hover:text-[#FFD700] transition duration-300 text-lg">Home</Link></li>
            <li><Link smooth to="/TamarindusRestaurant#about" className="hover:text-[#FFD700] transition duration-300 text-lg">About</Link></li>
            <li><Link smooth to="/TamarindusRestaurant#menu" className="hover:text-[#FFD700] transition duration-300 text-lg">Menu</Link></li>
            <li><Link smooth to="/TamarindusRestaurant#gallery" className="hover:text-[#FFD700] transition duration-300 text-lg">Gallery</Link></li>
            <li><Link smooth to="/TamarindusRestaurant#contact" className="hover:text-[#FFD700] transition duration-300 text-lg">Reservations</Link></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block ml-4">
          <Link
            smooth to="/TamarindusRestaurant#contact"
            className="bg-[#FFD700] text-[#001F3F] px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 text-lg shadow-lg"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <CloseIcon size={32} className="text-[#FFD700]" /> : <MenuIcon size={32} className="text-[#FFD700]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#001F3F] px-6 py-4 border-t border-gray-700"> {/* Removed space-y-4 from here, will apply to ul */}
          <ul className="space-y-4"> {/* Changed to ul with space-y */}
            <li><Link smooth to="/TamarindusRestaurant#home" className="block hover:text-[#FFD700] text-white text-lg py-2" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link smooth to="/TamarindusRestaurant#about" className="block hover:text-[#FFD700] text-white text-lg py-2" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link smooth to="/TamarindusRestaurant#menu" className="block hover:text-[#FFD700] text-white text-lg py-2" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><Link smooth to="/TamarindusRestaurant#gallery" className="block hover:text-[#FFD700] text-white text-lg py-2" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link smooth to="/TamarindusRestaurant#contact" className="block hover:text-[#FFD700] text-white text-lg py-2" onClick={() => setIsOpen(false)}>Reservations</Link></li>
            <li>
              <Link
                smooth to="/TamarindusRestaurant#contact"
                className="inline-block bg-[#FFD700] text-[#001F3F] px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 text-lg mt-4 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Book a Table
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default TamarindusHeader;
