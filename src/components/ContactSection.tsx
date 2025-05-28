
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateX: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const serviceItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      id="contact-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8"
    >
      <motion.div 
        variants={itemVariants}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-white mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-4"
        ></motion.div>
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Ready to transform your learning initiatives? Let's discuss how we can create 
          engaging educational experiences that drive real results.
        </motion.p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <Card className="p-8 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-0">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-white mb-8 text-center"
              >
                Send Me A Message
              </motion.h3>
              
              <div className="space-y-6">
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <h4 className="font-medium text-white mb-2">Email</h4>
                  <p className="text-green-400 hover:text-green-300 transition-colors text-lg">
                    chard.bdc@gmail.com
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <h4 className="font-medium text-white mb-2">Phone</h4>
                  <p className="text-gray-300 text-lg">+639494641158</p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <h4 className="font-medium text-white mb-2">Location</h4>
                  <p className="text-gray-300">Available for remote collaboration worldwide</p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="border-t border-gray-700 pt-6"
                >
                  <h4 className="font-medium text-white mb-3 text-center">Services</h4>
                  <motion.ul 
                    className="space-y-2 text-gray-300"
                    variants={containerVariants}
                  >
                    {[
                      "Custom E-Learning Development",
                      "Curriculum Design & Strategy", 
                      "Learning Management System Setup",
                      "Training Program Assessment",
                      "Educational Technology Consulting"
                    ].map((service, index) => (
                      <motion.li 
                        key={index}
                        variants={serviceItemVariants}
                        whileHover={{ 
                          x: 10,
                          color: "#10b981",
                          transition: { duration: 0.2 }
                        }}
                        className="text-center cursor-default"
                      >
                        • {service}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        variants={cardVariants}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <Card className="p-6 bg-gradient-to-r from-green-900/40 to-gray-800/40 border-green-700/50 backdrop-blur-sm">
          <CardContent className="p-0 text-center">
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-semibold text-white mb-2"
            >
              Quick Response Guaranteed
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-300"
            >
              I typically respond to all inquiries within 24 hours. Looking forward to hearing about your project!
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
