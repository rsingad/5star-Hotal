import React from 'react';

function Cloud9AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-12">
          Your Sky-High Sanctuary
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <p className="text-lg leading-relaxed mb-6">
              Perched atop The Paradise Hotel, Cloud 9 offers an unparalleled escape from the bustling city below. As Udaipur's premier rooftop coffee shop, we invite you to ascend to new heights of relaxation and indulgence. Our space is meticulously designed to blend modern elegance with the serene beauty of the sky.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Whether you're starting your day with a freshly brewed artisan coffee, enjoying a light lunch with friends, or unwinding with a sunset mocktail, Cloud 9 provides the perfect backdrop. Our panoramic views of the city and surrounding landscapes create an inspiring atmosphere for every visit.
            </p>
            <p className="text-lg leading-relaxed">
              We pride ourselves on serving a curated selection of gourmet coffees, refreshing teas, delectable pastries, and savory bites, all crafted with the finest ingredients. Come, find your moment of bliss on Cloud 9.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Cloud 9 Rooftop Coffee Shop View"
              className="rounded-xl shadow-2xl w-full h-auto object-cover border-4 border-blue-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cloud9AboutSection;
