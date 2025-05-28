
import React from 'react';
import { motion } from 'framer-motion';
import ProfessionalSummary from './resume/ProfessionalSummary';
import CoreSkills from './resume/CoreSkills';
import ProfessionalExperience from './resume/ProfessionalExperience';
import Education from './resume/Education';
import Certifications from './resume/Certifications';
import ContactInformation from './resume/ContactInformation';

const ResumeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Professional Resume</h2>
        <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
      </div>

      <ProfessionalSummary />
      <CoreSkills />
      <ProfessionalExperience />
      <Education />
      <Certifications />
      <ContactInformation />
    </motion.div>
  );
};

export default ResumeSection;
