import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaUsers, FaGlassCheers, FaMicrophone, FaStar } from 'react-icons/fa'; // Icons for features

function JazzBanquetHallSection() {
  const features = [
    { icon: <FaUsers size={35} className="text-[#DAA520]" />, name: "Spacious Capacity", description: "Accommodates up to 300 guests for grand events and intimate gatherings." },
    { icon: <FaGlassCheers size={35} className="text-[#DAA520]" />, name: "Exquisite Catering", description: "Customizable menus crafted by our culinary experts for every occasion." },
    { icon: <FaMicrophone size={35} className="text-[#DAA520]" />, name: "State-of-the-Art AV", description: "Equipped with advanced audio-visual technology for seamless presentations and entertainment." },
    { icon: <FaStar size={35} className="text-[#DAA520]" />, name: "Dedicated Event Team", description: "Our professional planners ensure every detail of your event is perfect." },
  ];

  return (
    <section id="jazz-banquet-hall" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-[#1A2C42]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-16">
          Jazz Banquet Hall: Where Grand Events Unfold
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Content */}
          <div className="text-left">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A2E50] mb-5">
              Host Your Unforgettable Occasion
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The Jazz Banquet Hall at The Paradise Hotel is the epitome of elegance and versatility, designed to host a wide range of events from lavish weddings and corporate galas to intimate family celebrations. With its sophisticated ambiance and flexible layout, it provides the perfect canvas for your vision.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Our dedicated event planning team works closely with you to ensure every detail is meticulously managed, from bespoke décor and lighting to exquisite culinary experiences tailored to your preferences. We are committed to making your event seamless, successful, and truly memorable.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Experience unparalleled service and a refined setting that will leave a lasting impression on your guests. Let Jazz Banquet Hall be the backdrop for your next grand celebration.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Example banquet hall image
              alt="Jazz Banquet Hall Interior"
              className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-96 md:max-h-[500px] border-4 border-[#DAA520]"
            />
          </div>
        </div>

        {/* Features Section */}
        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A2E50] mb-12">
          Key Features & Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-[#1A2C42] mb-2">{feature.name}</h4>
              <p className="text-gray-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <Link
          smooth
          to="/contact#event-inquiry" // Link to a specific event inquiry form/section
          className="inline-block bg-[#DAA520] text-[#1A2C42] px-10 py-4 rounded-full font-semibold text-xl hover:bg-[#B8860B] transition duration-300 shadow-xl transform hover:scale-105"
        >
          Plan Your Event
        </Link>
      </div>
    </section>
  );
}

export default JazzBanquetHallSection;
