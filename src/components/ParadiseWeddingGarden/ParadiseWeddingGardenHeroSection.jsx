import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function ParadiseWeddingGardenHeroSection() {
  // Image data for the hero section (using images for now, can be videos later)
  const imageData = [
    {
      src: "https://images.pexels.com/photos/1640822/pexels-photo-1640822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Elegant outdoor wedding setup
      heading: 'Paradise Wedding Garden: Your Dream Begins Here',
      subheading: 'An enchanting outdoor venue for unforgettable celebrations of love.',
      buttonText: 'Plan Your Dream Wedding',
      buttonLink: '/ParadiseWeddingGarden#contact',
    },
    {
      src: "https://images.pexels.com/photos/1054366/pexels-photo-1054366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Wedding ceremony setup
      heading: 'Celebrate Love Under the Open Sky',
      subheading: 'Bespoke settings tailored to your unique love story.',
      buttonText: 'View Our Spaces',
      buttonLink: '/ParadiseWeddingGarden#gallery',
    },
    {
      src: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Wedding reception setup
      heading: 'Moments to Cherish, Forever',
      subheading: 'From intimate ceremonies to grand receptions, we create magic.',
      buttonText: 'Inquire Now',
      buttonLink: '/ParadiseWeddingGarden#contact',
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

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Standard overlay */}

      {/* Content (text and button) */}
      <div className="relative z-20 text-white p-8 rounded-lg max-w-5xl mx-auto">
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

export default ParadiseWeddingGardenHeroSection;
