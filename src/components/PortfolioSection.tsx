
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Calendar, User, Briefcase, Target, Lightbulb, Wrench, Award } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 'escape-room',
      title: "Nice to Know: Escape Room Module",
      category: "Gamified Microlearning",
      description: "A gamified e-learning experience created for seasoned Plan Specialists at Sun Life. Designed as an escape room, the module reinforces additional product knowledge through interactive challenges, puzzles, and scenario-based tasks.",
      technologies: ["Articulate Storyline", "Gamification", "Scenario-Based Learning", "Instructional Design", "Microlearning"],
      results: "High engagement among advanced learners, positive feedback for creativity, and successful knowledge reinforcement beyond core topics.",
      image: "/placeholder.svg",
      projectUrl: "https://richardportfolio10.s3.ap-southeast-2.amazonaws.com/Nice+to+Know_Richard+-+Storyline+output/story.html",
      details: {
        client: "Sun Life Financial",
        tool: "Articulate Storyline 360",
        role: "Instructional Designer",
        type: "Self-paced E-learning / Gamified Learning",
        date: "March 2025",
        overview: "This module was part of the GB Admin Life Plan curriculum designed for experienced Plan Specialists. Rather than reiterating core knowledge, it provided additional context, updates, and historical insights—packaged in a fun, gamified experience using an escape room format to boost engagement.",
        objectives: [
          "Deepen understanding of non-critical but relevant topics like Paid-Up Life, Clarica Heritage, and non-coded Phoenix scenarios.",
          "Encourage self-directed discovery through puzzles and scenario-based learning.",
          "Reinforce key updates via challenge-based tasks and knowledge checks."
        ],
        strategies: [
          "Gamification: Learners solve puzzles to progress through different \"rooms,\" each representing a knowledge topic.",
          "Scenario-Based Learning: Challenges were wrapped in realistic, work-relevant scenarios.",
          "Immediate Feedback: Learners received guided feedback after each activity to reinforce correct understanding."
        ],
        features: [
          "Articulate Storyline 360 with custom triggers and branching",
          "Drag-and-drop activities, locked progression, and timers",
          "Custom avatars and themed visuals for immersion",
          "Final \"Self Check\" room with cumulative scenario challenges"
        ],
        outcome: "The module received positive feedback from internal SMEs and learners for its creativity and effectiveness. It was praised for being a refreshing departure from traditional compliance-focused modules while still reinforcing critical operational context."
      }
    },
    {
      id: 'gib-case-study',
      title: "GIB Case Study Module",
      category: "Scenario-Based Training",
      description: "Interactive case study training for Case Managers to strengthen decision-making on Guaranteed Insurability Benefit (GIB) requests. Includes realistic scenarios, system simulations, and ATHENA-based guidance.",
      technologies: ["Articulate Storyline", "Scenario-Based Learning", "System Simulation", "Branching Logic", "Instructional Design"],
      results: "Improved learner confidence and accuracy in GIB handling, with strong SME endorsement for real-world alignment.",
      image: "/placeholder.svg",
      projectUrl: "https://richardportfolio10.s3.ap-southeast-2.amazonaws.com/GIB+Case+Study_Richard/story.html",
      details: {
        client: "Sun Life Financial",
        tool: "Articulate Storyline 360",
        role: "Instructional Designer",
        type: "Self-paced E-learning | Case Study Simulation",
        date: "March 2025",
        overview: "This module is part of the My New Business Options Learning Curriculum tailored for Case Managers. It focuses on helping learners navigate Guaranteed Insurability Benefit (GIB) cases through interactive case studies, guided decision-making, and realistic system simulations using ATHENA procedures.",
        objectives: [
          "Understand how to identify and assess GIB requests.",
          "Navigate the correct procedures using PHOENIX and ATHENA systems.",
          "Apply judgment in nuanced scenarios using real-life case data."
        ],
        strategies: [
          "Scenario-Based Learning: Multiple case studies drawn from real GIB situations.",
          "Guided Prompts: Learners make decisions with immediate feedback.",
          "System Simulation Walkthroughs: Simulated screens to reinforce navigation and actions in PHOENIX.",
          "Branching Logic: Paths differ based on learner choices, allowing them to explore consequences."
        ],
        features: [
          "Articulate Storyline 360 with advanced triggers",
          "Custom feedback layers",
          "Simulated UI based on Sun Life's PHOENIX system",
          "Embedded ATHENA procedure notes"
        ],
        outcome: "Learners reported greater confidence in managing GIB scenarios. SMEs commended the training for its realism and accuracy. The module became a benchmark for other case study-based trainings in the curriculum."
      }
    }
  ];

  const ProjectDetailsModal = ({ project }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-800 mb-4">
          {project.title}
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        {/* Project Metadata */}
        <div className="grid md:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Client:</span> {project.details.client}
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Tool Used:</span> {project.details.tool}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Role:</span> {project.details.role}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Date:</span> {project.details.date}
            </div>
          </div>
        </div>

        {/* Project Type */}
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-blue-700 border-blue-300">
            {project.details.type}
          </Badge>
        </div>

        {/* Project Overview */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Project Overview
          </h3>
          <p className="text-gray-600 leading-relaxed">{project.details.overview}</p>
        </div>

        {/* Learning Objectives */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-600" />
            Learning Objectives
          </h3>
          <ul className="space-y-2">
            {project.details.objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructional Strategies */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-orange-600" />
            Instructional Strategies
          </h3>
          <ul className="space-y-2">
            {project.details.strategies.map((strategy, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                {strategy}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools & Features */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-purple-600" />
            Tools & Features
          </h3>
          <ul className="space-y-2">
            {project.details.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-green-600" />
            Outcome
          </h3>
          <p className="text-gray-600 leading-relaxed">{project.details.outcome}</p>
        </div>

        {/* View Project Button */}
        <div className="pt-4 border-t">
          <Button 
            onClick={() => window.open(project.projectUrl, '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </Button>
        </div>
      </div>
    </DialogContent>
  );

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300">
                          {project.id === 'escape-room' ? 'Show more' : 'View Case Study'}
                        </Button>
                      </DialogTrigger>
                      <ProjectDetailsModal project={project} />
                    </Dialog>
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
          <Button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Discuss Your Project
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PortfolioSection;
