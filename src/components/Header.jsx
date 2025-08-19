// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


// Custom CSS for animations and link underlines.
const customStyles = `
/* Keyframes for the continuous subtle pulse effect */
@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05); /* Made the pulse more subtle */
  }
}

/* New keyframes for the hover-triggered spin animation */
@keyframes spin-hover {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  75% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}

/* Custom styles for active link underline effect */
.active-link-underline::after,
.active-link-underline-blue::after,
.active-link-underline-brown::after,
.active-link-underline-yellow::after,
.active-link-underline-green::after,
.active-link-underline-blue-light::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 3px;
  border-radius: 9999px;
  transition: all 0.3s ease-in-out;
}

.active-link-underline::after {
  background-color: #DAA520; /* Gold color */
}

.active-link-underline-blue::after {
  background-color: #A3C7D6; /* Light blue color */
}

.active-link-underline-brown::after {
  background-color: #B4977E; /* Brown color */
}

.active-link-underline-yellow::after {
  background-color: #F0E68C; /* Jazz yellow color */
}

.active-link-underline-green::after {
  background-color: #00FF7F; /* Gym green color */
}

.active-link-underline-blue-light::after {
  background-color: #00BFFF; /* Pool light blue color */
}
`;

// Inline SVG component for the hamburger menu icon.
const MenuIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Inline SVG component for the close (X) icon.
const CloseIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // This function closes the mobile menu.
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Helper function to check if a link is active.
  const isActiveLink = (to) => {
    // We check both the full path and hash, as HashLink can navigate to a different page and then to a hash.
    const currentPathAndHash = `${location.pathname}${location.hash}`;
    const linkPathAndHash = to.startsWith('/') ? to : `${location.pathname}${to}`;
    return currentPathAndHash === linkPathAndHash;
  };

  // Determine the current page based on the path
  const isTamarindusPage = location.pathname.startsWith('/TamarindusRestaurant');
  const isCloud9Page = location.pathname.startsWith('/Cloud-9');
  const isBlissSpaPage = location.pathname.startsWith('/BlissSpa');
  const isJazzBanquetHallPage = location.pathname.startsWith('/JazzBanquetHall');
  const isParadiseWeddingGardenPage = location.pathname.startsWith('/ParadiseWeddingGarden');
  const isElevateGymPage = location.pathname.startsWith('/ElevateGym');
  const isInfinityPoolPage = location.pathname.startsWith('/InfinityPool');

  // Define data for Main Hotel/Tamarindus Header
  const hotelHeaderData = {
    logoSrc: "./logo.png", // Using a placeholder for demonstration
    logoAlt: "Hotel Logo",
    logoText: "The Paradise",
    logoTextClass: "text-[#DAA520]",
    navLinks: (
      <>
        <li><Link smooth to="/#home" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/#home") ? "active-link-underline" : ""}`}>Home</Link></li>
        <li><Link smooth to="/#about" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/#about") ? "active-link-underline" : ""}`}>About</Link></li>
        <li><Link smooth to="/#rooms" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/#rooms") ? "active-link-underline" : ""}`}>Rooms</Link></li>
        <li><Link smooth to="/#dining" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/#dining") ? "active-link-underline" : ""}`}>Dining</Link></li>
        <li><Link smooth to="/#spa" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/#spa") ? "active-link-underline" : ""}`}>Spa</Link></li>
        <li><Link smooth to="/#contact" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/#contact") ? "active-link-underline" : ""}`}>Contact</Link></li>
      </>
    ),
    tamarindusNavLinks: (
      <>
        <li><Link smooth to="/TamarindusRestaurant#home" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/TamarindusRestaurant#home") ? "active-link-underline" : ""}`}>Home</Link></li>
        <li><Link smooth to="/TamarindusRestaurant#about" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/TamarindusRestaurant#about") ? "active-link-underline" : ""}`}>About</Link></li>
        <li><Link smooth to="/TamarindusRestaurant#menu" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/TamarindusRestaurant#menu") ? "active-link-underline" : ""}`}>Menu</Link></li>
        <li><Link smooth to="/TamarindusRestaurant#gallery" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/TamarindusRestaurant#gallery") ? "active-link-underline" : ""}`}>Gallery</Link></li>
        <li><Link smooth to="/TamarindusRestaurant#contact" className={`relative text-lg text-gray-200 hover:text-white transition-colors duration-300 ${isActiveLink("/TamarindusRestaurant#contact") ? "active-link-underline" : ""}`}>Reservations</Link></li>
      </>
    ),
    ctaButtonLink: isTamarindusPage ? "/TamarindusRestaurant#contact" : "/book",
    ctaButtonText: isTamarindusPage ? "Book a Table" : "Book Now",
    headerInnerBgScrolled: 'bg-[#1A2C42] shadow-lg',
    headerInnerBgDefault: 'bg-transparent shadow-none',
    headerInnerBgTamarindus: 'bg-[#0A2E50] shadow-lg',
    buttonTextColor: "text-[#DAA520]",
    buttonBg: "bg-transparent",
    buttonBorder: "border-2 border-[#DAA520]",
    buttonHoverBg: "hover:bg-[#DAA520]",
    buttonHoverTextColor: "hover:text-[#1A2C42]",
    buttonInnerSpanBg: "hidden",
    buttonRounded: "rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md",
    menuIconColor: "text-[#DAA520]",
    scrollThreshold: 100,
    headerPaddingTop: "pt-2",
    innerDivRounded: "rounded-xl",
  };

  // Define data for Cloud 9 Header
  const cloud9HeaderData = {
    logoSrc: "https://placehold.co/120x60/3B82F6/FFFFFF?text=CLOUD9",
    logoAlt: "Cloud 9 Logo",
    logoText: "Cloud 9",
    logoTextClass: "text-blue-200",
    navLinks: (
      <>
        <li><Link smooth to="/Cloud-9#home" className={`relative text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium ${isActiveLink("/Cloud-9#home") ? "active-link-underline-blue" : ""}`}>Home</Link></li>
        <li><Link smooth to="/Cloud-9#about" className={`relative text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium ${isActiveLink("/Cloud-9#about") ? "active-link-underline-blue" : ""}`}>About</Link></li>
        <li><Link smooth to="/Cloud-9#menu" className={`relative text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium ${isActiveLink("/Cloud-9#menu") ? "active-link-underline-blue" : ""}`}>Menu</Link></li>
        <li><Link smooth to="/Cloud-9#gallery" className={`relative text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium ${isActiveLink("/Cloud-9#gallery") ? "active-link-underline-blue" : ""}`}>Gallery</Link></li>
        <li><Link smooth to="/Cloud-9#contact" className={`relative text-white hover:text-blue-200 transition-colors duration-300 text-lg font-medium ${isActiveLink("/Cloud-9#contact") ? "active-link-underline-blue" : ""}`}>Reservations</Link></li>
      </>
    ),
    ctaButtonLink: "/Cloud-9#get-started",
    ctaButtonText: "Get Started",
    headerInnerBgScrolled: 'bg-blue-800 bg-opacity-90 shadow-lg backdrop-blur-sm',
    headerInnerBgDefault: 'bg-transparent',
    buttonTextColor: "text-blue-800",
    buttonBg: "bg-white",
    buttonBorder: "",
    buttonHoverBg: "hover:bg-blue-100",
    buttonHoverTextColor: "",
    buttonInnerSpanBg: "",
    buttonRounded: "rounded-full",
    menuIconColor: "text-white",
    scrollThreshold: 50,
    headerPaddingTop: "py-4",
    innerDivRounded: "",
  };

  // Define data for Bliss Spa Header
  const blissSpaHeaderData = {
    logoSrc: "https://placehold.co/120x60/B4977E/FFFFFF?text=BLISS",
    logoAlt: "Bliss Spa Logo",
    logoText: "Bliss Spa",
    logoTextClass: "text-[#B4977E]",
    navLinks: (
      <>
        <li><Link smooth to="/BlissSpa#home" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/BlissSpa#home") ? "active-link-underline-brown" : ""}`}>Home</Link></li>
        <li><Link smooth to="/BlissSpa#about" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/BlissSpa#about") ? "active-link-underline-brown" : ""}`}>About</Link></li>
        <li><Link smooth to="/BlissSpa#services" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/BlissSpa#services") ? "active-link-underline-brown" : ""}`}>Services</Link></li>
        <li><Link smooth to="/BlissSpa#therapists" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/BlissSpa#therapists") ? "active-link-underline-brown" : ""}`}>Therapists</Link></li>
        <li><Link smooth to="/BlissSpa#contact" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/BlissSpa#contact") ? "active-link-underline-brown" : ""}`}>Contact</Link></li>
      </>
    ),
    ctaButtonLink: "/BlissSpa#contact",
    ctaButtonText: "Book a Treatment",
    headerInnerBgScrolled: 'bg-stone-800 bg-opacity-95 shadow-lg backdrop-blur-sm',
    headerInnerBgDefault: 'bg-transparent',
    buttonTextColor: "text-stone-800",
    buttonBg: "bg-[#B4977E]",
    buttonBorder: "",
    buttonHoverBg: "hover:bg-[#A38A73]",
    buttonHoverTextColor: "hover:text-white",
    buttonInnerSpanBg: "",
    buttonRounded: "rounded-full",
    menuIconColor: "text-stone-100",
    scrollThreshold: 50,
    headerPaddingTop: "py-4",
    innerDivRounded: "",
  };

  // Define data for Jazz Banquet Hall Header
  const jazzBanquetHallHeaderData = {
    logoSrc: "https://placehold.co/120x60/333333/F0E68C?text=JAZZ",
    logoAlt: "Jazz Banquet Hall Logo",
    logoText: "Jazz Banquet Hall",
    logoTextClass: "text-[#F0E68C]",
    navLinks: (
      <>
        <li><Link smooth to="/JazzBanquetHall#home" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/JazzBanquetHall#home") ? "active-link-underline-yellow" : ""}`}>Home</Link></li>
        <li><Link smooth to="/JazzBanquetHall#about" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/JazzBanquetHall#about") ? "active-link-underline-yellow" : ""}`}>About</Link></li>
        <li><Link smooth to="/JazzBanquetHall#services" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/JazzBanquetHall#services") ? "active-link-underline-yellow" : ""}`}>Services</Link></li>
        <li><Link smooth to="/JazzBanquetHall#gallery" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/JazzBanquetHall#gallery") ? "active-link-underline-yellow" : ""}`}>Gallery</Link></li>
        <li><Link smooth to="/JazzBanquetHall#contact" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/JazzBanquetHall#contact") ? "active-link-underline-yellow" : ""}`}>Contact</Link></li>
      </>
    ),
    ctaButtonLink: "/JazzBanquetHall#contact",
    ctaButtonText: "Book Now",
    headerInnerBgScrolled: 'bg-gray-900 bg-opacity-95 shadow-lg backdrop-blur-sm',
    headerInnerBgDefault: 'bg-transparent',
    buttonTextColor: "text-gray-900",
    buttonBg: "bg-[#F0E68C]",
    buttonBorder: "",
    buttonHoverBg: "hover:bg-[#EEDD82]",
    buttonHoverTextColor: "hover:text-gray-900",
    buttonInnerSpanBg: "",
    buttonRounded: "rounded-full",
    menuIconColor: "text-[#F0E68C]",
    scrollThreshold: 50,
    headerPaddingTop: "py-4",
    innerDivRounded: "",
  };
  
  // Define data for Paradise Wedding Garden Header
  const paradiseWeddingGardenHeaderData = {
    logoSrc: "https://placehold.co/120x60/F5F5DC/8B4513?text=WEDDINGS",
    logoAlt: "Paradise Wedding Garden Logo",
    logoText: "Paradise Wedding Garden",
    logoTextClass: "text-[#D4A762]",
    navLinks: (
      <>
        <li><Link smooth to="/ParadiseWeddingGarden#home" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ParadiseWeddingGarden#home") ? "active-link-underline-brown" : ""}`}>Home</Link></li>
        <li><Link smooth to="/ParadiseWeddingGarden#about" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ParadiseWeddingGarden#about") ? "active-link-underline-brown" : ""}`}>About</Link></li>
        <li><Link smooth to="/ParadiseWeddingGarden#venues" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ParadiseWeddingGarden#venues") ? "active-link-underline-brown" : ""}`}>Venues</Link></li>
        <li><Link smooth to="/ParadiseWeddingGarden#gallery" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ParadiseWeddingGarden#gallery") ? "active-link-underline-brown" : ""}`}>Gallery</Link></li>
        <li><Link smooth to="/ParadiseWeddingGarden#contact" className={`relative text-gray-200 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ParadiseWeddingGarden#contact") ? "active-link-underline-brown" : ""}`}>Contact</Link></li>
      </>
    ),
    ctaButtonLink: "/ParadiseWeddingGarden#contact",
    ctaButtonText: "Plan Your Wedding",
    headerInnerBgScrolled: 'bg-gray-800 bg-opacity-95 shadow-lg backdrop-blur-sm',
    headerInnerBgDefault: 'bg-transparent',
    buttonTextColor: "text-gray-800",
    buttonBg: "bg-[#D4A762]",
    buttonBorder: "",
    buttonHoverBg: "hover:bg-[#C39556]",
    buttonHoverTextColor: "hover:text-white",
    buttonInnerSpanBg: "",
    buttonRounded: "rounded-full",
    menuIconColor: "text-[#D4A762]",
    scrollThreshold: 50,
    headerPaddingTop: "py-4",
    innerDivRounded: "",
  };

  // Define data for Elevate Gym Header
  const elevateGymHeaderData = {
    logoSrc: "https://placehold.co/120x60/000000/00FF7F?text=ELEVATE",
    logoAlt: "Elevate Gym Logo",
    logoText: "Elevate Gym",
    logoTextClass: "text-[#00FF7F]",
    navLinks: (
      <>
        <li><Link smooth to="/ElevateGym#home" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ElevateGym#home") ? "active-link-underline-green" : ""}`}>Home</Link></li>
        <li><Link smooth to="/ElevateGym#about" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ElevateGym#about") ? "active-link-underline-green" : ""}`}>About</Link></li>
        <li><Link smooth to="/ElevateGym#classes" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ElevateGym#classes") ? "active-link-underline-green" : ""}`}>Classes</Link></li>
        <li><Link smooth to="/ElevateGym#trainers" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ElevateGym#trainers") ? "active-link-underline-green" : ""}`}>Trainers</Link></li>
        <li><Link smooth to="/ElevateGym#contact" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/ElevateGym#contact") ? "active-link-underline-green" : ""}`}>Contact</Link></li>
      </>
    ),
    ctaButtonLink: "/ElevateGym#contact",
    ctaButtonText: "Join Now",
    headerInnerBgScrolled: 'bg-gray-950 bg-opacity-95 shadow-lg backdrop-blur-sm',
    headerInnerBgDefault: 'bg-transparent',
    buttonTextColor: "text-gray-950",
    buttonBg: "bg-[#00FF7F]",
    buttonBorder: "",
    buttonHoverBg: "hover:bg-[#00E673]",
    buttonHoverTextColor: "hover:text-white",
    buttonInnerSpanBg: "",
    buttonRounded: "rounded-full",
    menuIconColor: "text-[#00FF7F]",
    scrollThreshold: 50,
    headerPaddingTop: "py-4",
    innerDivRounded: "",
  };

  // Define data for Infinity Pool Header
  const infinityPoolHeaderData = {
    logoSrc: "https://placehold.co/120x60/007BFF/FFFFFF?text=POOL",
    logoAlt: "Infinity Pool Logo",
    logoText: "Infinity Pool",
    logoTextClass: "text-[#00BFFF]", // A bright blue color
    navLinks: (
      <>
        <li><Link smooth to="/InfinityPool#home" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/InfinityPool#home") ? "active-link-underline-blue-light" : ""}`}>Home</Link></li>
        <li><Link smooth to="/InfinityPool#about" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/InfinityPool#about") ? "active-link-underline-blue-light" : ""}`}>About</Link></li>
        <li><Link smooth to="/InfinityPool#amenities" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/InfinityPool#amenities") ? "active-link-underline-blue-light" : ""}`}>Amenities</Link></li>
        <li><Link smooth to="/InfinityPool#gallery" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/InfinityPool#gallery") ? "active-link-underline-blue-light" : ""}`}>Gallery</Link></li>
        <li><Link smooth to="/InfinityPool#contact" className={`relative text-gray-100 hover:text-white transition-colors duration-300 text-lg ${isActiveLink("/InfinityPool#contact") ? "active-link-underline-blue-light" : ""}`}>Contact</Link></li>
      </>
    ),
    ctaButtonLink: "/InfinityPool#contact",
    ctaButtonText: "Book a Cabana",
    headerInnerBgScrolled: 'bg-blue-900 bg-opacity-95 shadow-lg backdrop-blur-sm',
    headerInnerBgDefault: 'bg-transparent',
    buttonTextColor: "text-blue-900",
    buttonBg: "bg-[#00BFFF]",
    buttonBorder: "",
    buttonHoverBg: "hover:bg-[#00A0D0]",
    buttonHoverTextColor: "hover:text-white",
    buttonInnerSpanBg: "",
    buttonRounded: "rounded-full",
    menuIconColor: "text-[#00BFFF]",
    scrollThreshold: 50,
    headerPaddingTop: "py-4",
    innerDivRounded: "",
  };


  // Logic to select the correct header data based on the current page
  let currentHeaderData;
  let currentNavLinks;
  if (isCloud9Page) {
    currentHeaderData = cloud9HeaderData;
    currentNavLinks = cloud9HeaderData.navLinks;
  } else if (isTamarindusPage) {
    currentHeaderData = hotelHeaderData;
    currentNavLinks = hotelHeaderData.tamarindusNavLinks;
  } else if (isBlissSpaPage) {
    currentHeaderData = blissSpaHeaderData;
    currentNavLinks = blissSpaHeaderData.navLinks;
  } else if (isJazzBanquetHallPage) {
    currentHeaderData = jazzBanquetHallHeaderData;
    currentNavLinks = jazzBanquetHallHeaderData.navLinks;
  } else if (isParadiseWeddingGardenPage) {
    currentHeaderData = paradiseWeddingGardenHeaderData;
    currentNavLinks = paradiseWeddingGardenHeaderData.navLinks;
  } else if (isElevateGymPage) {
    currentHeaderData = elevateGymHeaderData;
    currentNavLinks = elevateGymHeaderData.navLinks;
  } else if (isInfinityPoolPage) {
    currentHeaderData = infinityPoolHeaderData;
    currentNavLinks = infinityPoolHeaderData.navLinks;
  } else {
    currentHeaderData = hotelHeaderData;
    currentNavLinks = hotelHeaderData.navLinks;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > currentHeaderData.scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentHeaderData.scrollThreshold]);

  // Apply different classes based on the current page and scroll state
  let headerInnerDivClasses = `max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ease-in-out`;
  if (isCloud9Page || isBlissSpaPage || isJazzBanquetHallPage || isParadiseWeddingGardenPage || isElevateGymPage || isInfinityPoolPage) {
    headerInnerDivClasses += ` py-4 ${scrolled ? currentHeaderData.headerInnerBgScrolled : currentHeaderData.headerInnerBgDefault}`;
  } else {
    headerInnerDivClasses += ` py-4 ${isTamarindusPage ? hotelHeaderData.headerInnerBgTamarindus : (scrolled ? hotelHeaderData.headerInnerBgScrolled : hotelHeaderData.headerInnerBgDefault)}`;
    headerInnerDivClasses += ` ${hotelHeaderData.innerDivRounded}`;
  }
  
  // Updated logo classes to fix the animation issue. 
  // We're applying the pulse animation by default and overriding with the spin animation on hover.
  const logoImageClasses = `h-16 w-auto object-contain mr-3 filter drop-shadow-lg brightness-100 contrast-125 saturate-150 animate-[pulse-scale_2s_infinite] group-hover:animate-[spin-hover_0.5s_ease-in-out_forwards]`;

  // Helper function to determine the correct link path for the logo
  const getLogoLinkPath = () => {
    if (isCloud9Page) return "/Cloud-9";
    if (isBlissSpaPage) return "/BlissSpa";
    if (isJazzBanquetHallPage) return "/JazzBanquetHall";
    if (isParadiseWeddingGardenPage) return "/ParadiseWeddingGarden";
    if (isElevateGymPage) return "/ElevateGym";
    if (isInfinityPoolPage) return "/InfinityPool";
    return "/";
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${currentHeaderData.headerPaddingTop} transition-all duration-300 ease-in-out`}>
      <style>{customStyles}</style>
      <div className={headerInnerDivClasses}>
        
        {/* Logo section - The Link is now the 'group' for hover effects */}
        <Link to={getLogoLinkPath()} className="flex items-center text-3xl font-extrabold tracking-tight cursor-pointer group" style={{ fontFamily: "'Playfair Display', serif" }}>
          <img
            src={currentHeaderData.logoSrc}
            alt={currentHeaderData.logoAlt}
            className={logoImageClasses}
          />
          {/* <span className={currentHeaderData.logoTextClass}>{currentHeaderData.logoText}</span> */}
        </Link>

        {/* Desktop navigation links */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {currentNavLinks}
          </ul>
          <Link
            smooth to={currentHeaderData.ctaButtonLink}
            className={`ml-6 inline-block px-8 py-3 font-bold text-lg
                      ${currentHeaderData.buttonBg} ${currentHeaderData.buttonTextColor} ${currentHeaderData.buttonBorder}
                      ${currentHeaderData.buttonHoverBg} ${currentHeaderData.buttonHoverTextColor}
                      transition-all duration-500 ease-in-out
                      shadow-lg
                      ${currentHeaderData.buttonRounded}
                      ${currentHeaderData.buttonInnerSpanBg ? 'relative overflow-hidden group' : ''} `} 
          >
            <span className="relative z-10">{currentHeaderData.ctaButtonText}</span>
            {currentHeaderData.buttonInnerSpanBg && (
              <span className={`absolute inset-0 ${currentHeaderData.buttonInnerSpanBg} transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0`}></span>
            )}
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <CloseIcon size={32} className={currentHeaderData.menuIconColor} /> : <MenuIcon size={32} className={currentHeaderData.menuIconColor} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closeMenu}
          />
          {/* Sidebar Menu */}
          <div
            className={`md:hidden fixed inset-y-0 right-0 z-50 w-64 transform transition-transform duration-300 ease-in-out 
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
            bg-gray-900 bg-opacity-95 backdrop-blur-sm shadow-xl p-6`}
          >
            <button onClick={closeMenu} className="absolute top-4 right-4 text-white" aria-label="Close menu">
              <CloseIcon size={36} />
            </button>
            <ul className="flex flex-col space-y-6 mt-16 text-2xl">
              {/* Added onClick={closeMenu} to each link in the mobile menu */}
              {React.Children.map(currentNavLinks.props.children, child =>
                React.cloneElement(child, {
                  children: React.cloneElement(child.props.children, { onClick: closeMenu, className: `${child.props.children.props.className} ${isActiveLink(child.props.children.props.to) ? (isCloud9Page ? 'active-link-underline-blue' : (isBlissSpaPage ? 'active-link-underline-brown' : (isJazzBanquetHallPage ? 'active-link-underline-yellow' : (isParadiseWeddingGardenPage ? 'active-link-underline-brown' : (isElevateGymPage ? 'active-link-underline-green' : (isInfinityPoolPage ? 'active-link-underline-blue-light' : 'active-link-underline')))))) : ''}`})
                })
              )}
              <li>
                <Link
                  smooth to={currentHeaderData.ctaButtonLink}
                  className={`inline-block px-8 py-3 font-bold text-lg
                            ${currentHeaderData.buttonBg} ${currentHeaderData.buttonTextColor} ${currentHeaderData.buttonBorder}
                            ${currentHeaderData.buttonHoverBg} ${currentHeaderData.buttonHoverTextColor}
                            transition-all duration-500 ease-in-out
                            shadow-lg
                            ${currentHeaderData.buttonRounded} mt-8
                            ${currentHeaderData.buttonInnerSpanBg ? 'relative overflow-hidden group' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="relative z-10">{currentHeaderData.ctaButtonText}</span>
                  {currentHeaderData.buttonInnerSpanBg && (
                    <span className={`absolute inset-0 ${currentHeaderData.buttonInnerSpanBg} transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0`}></span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
