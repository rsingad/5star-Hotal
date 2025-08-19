import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Cloud9Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16"> {/* Darker blue background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-3 gap-12 mb-12 items-start">
          {/* About Section */}
          <div className="text-left md:text-center">
            <h3 className="text-3xl font-extrabold text-blue-200 mb-5">Cloud 9</h3> {/* Lighter blue heading */}
            <p className="leading-relaxed text-lg text-gray-200"> {/* Lighter gray text */}
              Your ultimate destination for elevated coffee experiences and breathtaking panoramic views.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold text-blue-200 mb-5">Quick Links</h3> {/* Lighter blue heading */}
            <ul className="space-y-3 text-gray-200"> {/* Lighter gray text */}
              <li><Link smooth to="/Cloud-9#home" className="hover:text-white transition duration-300 text-lg">Home</Link></li>
              <li><Link smooth to="/Cloud-9#menu" className="hover:text-white transition duration-300 text-lg">Menu</Link></li>
              <li><Link smooth to="/Cloud-9#gallery" className="hover:text-white transition duration-300 text-lg">Gallery</Link></li>
              <li><Link smooth to="/Cloud-9#contact" className="hover:text-white transition duration-300 text-lg">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-left md:text-center">
            <h3 className="text-2xl font-semibold text-blue-200 mb-5">Connect With Us</h3> {/* Lighter blue heading */}
            <p className="mb-3 text-lg text-gray-200">Rooftop, The Paradise Hotel, Udaipur</p>
            <p className="mb-3 text-lg text-gray-200">+91 7597 93 9090</p>
            <p className="text-lg text-gray-200">info@cloud9rooftop.com</p>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-center space-x-6 mt-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-700 pt-8 text-gray-400 text-base"> {/* Blue border, softer gray copyright */}
          <p>&copy; {new Date().getFullYear()} Cloud 9. All rights reserved.</p>
          <p className="mt-2">Crafted with care by The Paradise Group.</p>
        </div>
      </div>
    </footer>
  );
}

export default Cloud9Footer;
