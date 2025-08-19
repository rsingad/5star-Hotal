import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Icon imports
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling to sections

function TamarindusContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#F8F8F8] text-[#001F3F]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-8">Reservations & Contact</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="text-left">
            <h3 className="text-3xl font-serif font-semibold mb-4">Plan Your Visit</h3>
            <p className="text-lg leading-relaxed mb-4">
              We look forward to welcoming you to Tamarindus. For reservations, please use the form or contact us directly.
            </p>
            <div className="space-y-4 mt-6">
              <p className="text-lg flex items-center"><FaMapMarkerAlt className="text-[#FFD700] mr-3" size={20} /> Ground Floor, The Taj Paradise, 100 FT Road, Udaipur</p>
              <p className="text-lg flex items-center"><FaPhone className="text-[#FFD700] mr-3" size={20} /> +91 7597 93 9090</p>
              <p className="text-lg flex items-center"><FaEnvelope className="text-[#FFD700] mr-3" size={20} /> reservations@tamarindus.com</p>
              <p className="text-lg flex items-center"><FaClock className="text-[#FFD700] mr-3" size={20} /> Open Daily: 7:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl text-left">
            <h3 className="text-2xl font-serif font-semibold mb-6">Make a Reservation</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="res-name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="res-name" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#FFD700]" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="res-email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="res-email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#FFD700]" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="res-date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                <input type="date" id="res-date" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#FFD700]" />
              </div>
              <div>
                <label htmlFor="res-time" className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                <input type="time" id="res-time" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#FFD700]" />
              </div>
              <div>
                <label htmlFor="res-guests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests</label>
                <input type="number" id="res-guests" min="1" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#FFD700]" placeholder="e.g., 2" />
              </div>
              <button type="submit" className="bg-[#001F3F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0A3D62] transition duration-300 shadow-lg">
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamarindusContactSection;
