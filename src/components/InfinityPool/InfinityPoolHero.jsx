import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function InfinityPoolHero() {
  // Define an array of objects, each representing a slide in the carousel.
  // Replace these Pexels video URLs with your own.
  const slides = [
    {
      // Pexels video example
      videoSrc: "https://videos.pexels.com/video-files/3573964/3573964-uhd_2560_1440_30fps.mp4",
      title: "शांत हो जाइए और आराम कीजिए",
      description: "अनंत नज़ारों के बीच खुद को डुबो दें।",
      buttonText: "अभी बुक करें",
      buttonPath: "#booking"
    },
    {
      // Pexels video example
      videoSrc: "https://videos.pexels.com/video-files/5010624/5010624-hd_1080_1920_30fps.mp4",
      title: "सूर्यास्त का आनंद लें",
      description: "दिन के अंत में सबसे अच्छे दृश्यों का अनुभव करें।",
      buttonText: "गैलरी देखें",
      buttonPath: "#gallery"
    },
    {
      // Pexels video example
      videoSrc: "https://videos.pexels.com/video-files/7293963/7293963-hd_1920_1080_30fps.mp4",
      title: "अपने कैबाना की योजना बनाएं",
      description: "निजी कैबाना में आराम करें।",
      buttonText: "कैबाना बुक करें",
      buttonPath: "#cabanas"
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // useEffect to handle the automatic slide transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlideIndex((prevIndex) => 
        (prevIndex + 1) % slides.length
      );
    }, 8000); // Change slide every 8 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [currentSlideIndex, slides.length]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Background Video Element. The `key` attribute forces a re-render when the source changes. */}
      <video
        key={currentSlide.videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        poster="https://placehold.co/1920x1080/003366/FFFFFF?text=Infinity+Pool+Paradise" // Fallback image
      >
        <source 
          src={currentSlide.videoSrc} 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-1000 ease-in-out"></div>

      {/* Hero content centered on the page with dynamic content */}
      <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in">
          {currentSlide.title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-2xl mx-auto animate-fade-in">
          {currentSlide.description}
        </p>
        
        {/* Call to Action Button with dynamic text and path */}
        <Link
          smooth
          to={currentSlide.buttonPath}
          className="inline-block bg-[#00BFFF] hover:bg-[#00A0D0] text-gray-900 font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl animate-fade-in"
        >
          {currentSlide.buttonText}
        </Link>
      </div>
    </section>
  );
}

export default InfinityPoolHero;
