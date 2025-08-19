import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function TamarindusAboutSection() {
  const aboutSlidesData = [
    {
      id: 1,
      imageUrl: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "About Tamarindus",
      paragraphs: [
        "Tamarindus is the signature multi-cuisine restaurant at The Taj Paradise, dedicated to offering an unparalleled dining experience. Our philosophy is rooted in celebrating diverse culinary traditions while embracing modern gastronomic techniques.",
        "Our master chefs, with their profound expertise, curate a menu that is a harmonious blend of rich Indian delicacies, authentic Continental dishes, vibrant Chinese flavors, and aromatic Mediterranean cuisine. We source the freshest local ingredients to ensure every dish is a masterpiece of taste and quality.",
        "Whether it's a delightful breakfast, a leisurely lunch, or a lavish dinner, Tamarindus provides an elegant ambiance and impeccable service, making every meal a memorable occasion."
      ],
      buttonText: "View Our Menu",
      buttonLink: "/TamarindusRestaurant#menu"
    },
    {
      id: 2,
      imageUrl: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "Our Culinary Philosophy",
      paragraphs: [
        "At Tamarindus, we believe in the art of culinary creation. Our chefs are passionate about transforming the freshest, locally sourced ingredients into extraordinary dishes that tantalize your taste buds.",
        "We combine age-old recipes with contemporary flair, ensuring each plate tells a story of heritage and innovation. Our commitment to excellence is evident in every detail, from preparation to presentation.",
        "Join us to explore a world of flavors, where every meal is not just food, but an experience crafted with love and precision."
      ],
      buttonText: "Meet Our Chefs",
      buttonLink: "/TamarindusRestaurant#contact"
    },
    {
      id: 3,
      imageUrl: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      heading: "The Tamarindus Experience",
      paragraphs: [
        "Step into Tamarindus and immerse yourself in an atmosphere of refined elegance. Our dining space is designed to offer comfort and sophistication, perfect for intimate dinners, family gatherings, or business luncheons.",
        "The subtle lighting, plush seating, and tasteful decor create a serene backdrop for your culinary adventure. Our attentive staff is dedicated to providing service that is both discreet and personalized, ensuring your dining experience is flawless.",
        "From the moment you arrive until your last bite, we strive to create unforgettable memories for every guest."
      ],
      buttonText: "Book Your Experience",
      buttonLink: "/TamarindusRestaurant#contact"
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        (prevIndex + 1) % aboutSlidesData.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [aboutSlidesData.length]);

  useEffect(() => {
    setContentOpacity(0); // Start fading out
    const timer = setTimeout(() => {
      setContentOpacity(100); // Start fading in
    }, 50); // Small delay to ensure opacity-0 registers before transition

    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const currentSlide = aboutSlidesData[currentSlideIndex];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center min-h-[600px] flex flex-col justify-center"> {/* Added min-h for consistent section height */}
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-16">
          {currentSlide.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div key={currentSlide.id + "-text"} className={`min-h-[384px] flex flex-col justify-center transition-opacity duration-700 ease-in-out ${contentOpacity === 100 ? 'opacity-100' : 'opacity-0'}`}>
            {currentSlide.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
            <Link
              smooth to={currentSlide.buttonLink}
              className="inline-block bg-[#DAA520] text-[#1A2C42] px-8 py-4 rounded-full font-semibold text-xl hover:bg-[#B8860B] transition duration-300 shadow-xl mt-6"
            >
              {currentSlide.buttonText}
            </Link>
          </div>
          <div key={currentSlide.id + "-image"} className={`relative h-96 transition-opacity duration-700 ease-in-out ${contentOpacity === 100 ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={currentSlide.imageUrl}
              alt="Tamarindus Restaurant Ambiance"
              className="rounded-xl shadow-2xl w-full h-full object-cover border-4 border-[#DAA520]"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {aboutSlidesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300
                    ${index === currentSlideIndex ? 'bg-[#DAA520] scale-125' : 'bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamarindusAboutSection;
