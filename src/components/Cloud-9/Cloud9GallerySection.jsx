import React from 'react';

function Cloud9GallerySection() {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Panoramic City Views"
    },
    {
      src: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Artisan Coffee Creations"
    },
    {
      src: "https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Delectable Pastries"
    },
    {
      src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Cozy Seating Areas"
    },
    {
      src: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Savory Bites & Snacks"
    },
    {
      src: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Refreshing Beverages"
    },
    {
      src: "https://images.pexels.com/photos/3124103/pexels-photo-3124103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Perfect Sunset Spot"
    },
    {
      src: "https://images.pexels.com/photos/1016629/pexels-photo-1016629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Unforgettable Moments"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-16">
          Moments on Cloud 9
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer border-2 border-transparent hover:border-blue-400 transition duration-300">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold text-center px-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cloud9GallerySection;
