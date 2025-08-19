import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import {roomsData} from './roomsData'

/**
 * RoomsSection Component
 * Displays a grid of available rooms, optimized for responsiveness
 * across different screen sizes.
 */
function RoomsSection() {
  return (
    <section 
      id="rooms" 
      style={{ backgroundColor: 'var(--roomsection-background-color)' }} 
      className="py-12 md:py-16 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Responsive Heading */}
        <h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-4" 
          style={{ color: 'var(--roomsection-primary-text-color)' }}
        >
          Our Luxurious Rooms & Suites
        </h2>
        {/* Responsive Subtitle */}
        <p 
          className="text-sm md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto" 
          style={{ color: 'var(--roomsection-secondary-text-color)' }}
        >
          Explore our collection of rooms and suites, each designed to provide an unforgettable experience of comfort and luxury.
        </p>

        {/* Responsive grid for room cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {roomsData.map((room) => (
            <div
              key={room.id}
              style={{ backgroundColor: 'var(--roomsection-card-bg-color)' }}
              className="rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl md:text-2xl font-serif font-semibold mb-3" 
                  style={{ color: 'var(--roomsection-primary-text-color)' }}
                >
                  {room.name}
                </h3>
                <p 
                  className="text-sm mb-4" 
                  style={{ color: 'var(--roomsection-secondary-text-color)' }}
                >
                  {room.description}
                </p>
                <ul 
                  className="text-left space-y-2 mb-6 text-sm md:text-base" 
                  style={{ color: 'var(--roomsection-secondary-text-color)' }}
                >
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle 
                        size={18} 
                        className="mr-2 flex-shrink-0" 
                        style={{ color: 'var(--roomsection-accent-color)' }} 
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Responsive and touch-friendly button */}
                <Link
                  to={`/rooms/${room.path}`}
                  className="inline-block w-full px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 text-center text-sm md:text-base"
                  style={{ 
                    backgroundColor: 'var(--roomsection-accent-color)',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--roomsection-hover-accent-color)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--roomsection-accent-color)'}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsSection;
