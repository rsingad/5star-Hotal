import React from 'react';
import { FaDumbbell, FaHeartbeat, FaRunning, FaWeightHanging } from 'react-icons/fa'; // Icons for gym features

function ElevateGymAboutSection() {
  const gymFeatures = [
    { icon: <FaDumbbell size={35} className="text-[#DAA520]" />, name: "Strength Training Zone", description: "Equipped with a wide range of free weights, machines, and racks for comprehensive strength workouts." },
    { icon: <FaRunning size={35} className="text-[#DAA520]" />, name: "Cardio Arena", description: "State-of-the-art treadmills, ellipticals, bikes, and stair climbers for exhilarating cardio sessions." },
    { icon: <FaHeartbeat size={35} className="text-[#DAA520]" />, name: "Personal Training", description: "Certified trainers available for personalized workout plans and one-on-one coaching to help you achieve your goals." },
    { icon: <FaWeightHanging size={35} className="text-[#DAA520]" />, name: "Functional Training Area", description: "Dedicated space for functional exercises, core workouts, and dynamic movements." },
  ];

  return (
    <section id="about" className="py-20 bg-white text-[#1A2C42]"> {/* Clean white background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-12">
          About Elevate Gym: Your Path to Peak Performance
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              **Elevate Gym** at The Paradise Hotel is more than just a fitness center; it's a dynamic space crafted to inspire and empower your wellness journey. We provide a modern oasis where you can push your limits, enhance your strength, and rejuvenate your mind.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Our gym boasts a comprehensive selection of the **latest Technogym cardio and resistance training machines**, ensuring you have access to cutting-edge equipment for every aspect of your workout. From high-intensity interval training to targeted muscle building, our facilities cater to all fitness levels and preferences.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We believe in a holistic approach to well-being. Beyond the equipment, our inviting atmosphere and dedicated staff are here to support you. Whether you're a seasoned athlete or just beginning your fitness journey, Elevate Gym is your partner in achieving your health and wellness aspirations.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Example gym interior image
              alt="Elevate Gym Interior"
              className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-96 md:max-h-[500px] border-4 border-[#DAA520]"
            />
          </div>
        </div>

        {/* Key Features */}
        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A2E50] mt-20 mb-12">
          What We Offer
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {gymFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-[#1A2C42] mb-2">{feature.name}</h4>
              <p className="text-gray-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ElevateGymAboutSection;
