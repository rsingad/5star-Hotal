import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Used for smooth scrolling to sections on the same page.
import { useLocation } from 'react-router-dom'; // A hook to get information about the current URL.
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Icons for social media links.

function Footer() {
  const location = useLocation();

  // --- Conditional Logic to Determine Page Context ---
  // यह कोड URL के आधार पर सही फूटर डेटा का चयन करता है।
  const isTamarindusPage = location.pathname.startsWith('/TamarindusRestaurant');
  const isCloud9Page = location.pathname.startsWith('/Cloud-9');
  const isJazzBanquetHallPage = location.pathname.startsWith('/JazzBanquetHall');
  const isBlissSpaPage = location.pathname.startsWith('/BlissSpa');
  const isWeddingGardenPage = location.pathname.startsWith('/ParadiseWeddingGarden');
  // ADDED: New condition for the Elevate Gym page.
  // जोड़ा गया: एलिवेट जिम पेज के लिए नई शर्त।
  const isElevateGymPage = location.pathname.startsWith('/ElevateGym');


  // --- Data for the main hotel footer ---
  const mainHotelFooterData = {
    title: "The Paradise",
    description: "Experience the pinnacle of luxury and hospitality in Udaipur.",
    quickLinks: [
      { text: "Home", to: "/#home" },
      { text: "Rooms", to: "/#rooms" },
      { text: "Dining", to: "/#dining" },
      { text: "Spa", to: "/#spa" },
      { text: "Contact", to: "/#contact" },
    ],
    contactInfo: {
      address: "100 FT Road, Shobhagpura, Udaipur",
      phone: "+91 7597 93 9090",
      email: "info@hotelparadisebliss.com",
    },
    copyright: `© ${new Date().getFullYear()} The Paradise. All rights reserved.`,
    designCredit: "Designed with passion by The Paradise Group.",
    backgroundColor: "bg-[#1A2C42]", // Tailwind CSS class for background color
    headingColor: "text-[#DAA520]",  // Tailwind CSS class for heading color
    textColor: "text-gray-300",
    borderColor: "border-gray-700",
  };

  // --- Data for the Tamarindus restaurant footer ---
  const tamarindusFooterData = {
    title: "Tamarindus",
    description: "An exquisite culinary destination at The Paradise, where every dish is a masterpiece and every visit an unforgettable experience.",
    quickLinks: [
      { text: "Home", to: "/TamarindusRestaurant#home" },
      { text: "Menu", to: "/TamarindusRestaurant#menu" },
      { text: "Gallery", to: "/TamarindusRestaurant#gallery" },
      { text: "Reservations", to: "/TamarindusRestaurant#contact" },
    ],
    contactInfo: {
      address: "Ground Floor, The Paradise Hotel",
      phone: "+91 7597 93 9090",
      email: "reservations@tamarindus.com",
    },
    copyright: `© ${new Date().getFullYear()} Tamarindus. All rights reserved.`,
    designCredit: "A culinary experience by The Paradise Group.",
    backgroundColor: "bg-[#0A2E50]",
    headingColor: "text-[#DAA520]",
    textColor: "text-gray-300",
    borderColor: "border-gray-700",
  };

  // --- Data for the Cloud 9 page ---
  const cloud9FooterData = {
    title: "Cloud 9",
    description: "The ultimate rooftop lounge experience, offering panoramic views and handcrafted cocktails at The Paradise.",
    quickLinks: [
      { text: "Home", to: "/Cloud-9#home" },
      { text: "About Us", to: "/Cloud-9#about" },
      { text: "Gallery", to: "/Cloud-9#gallery" },
      { text: "Events", to: "/Cloud-9#events" },
      { text: "Contact", to: "/Cloud-9#contact" },
    ],
    contactInfo: {
      address: "Rooftop, The Paradise, Udaipur",
      phone: "+91 7597 93 9090",
      email: "cloud9@hotelparadisebliss.com",
    },
    copyright: `© ${new Date().getFullYear()} Cloud 9 Lounge. All rights reserved.`,
    designCredit: "A sky-high experience by The Paradise Group.",
    backgroundColor: "bg-[#041E42]",
    headingColor: "text-white",
    textColor: "text-gray-400",
    borderColor: "border-gray-600",
  };

  // --- Data for the Jazz Banquet Hall page ---
  const jazzBanquetHallFooterData = {
    title: "Jazz Banquet Hall",
    description: "The perfect venue for your events and celebrations, with exceptional service and an elegant ambiance.",
    quickLinks: [
      { text: "Home", to: "/JazzBanquetHall#home" },
      { text: "Events", to: "/JazzBanquetHall#events" },
      { text: "Gallery", to: "/JazzBanquetHall#gallery" },
      { text: "Contact", to: "/JazzBanquetHall#contact" },
    ],
    contactInfo: {
      address: "Ground Floor, The Paradise, Udaipur",
      phone: "+91 7597 93 9090",
      email: "jazzbanquet@hotelparadisebliss.com",
    },
    copyright: `© ${new Date().getFullYear()} Jazz Banquet Hall. All rights reserved.`,
    designCredit: "An elegant experience by The Paradise Group.",
    backgroundColor: "bg-zinc-800",
    headingColor: "text-amber-400",
    textColor: "text-gray-300",
    borderColor: "border-gray-600",
  };

  // --- Data for the Bliss Spa page ---
  const blissSpaFooterData = {
    title: "Bliss Spa",
    description: "Unwind and refresh with our personalized wellness and rejuvenation therapies.",
    quickLinks: [
      { text: "Home", to: "/BlissSpa#home" },
      { text: "Treatments", to: "/BlissSpa#treatments" },
      { text: "Packages", to: "/BlissSpa#packages" },
      { text: "Contact", to: "/BlissSpa#contact" },
    ],
    contactInfo: {
      address: "2nd Floor, The Paradise, Udaipur",
      phone: "+91 7597 93 9090",
      email: "blisspa@hotelparadisebliss.com",
    },
    copyright: `© ${new Date().getFullYear()} Bliss Spa. All rights reserved.`,
    designCredit: "A wellness experience by The Paradise Group.",
    backgroundColor: "bg-teal-900",
    headingColor: "text-teal-200",
    textColor: "text-teal-100",
    borderColor: "border-teal-700",
  };

  // --- Data for the Wedding Garden page ---
  const weddingGardenFooterData = {
    title: "Wedding Garden",
    description: "An enchanting outdoor venue for beautiful weddings and unforgettable ceremonies.",
    quickLinks: [
      { text: "Home", to: "/ParadiseWeddingGarden#home" },
      { text: "Venue", to: "/ParadiseWeddingGarden#venue" },
      { text: "Gallery", to: "/ParadiseWeddingGarden#gallery" },
      { text: "Contact", to: "/ParadiseWeddingGarden#contact" },
    ],
    contactInfo: {
      address: "The Paradise, Udaipur",
      phone: "+91 7597 93 9090",
      email: "weddings@hotelparadisebliss.com",
    },
    copyright: `© ${new Date().getFullYear()} Wedding Garden. All rights reserved.`,
    designCredit: "A special experience by The Paradise Group.",
    backgroundColor: "bg-green-900",
    headingColor: "text-white",
    textColor: "text-green-200",
    borderColor: "border-green-700",
  };

  // --- Data for the Elevate Gym page ---
  // एलिवेट जिम पेज के लिए नया डेटा।
  const elevateGymFooterData = {
    title: "Elevate Gym",
    description: "Your fitness journey begins here. A state-of-the-art gym with expert trainers and cutting-edge equipment.",
    quickLinks: [
      { text: "Home", to: "/ElevateGym#home" },
      { text: "Membership", to: "/ElevateGym#membership" },
      { text: "Classes", to: "/ElevateGym#classes" },
      { text: "Contact", to: "/ElevateGym#contact" },
    ],
    contactInfo: {
      address: "3rd Floor, The Paradise, Udaipur",
      phone: "+91 7597 93 9090",
      email: "elevategym@hotelparadisebliss.com",
    },
    copyright: `© ${new Date().getFullYear()} Elevate Gym. All rights reserved.`,
    designCredit: "A fitness experience by The Paradise Group.",
    backgroundColor: "bg-gray-900",
    headingColor: "text-cyan-400",
    textColor: "text-gray-400",
    borderColor: "border-gray-700",
  };

  // --- Conditional Rendering ---
  // यह ब्लॉक कोड URL के आधार पर सही डेटा ऑब्जेक्ट का चयन करता है।
  let currentFooterData;
  if (isTamarindusPage) {
    currentFooterData = tamarindusFooterData;
  } else if (isCloud9Page) {
    currentFooterData = cloud9FooterData;
  } else if (isJazzBanquetHallPage) {
    currentFooterData = jazzBanquetHallFooterData;
  } else if (isBlissSpaPage) {
    currentFooterData = blissSpaFooterData;
  } else if (isWeddingGardenPage) {
    currentFooterData = weddingGardenFooterData;
  } else if (isElevateGymPage) { // NEW condition
    currentFooterData = elevateGymFooterData;
  } else {
    currentFooterData = mainHotelFooterData;
  }

  return (
    <footer className={`${currentFooterData.backgroundColor} ${currentFooterData.textColor} py-16`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-3 gap-12 mb-12 items-start">
          {/* About Section */}
          <div className="text-left md:text-center">
            <h3 className={`text-3xl font-serif font-bold ${currentFooterData.headingColor} mb-5`}>
              {currentFooterData.title}
            </h3>
            <p className="leading-relaxed text-lg">
              {currentFooterData.description}
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-left md:text-center">
            <h3 className={`text-2xl font-semibold ${currentFooterData.headingColor} mb-5`}>Quick Links</h3>
            <ul className="space-y-3">
              {currentFooterData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link smooth to={link.to} className="hover:text-[#FFD700] transition duration-300 text-lg">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-left md:text-center">
            <h3 className={`text-2xl font-semibold ${currentFooterData.headingColor} mb-5`}>Contact Info</h3>
            <p className="mb-3 text-lg">{currentFooterData.contactInfo.address}</p>
            <p className="mb-3 text-lg">{currentFooterData.contactInfo.phone}</p>
            <p className="text-lg">{currentFooterData.contactInfo.email}</p>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-center space-x-6 mt-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#DAA520] hover:text-white transition-colors duration-300 transform hover:scale-110">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className={`border-t ${currentFooterData.borderColor} pt-8 text-gray-400 text-base`}>
          <p>{currentFooterData.copyright}</p>
          <p className="mt-2">{currentFooterData.designCredit}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
