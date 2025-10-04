"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaRocket, FaHeart, FaLightbulb, FaGlobe, FaTrophy, FaHandshake } from "react-icons/fa";
import CTASection from "@/components/CTASection";

type Props = {};

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isRemote: boolean;
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Video Editor",
    department: "Post-Production",
    location: "London, UK",
    type: "Full-time",
    description: "We're looking for a creative and technically skilled Senior Video Editor to join our post-production team. You'll work on diverse projects from commercials to documentaries, bringing stories to life through expert editing.",
    requirements: [
      "5+ years of professional video editing experience",
      "Proficiency in Adobe Premiere Pro, After Effects, and DaVinci Resolve",
      "Strong understanding of color grading and audio mixing",
      "Experience with 4K and HDR workflows",
      "Portfolio demonstrating creative storytelling and technical excellence",
      "Knowledge of current industry trends and techniques"
    ],
    benefits: [
      "Competitive salary (£45,000 - £65,000)",
      "Flexible working arrangements",
      "Professional development budget",
      "Health insurance",
      "Creative freedom on projects"
    ],
    isRemote: true
  },
  {
    id: 2,
    title: "AI Integration Specialist",
    department: "Technology",
    location: "London, UK",
    type: "Full-time",
    description: "Join our innovative team as an AI Integration Specialist, where you'll help us pioneer the future of film production by integrating cutting-edge AI tools into our creative workflows.",
    requirements: [
      "Degree in Computer Science, AI, or related field",
      "3+ years experience with AI/ML frameworks (TensorFlow, PyTorch)",
      "Experience with video processing and computer vision",
      "Knowledge of automation tools and workflows",
      "Strong problem-solving and analytical skills",
      "Passion for creative technology applications"
    ],
    benefits: [
      "Competitive salary (£50,000 - £70,000)",
      "Stock options",
      "Latest technology equipment",
      "Conference attendance budget",
      "Research and development time"
    ],
    isRemote: false
  },
  {
    id: 3,
    title: "Creative Director",
    department: "Creative",
    location: "London, UK",
    type: "Full-time",
    description: "Lead our creative vision and guide our team in developing compelling visual narratives. This role requires both creative excellence and strong leadership skills to drive our projects forward.",
    requirements: [
      "8+ years in creative direction or similar role",
      "Strong portfolio of commercial and creative work",
      "Experience leading creative teams",
      "Excellent communication and presentation skills",
      "Knowledge of current design and film trends",
      "Bachelor's degree in Film, Design, or related field"
    ],
    benefits: [
      "Competitive salary (£60,000 - £80,000)",
      "Performance bonuses",
      "Creative project ownership",
      "Team leadership opportunities",
      "Industry networking events"
    ],
    isRemote: false
  },
  {
    id: 4,
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "London, UK",
    type: "Full-time",
    description: "Support our marketing efforts by coordinating campaigns, managing social media, and helping to promote our services to potential clients in the film and advertising industry.",
    requirements: [
      "2+ years marketing experience",
      "Strong social media management skills",
      "Content creation abilities",
      "Analytics and reporting experience",
      "Excellent written and verbal communication",
      "Bachelor's degree in Marketing or related field"
    ],
    benefits: [
      "Competitive salary (£30,000 - £40,000)",
      "Marketing training and development",
      "Flexible working hours",
      "Team collaboration opportunities",
      "Career growth potential"
    ],
    isRemote: true
  }
];

const companyValues = [
  {
    icon: FaHeart,
    title: "Passion for Storytelling",
    description: "We believe every project has a unique story to tell, and we're passionate about bringing those stories to life through innovative filmmaking."
  },
  {
    icon: FaLightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technology and creative techniques to stay at the forefront of the film production industry."
  },
  {
    icon: FaUsers,
    title: "Collaborative Spirit",
    description: "Our team works together seamlessly, valuing diverse perspectives and fostering an environment where creativity thrives."
  },
  {
    icon: FaRocket,
    title: "Growth Mindset",
    description: "We're committed to continuous learning and development, both personally and professionally, to achieve excellence in everything we do."
  }
];

const perks = [
  "Flexible working arrangements",
  "Professional development budget",
  "Health and wellness benefits",
  "Creative project ownership",
  "Latest technology and equipment",
  "Team building activities",
  "Industry networking opportunities",
  "Performance bonuses"
];

export default function Careers({}: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Creative Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Be part of the future of film production. We're looking for passionate, innovative individuals to help us create extraordinary visual content.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full">Remote Friendly</span>
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">Competitive Salaries</span>
              <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full">Growth Opportunities</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At BirthGiver Film Productions, we foster a creative, collaborative environment where innovation thrives and every team member can make a meaningful impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our current job opportunities and find the perfect role to advance your career in film production.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-red-500/10 text-red-600 px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                      {job.isRemote && (
                        <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm">
                          Remote
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">
                      <FaBriefcase className="inline w-4 h-4 mr-2" />
                      {job.location}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {job.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="text-gray-500">+{job.requirements.length - 3} more requirements</li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                    {job.benefits.length > 3 && (
                      <li className="text-gray-500">+{job.benefits.length - 3} more benefits</li>
                    )}
                  </ul>
                </div>

                <button className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perks & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team. Here's what we offer to ensure your success and well-being.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md text-center"
              >
                <FaTrophy className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <p className="text-gray-700 font-medium">{perk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to join our team? Here's our simple application process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Send us your CV, portfolio, and cover letter through our application form."
              },
              {
                step: "02",
                title: "Initial Review",
                description: "Our team will review your application and get back to you within 5 business days."
              },
              {
                step: "03",
                title: "Interview Process",
                description: "If selected, you'll have a video interview with our team to discuss the role and your experience."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
