"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  skills?: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Dennis Griffith",
    title: "Chief Executive Officer (CEO)",
    description:
      "Dennis Griffith's journey began on his family's farm, where he learned the values of hard work and innovation, which he carried into his successful career in shopfitting, creating iconic spaces for Specsavers, Vision Express, and Planet Hollywood across Europe. In 2000, he shifted his focus to the care industry, establishing multiple care homes and partnering with local authorities to address housing needs, before moving into specialist accommodations for the care and logistics sectors. Now, as the proud CEO of 'Birthgiver Film Productions', Dennis is embracing the world of filmmaking with enthusiasm, while remaining open to exploring new and exciting opportunities and willing to collaborate with top brands and film their dream projects.",
    imageSrc: "/ce.jpg",
    skills: [
      "Negotiations",
      "Business Management",
      "Relationship Building",
      "Project Management",
    ],
  },
  {
    name: "Bhaway Mehta",
    title: "Creative Producer",
    description:
      "Bhaway Mehta is a professional in the film and TV commercial industry with over 12 years of experience. An entrepreneur who knows the business inside-out and keeps the cogs turning. You'll probably see him on a set or working. Don't be late or he'll soon be on the phone chasing you! Popularly known as a complete family man, with enormous love for his parents and every person around him falls in love with him eventually due to his earnest work ethics and massive love for cinema. He is one of the few individuals who can handle multiple skills proficiently.",
    imageSrc: "/cp.jpg",
    skills: [
      "Director",
      "Actor",
      "Writer",
      "Former Cricketer",
      "Enthusiast Pilot",
      "Gym Enthusiast",
      "Sales & Marketing",
      "Business Development",
    ],
  },
];

export default function About({}: Props) {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-8 md:p-20 w-full"
    >
      <motion.header 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-20 md:mb-40"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-8xl font-bold"
        >
          About <span className="text-red-500">BGFP</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
        >
          Meet the visionary leaders driving innovation in film production
        </motion.p>
      </motion.header>

      <div className="w-full flex flex-col gap-20 md:gap-40">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10 md:gap-20 lg:gap-40`}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Image
                src={member.imageSrc}
                alt={`${member.name} - ${member.title}`}
                width={500}
                height={index === 1 ? 300 : 500}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                priority={index === 0}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col gap-6 md:gap-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-2">
                  {member.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-medium text-red-500 mb-4">
                  {member.name}
                </h3>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="max-w-2xl text-gray-600 leading-relaxed text-base md:text-lg"
              >
                {member.description}
              </motion.p>

              {member.skills && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                  className="mt-4"
                >
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    Key Skills & Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          ease: "easeOut", 
                          delay: 0.7 + skillIndex * 0.05 
                        }}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.footer 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mt-20 md:mt-40 p-8 bg-gray-50 rounded-lg"
      >
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
        >
          Ready to Collaborate?
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          BGFP is always open to exploring new opportunities and partnerships.
          Let's create something extraordinary together.
        </motion.p>
      </motion.footer>
    </motion.div>
  );
}
