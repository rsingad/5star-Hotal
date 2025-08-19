import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function JazzBanquetHallHeroSection() {
  // Video data for the hero section
  const videoData = [
    {
      src: 'https://videos.pexels.com/video-files/4207174/4207174-hd_1920_1080_25fps.mp4', // Example: Elegant event setup
      heading: 'Jazz Banquet Hall: Grandeur for Your Celebrations',
      subheading: 'Where every event transforms into an unforgettable masterpiece.',
      buttonText: 'Plan Your Event',
      buttonLink: '/JazzBanquetHall#contact',
    },
    {
      src: 'https://videos.pexels.com/video-files/5267154/5267154-hd_1920_1080_25fps.mp4', // Example: Corporate event setup
      heading: 'Host Your Perfect Occasion',
      subheading: 'Sophisticated settings and impeccable service for any gathering.',
      buttonText: 'View Our Spaces',
      buttonLink: '/JazzBanquetHall#gallery',
    },
    {
      src: 'https://videos.pexels.com/video-files/3814446/3814446-hd_1920_1080_25fps.mp4', // Example: Wedding reception
      heading: 'Dreams Come True at Jazz',
      subheading: 'Celebrate your special moments in a truly magnificent ambiance.',
      buttonText: 'Inquire Now',
      buttonLink: '/JazzBanquetHall#contact',
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoData.length);
      };
      videoElement.addEventListener('ended', handleVideoEnd);
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentVideoIndex, videoData.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.warn("Video play interrupted:", error);
      });
    }
  }, [currentVideoIndex]);

  const currentVideo = videoData[currentVideoIndex];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={currentVideo.src}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div> {/* Slightly darker overlay for elegance */}

      {/* Content (text and button) */}
      <div className="relative z-20 text-white p-8 rounded-lg max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-4 text-[#FFD700] leading-tight drop-shadow-lg"> {/* Gold heading for luxury */}
          {currentVideo.heading}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow">
          {currentVideo.subheading}
        </p>
        <Link
          smooth to={currentVideo.buttonLink}
          className="bg-[#FFD700] text-[#1A2C42] px-10 py-4 rounded-full font-semibold text-xl hover:bg-[#B8860B] transition duration-300 shadow-xl transform hover:scale-105"
        >
          {currentVideo.buttonText}
        </Link>
      </div>
    </section>
  );
}

export default JazzBanquetHallHeroSection;
