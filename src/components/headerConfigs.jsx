// src/components/headerConfigs.jsx

// यह फ़ाइल डायनेमिक हेडर के लिए कॉन्फ़िगरेशन सरणी (array) निर्यात करती है।
// इसमें सभी आवश्यक डेटा और स्टाइलिंग क्लास शामिल हैं,
// लेकिन JSX रेंडरिंग को हेडर कंपोनेंट पर छोड़ देता है।

export const headerConfigs = [
  // "The Paradise" Hotel के लिए डिफ़ॉल्ट होम पेज हेडर
  {
    path: '/',
    scrollThreshold: 100,
    logoSrc: "https://placehold.co/120x60/1e293b/ffffff?text=PARADISE", // लोगो के लिए प्लेसहोल्डर
    logoAlt: "Hotel Logo",
    logoText: "The Paradise",
    logoTextClass: "text-[#DAA520]",
    navLinks: [
      { to: '/#home', label: 'Home' },
      { to: '/#about', label: 'About' },
      { to: '/#rooms', label: 'Rooms' },
      { to: '/#dining', label: 'Dining' },
      { to: '/#spa', label: 'Spa' },
      { to: '/#contact', label: 'Contact' },
    ],
    ctaButtonText: "Book Now",
    ctaButtonLink: "/book",
    headerBgClass: 'bg-transparent',
    headerScrolledBgClass: 'bg-[#1A2C42] shadow-lg',
    buttonTextColor: "text-[#DAA520]",
    buttonBg: "bg-transparent",
    buttonBorder: "border-2 border-[#DAA520]",
    buttonHoverBg: "hover:bg-[#DAA520]",
    buttonHoverTextColor: "hover:text-[#1A2C42]",
    buttonInnerSpanBg: "hidden", // इस बटन के लिए इनर स्पैन को छिपाएं
    buttonRounded: "rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md",
    menuIconColor: "text-[#DAA520]",
    headerPaddingTop: "pt-2",
    innerDivRounded: "rounded-xl",
  },

  // Tamarindus Restaurant Header
  {
    path: '/TamarindusRestaurant',
    scrollThreshold: 100,
    logoSrc: "https://placehold.co/120x60/1e293b/ffffff?text=TAMARINDUS", // Tamarindus लोगो के लिए प्लेसहोल्डर
    logoAlt: "Tamarindus Restaurant Logo",
    logoText: "Tamarindus",
    logoTextClass: "text-[#DAA520]",
    navLinks: [
      { to: '/TamarindusRestaurant#home', label: 'Home' },
      { to: '/TamarindusRestaurant#about', label: 'About' },
      { to: '/TamarindusRestaurant#menu', label: 'Menu' },
      { to: '/TamarindusRestaurant#gallery', label: 'Gallery' },
      { to: '/TamarindusRestaurant#contact', label: 'Reservations' },
    ],
    ctaButtonText: "Book a Table",
    ctaButtonLink: "/TamarindusRestaurant#contact",
    headerBgClass: 'bg-transparent',
    headerScrolledBgClass: 'bg-[#0A2E50] shadow-lg',
    buttonTextColor: "text-[#DAA520]",
    buttonBg: "bg-transparent",
    buttonBorder: "border-2 border-[#DAA520]",
    buttonHoverBg: "hover:bg-[#DAA520]",
    buttonHoverTextColor: "hover:text-[#1A2C42]",
    buttonInnerSpanBg: "hidden",
    buttonRounded: "rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md",
    menuIconColor: "text-[#DAA520]",
    headerPaddingTop: "pt-2",
    innerDivRounded: "rounded-xl",
  },

  // Cloud-9 Header
  {
    path: '/Cloud-9',
    scrollThreshold: 50,
    logoSrc: "https://placehold.co/120x60/3B82F6/FFFFFF?text=CLOUD9",
    logoAlt: "Cloud 9 Logo",
    logoText: "Cloud 9",
    logoTextClass: "text-blue-200",
    navLinks: [
      { to: '/Cloud-9#home', label: 'Home' },
      { to: '/Cloud-9#about', label: 'About' },
      { to: '/Cloud-9#menu', label: 'Menu' },
      { to: '/Cloud-9#gallery', label: 'Gallery' },
      { to: '/Cloud-9#contact', label: 'Reservations' },
    ],
    ctaButtonText: "Get Started",
    ctaButtonLink: "/Cloud-9#get-started",
    headerBgClass: 'bg-transparent',
    headerScrolledBgClass: 'bg-blue-800 bg-opacity-90 shadow-lg backdrop-blur-sm',
    buttonTextColor: "text-blue-800",
    buttonBg: "bg-white",
    buttonBorder: "",
    buttonHoverBg: "hover:bg-blue-100",
    buttonHoverTextColor: "",
    buttonInnerSpanBg: "", // यह Cloud 9 के लिए सही रूप से खाली है
    buttonRounded: "rounded-full",
    menuIconColor: "text-white",
    headerPaddingTop: "py-4",
    innerDivRounded: "",
  },
];
