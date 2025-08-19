import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function TamarindusHeroSection() {
  const videoData = [
    {
      src: 'https://videos.pexels.com/video-files/7095059/7095059-uhd_2732_1440_25fps.mp4', // Pexels video for restaurant ambiance
      heading: 'Tamarindus: A Symphony of Flavors',
      subheading: 'Experience an exquisite culinary journey where tradition meets innovation.',
      buttonText: 'Reserve Your Table',
      buttonLink: '/TamarindusRestaurant#contact',
    },
    {
      src: 'https://videos.pexels.com/video-files/4748849/4748849-hd_1066_1920_25fps.mp4', // Pexels video for food preparation/dishes
      heading: 'Culinary Masterpieces Crafted for You',
      subheading: 'Savor the finest Indian, Continental, Chinese, and Mediterranean delicacies.',
      buttonText: 'Explore Our Menu',
      buttonLink: '/TamarindusRestaurant#menu',
    },
    {
      src: 'https://videos.pexels.com/video-files/4255441/4255441-uhd_1440_2732_25fps.mp4', // Pexels video for elegant dining area
      heading: 'An Ambiance of Elegance',
      subheading: 'Dine in luxury with breathtaking views and sophisticated decor.',
      buttonText: 'View Gallery',
      buttonLink: '/TamarindusRestaurant#gallery',
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) =>
          (prevIndex + 1) % videoData.length
        );
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
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={currentVideo.src}
        autoPlay
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 text-white p-8 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-[#DAA520] leading-tight">
          {currentVideo.heading}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          {currentVideo.subheading}
        </p>
        <Link
          smooth to={currentVideo.buttonLink}
          className="bg-[#DAA520] text-[#1A2C42] px-8 py-4 rounded-full font-semibold text-xl hover:bg-[#B8860B] transition duration-300 shadow-xl"
        >
          {currentVideo.buttonText}
        </Link>
      </div>
    </section>
  );
}

export default TamarindusHeroSection;
