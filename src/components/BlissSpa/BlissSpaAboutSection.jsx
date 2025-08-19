import React from 'react';

function BlissSpaAboutSection() {
  return (
    // मुख्य सेक्शन: हल्के क्रीम रंग का बैकग्राउंड
    <section id="about" className="py-20 bg-amber-50 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* हेडिंग */}
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-center text-gray-900 mb-12">
          About Bliss Spa: Your Journey to Inner Peace
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* इमेज कंटेनर */}
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3770428/pexels-photo-3770428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Bliss Spa Treatment Room"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* टेक्स्ट कंटेनर */}
          <div className="md:w-1/2 bg-white p-8 sm:p-10 rounded-3xl shadow-md">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              **Bliss Spa** is a sanctuary crafted for your ultimate well-being, nestled within the luxurious confines of The Paradise Hotel. We believe in a holistic approach to health and beauty, offering a serene escape where you can disconnect from the everyday and reconnect with your inner self.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Our philosophy centers on providing personalized experiences that cater to your unique needs. From the moment you step in, you'll be enveloped in an atmosphere of calm, with soothing aromas, gentle music, and expert therapists dedicated to your comfort and rejuvenation. We use only the finest natural products to enhance the efficacy of our treatments.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Whether you seek deep relaxation, revitalization, or a complete transformation, Bliss Spa is your destination for harmony. Allow us to guide you on a journey to unwind, rejuvenate, and restore your mind, body, and spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlissSpaAboutSection;
