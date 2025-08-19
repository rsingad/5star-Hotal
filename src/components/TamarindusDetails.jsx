import React from 'react';
import { FaClock, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa'; // Icons for details
import { Link } from 'react-router-dom';

function TamarindusDetails() {
  return (
    <section id="tamarindus-details" className="py-16 bg-[#F8F8F8] text-[#001F3F]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-[#001F3F] mb-12">Tamarindus: A Culinary Journey</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <img
              src="https://placehold.co/800x500/001F3F/FFD700?text=Tamarindus+Interior"
              alt="Tamarindus Restaurant Interior"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="text-left">
            <p className="text-lg leading-relaxed mb-6">
              Tamarindus, our signature multi-cuisine restaurant, invites you on an unforgettable culinary journey. Our master chefs meticulously craft each dish, blending rich Indian traditions with global flavors. Experience a symphony of tastes, from authentic local delicacies to exquisite Continental, Chinese, and Mediterranean dishes.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              The elegant ambiance, coupled with impeccable service, makes Tamarindus the perfect setting for a delightful breakfast, a leisurely lunch, or a lavish dinner. We pride ourselves on using the freshest local ingredients to ensure every bite is a celebration of taste and quality.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-lg">
                <FaUtensils className="text-[#FFD700] mr-3" size={24} />
                <span>**Cuisine:** Indian, Continental, Chinese, Mediterranean</span>
              </div>
              <div className="flex items-center text-lg">
                <FaClock className="text-[#FFD700] mr-3" size={24} />
                <span>**Operating Hours:** <br/>Breakfast: 7:00 AM - 10:30 AM <br/>Lunch: 12:30 PM - 3:00 PM <br/>Dinner: 7:00 PM - 11:00 PM</span>
              </div>
              <div className="flex items-center text-lg">
                <FaMapMarkerAlt className="text-[#FFD700] mr-3" size={24} />
                <span>**Location:** Ground Floor, The Taj Paradise</span>
              </div>
            </div>
            <Link to="/booking" className="inline-block bg-[#FFD700] text-[#001F3F] px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 shadow-lg mt-8">
                Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamarindusDetails;
