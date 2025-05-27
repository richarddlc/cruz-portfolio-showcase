
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <motion.div
      id="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ready to transform your learning initiatives? Let's discuss how we can create 
          engaging educational experiences that drive real results.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Send Me A Message</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="font-medium text-gray-800 mb-2">Email</h4>
                  <p className="text-blue-600 hover:text-blue-700 transition-colors text-lg">
                    chard.bdc@gmail.com
                  </p>
                </div>
                
                <div className="text-center">
                  <h4 className="font-medium text-gray-800 mb-2">Phone</h4>
                  <p className="text-gray-600 text-lg">+639494641158</p>
                </div>
                
                <div className="text-center">
                  <h4 className="font-medium text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">Available for remote collaboration worldwide</p>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-medium text-gray-800 mb-3 text-center">Services</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="text-center">• Custom E-Learning Development</li>
                    <li className="text-center">• Curriculum Design & Strategy</li>
                    <li className="text-center">• Learning Management System Setup</li>
                    <li className="text-center">• Training Program Assessment</li>
                    <li className="text-center">• Educational Technology Consulting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-0 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Response Guaranteed</h3>
          <p className="text-gray-600">
            I typically respond to all inquiries within 24 hours. Looking forward to hearing about your project!
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactSection;
