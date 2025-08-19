import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function ElevateGymHeroSection() {
  // Video data for the hero section, focusing on dynamic fitness visuals
  const videoData = [
    {
      src: 'https://videos.pexels.com/video-files/4167733/4167733-hd_1920_1080_25fps.mp4', // Pexels video: person running on treadmill
      heading: 'Elevate Gym: Push Your Limits',
      subheading: 'Reach new heights in your fitness journey with state-of-the-art equipment and expert guidance.',
      buttonText: 'Explore Our Facilities',
      buttonLink: '/ElevateGym#about',
    },
    {
      src: 'https://videos.pexels.com/video-files/4168019/4168019-hd_1920_1080_25fps.mp4', // Pexels video: weightlifting/strength training
      heading: 'Strength, Stamina, Success',
      subheading: 'Transform your body and mind in an inspiring and energetic environment.',
      buttonText: 'View Our Programs',
      buttonLink: '/ElevateGym#programs', // Assuming a future programs section
    },
    {
      src: 'https://videos.pexels.com/video-files/4168018/4168018-hd_1920_1080_25fps.mp4', // Pexels video: stretching/yoga
      heading: 'Your Wellness Oasis',
      subheading: 'A holistic approach to fitness, fostering both physical strength and mental well-being.',
      buttonText: 'Join Us Today',
      buttonLink: '/ElevateGym#contact',
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
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div> {/* Darker overlay for strong contrast */}

      {/* Content (text and button) */}
      <div className="relative z-20 text-white p-8 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-[#FFD700] leading-tight drop-shadow-lg"> {/* Gold heading for energy */}
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

export default ElevateGymHeroSection;
