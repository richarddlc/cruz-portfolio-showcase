
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    'Learning Management Systems',
    'E-learning Development',
    'Curriculum Design',
    'Educational Technology',
    'Assessment Design',
    'Adult Learning Principles',
    'Multimedia Production',
    'Data Analysis'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              As an experienced Instructional Designer, I specialize in creating engaging and effective learning experiences 
              that bridge the gap between complex concepts and practical application. With a passion for educational innovation, 
              I transform traditional training into dynamic, interactive journeys.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My approach combines pedagogical best practices with cutting-edge technology to deliver learning solutions 
              that not only educate but inspire. I believe that great instructional design doesn't just transfer knowledge—it 
              transforms learners and empowers them to achieve their goals.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-0 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Design Philosophy</h3>
          <p className="text-lg text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
            "Learning should be an adventure, not a chore. Every instructional design should tell a story, 
            solve a problem, and leave the learner more capable and confident than before."
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutSection;
