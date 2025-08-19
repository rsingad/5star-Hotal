// src/components/BlissSpaServicesSection.jsx

import React from 'react';

// यह कंपोनेंट Bliss Spa की सेवाओं को प्रदर्शित करता है।
// इसमें प्रत्येक सेवा के लिए एक कार्ड शामिल है जिसमें उसकी जानकारी और मूल्य दिया गया है।
const BlissSpaServicesSection = () => {
  // स्पा सेवाओं का एक ऐरे (array) जिसमें नाम, विवरण, मूल्य और छवि शामिल है।
  const services = [
    {
      name: 'Swedish Massage',
      description: 'A classic massage to relax the entire body. It involves long, flowing strokes to ease muscle tension and improve circulation.',
      price: '$80 / 60 min',
      image: 'https://images.pexels.com/photos/4188046/pexels-photo-4188046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Uses essential oils to promote relaxation and well-being. Each oil is chosen for its specific therapeutic properties.',
      price: '$95 / 60 min',
      image: 'https://images.pexels.com/photos/4038161/pexels-photo-4038161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Hot Stone Therapy',
      description: 'Smooth, heated stones are placed on key points of the body to relax muscles and soothe tension, providing deep relaxation.',
      price: '$110 / 90 min',
      image: 'https://images.pexels.com/photos/4188053/pexels-photo-4188053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Deep Tissue Massage',
      description: 'A more intense massage focusing on deeper layers of muscle tissue to relieve chronic tension and knots.',
      price: '$100 / 60 min',
      image: 'https://images.pexels.com/photos/4188059/pexels-photo-4188059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Luxury Facial',
      description: 'A rejuvenating facial treatment that cleanses, exfoliates, and nourishes the skin to promote a clear, well-hydrated complexion.',
      price: '$120 / 75 min',
      image: 'https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Body Scrub & Wrap',
      description: 'An invigorating scrub to exfoliate the skin, followed by a nourishing wrap to hydrate and soften, leaving you with a radiant glow.',
      price: '$130 / 90 min',
      image: 'https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Bliss Spa Services</h2>
          <p className="mt-4 text-xl text-gray-600">Discover a world of relaxation and rejuvenation with our curated spa treatments.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-600">{service.price}</span>
                  <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlissSpaServicesSection;
