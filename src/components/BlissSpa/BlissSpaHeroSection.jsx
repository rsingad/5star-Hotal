import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function BlissSpaHeroSection() {
  // Image data for the hero section, focusing on serene spa visuals
  const imageData = [
    {
      src: 'https://images.pexels.com/photos/3865584/pexels-photo-3865584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Spa interior with calming ambiance
      heading: 'Bliss Spa: A Sanctuary for Your Senses',
      subheading: 'Step into a world of tranquility and rejuvenation, where every touch brings harmony.',
      buttonText: 'Explore Our Treatments',
      buttonLink: '/BlissSpa#services',
    },
    {
      src: 'https://images.pexels.com/photos/3770428/pexels-photo-3770428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Massage setting
      heading: 'Unwind. Rejuvenate. Restore.',
      subheading: 'Indulge in expertly curated therapies designed to melt away stress and revitalize your spirit.',
      buttonText: 'Book Your Escape',
      buttonLink: '/BlissSpa#contact',
    },
    {
      src: 'https://images.pexels.com/photos/4040651/pexels-photo-4040651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Relaxing spa elements
      heading: 'Your Journey to Inner Harmony',
      subheading: 'Discover personalized wellness experiences that nurture your mind, body, and soul.',
      buttonText: 'View Our Gallery',
      buttonLink: '/BlissSpa#gallery',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [imageData.length]);

  const currentImage = imageData[currentImageIndex];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <img
        src={currentImage.src}
        alt={currentImage.heading}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out"
        key={currentImage.src} // Key to force re-render and transition
      />

      {/* Overlay for text readability (over the image) */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Softer overlay for spa */}

      {/* Content (text and button) */}
      <div className="relative z-20 text-white p-8 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-4 text-[#FFD700] leading-tight drop-shadow-lg"> {/* Gold heading for luxury */}
          {currentImage.heading}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow">
          {currentImage.subheading}
        </p>
        <Link
          smooth to={currentImage.buttonLink}
          className="bg-[#FFD700] text-[#1A2C42] px-10 py-4 rounded-full font-semibold text-xl hover:bg-[#B8860B] transition duration-300 shadow-xl transform hover:scale-105"
        >
          {currentImage.buttonText}
        </Link>
      </div>
    </section>
  );
}

export default BlissSpaHeroSection;
