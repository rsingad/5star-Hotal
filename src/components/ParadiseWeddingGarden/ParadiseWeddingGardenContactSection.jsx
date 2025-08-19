import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; // Icons for contact info

function ParadiseWeddingGardenContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-[#1A2C42]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-12">
          Plan Your Dream Wedding: Contact Us
        </h2>
        <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-gray-700">
          Our dedicated wedding planning team is here to help you create the perfect celebration. Reach out to us for inquiries, bookings, or to schedule a personalized tour of our garden.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Contact Info Cards */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaPhone size={35} className="text-[#DAA520] mb-4" />
            <h3 className="text-2xl font-semibold text-[#0A2E50] mb-2">Call Us</h3>
            <p className="text-gray-700 text-lg">+91 7597 93 9090</p>
            <p className="text-gray-600 text-sm mt-1">Wedding Inquiries</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaEnvelope size={35} className="text-[#DAA520] mb-4" />
            <h3 className="text-2xl font-semibold text-[#0A2E50] mb-2">Email Us</h3>
            <p className="text-gray-700 text-lg">weddings@theparadise.com</p>
            <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaMapMarkerAlt size={35} className="text-[#DAA520] mb-4" />
            <h3 className="text-2xl font-semibold text-[#0A2E50] mb-2">Visit Us</h3>
            <p className="text-gray-700 text-lg">The Paradise Hotel, Udaipur</p>
            <p className="text-gray-600 text-sm mt-1">(By Appointment Only)</p>
          </div>
        </div>

        {/* Wedding Inquiry Form */}
        <div className="bg-white p-10 rounded-xl shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-[#1A2C42] mb-6">Wedding Inquiry Form</h3>
          <form className="space-y-6 text-left">
            <div>
              <label htmlFor="coupleNames" className="block text-lg font-medium text-gray-700 mb-2">Couple's Names</label>
              <input type="text" id="coupleNames" name="coupleNames" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" placeholder="Bride's Name & Groom's Name" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Your Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" placeholder="+91 12345 67890" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="weddingDate" className="block text-lg font-medium text-gray-700 mb-2">Preferred Wedding Date</label>
                <input type="date" id="weddingDate" name="weddingDate" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" />
              </div>
              <div>
                <label htmlFor="guests" className="block text-lg font-medium text-gray-700 mb-2">Estimated Guests</label>
                <input type="number" id="guests" name="guests" min="1" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" placeholder="e.g., 200" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Tell Us About Your Vision</label>
              <textarea id="message" name="message" rows="6" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" placeholder="Describe your dream wedding, specific requirements, or questions..."></textarea>
            </div>
            <button type="submit" className="w-full bg-[#DAA520] text-[#1A2C42] px-8 py-4 rounded-full font-semibold text-xl hover:bg-[#B8860B] transition duration-300 shadow-lg transform hover:scale-105">
              Submit Wedding Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ParadiseWeddingGardenContactSection;
