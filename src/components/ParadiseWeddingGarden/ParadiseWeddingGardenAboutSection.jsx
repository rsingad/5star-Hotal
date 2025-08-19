import React from 'react';

function ParadiseWeddingGardenAboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-[#1A2C42]"> {/* White background for contrast */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-12">
          About Paradise Wedding Garden: Where Dreams Blossom
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Nestled within the breathtaking grounds of The Paradise Hotel, our **Paradise Wedding Garden** is an idyllic outdoor venue designed to bring your fairytale wedding to life. With lush landscapes, vibrant flora, and serene water features, it offers a picturesque backdrop for your most cherished moments.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Whether you envision an intimate ceremony under the open sky or a grand reception bathed in starlight, our versatile garden can be transformed to reflect your unique style and theme. We provide an enchanting setting that combines natural beauty with sophisticated elegance, ensuring every detail is perfect.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our dedicated team of wedding specialists will work closely with you, from conceptualization to execution, to craft a seamless and unforgettable celebration. From exquisite floral arrangements to gourmet catering and bespoke decor, we handle everything to make your special day truly magical.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Example wedding garden image
              alt="Paradise Wedding Garden Setup"
              className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-96 md:max-h-[500px] border-4 border-[#DAA520]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParadiseWeddingGardenAboutSection;
