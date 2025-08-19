import React from 'react';

function InfinityPoolGallerySection() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Panoramic Pool View",
      description: "The breathtaking 360° view from our infinity pool."
    },
    {
      src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Sunset Serenity",
      description: "Witness spectacular sunsets from the water's edge."
    },
    {
      src: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Relaxing Sun Deck",
      description: "Comfortable loungers for sunbathing and relaxation."
    },
    {
      src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Night View & City Lights",
      description: "An enchanting experience under the starlit sky."
    },
    {
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Refreshing Morning Dip",
      description: "Start your day with an invigorating swim."
    },
    {
      src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Poolside Refreshments",
      description: "Enjoy light snacks and beverages by the pool."
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#1A2C42] text-white"> {/* Deep primary blue background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#DAA520] mb-12">
          Moments by the Infinity Pool
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

export default InfinityPoolGallerySection;
