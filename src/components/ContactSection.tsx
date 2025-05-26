import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
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

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 h-full">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Email</h4>
                  <p className="text-blue-600 hover:text-blue-700 transition-colors">
                    chard.bdc@gmail.com
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Phone</h4>
                  <p className="text-gray-600">+639494641158</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">Available for remote collaboration worldwide</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Services</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Custom E-Learning Development</li>
                    <li>• Curriculum Design & Strategy</li>
                    <li>• Learning Management System Setup</li>
                    <li>• Training Program Assessment</li>
                    <li>• Educational Technology Consulting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 min-h-32"
                    placeholder="Tell me about your project or learning challenge..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </Button>
              </form>
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
