// src/pages/TamarindusRestaurant.jsx

import React from 'react';
// रेस्तरां पेज के लिए आवश्यक सभी सेक्शन कंपोनेंट्स आयात करें
import TamarindusHeroSection from './TamarindusHeroSection';
import TamarindusAboutSection from './TamarindusAboutSection';
import TamarindusMenuSection from './TamarindusMenuSection';
import TamarindusGallerySection from './TamarindusGallerySection';
import TamarindusContactSection from './TamarindusContactSection';
import TamarindusAmenitiesSection from './TamarindusAmenitiesSection';

// यह कंपोनेंट TamarindusRestaurant पेज के लिए सभी सेक्शन को रेंडर करता है।
const TamarindusRestaurant = () => {
  return (
    <>
      {/* यहां सभी सेक्शन को क्रम में रखा गया है ताकि पेज ठीक से दिखे */}
      <TamarindusHeroSection />
      <TamarindusAboutSection />
      <TamarindusMenuSection />
      <TamarindusGallerySection />
      <TamarindusContactSection />
      <TamarindusAmenitiesSection />
    </>
  );
};

export default TamarindusRestaurant;
