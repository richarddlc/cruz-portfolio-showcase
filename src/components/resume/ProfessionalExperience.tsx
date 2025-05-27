
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProfessionalExperience = () => {
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
      title: "Instructional Designer",
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
      title: "Digital Instructional Designer",
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

  return (
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
  );
};

export default ProfessionalExperience;
