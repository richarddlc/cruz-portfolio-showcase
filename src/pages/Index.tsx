
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('');

  // Listen for custom tab change events from portfolio section
  useEffect(() => {
    const handleChangeTab = (event: CustomEvent) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('changeTab', handleChangeTab as EventListener);
    
    return () => {
      window.removeEventListener('changeTab', handleChangeTab as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      <HeroSection />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16 bg-gray-900/50 backdrop-blur-sm"
      >
        <AboutSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 py-16 bg-gray-900/50 backdrop-blur-sm"
      >
        <ResumeSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-6xl mx-auto px-4 py-16 bg-gray-900/50 backdrop-blur-sm"
      >
        <div id="portfolio">
          <PortfolioSection />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-6xl mx-auto px-4 py-16 bg-gray-900/50 backdrop-blur-sm"
      >
        <div id="contact">
          <ContactSection />
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
