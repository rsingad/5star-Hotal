import React from 'react';

function ElevateGymGallerySection() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Main Workout Floor",
      description: "Spacious and well-equipped area for all your fitness needs."
    },
    {
      src: "https://images.pexels.com/photos/4167733/4167733-hd_1920_1080_25fps.mp4", // Using a still image representation for the gallery
      title: "Cardio Zone",
      description: "Advanced treadmills, ellipticals, and bikes with city views."
    },
    {
      src: "https://images.pexels.com/photos/4168019/4168019-hd_1920_1080_25fps.mp4", // Using a still image representation for the gallery
      title: "Strength Training Area",
      description: "Comprehensive selection of free weights and resistance machines."
    },
    {
      src: "https://images.pexels.com/photos/4168018/4168018-hd_1920_1080_25fps.mp4", // Using a still image representation for the gallery
      title: "Functional Training Space",
      description: "Dedicated area for dynamic and functional workouts."
    },
    {
      src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Personal training session
      title: "Expert Personal Training",
      description: "Achieve your goals with guidance from our certified trainers."
    },
    {
      src: "https://images.pexels.com/photos/1785507/pexels-photo-1785507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Yoga/stretching area
      title: "Mind & Body Zone",
      description: "Calm space for stretching, yoga, and cool-downs."
    },
    {
      src: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Gym entrance/reception
      title: "Welcoming Environment",
      description: "A clean, bright, and motivating atmosphere for every visit."
    },
    {
      src: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Healthy snack/drink (example)
      title: "Post-Workout Refreshments",
      description: "Nutritious options to refuel after your workout."
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#1A2C42] text-white"> {/* Deep primary blue background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#DAA520] mb-12">
          Elevate Gym: A Visual Tour
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

export default ElevateGymGallerySection;
