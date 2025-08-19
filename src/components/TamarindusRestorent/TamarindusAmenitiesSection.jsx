import React from 'react';
import { FaWifi, FaParking, FaMusic, FaGlassMartiniAlt, FaChair, FaConciergeBell, FaUtensils, FaUserTie } from 'react-icons/fa';
import { MdRestaurant } from "react-icons/md"; // Corrected import for private dining icon, using MdRestaurant

function TamarindusAmenitiesSection() {
  // Dummy data for restaurant-specific amenities
  const amenities = [
    { icon: <FaWifi size={35} className="text-[#DAA520]" />, name: "Complimentary Wi-Fi", description: "Stay connected with high-speed internet access throughout your dining experience." },
    { icon: <MdRestaurant size={35} className="text-[#DAA520]" />, name: "Private Dining Rooms", description: "Exclusive spaces for intimate gatherings, business meetings, or special celebrations." },
    { icon: <FaParking size={35} className="text-[#DAA520]" />, name: "Valet Parking", description: "Convenient and secure valet parking service for a hassle-free arrival and departure." },
    { icon: <FaMusic size={35} className="text-[#DAA520]" />, name: "Live Music Evenings", description: "Enjoy enchanting live music performances on select evenings, enhancing your dining ambiance." },
    { icon: <FaGlassMartiniAlt size={35} className="text-[#DAA520]" />, name: "Full-Service Bar", description: "A curated selection of premium spirits, wines, and signature cocktails crafted by our mixologists." },
    { icon: <FaChair size={35} className="text-[#DAA520]" />, name: "Outdoor Seating", description: "Dine al fresco in our charming outdoor area, perfect for a relaxed meal under the stars." },
    { icon: <FaUtensils size={35} className="text-[#DAA520]" />, name: "Customized Menus", description: "Tailored culinary experiences and special menus available for events and private bookings." },
    { icon: <FaUserTie size={35} className="text-[#DAA520]" />, name: "Professional Staff", description: "Attentive and knowledgeable staff dedicated to providing impeccable service and personalized care." },
  ];

  return (
    <section id="restaurant-amenities" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-[#1A2C42]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-16">
          Tamarindus: Amenities & Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="mb-6">{amenity.icon}</div>
              <h3 className="text-2xl font-semibold text-[#0A2E50] mb-3">{amenity.name}</h3>
              <p className="text-gray-700 text-center leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TamarindusAmenitiesSection;
