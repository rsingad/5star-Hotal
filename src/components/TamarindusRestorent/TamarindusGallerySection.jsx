import React from 'react';

function TamarindusGallerySection() {
  // Gallery images with updated URLs and descriptive titles
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Delicious Dish 1
      title: "Signature Dish: Culinary Excellence"
    },
    {
      src: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Restaurant Interior
      title: "Elegant Dining Ambiance"
    },
    {
      src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Chef at Work
      title: "Our Master Chefs at Work"
    },
    {
      src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Table Setting
      title: "Impeccable Table Setting"
    },
    {
      src: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Cocktail
      title: "Artisan Cocktails & Beverages"
    },
    {
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Another Dish
      title: "Fresh & Flavorful Creations"
    },
    {
      src: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Dessert
      title: "Decadent Dessert Selection"
    },
    {
      src: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Wine Pairing
      title: "Perfect Wine Pairings"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#0A2E50] text-white"> {/* Deeper blue background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#DAA520] mb-16"> {/* Gold heading */}
          Tamarindus: A Visual Feast
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Increased gap */}
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-2xl group cursor-pointer border-2 border-transparent hover:border-[#DAA520] transition duration-300">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

export default TamarindusGallerySection;
