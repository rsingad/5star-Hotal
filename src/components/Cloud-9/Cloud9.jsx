// src/pages/Cloud9.jsx

import React from 'react';
// Cloud-9 पेज के लिए आवश्यक सभी सेक्शन कंपोनेंट्स आयात करें
import Cloud9HeroSection from '../components/Cloud-9/Cloud9HeroSection';
import Cloud9AboutSection from '../components/Cloud-9/Cloud9AboutSection';
import Cloud9MenuSection from '../components/Cloud-9/Cloud9MenuSection';
import Cloud9GallerySection from '../components/Cloud-9/Cloud9GallerySection';
import Cloud9ContactSection from '../components/Cloud-9/Cloud9ContactSection';

// यह कंपोनेंट Cloud-9 पेज के लिए सभी सेक्शन को रेंडर करता है।
const Cloud9 = () => {
  return (
    <>
      {/* यहां सभी सेक्शन को क्रम में रखा गया है ताकि पेज ठीक से दिखे */}
      <Cloud9HeroSection />
      <Cloud9AboutSection/>
      <Cloud9MenuSection />
      <Cloud9GallerySection />
      <Cloud9ContactSection />
    </>
  );
};

export default Cloud9;
