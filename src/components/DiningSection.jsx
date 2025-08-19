import React from 'react';
import { Link } from 'react-router-dom';

// A reusable component for each dining card
const DiningCard = ({ title, description, imageUrl, to }) => {
  return (
    <Link to={to} className="group">
      <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-transform duration-300 group-hover:scale-105">
        {/* Image with a subtle hover effect and responsive height */}
        <img
          src={imageUrl}
          alt={title}
          // Changed from h-80 to h-64 on mobile, and h-80 on medium screens and up
          className="w-full h-64 md:h-80 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        {/* This div contains the title, logo, and description */}
        <div className="absolute bottom-0 left-0 p-8 text-[var(--neutral-white)]">
          {/* Main title */}
          <h3 className=" text-[var(--secondary-gold)] text-3xl  font-serif font-semibold mb-2 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ">
            {title}
          </h3>
          
          {/* Dining logo - SVG of a fork and knife */}
          <div className="flex items-center space-x-2 my-4 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <svg
              className="w-8 h-8 text-[var(--secondary-gold)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 21h-2a2 2 0 01-2-2v-4h4v4a2 2 0 01-2 2zM15 5h-2a2 2 0 00-2 2v2h4V7a2 2 0 00-2-2zM9 13H7a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2zm10 0h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2zM5 15H3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm6-4h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zM9 19H7a2 2 0 01-2-2v-2h4v2a2 2 0 01-2 2z" />
            </svg>
            <p className="text-xl font-bold font-serif text-[var(--secondary-gold)]">Our Fine Dining</p>
          </div>

          {/* Description with tighter line-height */}
          <p className="text-lg leading-normal transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

function DiningSection() {
  // Data for the dining cards, making it easy to manage content
  const diningData = [
    {
      title: 'Tamarindus',
      description: 'Multi-Cuisine Restaurant offering a diverse menu of global delicacies.',
      imageUrl: 'https://images.pexels.com/photos/18506042/pexels-photo-18506042.jpeg',
      to: '/TamarindusRestaurant',
    },
    {
      title: 'Cloud 9',
      description: 'Rooftop Coffee Shop with panoramic views, perfect for a relaxing evening.',
      imageUrl: 'https://images.pexels.com/photos/8388255/pexels-photo-8388255.jpeg',
      to: '/Cloud-9',
    },
    {
      title: 'Jazz Banquet Hall',
      description: 'Ideal for grand celebrations and events, with exquisite catering options.',
      imageUrl: 'https://images.pexels.com/photos/6822831/pexels-photo-6822831.jpeg',
      to: '/JazzBanquetHall',
    },
  ];

  return (
    <section id="dining" className="py-20 bg-[var(--neutral-dark-blue)] text-[var(--neutral-white)]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-serif font-bold text-[var(--primary-orange)] mb-8">Exquisite Dining Experiences</h2>
        {/* Main paragraph with tighter line-height */}
        <p className="text-xl leading-normal mb-16 max-w-4xl mx-auto">
          Indulge in a world of flavors at our multi-cuisine restaurants, where every dish is crafted to perfection. From rich Indian delicacies to flavorful Continental, Chinese, and Mediterranean delights, our chefs ensure every bite is a celebration of taste.
        </p>

        {/* Responsive grid for the dining cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {diningData.map((diningItem, index) => (
            <DiningCard key={index} {...diningItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiningSection;
