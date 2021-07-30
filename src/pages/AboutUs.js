import React from 'react';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServeresSection from '../components/ServicesSection';

const AboutUs = () => {
  return (
    <div>
      <AboutSection/>
      <ServeresSection />
      <FaqSection />
    </div>
  )
}

export default AboutUs;