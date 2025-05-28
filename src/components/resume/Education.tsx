
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = {
    degree: "Bachelor of Science in Agricultural Biotechnology",
    school: "University of the Philippines Los Banos, Laguna",
    year: "2012 - 2016",
    details: "GWA: 2.1"
  };

  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <h4 className="text-lg font-semibold text-gray-800">{education.degree}</h4>
          <p className="text-blue-600 font-medium">{education.school}</p>
          <p className="text-gray-500 text-sm">{education.year}</p>
          <p className="text-gray-600 mt-2">{education.details}</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Education;
