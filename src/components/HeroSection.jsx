import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation to new pages

function HeroSection() {
  // Array of video URLs and their associated text content, button text, and button link
  const videoData = [
    {
      src: './swimmingpool.mp4', // Example video URL for Swimming (replace with your actual video URLs)
      heading: 'Dive into Bliss at Our Infinity Pool',
      subheading: 'Enjoy breathtaking views while you refresh and unwind.',
      buttonText: 'View Pool Details',
      buttonLink: '/InfinityPool', // Link to the Amenities page/route (or a specific pool page)
    },
    {
      src: './hotel_overview.mp4', // Updated src based on comment: "in this video all hotel view entergate , room , pool , interiar"
      heading: 'Experience Unrivaled Luxury at The Paradise',
      subheading: 'Where every moment is a masterpiece of elegance and comfort.',
      buttonText: 'Book Your Stay',
      buttonLink: '/booking', // Link to a new page/route
    },
    {
      src: './hotel_facilities.mp4', // Updated src based on comment: "all hotel view pool rooms, jim, restorent ...."
      heading: 'Indulge in Serenity and World-Class Comfort',
      subheading: 'Discover our tranquil spa for your ultimate relaxation.',
      buttonText: 'Explore Our BlissSpa',
      buttonLink: '/BlissSpa', // Link to the Spa page/route
    },
    // You can add more video objects here for more videos in the sequence, linking to other pages:
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
        muted // Crucial for autoplay in most browsers
        playsInline // Important for mobile autoplay without going fullscreen
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text readability (over the video) */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content (text and button) */}
      <div className="relative z-20 text-white p-8 rounded-lg max-w-4xl mx-auto">
        {/* Heading text now uses the CSS variable */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight"
            style={{ color: 'var(--primary-orange)' }}>
          {currentVideo.heading}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          {currentVideo.subheading}
        </p>
        <Link // Changed from <a> to Link
          to={currentVideo.buttonLink} // Use 'to' prop for React Router
          className="relative inline-block px-8 py-4 font-semibold text-xl
                     rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md
                     shadow-lg /* Added initial shadow for the button */
                     overflow-hidden /* Crucial for background fill span */
                     group /* Enable group hover utilities */
                     transition-all duration-300 ease-in-out /* Smooth transition for background and shadow */
                     hover:shadow-[0_0_300px_rgba(255,215,0,0.9)] /* Stronger gold glow on hover */
                     "
          // Initial background and text colors now use CSS variables
          style={{ 
            backgroundColor: 'var(--primary-orange)',
            color: 'var(--neutral-dark-blue)'
          }}
        >
          {/* Inner content (text) - ensure it's above the hover background */}
          <span className="relative z-10">
            {currentVideo.buttonText}
          </span>

          
          <span className="absolute inset-0 z-0
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-300 ease-in-out /* Smooth transition for background fill */
                           rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md /* Match button's rounded corners */
                           "
            // Hover background color now uses a CSS variable
            style={{ backgroundColor: 'var(--secondary-gold)' }}
          ></span>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
