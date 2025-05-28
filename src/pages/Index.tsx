
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState('about');

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

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'resume':
        return <ResumeSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <HeroSection />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <motion.main
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-8 bg-gray-900/50 backdrop-blur-sm"
      >
        {renderActiveSection()}
      </motion.main>
    </div>
  );
};

export default Index;
