
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    'Instructional Design & Learning Development',
    'ADDIE & Agile Methodologies',
    'eLearning Development',
    'Articulate 360 & Adobe Suite',
    'LMS Management',
    'Adult Learning Principles',
    'Multimedia Production',
    'Performance Assessment'
  ];

  const personalInfo = [
    { label: 'Date of Birth', value: 'October 10, 1995' },
    { label: 'Civil Status', value: 'Single' },
    { label: 'Citizenship', value: 'Filipino' },
    { label: 'Languages', value: 'English (Fluent), Filipino (Fluent), Ilocano' }
  ];

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              As an experienced Instructional Designer with 5+ years of expertise, I specialize in delivering engaging 
              digital learning solutions across finance, BPO, and tech industries. My journey began with a background 
              in Agricultural Biotechnology, which taught me the importance of systematic approaches and data-driven solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm passionate about applying proven instructional design models like ADDIE, SAM, and 4MAT to create 
              learner-centric programs that drive retention, streamline onboarding, and align learning strategies with 
              business goals. My approach combines pedagogical best practices with cutting-edge technology to deliver 
              measurable results.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Expertise</h3>
            <div className="grid grid-cols-1 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="space-y-3">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex justify-between">
                  <span className="font-medium text-gray-700">{info.label}:</span>
                  <span className="text-gray-600">{info.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Highlights</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                5+ years in instructional design across multiple industries
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Created 20+ interactive eLearning modules
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Improved learner retention by up to 25%
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Expert in SCORM-compliant content development
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Licensed Professional Agriculturist
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
        <CardContent className="p-0 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Design Philosophy</h3>
          <p className="text-lg text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
            "Learning should be an adventure, not a chore. Every instructional design should tell a story, 
            solve a problem, and leave the learner more capable and confident than before. By applying proven 
            methodologies and leveraging technology, we can create transformative learning experiences."
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutSection;
