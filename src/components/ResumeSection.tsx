
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ResumeSection = () => {
  const experiences = [
    {
      title: "Senior Instructional Designer",
      company: "TechEd Solutions",
      period: "2021 - Present",
      description: "Lead instructional design projects for Fortune 500 companies, developing comprehensive e-learning curricula that improved employee performance by 35%.",
      achievements: [
        "Designed 50+ interactive e-learning modules",
        "Reduced training time by 40% while increasing retention",
        "Led cross-functional teams of 8+ professionals"
      ]
    },
    {
      title: "Instructional Designer",
      company: "Learning Innovations Inc.",
      period: "2018 - 2021",
      description: "Created engaging learning experiences for diverse audiences, specializing in adult learning principles and multimedia integration.",
      achievements: [
        "Developed award-winning compliance training program",
        "Improved learner satisfaction scores by 45%",
        "Implemented LMS solutions for 10,000+ users"
      ]
    },
    {
      title: "E-Learning Developer",
      company: "EduTech Partners",
      period: "2016 - 2018",
      description: "Focused on technical development of interactive learning content using various authoring tools and learning management systems.",
      achievements: [
        "Built responsive e-learning modules",
        "Integrated SCORM-compliant content",
        "Collaborated with SMEs on technical content"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Education in Instructional Design",
      school: "University of Learning Sciences",
      year: "2016",
      details: "Specialized in Educational Technology and Adult Learning Theory"
    },
    {
      degree: "Bachelor of Arts in Education",
      school: "State University",
      year: "2014",
      details: "Cum Laude, Focus on Curriculum Development"
    }
  ];

  const certifications = [
    "Certified Professional in Learning and Performance (CPLP)",
    "Adobe Certified Expert - Captivate",
    "Articulate Storyline Certification",
    "Google Analytics Certified",
    "Project Management Professional (PMP)"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Resume</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Experience Section */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0">{exp.period}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                  <p className="text-gray-600 mt-2">{edu.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h3>
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Badge variant="outline" className="text-blue-700 border-blue-300 hover:bg-blue-50">
                    {cert}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </motion.div>
  );
};

export default ResumeSection;
