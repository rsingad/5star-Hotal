import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Cloud9HeroSection() {
  // Array of video URLs and their associated text content, button text, and button link
  const videoData = [
    {
      src: 'https://videos.pexels.com/video-files/3814446/3814446-hd_1920_1080_25fps.mp4', // Pexels video for a modern, airy ambiance
      heading: 'Cloud 9: Elevate Your Experience',
      subheading: 'Discover a new realm of luxury and tranquility high above the city.',
      buttonText: 'Explore Our Offerings',
      buttonLink: '/Cloud-9#features', // Link to features section
    },
    {
      src: 'https://videos.pexels.com/video-files/4207174/4207174-hd_1920_1080_25fps.mp4', // Pexels video for a vibrant, social setting
      heading: 'Unwind on Top of the World',
      subheading: 'Sip on exquisite beverages and enjoy panoramic views that inspire.',
      buttonText: 'View Our Menu',
      buttonLink: '/Cloud-9#menu', // Link to menu section
    },
    {
      src: 'https://videos.pexels.com/video-files/5267154/5267154-hd_1920_1080_25fps.mp4', // Pexels video for a sophisticated, relaxed atmosphere
      heading: 'Your Perfect Escape',
      subheading: 'From sunrise coffees to starlit evenings, find your serene moment.',
      buttonText: 'Plan Your Visit',
      buttonLink: '/Cloud-9#contact', // Link to contact/reservations
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null); // Ref to directly access the video element

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Event listener for when a video ends
      const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) =>
          (prevIndex + 1) % videoData.length // Loop back to the first video
        );
      };

      videoElement.addEventListener('ended', handleVideoEnd);

      // Cleanup function: remove the event listener when the component unmounts or currentVideoIndex changes
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentVideoIndex, videoData.length]); // Dependencies: Re-run effect if index or videoData length changes

  // This useEffect ensures the video reloads and plays when its source changes.
  // It's essential for smooth transitions between videos.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video element to play the new source
      videoRef.current.play().catch(error => {
        // Catch potential errors if play() is interrupted (e.g., by another quick change)
        console.warn("Video play interrupted:", error);
      });
    }
  }, [currentVideoIndex]); // Trigger when video index changes

  // Get the data for the current video
  const currentVideo = videoData[currentVideoIndex];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef} // Attach the ref to the video element
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={currentVideo.src} // Dynamically set the video source
        autoPlay
        loop // Loop the current video until it transitions
        muted // Crucial for autoplay in most browsers
        playsInline // Important for mobile autoplay without going fullscreen
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text readability (over the video) */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Slightly less opaque for a lighter feel */}

      {/* Content (text and button) */}
      <div className="relative z-20 text-white p-8 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-blue-200 leading-tight drop-shadow-lg"> {/* Lighter blue heading, added drop shadow */}
          {currentVideo.heading}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow"> {/* Lighter gray subheading, added drop shadow */}
          {currentVideo.subheading}
        </p>
        <Link
          smooth to={currentVideo.buttonLink}
          className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-xl hover:bg-blue-100 transition duration-300 shadow-xl transform hover:scale-105" // Cloud 9 button style
        >
          {currentVideo.buttonText}
        </Link>
      </div>
    </section>
  );
}

export default Cloud9HeroSection;
