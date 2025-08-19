import React from 'react';

function JazzBanquetHallAboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-[#1A2C42]"> {/* White background for contrast */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-12">
          About Jazz: Your Premier Event Destination
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              **Jazz Banquet Hall** is not just a venue; it's a canvas where your most cherished moments are brought to life. Located within the opulent embrace of The Paradise Hotel, our hall is meticulously designed to host events of every scale and style, from grand weddings and corporate conferences to intimate anniversaries and vibrant social gatherings.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              With a **spacious capacity** and a **flexible layout**, Jazz can be transformed to perfectly suit your event's theme and requirements. Our commitment to excellence extends to every detail, ensuring a flawless execution from conceptualization to conclusion. We offer state-of-the-art **audio-visual technology**, sophisticated lighting, and elegant decor options to create the desired ambiance.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our **award-winning culinary team** is at your service, crafting bespoke menus that delight every palate. From lavish buffets to plated fine dining, we promise a gastronomic experience that complements the grandeur of your event. Partner with our dedicated event planning specialists who will guide you through every step, ensuring your occasion is truly unforgettable.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Example banquet hall image
              alt="Jazz Banquet Hall Interior Setup"
              className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-96 md:max-h-[500px] border-4 border-[#DAA520]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JazzBanquetHallAboutSection;
