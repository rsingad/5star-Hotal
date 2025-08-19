import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling to sections
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social media icons

function TamarindusFooter() {
  return (
    <footer className="bg-[#0A2E50] text-white py-16"> {/* Deeper blue background, increased padding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center"> {/* Consistent padding */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 items-start"> {/* Increased gap, aligned items to start */}
          {/* About Section */}
          <div className="text-left md:text-center"> {/* Center text on medium screens and up */}
            <h3 className="text-3xl font-serif font-bold text-[#DAA520] mb-5">Tamarindus</h3> {/* Gold heading, larger font */}
            <p className="text-gray-300 leading-relaxed text-lg"> {/* Larger text, better readability */}
              An exquisite culinary destination at The Taj Paradise, where every dish is a masterpiece and every visit an unforgettable experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-left md:text-center"> {/* Center text on medium screens and up */}
            <h3 className="text-2xl font-semibold text-[#DAA520] mb-5">Quick Links</h3> {/* Gold heading, larger font */}
            <ul className="space-y-3 text-gray-300"> {/* Increased space between links */}
              <li><Link smooth to="#home" className="hover:text-[#FFD700] transition duration-300 text-lg">Home</Link></li> {/* Larger text */}
              <li><Link smooth to="#menu" className="hover:text-[#FFD700] transition duration-300 text-lg">Menu</Link></li>
              <li><Link smooth to="#gallery" className="hover:text-[#FFD700] transition duration-300 text-lg">Gallery</Link></li>
              <li><Link smooth to="#contact" className="hover:text-[#FFD700] transition duration-300 text-lg">Reservations</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-left md:text-center"> {/* Center text on medium screens and up */}
            <h3 className="text-2xl font-semibold text-[#DAA520] mb-5">Contact Info</h3> {/* Gold heading, larger font */}
            <p className="text-gray-300 mb-3 text-lg">Ground Floor, The Paradise Hotel</p> {/* Larger text, increased margin */}
            <p className="text-gray-300 mb-3 text-lg">+91 7597 93 9090</p>
            <p className="text-gray-300 text-lg">reservations@tamarindus.com</p>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-center space-x-6 mt-8"> {/* Centered on mobile, then on md */}
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
        <div className="border-t border-gray-700 pt-8 text-gray-400 text-base"> {/* Softer gray for copyright, smaller font */}
          <p>&copy; {new Date().getFullYear()} Tamarindus. All rights reserved.</p>
          <p className="mt-2">Designed with passion by The Paradise Group.</p> {/* Added a subtle design credit */}
        </div>
      </div>
    </footer>
  );
}

export default TamarindusFooter;
