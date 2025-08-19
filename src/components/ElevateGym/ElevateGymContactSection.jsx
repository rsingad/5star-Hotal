import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa'; // Icons for contact info

function ElevateGymContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-[#1A2C42]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-12">
          Connect with Elevate Gym
        </h2>
        <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-gray-700">
          Ready to elevate your fitness? Contact us to learn more about our facilities, memberships, or personal training sessions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Contact Info Cards */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaPhone size={35} className="text-[#DAA520] mb-4" />
            <h3 className="text-2xl font-semibold text-[#0A2E50] mb-2">Call Us</h3>
            <p className="text-gray-700 text-lg">+91 7597 93 9090</p>
            <p className="text-gray-600 text-sm mt-1">Gym Desk</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaEnvelope size={35} className="text-[#DAA520] mb-4" />
            <h3 className="text-2xl font-semibold text-[#0A2E50] mb-2">Email Us</h3>
            <p className="text-gray-700 text-lg">gym@theparadise.com</p>
            <p className="text-gray-600 text-sm mt-1">Inquiries & Support</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            <FaMapMarkerAlt size={35} className="text-[#DAA520] mb-4" />
            <h3 className="text-2xl font-semibold text-[#0A2E50] mb-2">Location</h3>
            <p className="text-gray-700 text-lg">The Paradise Hotel, Udaipur</p>
            <p className="text-gray-600 text-sm mt-1">Ground Floor</p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-lg max-w-2xl mx-auto mb-16">
          <FaClock size={40} className="text-[#0A2E50] mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-[#1A2C42] mb-4">Operating Hours</h3>
          <p className="text-xl text-gray-700 mb-2">Monday - Saturday: 6:00 AM - 10:00 PM</p>
          <p className="text-xl text-gray-700">Sunday: 8:00 AM - 8:00 PM</p>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white p-10 rounded-xl shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-[#1A2C42] mb-6">Fitness Inquiry Form</h3>
          <form className="space-y-6 text-left">
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" id="fullName" name="fullName" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" placeholder="Enter your full name" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" placeholder="+91 12345 67890" />
              </div>
            </div>
            <div>
              <label htmlFor="inquiryType" className="block text-lg font-medium text-gray-700 mb-2">Type of Inquiry</label>
              <select id="inquiryType" name="inquiryType" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]">
                <option value="">Select an option</option>
                <option value="membership">Membership Information</option>
                <option value="personalTraining">Personal Training</option>
                <option value="facilities">Facilities & Equipment</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Your Message</label>
              <textarea id="message" name="message" rows="6" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#DAA520] focus:border-[#DAA520]" placeholder="Tell us more about your fitness goals or questions..."></textarea>
            </div>
            <button type="submit" className="w-full bg-[#DAA520] text-[#1A2C42] px-8 py-4 rounded-full font-semibold text-xl hover:bg-[#B8860B] transition duration-300 shadow-lg transform hover:scale-105">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ElevateGymContactSection;
