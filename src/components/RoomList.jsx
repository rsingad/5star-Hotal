// src/components/RoomList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { roomsData } from './roomsData'; // Import the shared data
import { BedDouble, Hotel, DollarSign } from 'lucide-react';

function RoomList() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans antialiased py-12">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-serif font-extrabold text-[#1f2937]">Our Rooms & Suites</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Experience luxury and comfort in our meticulously designed rooms, each crafted to provide a unique stay.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map(room => (
            <Link key={room.path} to={`/rooms/${room.path}`} className="block">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-[#1f2937] group-hover:text-[#DAA520] transition-colors duration-300">
                    {room.name}
                  </h2>
                  <p className="text-gray-500 mt-2 text-sm line-clamp-3">
                    {room.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
                    <span className="flex items-center">
                      <BedDouble size={16} className="text-[#DAA520] mr-2" />
                      {room.features[0]}
                    </span>
                    <span className="flex items-center font-bold text-[#1f2937]">
                      <DollarSign size={16} className="text-[#DAA520]" />
                      {room.price} / night
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomList;
