
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Import resume components
import ProfessionalSummary from './resume/ProfessionalSummary';
import CoreSkills from './resume/CoreSkills';
import ProfessionalExperience from './resume/ProfessionalExperience';
import Education from './resume/Education';
import Certifications from './resume/Certifications';
import ContactInformation from './resume/ContactInformation';

const ResumeSection = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['summary']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sections = [
    { id: 'summary', title: 'Professional Summary', component: ProfessionalSummary },
    { id: 'skills', title: 'Core Skills', component: CoreSkills },
    { id: 'experience', title: 'Professional Experience', component: ProfessionalExperience },
    { id: 'education', title: 'Education', component: Education },
    { id: 'certifications', title: 'Certifications', component: Certifications },
    { id: 'contact', title: 'Contact Information', component: ContactInformation },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  return (
    <motion.div
      id="resume-section"
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
          Resume
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-4"
        ></motion.div>
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Discover my professional journey, skills, and achievements that make me the ideal candidate for your learning and development needs.
        </motion.p>
      </motion.div>

      <div className="space-y-4">
        {sections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          const Component = section.component;
          
          return (
            <motion.div
              key={section.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="transition-transform duration-200"
            >
              <Card className="overflow-hidden bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                <motion.button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
                  whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 text-green-400" />
                    </motion.div>
                    {section.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="overflow-hidden"
                >
                  <CardContent className="p-6 pt-0 border-t border-gray-700">
                    <Component />
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ResumeSection;
