import React from 'react';

function InfinityPoolAboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-[#1A2C42]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#0A2E50] mb-12">
          Experience the Horizon: About Our Infinity Pool
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Perched on the highest point of The Paradise Hotel, our **360° Infinity Pool** offers an unparalleled aquatic experience. Designed to create a seamless visual flow with the horizon, it provides a breathtaking illusion where the sky merges with the water, offering a truly immersive escape.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              This architectural marvel is more than just a pool; it's a vantage point to soak in the stunning **panoramic views of Udaipur's cityscape and the majestic Aravalli hills**. Whether you're enjoying a refreshing morning swim, basking in the afternoon sun, or witnessing a spectacular sunset, every moment here is designed to be an unforgettable memory.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our poolside service ensures ultimate comfort with plush loungers, fresh towels, and a menu of light refreshments and signature mocktails. It's the perfect sanctuary for relaxation, rejuvenation, and capturing those picture-perfect moments.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg" // Reusing the pool image
              alt="Infinity Pool Panoramic View"
              className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-96 md:max-h-[500px] border-4 border-blue-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfinityPoolAboutSection;
