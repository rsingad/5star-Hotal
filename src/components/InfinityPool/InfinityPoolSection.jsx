import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling

/**
 * InfinityPoolSection Component
 * Displays a section dedicated to the hotel's infinity pool,
 * with a responsive two-column layout and improved user-friendly styling.
 * Uses CSS variables for flexible theming.
 */
function InfinityPoolSection() {
  return (
    <section
      id="infinity-pool"
      className="py-16 md:py-20 font-sans"
      style={{
        backgroundColor: 'var(--infinitypool-background-color)',
        color: 'var(--infinitypool-tertiary-text-color)'
      }}
    >
     
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Responsive Heading */}
        <h2
          className="text-4xl md:text-5xl font-serif font-extrabold mb-8 md:mb-12"
          style={{ color: 'var(--infinitypool-primary-text-color)' }}
        >
          Dive into Bliss: The 360° Infinity Pool
        </h2>
        {/* Responsive Subtitle/Paragraph */}
        <p
          className="text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto"
          style={{ color: 'var(--infinitypool-tertiary-text-color)' }}
        >
          Experience the ultimate fusion of luxury and tranquility at our breathtaking 360° Infinity Pool. Perched high above, it offers an unparalleled swimming experience where the sky meets the water.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg"
              alt="360 Degree Infinity Pool"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-80 md:max-h-[500px] border-4 transition-transform duration-500 transform hover:scale-105"
              style={{
                borderColor: 'var(--infinitypool-image-border-color)'
              }}
            />
          </div>

          {/* Text Content - Aligns to left on larger screens */}
          <div className="text-center md:text-left">
            <h3
              className="text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-5"
              style={{ color: 'var(--infinitypool-primary-text-color)' }}
            >
              Swim with a View, Unwind in Style
            </h3>
            <p
              className="text-base md:text-lg leading-relaxed mb-4 md:mb-6"
              style={{ color: 'var(--infinitypool-tertiary-text-color)' }}
            >
              Our iconic 360° Infinity Pool is designed to offer a truly immersive experience. As you take a refreshing dip, you'll be treated to panoramic, overlooking cityscapes, making it the perfect spot to unwind, soak up the sun, or enjoy a serene evening swim under the stars.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mb-4 md:mb-6"
              style={{ color: 'var(--infinitypool-tertiary-text-color)' }}
            >
              The seamless edge creates an illusion of water extending into the horizon, providing a sense of boundless serenity. Comfortable sun loungers and attentive poolside service ensure your every need is met, allowing you to simply relax and revel in the moment.
            </p>
            <div className="text-center md:text-left mt-6 md:mt-8">
              {/* Responsive and touch-friendly button */}
              <Link
                smooth
                to="/InfinityPool"
                className="inline-block px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg text-sm md:text-xl transform hover:scale-105"
                style={{
                  backgroundColor: 'var(--infinitypool-button-bg-color)',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--infinitypool-button-hover-color)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--infinitypool-button-bg-color)'}
              >
                Discover Your 360° Infinity Pool Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfinityPoolSection;
