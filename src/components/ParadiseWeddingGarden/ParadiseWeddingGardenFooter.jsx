import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function ParadiseWeddingGardenFooter() {
  return (
    <footer className="bg-[#1A2C42] text-white py-16"> {/* Deep primary blue background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-3 gap-12 mb-12 items-start">
          {/* About Section */}
          <div className="text-left md:text-center">
            <h3 className="text-3xl font-serif font-bold text-[#DAA520] mb-5">Paradise Wedding Garden</h3> {/* Gold heading */}
            <p className="leading-relaxed text-lg text-gray-300">
              An enchanting outdoor venue where your dream wedding blossoms into reality.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold text-[#DAA520] mb-5">Quick Links</h3> {/* Gold heading */}
            <ul className="space-y-3 text-gray-300">
              <li><Link smooth to="/ParadiseWeddingGarden#home" className="hover:text-[#FFD700] transition duration-300 text-lg">Home</Link></li>
              <li><Link smooth to="/ParadiseWeddingGarden#about" className="hover:text-[#FFD700] transition duration-300 text-lg">About</Link></li>
              <li><Link smooth to="/ParadiseWeddingGarden#gallery" className="hover:text-[#FFD700] transition duration-300 text-lg">Gallery</Link></li>
              <li><Link smooth to="/ParadiseWeddingGarden#contact" className="hover:text-[#FFD700] transition duration-300 text-lg">Inquire</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold text-[#DAA520] mb-5">Contact & Location</h3> {/* Gold heading */}
            <p className="mb-3 text-lg text-gray-300">The Paradise Hotel, Udaipur</p>
            <p className="mb-3 text-lg text-gray-300">+91 7597 93 9090</p>
            <p className="text-lg text-gray-300">weddings@theparadise.com</p>
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
          <p>&copy; {new Date().getFullYear()} Paradise Wedding Garden. All rights reserved.</p>
          <p className="mt-2">A dream venue by The Paradise Group.</p>
        </div>
      </div>
    </footer>
  );
}

export default ParadiseWeddingGardenFooter;
