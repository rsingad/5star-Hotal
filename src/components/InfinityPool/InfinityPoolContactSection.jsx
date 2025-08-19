import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa'; // Icons for contact info

function InfinityPoolContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-[#1A2C42]"> {/* Light blue gradient for a refreshing feel */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#0A2E50] mb-12">
          Connect with Us: Your Infinity Pool Experience
        </h2>
        <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-gray-700">
          Have questions about our 360° Infinity Pool, special events, or private access? Feel free to reach out to our dedicated team.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Contact Info Cards */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaPhone size={35} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-[#0A2E50] mb-2">Call Us</h3>
            <p className="text-gray-700 text-lg">+91 7597 93 9090</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaEnvelope size={35} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-[#0A2E50] mb-2">Email Us</h3>
            <p className="text-gray-700 text-lg">poolaccess@theparadise.com</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaMapMarkerAlt size={35} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-[#0A2E50] mb-2">Location</h3>
            <p className="text-gray-700 text-lg">Rooftop, The Paradise Hotel, Udaipur</p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-blue-100 p-8 rounded-xl shadow-lg max-w-2xl mx-auto mb-16">
          <FaClock size={40} className="text-blue-700 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-[#0A2E50] mb-4">Operating Hours</h3>
          <p className="text-xl text-gray-700 mb-2">Daily: 6:00 AM - 9:00 PM</p>
          <p className="text-xl text-gray-700">Poolside service available from 9:00 AM - 8:00 PM</p>
        </div>

        {/* Placeholder for Inquiry Form */}
        <div className="bg-white p-10 rounded-xl shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-[#1A2C42] mb-6">Inquire About Pool Access & Events</h3>
          <form className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Your Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="john.doe@example.com" />
            </div>
            <div>
              <label htmlFor="inquiryType" className="block text-lg font-medium text-gray-700 mb-2">Type of Inquiry</label>
              <select id="inquiryType" name="inquiryType" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select an option</option>
                <option value="general">General Question</option>
                <option value="privateEvent">Private Event Booking</option>
                <option value="accessInfo">Access Information</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Your Message</label>
              <textarea id="message" name="message" rows="5" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us more about your inquiry..."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-xl hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InfinityPoolContactSection;
