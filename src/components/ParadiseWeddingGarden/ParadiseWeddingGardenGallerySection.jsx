import React from 'react';

function ParadiseWeddingGardenGallerySection() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1640822/pexels-photo-1640822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Wide shot of garden setup
      title: "Grand Outdoor Setup",
      description: "A panoramic view of our garden ready for a magnificent celebration."
    },
    {
      src: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Ceremony arch
      title: "Romantic Ceremony Arch",
      description: "The perfect spot to say 'I do' amidst lush greenery."
    },
    {
      src: "https://images.pexels.com/photos/1054366/pexels-photo-1054366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Table setting in garden
      title: "Elegant Reception Dining",
      description: "Beautifully arranged tables for an enchanting outdoor feast."
    },
    {
      src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Evening lighting
      title: "Magical Evening Ambiance",
      description: "Garden transformed with captivating lights for a starlit celebration."
    },
    {
      src: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Close-up of decor
      title: "Exquisite Floral Decor",
      description: "Detailed floral arrangements adding charm to every corner."
    },
    {
      src: "https://images.pexels.com/photos/159213/hall-auditorium-conference-room-congress-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Bridal path
      title: "Picture-Perfect Pathways",
      description: "Scenic paths ideal for bridal entrances and couple photos."
    },
    {
      src: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Another wide shot
      title: "Spacious Lawn Area",
      description: "Ample space for guest seating, dance floor, and entertainment."
    },
    {
      src: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Catering setup
      title: "Gourmet Outdoor Catering",
      description: "Delightful culinary stations set up amidst the garden."
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#1A2C42] text-white"> {/* Deep primary blue background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#DAA520] mb-12">
          Paradise Wedding Garden: A Gallery of Love
        </h2>
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

                {/* Back of the card (Blurred Image with Details) */}
                <div className="absolute inset-0 rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-white">
                  {/* Blurred background image */}
                  <img
                    src={image.src}
                    alt={`${image.title} (Blurred)`}
                    className="w-full h-full object-cover rounded-xl absolute inset-0 filter blur-sm scale-110"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>

                  {/* Content on top of the blurred image and overlay */}
                  <div className="relative z-10 p-4 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold mb-2 text-[#DAA520]">{image.title}</h3>
                    <p className="text-sm mb-4 text-gray-300">{image.description}</p>
                    {/* You can add a link here if each gallery item should link to a specific detail page */}
                    {/* <a
                      href={image.link} // If you add a 'link' property to your image objects
                      className="inline-block bg-[#DAA520] text-[#1A2C42] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#B8860B] transition duration-300"
                    >
                      View Details
                    </a> */}
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

export default ParadiseWeddingGardenGallerySection;
