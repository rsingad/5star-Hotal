import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

/**
 * WeddingGardenSection Component
 * A refactored and improved component for the Wedding Garden section,
 * now using CSS root variables for a clean and maintainable codebase.
 * It includes subtle animations for a modern user experience.
 */
function WeddingGardenSection() {
  return (
    // Section container with a subtle gradient background and a calming overflow hidden
    <section id="wedding" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Custom keyframes and CSS variables for a unique theme */}
      <style>
        {`
        /* --- CSS Root Variables for Theming --- */
        

        /* --- Animation for fade-in effect --- */
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideInUp 1s ease-out forwards;
        }
        .animate-slide-up-delay-1 {
          animation: slideInUp 1s ease-out 0.3s forwards;
        }
        .animate-slide-up-delay-2 {
          animation: slideInUp 1s ease-out 0.6s forwards;
        }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Main title for the section with animation */}
        <h2 
          className="text-4xl sm:text-5xl font-serif font-extrabold mb-12 opacity-0 animate-slide-up"
          style={{ color: 'var(--WeddingGardenSection-primary-color)' }}
        >
          Our Wedding Garden: The Venue for Your Dream Wedding
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content Section - Wedding Details with animation */}
          <div className="text-left order-2 md:order-1 opacity-0 animate-slide-up-delay-1">
            <h3 
              className="text-3xl sm:text-4xl font-serif font-bold mb-5"
              style={{ color: 'var(--WeddingGardenSection-primary-color)' }}
            >
              Exchange Vows in a Magical Setting
            </h3>
            <p 
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'var(--WeddingGardenSection-secondary-color)' }}
            >
              Welcome to our enchanting **Wedding Garden**, where every corner is filled with romance and beauty. Amidst lush green lawns, blooming flowers, and stunning architecture, your special day will become an unforgettable story. This venue is designed to provide you and your guests with a truly magical and memorable experience.
            </p>

            {/* Content Section - Event Planning */}
            <h3 
              className="text-3xl sm:text-4xl font-serif font-bold mb-5 mt-8"
              style={{ color: 'var(--WeddingGardenSection-primary-color)' }}
            >
              Expert Planning and Services
            </h3>
            <p 
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'var(--WeddingGardenSection-secondary-color)' }}
            >
              Our expert event planning team ensures that every aspect of your wedding is taken care of. From custom decor to exquisite catering, we handle every detail, both big and small, so you can simply relax and cherish your most beautiful moments.
            </p>

            {/* Call to Action Button */}
            <div className="text-center md:text-left">
              <Link
                smooth
                to="/ParadiseWeddingGarden"
                className="inline-block px-10 py-4 rounded-full font-semibold text-xl shadow-lg transform transition duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--WeddingGardenSection-accent-color)',
                  color: 'white',
                }}
              >
                Explore Our Wedding Venue
              </Link>
            </div>
          </div>
          
          {/* Image Section with animation */}
          <div className="order-1 md:order-2 opacity-0 animate-slide-up-delay-2">
            <img
              src="https://images.pexels.com/photos/33239568/pexels-photo-33239568.jpeg"
              alt="Beautiful outdoor wedding garden venue"
              className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-96 md:max-h-[500px] transform hover:scale-102 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingGardenSection;
