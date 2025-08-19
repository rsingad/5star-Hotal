import React from 'react';
import { Award } from 'lucide-react'; // Keeping one icon for the main feature

// This component displays information about the Elevate Gym with a prominent image.
function ElevateGymSection() {
  return (
    <section id="elevate-gym" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main section heading with a modern, clean style */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-serif mb-4">
            Elevate Your Fitness
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Experience a new standard of fitness with our modern facility and expert guidance.
          </p>
        </div>

        {/* Content section with image and text side-by-side on larger screens */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          {/* Image container */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://placehold.co/800x600/1f2937/d1d5db?text=Modern+Gym+Facility"
              alt="A modern gym facility with advanced equipment"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Text and call-to-action container */}
          <div className="w-full lg:w-1/2 space-y-6 lg:mt-8">
            <div className="bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-700">
              {/* Feature title with icon */}
              <div className="flex items-center space-x-4 mb-4">
                <Award className="text-cyan-400 w-12 h-12 flex-shrink-0" />
                <h3 className="text-3xl font-bold text-white leading-tight">
                  Premium Equipment & Personalized Training
                </h3>
              </div>
              {/* Detailed description */}
              <p className="text-gray-400 leading-relaxed text-lg">
                At Elevate Gym, we believe in providing more than just a workout space. Our facility is equipped with cutting-edge machinery, and our certified trainers are dedicated to crafting personalized plans that help you reach your goals faster and safer.
              </p>
            </div>
            
            {/* Call-to-action button */}
            <div className="mt-8">
              <a
                href="/ElevateGym#membership"
                className="inline-block px-10 py-4 text-xl font-bold text-black bg-cyan-400 rounded-full shadow-lg hover:bg-cyan-300 transition-colors duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElevateGymSection;
