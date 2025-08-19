import React from 'react';

function BlissSpaGallerySection() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Tranquil Spa Interior",
      description: "Step into an oasis of calm and serenity."
    },
    {
      src: "https://images.pexels.com/photos/3770428/pexels-photo-3770428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Relaxing Massage Room",
      description: "Experience ultimate relaxation in our private treatment suites."
    },
    {
      src: "https://images.pexels.com/photos/4040651/pexels-photo-4040651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Soothing Ambiance",
      description: "Every detail designed to promote peace and well-being."
    },
    {
      src: "https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Spa products/details
      title: "Premium Spa Products",
      description: "Utilizing the finest natural ingredients for your skin."
    },
    {
      src: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Another view of spa interior
      title: "Inviting Waiting Area",
      description: "Begin your journey to relaxation in comfort."
    },
    {
      src: "https://images.pexels.com/photos/3770428/pexels-photo-3770428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Close-up of massage
      title: "Expert Therapists",
      description: "Skilled hands guiding you to profound relaxation."
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#1A2C42] text-white"> {/* Deep primary blue background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#DAA520] mb-12">
          Bliss Spa: A Visual Retreat
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

export default BlissSpaGallerySection;
