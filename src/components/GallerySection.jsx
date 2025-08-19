import React from 'react';

function GallerySection() {
  // Gallery images with added titles, descriptions, and links for flip effect
  const galleryImages = [
    {
      src: "./hotelInt.jpg",
      title: "Hotel Exterior",
      description: "A panoramic exterior view of our magnificent hotel.",
      link: "/gallery/hotel-exterior" // Example link
    },
    {
      src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
      title: "Grand Lobby",
      description: "Step into the grand lobby, where luxury and comfort meet.",
      link: "/gallery/grand-lobby"
    },
    {
      src: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Luxury Suite",
      description: "Experience ultimate comfort and elegance in our luxury suites.",
      link: "/gallery/luxury-suite"
    },
    {
      src: "https://images.pexels.com/photos/33145013/pexels-photo-33145013.jpeg",
      title: "Fine Dining",
      description: "Indulge in culinary delights at our fine dining restaurant.",
      link: "/gallery/fine-dining"
    },
    {
      src: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",
      title: "Infinity Pool",
      description: "Take a refreshing dip in our infinity pool and enjoy breathtaking views.",
      link: "/gallery/infinity-pool"
    },
    {
      src: "https://images.pexels.com/photos/3865584/pexels-photo-3865584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Spa Relaxation",
      description: "Experience ultimate relaxation and rejuvenation at our spa.",
      link: "/gallery/spa-relaxation"
    },
    {
      src: "https://images.pexels.com/photos/33186690/pexels-photo-33186690.jpeg",
      title: "Wedding Garden",
      description: "Plan your dream wedding in our beautiful wedding garden.",
      link: "/gallery/wedding-garden"
    },
    {
      src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Fitness Center",
      description: "Elevate your workout at our state-of-the-art fitness center.",
      link: "/gallery/fitness-center"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#1A2C42] text-white"> {/* Deep primary blue background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center"> {/* Consistent padding */}
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#DAA520] mb-12"> {/* Gold heading for luxury */}
          A Glimpse of Paradise: Our Photo Gallery
        </h2>
        {/* Adjusted perspective for a more pronounced 3D effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 [perspective:800px]">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 rounded-xl shadow-2xl group cursor-pointer border-2 border-transparent hover:border-[#DAA520] transition duration-300">
              {/* Flip Card Inner Container */}
              <div className="relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700 ease-in-out">

                {/* Front of the card (Image) */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Back of the card (Blurred Image with Details and Link) */}
                <div className="absolute inset-0 rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-white">
                  {/* Blurred background image */}
                  <img
                    src={image.src}
                    alt={`${image.title} (Blurred)`}
                    className="w-full h-full object-cover rounded-xl absolute inset-0 filter blur-sm scale-110" // Apply blur and slight scale to avoid edges
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>

                  {/* Content on top of the blurred image and overlay */}
                  <div className="relative z-10 p-4 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold mb-2 text-[#DAA520]">{image.title}</h3>
                    <p className="text-sm mb-4 text-gray-300">{image.description}</p>
                    <a
                      href={image.link}
                      className="inline-block bg-[#DAA520] text-[#1A2C42] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#B8860B] transition duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
