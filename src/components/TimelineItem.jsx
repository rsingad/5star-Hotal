// TimelineItem.jsx
import React from 'react';

const TimelineItem = ({ data, isEven }) => {
  // Determine the order of image and content based on whether it's an even or odd item
  // On small screens, items stack vertically (flex-col).
  // On medium screens and up (md:), layout alternates between row and reverse row.
  const flexOrderClasses = isEven ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center relative w-full mb-16 md:mb-24 ${flexOrderClasses}`}>
      {/* Vertical line connector (only visible on medium and larger screens) */}
      {/* This creates the central timeline line effect */}
      <div className="hidden md:block absolute h-full w-0.5 bg-[#D4AF37] left-1/2 transform -translate-x-1/2"></div>

      {/* Circle with image and dashed border */}
      {/* This div contains the circular image and its decorative dashed border */}
      <div className={`relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full bg-white shadow-xl flex items-center justify-center z-20
                      ${isEven ? 'md:mr-[-20px]' : 'md:ml-[-20px]'}`}> {/* Overlap with the central line */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#D4AF37] relative">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="w-full h-full object-cover"
            // Fallback for image loading errors
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/B0916D/FFFFFF?text=Image+Error"; }}
          />
          {/* Dashed border effect using a pseudo-element like span */}
          {/* 'animate-spin-slow' would typically be defined in tailwind.config.js or custom CSS */}
          <span className="absolute inset-0 border-2 border-dashed border-white rounded-full animate-spin-slow"></span>
        </div>
      </div>

      {/* Content Box */}
      {/* This div holds the date, title, description, and the small icon */}
      <div className={`bg-[#121212] text-white p-6 md:p-8 rounded-xl shadow-lg mt-8 md:mt-0
                      w-full md:w-5/12 lg:w-4/12 flex flex-col relative
                      ${isEven ? 'md:text-right md:pr-12 items-end' : 'md:text-left md:pl-12 items-start'}`}> {/* Adjust padding and text alignment based on layout */}
        <h3 className="text-sm md:text-md font-semibold tracking-wider text-[#D4AF37] mb-2">{data.date}</h3>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">{data.title}</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-300">{data.description}</p>
        {data.iconUrl && (
          <div className={`absolute -bottom-6 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-md
                          ${isEven ? 'md:-left-6' : 'md:-right-6'}`}> {/* Position icon based on layout */}
            <img
              src={data.iconUrl}
              alt="Icon"
              className="w-8 h-8 object-contain filter invert"
              // Fallback for icon loading errors
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/32x32/FFD700/000000?text=!"; }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
