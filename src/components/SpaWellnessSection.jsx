import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

/**
 * SpaWellnessSection Component
 * An advanced, modern, and highly responsive component for the Spa & Wellness section.
 * This version uses CSS root variables prefixed with "SpaWellnessSection-"
 * for better organization and to avoid naming conflicts.
 */
function SpaWellnessSection() {
  return (
    // Main section with a calming light blue background
    <section id="spa" className="py-20 md:py-32 font-sans overflow-hidden" style={{ backgroundColor: 'var(--SpaWellnessSection-bg-color-light)' }}>
      {/* Custom keyframes and CSS variables for a unique theme */}
      <style>
        {`
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

        /* --- Hover effects for image --- */
        .group:hover .group-image {
          transform: scale(1.05);
          box-shadow: 0 20px 40px var(--SpaWellnessSection-shadow-color);
        }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 opacity-0 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-tight" style={{ color: 'var(--SpaWellnessSection-primary-text-color)' }}>
            Rejuvenate Your Senses
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4" style={{ color: 'var(--SpaWellnessSection-secondary-text-color)' }}>
            Discover a sanctuary of wellness where mind, body, and spirit are in perfect harmony.
          </p>
        </div>

        {/* Dynamic layout for desktop and mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Content Section - Left on desktop, top on mobile */}
          <div className="order-2 lg:order-1 opacity-0 animate-slide-up-delay-1">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4" style={{ color: 'var(--SpaWellnessSection-primary-text-color)' }}>
              Blissful Spa Experiences
            </h3>
            <p className="text-base lg:text-lg leading-relaxed mb-6" style={{ color: 'var(--SpaWellnessSection-secondary-text-color)' }}>
              Step into **Bliss Spa**, a haven of serenity. Our expert therapists are dedicated to providing a personalized journey of relaxation, offering everything from soothing **aromatherapy massages** to invigorating **facial treatments**. Let our unique treatments restore your inner balance.
            </p>

            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4 mt-10" style={{ color: 'var(--SpaWellnessSection-primary-text-color)' }}>
              Modern Fitness Center
            </h3>
            <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: 'var(--SpaWellnessSection-secondary-text-color)' }}>
              Maintain your routine at our **state-of-the-art fitness center**. With a full range of **cardio and strength equipment**, our gym provides an inspiring space to energize your body. We also offer **yoga and personal training sessions** for a truly tailored experience.
            </p>

            {/* Call to Action Button */}
            <div className="mt-8">
              <Link
                smooth
                to="/BlissSpa"
                className="inline-block px-10 py-4 rounded-full font-semibold text-lg shadow-xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: 'var(--SpaWellnessSection-accent-color)' }}
                aria-label="Discover Your Wellness Journey"
              >
                view Bliss spa
              </Link>
            </div>
          </div>

          {/* Image Section - Right on desktop, bottom on mobile */}
          <div className="order-1 lg:order-2 group opacity-0 animate-slide-up-delay-2">
            <img
              src="https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Luxurious Spa Interior with a relaxing ambiance"
              className="group-image rounded-2xl shadow-xl w-full h-auto object-cover max-h-[500px] lg:max-h-[650px] transition-all duration-500 transform"
              style={{ minHeight: '300px' }} // Ensures a minimum height on smaller screens
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaWellnessSection;
