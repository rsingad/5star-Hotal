import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Icons for contact info

function Cloud9ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-12">
          Reach for the Sky: Contact Cloud 9
        </h2>
        <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-gray-700">
          We look forward to welcoming you to Cloud 9. Whether you have a question, want to make a reservation, or simply want to say hello, feel free to reach out to us.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Contact Info Cards */}
          <div className="flex flex-col items-center p-8 bg-blue-50 rounded-xl shadow-lg">
            <FaPhone size={35} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Phone</h3>
            <p className="text-gray-700 text-lg">+91 7597 93 9090</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-blue-50 rounded-xl shadow-lg">
            <FaEnvelope size={35} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Email</h3>
            <p className="text-gray-700 text-lg">info@cloud9rooftop.com</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-blue-50 rounded-xl shadow-lg">
            <FaMapMarkerAlt size={35} className="text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Location</h3>
            <p className="text-gray-700 text-lg">Rooftop, The Paradise Hotel, Udaipur</p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-blue-100 p-8 rounded-xl shadow-lg max-w-2xl mx-auto mb-16">
          <FaClock size={40} className="text-blue-700 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-blue-900 mb-4">Operating Hours</h3>
          <p className="text-xl text-gray-700 mb-2">Monday - Friday: 9:00 AM - 10:00 PM</p>
          <p className="text-xl text-gray-700">Saturday - Sunday: 8:00 AM - 11:00 PM</p>
        </div>

        {/* Placeholder for Map or Contact Form */}
        <div className="bg-gray-100 p-10 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Find Us on the Map</h3>
          {/* You can replace this with an actual Google Maps iframe or a contact form */}
          <img
            src="https://placehold.co/800x450/E0F2F7/2196F3?text=Map+Placeholder"
            alt="Map Location"
            className="w-full h-auto rounded-lg shadow-md"
          />
          {/* Example of a simple contact form structure (uncomment and expand as needed) */}
          {/*
          <h3 className="text-3xl font-bold text-blue-900 mt-12 mb-6">Send Us a Message</h3>
          <form className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
              Send Message
            </button>
          </form>
          */}
        </div>
      </div>
    </section>
  );
}

export default Cloud9ContactSection;
