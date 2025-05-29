
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf'; // You'll need to add your CV file to the public folder
    link.download = 'Richard_de_la_Cruz_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInClick = () => {
    window.open('https://ph.linkedin.com/in/richard-de-la-cruz-7782bb92', '_blank');
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-green-400 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-green-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-green-400 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center w-full">
        {/* Left side - Text content */}
        <div className="space-y-6 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-green-400 text-base font-medium mb-3">Instructional Designer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello I'm{' '}
              <span className="text-green-400 block">Richard de la Cruz</span>
            </h1>
            <p className="text-gray-300 text-base leading-relaxed max-w-xl">
              I excel at crafting elegant digital learning experiences and 
              I am proficient in various instructional design methodologies and 
              technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button 
              onClick={handleDownloadCV}
              className="px-6 py-3 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2 font-medium text-sm"
            >
              <Download size={18} />
              DOWNLOAD CV
            </button>
            
            <div className="flex gap-4 ml-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={handleLinkedInClick}
                className="w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer"
              >
                <Linkedin size={18} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right side - Profile image with rotating border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex justify-center lg:order-2"
        >
          <div className="relative">
            {/* Rotating green border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 w-64 h-64 md:w-72 md:h-72 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, transparent 60%, #10b981 80%, transparent 100%)`
              }}
            />
            
            {/* Profile image */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 m-4 rounded-full overflow-hidden border-4 border-gray-800">
              <img 
                src="/lovable-uploads/1e5ba4e4-15a5-4cf4-8f50-28a9e3130715.png" 
                alt="Richard de la Cruz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center px-4">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider">Years of experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider">Projects completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">3</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider">Industries mastered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400 text-xs uppercase tracking-wider">Training modules</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
