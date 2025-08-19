// src/pages/JazzBanquetHall.jsx

import React from 'react';
// जैज़ बैंक्वेट हॉल पेज के लिए आवश्यक सभी सेक्शन कंपोनेंट्स आयात करें
import JazzBanquetHallHeroSection from './JazzBanquetHallHeroSection';
import JazzBanquetHallAboutSection from './JazzBanquetHallAboutSection';
import JazzBanquetHallMenuSection from './JazzBanquetHallMenuSection';
import JazzBanquetHallGallerySection from './JazzBanquetHallGallerySection';
import JazzBanquetHallContactSection from './JazzBanquetHallContactSection';

// यह कंपोनेंट जैज़ बैंक्वेट हॉल पेज के लिए सभी सेक्शन को रेंडर करता है।
const JazzBanquetHall = () => {
  return (
    <>
      {/* यहां सभी सेक्शन को क्रम में रखा गया है ताकि पेज ठीक से दिखे */}
      <JazzBanquetHallHeroSection />
      <JazzBanquetHallAboutSection />
      <JazzBanquetHallMenuSection />
      <JazzBanquetHallGallerySection />
      <JazzBanquetHallContactSection />
    </>
  );
};

export default JazzBanquetHall;
