
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ResumeSection = () => {
  const experiences = [
    {
      title: "Instructional Designer",
      company: "Sunlife, Taguig",
      period: "MAR 2025 - PRESENT",
      description: "Analyze business-submitted training content to ensure alignment with defined learning objectives.",
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
      description: "Created 20+ interactive eLearning modules with scenario-based design, improving learner assessment outcomes.",
      achievements: [
        "Created 20+ interactive eLearning modules with scenario-based design, improving learner assessment outcomes",
        "Applied instructional design models (ADDIE, SAM) to reduce design cycles by 25% and improve delivery timelines",
        "Managed SAP Litmos LMS for 500+ users; tracked engagement metrics and published 50+ support articles in Shelf",
        "Collaborated with project managers to align content with KPIs and optimize training ROI"
      ]
    },
    {
      title: "Marketing Manager & Specialist",
      company: "Cognizant Technology Solutions, Taguig",
      period: "Aug 2023 - Apr 2024",
      description: "Developed microlearning content using Synthesia, Canva, and Evolve, improving retention by 15%.",
      achievements: [
        "Developed microlearning content using Synthesia, Canva, and Evolve, improving retention by 15%",
        "Presented learning designs to senior leadership and led needs assessments for global projects",
        "Designed interactive VILT and WBT programs tailored to diverse learner groups"
      ]
    },
    {
      title: "Marketing Manager & Specialist",
      company: "Teletech Holdings, Mandaluyong",
      period: "May 2022 - Aug 2023",
      description: "Developed microlearning content using Synthesia, Canva, and 7taps, improving retention by 15%.",
      achievements: [
        "Developed microlearning content using Synthesia, Canva, and 7taps, improving retention by 15%",
        "Presented learning designs to senior leadership and led needs assessments for global projects",
        "Designed interactive VILT and WBT programs tailored to diverse learner groups"
      ]
    },
    {
      title: "Learning Experience Designer",
      company: "Manulife, Quezon City",
      period: "May 2021 - May 2022",
      description: "Redesigned onboarding programs with SMEs, boosting new hire satisfaction from 70% to 88%.",
      achievements: [
        "Redesigned onboarding programs with SMEs, boosting new hire satisfaction from 70% to 88%",
        "Produced video-based training using Vyond and Camtasia; accelerated learning completion by 25%",
        "Led evaluations using Kirkpatrick Model and managed LMS platforms (Cornerstone, Axonify)"
      ]
    },
    {
      title: "Training Specialist",
      company: "Philchema Inc, Quezon City",
      period: "Aug 2018 - May 2021",
      description: "Designed and facilitated product training programs, reducing onboarding time by 30%.",
      achievements: [
        "Designed and facilitated product training programs, reducing onboarding time by 30%",
        "Authored technical manuals and performance assessments; collaborated with technical SMEs on updates"
      ]
    },
    {
      title: "Technical Staff",
      company: "Philchema Inc, Quezon City",
      period: "Aug 2018 - May 2021",
      description: "Conducted lab testing and provided feed recommendations to optimize product performance.",
      achievements: [
        "Conducted lab testing and provided feed recommendations to optimize product performance",
        "Assisted in R&D trials and analyzed data for market positioning; managed testing records in Google Sheets"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Agricultural Biotechnology",
      school: "University of the Philippines Los Banos, Laguna",
      year: "2012 - 2016",
      details: "GWA: 2.1"
    }
  ];

  const certifications = [
    "Licensed Professional Agriculturist, PRC, Philippines (2018 - Present)",
    "Human-Centered Design, Luma Institute Practitioner (2022 - Present)"
  ];

  const coreSkills = [
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

      {/* Professional Summary */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Summary</h3>
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-0">
            <p className="text-gray-700 leading-relaxed">
              Instructional Designer with 5+ years of experience delivering engaging digital learning solutions across finance, BPO, and tech industries. Proven expertise in eLearning development, ILT/WBT curriculum design, and multimedia integration using Articulate 360, Adobe Creative Suite, and multiple LMS platforms. Skilled in applying ADDIE, Agile (SAM, 4MAT), and adult learning principles to drive learner retention, streamline onboarding, and align learning strategies with business goals.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Core Skills */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Core Skills</h3>
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge variant="outline" className="text-blue-700 border-blue-300 hover:bg-blue-50 text-xs">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience Section */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
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
                      <li key={i} className="text-sm">{achievement}</li>
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
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <h4 className="text-lg font-semibold text-gray-800">{education[0].degree}</h4>
            <p className="text-blue-600 font-medium">{education[0].school}</p>
            <p className="text-gray-500 text-sm">{education[0].year}</p>
            <p className="text-gray-600 mt-2">{education[0].details}</p>
          </CardContent>
        </Card>
      </section>

      {/* Certifications Section */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h3>
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Badge variant="outline" className="text-blue-700 border-blue-300 hover:bg-blue-50 text-sm">
                    {cert}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Information */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
        <Card className="p-6">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <p><strong>Phone:</strong> +(63)9494641158</p>
                <p><strong>Email:</strong> chard.bdc@gmail.com</p>
              </div>
              <div>
                <p><strong>Location:</strong> Mandaluyong City</p>
                <p><strong>Portfolio:</strong> https://richardbdelacruz.my.canva.site/</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </motion.div>
  );
};

export default ResumeSection;
