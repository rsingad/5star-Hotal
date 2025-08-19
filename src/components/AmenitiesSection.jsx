import React from 'react';
import { FaWifi, FaTv, FaCoffee, FaConciergeBell, FaDumbbell, FaSpa, FaSwimmingPool, FaUtensils } from 'react-icons/fa';
import { LuHotel } from 'react-icons/lu'; // For general hotel icon

function AmenitiesSection() {
  // Dummy data for amenities based on the brochure
  const amenities = [
    { icon: <FaWifi size={35} className="text-[#DAA520]" />, name: "High-Speed Wi-Fi", description: "Complimentary high-speed Wi-Fi access throughout the hotel for all resident guests." },
    { icon: <FaTv size={35} className="text-[#DAA520]" />, name: "Premium Entertainment", description: "50-inch LCD Televisions with a vast selection of over 250 international satellite channels." },
    { icon: <FaCoffee size={35} className="text-[#DAA520]" />, name: "In-Room Refreshments", description: "Complimentary personal tea/coffee makers and a selection of gourmet beverages." },
    { icon: <LuHotel size={35} className="text-[#DAA520]" />, name: "Impeccable Housekeeping", description: "Dedicated housekeeping service provided twice daily to ensure pristine comfort." },
    { icon: <FaDumbbell size={35} className="text-[#DAA520]" />, name: "State-of-the-Art Fitness Center", description: "Equipped with the latest cardio and resistance training equipment for an invigorating workout." },
    { icon: <FaSpa size={35} className="text-[#DAA520]" />, name: "Luxurious Spa Offerings", description: "Indulge in a range of rejuvenating massages and therapeutic aromatherapy treatments." },
    { icon: <FaSwimmingPool size={35} className="text-[#DAA520]" />, name: "Rooftop Infinity Pool", description: "A breathtaking infinity pool with an expansive sun deck and panoramic city views." },
    { icon: <FaConciergeBell size={35} className="text-[#DAA520]" />, name: "Personalized Concierge Service", description: "Our dedicated concierge team offers personalized assistance for all your needs, from reservations to local insights." },
    { icon: <FaUtensils size={35} className="text-[#DAA520]" />, name: "24-Hour In-Room Dining", description: "Savor exquisite culinary delights from our extensive menu, delivered directly to your room, any time of day." },
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"> {/* Soft gradient background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center"> {/* Consistent padding */}
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-12"> {/* Deep primary blue heading */}
          Exceptional Amenities & Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"> {/* Enhanced card styling */}
              <div className="mb-6">{amenity.icon}</div> {/* Increased margin-bottom */}
              <h3 className="text-2xl font-semibold text-[#1A2C42] mb-3">{amenity.name}</h3> {/* Larger font, deep blue */}
              <p className="text-gray-700 text-center leading-relaxed">{amenity.description}</p> {/* Better readability */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
