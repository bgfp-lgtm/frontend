"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaUsers,
  FaRocket,
  FaHeart,
  FaLightbulb,
  FaGlobe,
  FaTrophy,
  FaHandshake,
} from "react-icons/fa";
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
    title: "Film Production Intern",
    department: "Production",
    location: "London, UK",
    type: "Unpaid Internship",
    description:
      "Join our dynamic film production team as an intern and gain hands-on experience in all aspects of filmmaking. This is an excellent opportunity to learn from industry professionals while contributing to real projects and building your portfolio.",
    requirements: [
      "Currently enrolled in or recently graduated from film/media studies",
      "Basic understanding of film production processes",
      "Strong passion for storytelling and visual media",
      "Willingness to learn and take on various tasks",
      "Good communication and teamwork skills",
      "Availability for flexible hours during production periods",
    ],
    benefits: [
      "Hands-on experience in professional film production",
      "Portfolio building opportunities",
      "Mentorship from industry professionals",
      "Networking opportunities within the film industry",
      "Letter of recommendation upon successful completion",
    ],
    isRemote: false,
  },
];

const companyValues = [
  {
    icon: FaHeart,
    title: "Passion for Storytelling",
    description:
      "We believe every project has a unique story to tell, and we're passionate about bringing those stories to life through innovative filmmaking.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation First",
    description:
      "We embrace cutting-edge technology and creative techniques to stay at the forefront of the film production industry.",
  },
  {
    icon: FaUsers,
    title: "Collaborative Spirit",
    description:
      "Our team works together seamlessly, valuing diverse perspectives and fostering an environment where creativity thrives.",
  },
  {
    icon: FaRocket,
    title: "Growth Mindset",
    description:
      "We're committed to continuous learning and development, both personally and professionally, to achieve excellence in everything we do.",
  },
];

const perks = [
  "Hands-on film production experience",
  "Professional mentorship program",
  "Portfolio building opportunities",
  "Industry networking events",
  "Access to latest equipment",
  "Real project involvement",
  "Letter of recommendation",
  "Career guidance and advice",
];

export default function Careers({}: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/career.MP4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Start Your Film Career
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Gain hands-on experience in professional film production. Join
                our internship program and learn from industry experts while
                building your portfolio.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full">
                  Hands-on Experience
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">
                  Professional Mentorship
                </span>
                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full">
                  Portfolio Building
                </span>
              </div>
            </motion.div>
          </div>
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
              At BirthGiver Film Productions, we foster a creative,
              collaborative environment where innovation thrives and every team
              member can make a meaningful impact.
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
                <p className="text-gray-600">{value.description}</p>
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
              Internship Opportunity
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take the first step in your film production career with our
              hands-on internship program designed to give you real-world
              experience.
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

                <p className="text-gray-700 mb-6">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Requirements:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="text-gray-500">
                        +{job.requirements.length - 3} more requirements
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Benefits:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                    {job.benefits.length > 3 && (
                      <li className="text-gray-500">
                        +{job.benefits.length - 3} more benefits
                      </li>
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
              What You'll Gain
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our internship program is designed to provide valuable experience
              and skills that will kickstart your career in film production.
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
              How to Apply for Internship
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to start your film production journey? Here's how to apply
              for our internship program.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description:
                  "Send us your CV, portfolio, and cover letter through our application form.",
              },
              {
                step: "02",
                title: "Initial Review",
                description:
                  "Our team will review your application and get back to you within 5 business days.",
              },
              {
                step: "03",
                title: "Interview Process",
                description:
                  "If selected, you'll have a video interview with our team to discuss the role and your experience.",
              },
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
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
