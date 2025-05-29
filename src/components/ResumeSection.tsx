
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';

const ResumeSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'summary',
      title: 'Professional Summary',
      content: (
        <p className="text-gray-700 leading-relaxed">
          Instructional Designer with 5+ years of experience delivering engaging digital learning solutions across finance, BPO, and tech industries. Proven expertise in eLearning development, ILT/WBT curriculum design, and multimedia integration using Articulate 360, Adobe Creative Suite, and multiple LMS platforms. Skilled in applying ADDIE, Agile (SAM, 4MAT), and adult learning principles to drive learner retention, streamline onboarding, and align learning strategies with business goals.
        </p>
      )
    },
    {
      id: 'skills',
      title: 'Core Skills',
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Instructional Design & Learning Development",
            "ADDIE • Agile (SAM, 4MAT)",
            "Curriculum Mapping",
            "Storyboarding • Adult Learning Theory",
            "Needs Analysis",
            "Evaluation (Kirkpatrick)",
            "Articulate Storyline & Rise 360",
            "Adobe Creative Suite",
            "Camtasia • Snag-it",
            "Powtoon • MURF",
            "SAP Litmos • Cornerstone",
            "Axonify • Breeze Server",
            "SCORM/xAPI • Microsoft Office"
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Badge variant="outline" className="text-green-700 border-green-300 hover:bg-green-50 text-xs">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 'experience',
      title: 'Professional Experience',
      content: (
        <div className="space-y-6">
          {[
            {
              title: "Instructional Designer",
              company: "Sunlife, Taguig",
              period: "MAR 2025 - PRESENT",
              achievements: [
                "Analyze business-submitted training content to ensure alignment with defined learning objectives",
                "Develop ILT and WBT modules using Articulate 360, Adobe Suite, and video tools such as Camtasia",
                "Apply adult learning frameworks (ADDIE, 4MAT, Agile) to create learner-centric programs across business units",
                "Collaborate with SMEs to finalize content, design interactive knowledge checks, and implement rapid learning cycles",
                "Publish SCORM-compliant content on LMS and Breeze Server; test functionality and ensure technical stability"
              ]
            },
            {
              title: "Digital Instructional Designer",
              company: "TTEC, Philippines",
              period: "MAR 2024 - MAR 2025",
              achievements: [
                "Created 20+ interactive eLearning modules with scenario-based design, improving learner assessment outcomes",
                "Applied instructional design models (ADDIE, SAM) to reduce design cycles by 25% and improve delivery timelines",
                "Managed SAP Litmos LMS for 500+ users; tracked engagement metrics and published 50+ support articles in Shelf",
                "Collaborated with project managers to align content with KPIs and optimize training ROI"
              ]
            },
            {
              title: "Instructional Designer",
              company: "Cognizant Technology Solutions, Taguig",
              period: "Aug 2023 - Apr 2024",
              achievements: [
                "Developed microlearning content using Synthesia, Canva, and Evolve, improving retention by 15%",
                "Presented learning designs to senior leadership and led needs assessments for global projects",
                "Designed interactive VILT and WBT programs tailored to diverse learner groups"
              ]
            }
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                      <p className="text-green-600 font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0">{exp.period}</Badge>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm leading-relaxed">{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 'education',
      title: 'Education',
      content: (
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <h4 className="text-lg font-semibold text-gray-800">Bachelor of Science in Agricultural Biotechnology</h4>
            <p className="text-green-600 font-medium">University of the Philippines Los Banos, Laguna</p>
            <p className="text-gray-500 text-sm">2012 - 2016</p>
            <p className="text-gray-600 mt-2">GWA: 2.1</p>
          </CardContent>
        </Card>
      )
    },
    {
      id: 'certifications',
      title: 'Certifications',
      content: (
        <div className="space-y-3">
          {[
            "Licensed Professional Agriculturist, PRC, Philippines (2018 - Present)",
            "Human-Centered Design, Luma Institute Practitioner (2022 - Present)"
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Badge variant="outline" className="text-green-700 border-green-300 hover:bg-green-50 text-sm">
                {cert}
              </Badge>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  return (
    <motion.div
      id="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Why hire me?</h2>
        <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Experienced professional with proven track record in creating engaging learning experiences
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left side - Buttons */}
        <div className="lg:col-span-2 space-y-3">
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => toggleSection(section.id)}
              className={`w-full justify-between text-left ${
                activeSection === section.id
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              size="lg"
            >
              {section.title}
              <motion.div
                animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </Button>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {activeSection && (
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                      {sections.find(s => s.id === activeSection)?.title}
                    </h3>
                    {sections.find(s => s.id === activeSection)?.content}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {!activeSection && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 py-20"
            >
              <p className="text-lg">Select a section to view my experience</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeSection;
