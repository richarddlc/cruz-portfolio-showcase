
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProfessionalSummary = () => {
  return (
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
  );
};

export default ProfessionalSummary;
