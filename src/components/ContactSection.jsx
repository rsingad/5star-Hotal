import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // This requires 'lucide-react' to be installed

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#F5F5F5] text-[#1A2C42]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            We are always here to help. Feel free to contact us with any questions or special requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information & Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-serif font-semibold mb-6">Contact Details</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-[#DAA520]" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-600">contact@theparadisehotel.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={24} className="text-[#DAA520]" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={24} className="text-[#DAA520]" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-gray-600">123 Paradise Avenue, Serenity Island, 54321</p>
                </div>
              </div>
            </div>

            {/* A simple contact form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DAA520] focus:ring focus:ring-[#DAA520] focus:ring-opacity-50"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DAA520] focus:ring focus:ring-[#DAA520] focus:ring-opacity-50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#DAA520] focus:ring focus:ring-[#DAA520] focus:ring-opacity-50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#DAA520] text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:bg-[#C9911F]"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Map Placeholder */}
          <div className="lg:h-full h-80 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="https://placehold.co/800x600/1A2C42/EAEAEA?text=Location+Map"
              alt="Hotel Location Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
