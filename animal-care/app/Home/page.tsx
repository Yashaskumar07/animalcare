import React from 'react'

import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <AboutUsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home;
