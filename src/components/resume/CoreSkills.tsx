
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CoreSkills = () => {
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
  );
};

export default CoreSkills;
