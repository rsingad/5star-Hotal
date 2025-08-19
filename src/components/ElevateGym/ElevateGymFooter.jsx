import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function ElevateGymFooter() {
  return (
    <footer className="bg-[#1A2C42] text-white py-16"> {/* Deep primary blue background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-3 gap-12 mb-12 items-start">
          {/* About Section */}
          <div className="text-left md:text-center">
            <h3 className="text-3xl font-serif font-bold text-[#DAA520] mb-5">Elevate Gym</h3> {/* Gold heading */}
            <p className="leading-relaxed text-lg text-gray-300">
              Your premier fitness destination, equipped with state-of-the-art facilities to help you achieve your wellness goals.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold text-[#DAA520] mb-5">Quick Links</h3> {/* Gold heading */}
            <ul className="space-y-3 text-gray-300">
              <li><Link smooth to="/ElevateGym#home" className="hover:text-[#FFD700] transition duration-300 text-lg">Home</Link></li>
              <li><Link smooth to="/ElevateGym#about" className="hover:text-[#FFD700] transition duration-300 text-lg">About</Link></li>
              <li><Link smooth to="/ElevateGym#gallery" className="hover:text-[#FFD700] transition duration-300 text-lg">Gallery</Link></li>
              <li><Link smooth to="/ElevateGym#contact" className="hover:text-[#FFD700] transition duration-300 text-lg">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold text-[#DAA520] mb-5">Connect With Us</h3> {/* Gold heading */}
            <p className="mb-3 text-lg text-gray-300">The Paradise Hotel, Udaipur</p>
            <p className="mb-3 text-lg text-gray-300">+91 7597 93 9090</p>
            <p className="text-lg text-gray-300">gym@theparadise.com</p>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-center space-x-6 mt-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-gray-400 text-base">
          <p>&copy; {new Date().getFullYear()} Elevate Gym. All rights reserved.</p>
          <p className="mt-2">A fitness initiative by The Paradise Group.</p>
        </div>
      </div>
    </footer>
  );
}

export default ElevateGymFooter;
