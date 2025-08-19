// AboutSection.js
import React, { useState, useEffect, useRef, useCallback } from 'react';

// Data for the timeline stories
const timelineData = [
  {
    date: 'June 10, 2017',
    title: 'Our Humble Beginnings',
    description: 'Nestled amidst the serene beauty of Udaipur, The Taj Paradise began its journey with a vision to blend traditional Rajasthani hospitality with modern luxury. Our goal was to provide a unique guest experience.',
    imageUrl: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Image of hotel entrance
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1041/1041852.png', // Building/hotel icon
    sectionBgImage: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Background for this item
  },
  {
    date: 'August 25, 2019',
    title: 'Expansion & New Amenities (Spa)',
    description: 'Responding to the growing demand for luxury and comfort, we expanded our offerings to include a state-of-the-art spa and an infinity pool overlooking the Aravallis. This marked a significant milestone in our evolution.',
    imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Image of spa or pool
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2921/2921768.png', // Spa/wellness icon
    sectionBgImage: 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Background for this item
  },
  {
    date: 'March 15, 2020',
    title: 'Grand Opening of "The Royal Spice" Restaurant',
    description: 'Our commitment to culinary artistry led to the grand opening of "The Royal Spice," a fine-dining restaurant offering authentic Rajasthani and international cuisines. We brought together renowned chefs to create unforgettable gastronomic journeys for our guests.',
    imageUrl: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Image of restaurant or food
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3144/3144605.png', // Chef/food icon
    sectionBgImage: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Background for this item
  },
  {
    date: 'October 10, 2021',
    title: 'Launch of "The Oasis Cafe"',
    description: 'To cater to guests seeking a relaxed ambiance, we introduced "The Oasis Cafe," a charming spot offering gourmet coffee, light bites, and a serene atmosphere perfect for casual meetings or quiet contemplation.',
    imageUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Image of a cafe
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1047/1047466.png', // Coffee cup icon
    sectionBgImage: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Background for this item
  },
  {
    date: 'April 5, 2022',
    title: 'Unveiling "The Azure Club"',
    description: 'For entertainment and vibrant evenings, we launched "The Azure Club," an exclusive space featuring live music, signature cocktails, and a sophisticated atmosphere, quickly becoming a favorite among our guests.',
    imageUrl: 'https://images.pexels.com/photos/172288/pexels-photo-172288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Image of a club/bar
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1042/1042339.png', // Martini glass/club icon
    sectionBgImage: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Background for this item
  },
  {
    date: 'November 01, 2023',
    title: 'Introduction of "The Royal Gardens" (Marriage Garden)',
    description: 'Recognizing the demand for exquisite event venues, we developed "The Royal Gardens," a sprawling, beautifully landscaped marriage garden perfect for grand weddings and celebrations, offering a truly majestic setting.',
    imageUrl: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Image of a marriage garden
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3143/3143640.png', // Wedding rings/garden icon
    sectionBgImage: 'https://images.pexels.com/photos/1487532/pexels-photo-1487532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Background for this item
  },
  {
    date: 'December 15, 2024',
    title: 'Sustainability Initiatives',
    description: 'Embracing our responsibility towards the environment, we launched a comprehensive sustainability program focusing on renewable energy, water conservation, and supporting local communities. Our aim is to provide luxury that respects the planet.',
    imageUrl: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Image of green initiative or solar panels
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2908/2908252.png', // Leaf/sustainability icon
    sectionBgImage: 'https://images.pexels.com/photos/3685219/pexels-photo-3685219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Background for this item
  },
  {
    date: 'January 20, 2025',
    title: 'Future Vision',
    description: 'We are committed to continuously enhancing your experience at The Taj Paradise. In the future, we will introduce an exclusive art gallery and an additional wing with more luxury suites, offering unparalleled comfort and cultural immersion for our guests.',
    imageUrl: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Image of future design or art
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3356/3356614.png', // Telescope/future icon
    sectionBgImage: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Background for this item
  },
];

// TimelineItem component to render each individual story
const TimelineItem = React.forwardRef(({ data, isEven }, ref) => { // Using React.forwardRef
  // Determine the order of image and content based on whether it's an even or odd item
  const flexOrderClasses = isEven ? 'md:flex-row' : 'md:flex-row-reverse';

  return (
    <div ref={ref} className={`flex flex-col md:flex-row items-center justify-center relative w-full mb-16 md:mb-24 ${flexOrderClasses}`}>
      {/* Vertical line connector (only visible on medium and larger screens) */}
      <div className="hidden md:block absolute h-full w-0.5 bg-[#D4AF37] left-1/2 transform -translate-x-1/2"></div>

      {/* NEW DESIGN: Larger Circle with Gold Ring Effect */}
      {/* Outer circle: acts as the gold ring */}
      <div className={`relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full bg-[#D4AF37] shadow-xl flex items-center justify-center z-20
                      ${isEven ? 'md:mr-[-40px]' : 'md:ml-[-40px]'}`}> {/* Adjusted overlap to match new size */}
        {/* Inner circle: holds the image, slightly smaller to reveal the gold ring */}
        <div className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-white relative"> {/* Added a thin white border */}
          <img
            src={data.imageUrl}
            alt={data.title}
            className="w-full h-full object-cover"
            // Fallback for image loading errors
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/B0916D/FFFFFF?text=Image+Error"; }}
          />
          {/* Removed the dashed border span for a cleaner look */}
        </div>
      </div>

      {/* Content Box */}
      <div className={`bg-[#121212] text-white p-6 md:p-8 rounded-xl shadow-lg mt-8 md:mt-0
                      w-full md:w-5/12 lg:w-4/12 flex flex-col relative
                      ${isEven ? 'md:text-right md:pr-12 items-end' : 'md:text-left md:pl-12 items-start'}`}> {/* Adjust padding and text alignment based on layout */}
        <h3 className="text-sm md:text-md font-semibold tracking-wider text-[#D4AF37] mb-2">{data.date}</h3>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">{data.title}</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-300">{data.description}</p>
        {data.iconUrl && (
          <div className={`absolute -bottom-6 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-md
                          ${isEven ? 'md:-left-6' : 'md:-right-6'}`}> {/* Position icon based on layout */}
            <img
              src={data.iconUrl}
              alt="Icon"
              className="w-8 h-8 object-contain filter invert"
              // Fallback for icon loading errors
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/32x32/FFD700/000000?text=!"; }}
            />
          </div>
        )}
      </div>
    </div>
  );
});


/**
 * The AboutSection component displays the hotel's history as a timeline.
 * It features a dynamic background image that changes with scroll based on timeline items.
 */
function AboutSection() {
  // Set initial background image to the sectionBgImage of the first timeline item
  const [currentBgImage, setCurrentBgImage] = useState(timelineData[0].imageUrl);
  const sectionRef = useRef(null);
  // Use a map to store refs for each TimelineItem, initialized once
  const timelineItemRefs = useRef(new Map());

  // Callback ref for each TimelineItem to manage dynamic refs
  const setTimelineItemRef = useCallback((node, index) => {
    if (node) {
      timelineItemRefs.current.set(index, node);
    } else {
      timelineItemRefs.current.delete(index);
    }
  }, []); // Empty dependency array ensures this callback is stable across renders

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find the index of the intersecting item based on the ref map
          let intersectingIndex = 0;
          for (let [index, node] of timelineItemRefs.current.entries()) {
            if (node === entry.target) {
              intersectingIndex = index;
              break;
            }
          }

          if (intersectingIndex !== 0 && timelineData[intersectingIndex].imageUrl) {
            setCurrentBgImage(timelineData[intersectingIndex].imageUrl);
            console.log(`Background changed to: ${timelineData[intersectingIndex].imageUrl}`);
          }
        }
      });
    }, observerOptions);

    // Observe each timeline item from the current refs map
    // Ensure that observer.observe is called only once per node
    timelineItemRefs.current.forEach(node => {
      if (node) {
        observer.observe(node);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      timelineItemRefs.current.forEach(node => {
        if (node) {
          observer.unobserve(node);
        }
      });
    };
  }, [setTimelineItemRef]); // Re-run effect if setTimelineItemRef changes (though it shouldn't often)

  // Define CSS for background image transition
  const backgroundTransitionStyle = {
    transition: 'background-image 0.8s ease-in-out', // Smooth fade transition for background image
    backgroundImage: `url('${currentBgImage}')`,
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-cover bg-center bg-fixed min-h-screen" // min-h-screen for scrollability
      style={backgroundTransitionStyle} // Apply dynamic background image and transition
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-20"></div>

      <div className="relative z-30 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-5xl font-serif font-bold text-[#FFD700] mb-16 text-center">
          Our Story: A Journey of Excellence
        </h2>

        {/* Timeline History Container */}
        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              data={item}
              isEven={index % 2 === 0}
              ref={node => setTimelineItemRef(node, index)} // Pass ref using callback pattern
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
