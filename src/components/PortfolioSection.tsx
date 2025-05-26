
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Corporate Leadership Development Program",
      category: "Leadership Training",
      description: "Comprehensive e-learning program designed for emerging leaders, featuring interactive scenarios, peer collaboration tools, and performance analytics.",
      technologies: ["Articulate Storyline", "LMS Integration", "Video Production", "Assessment Design"],
      results: "95% completion rate, 40% improvement in leadership skills assessment",
      image: "/placeholder.svg"
    },
    {
      title: "Healthcare Compliance Training Suite",
      category: "Compliance Training",
      description: "Multi-module training program covering HIPAA, safety protocols, and emergency procedures with gamified elements and real-world scenarios.",
      technologies: ["Adobe Captivate", "SCORM", "Mobile Learning", "Microlearning"],
      results: "100% regulatory compliance achieved, 30% reduction in incidents",
      image: "/placeholder.svg"
    },
    {
      title: "Sales Performance Accelerator",
      category: "Sales Training",
      description: "Interactive sales methodology training with role-playing simulations, objection handling practice, and performance tracking dashboards.",
      technologies: ["Custom Development", "Video Conferencing", "CRM Integration", "Analytics"],
      results: "25% increase in sales performance, 60% faster onboarding",
      image: "/placeholder.svg"
    },
    {
      title: "Technical Skills Certification Program",
      category: "Technical Training",
      description: "Blended learning approach combining hands-on labs, virtual simulations, and competency-based assessments for IT professionals.",
      technologies: ["Virtual Labs", "Simulation Software", "Adaptive Learning", "Certification Tracking"],
      results: "85% certification pass rate, 50% reduction in training time",
      image: "/placeholder.svg"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore my featured instructional design projects that have transformed learning experiences 
          and delivered measurable results across various industries and learning contexts.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover bg-gradient-to-br from-blue-100 to-indigo-100"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Technologies & Methods:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-blue-700 border-blue-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Results:</h4>
                      <p className="text-green-700 font-medium">{project.results}</p>
                    </div>
                    
                    <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300">
                      View Case Study
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-0 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Collaborate?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every project is an opportunity to create something amazing. Let's work together to design 
            learning experiences that make a real difference.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Discuss Your Project
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PortfolioSection;
