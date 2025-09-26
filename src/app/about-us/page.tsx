"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaHandsHelping, FaRocket, FaLeaf } from "react-icons/fa";
import CTASection from "@/components/CTASection";

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
    transition: { duration: 0.8, ease: "easeOut" },
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
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-16 md:mb-28"
      >
        <div className="px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold tracking-tight text-gray-900"
            >
              Birthgiver Film Productions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-5 mx-auto max-w-3xl text-base md:text-xl leading-relaxed text-gray-600"
            >
              A studio built to take ideas from spark to screen. We blend
              cinematic craft with technology and strategy—covering film
              production, software development, and marketing—so your story is
              developed, produced, and launched with impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-100">
                End‑to‑end production
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
                Software & platforms
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
                Marketing & launch
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* WHY CHOOSE BGFP Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-20 md:mb-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-center mb-16 mt-16 md:mt-24"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              WHY CHOOSE BGFP?
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-red-500 mb-8">
              What Is BirthGiver Film Productions?
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-red-500 rounded-full mr-4"></span>
                  Mission
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To produce high-quality, culturally impactful films and
                  digital content for small to big businesses while driving
                  economic growth in the UK.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-red-500 rounded-full mr-4"></span>
                  Vision
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Be a leading top-tier film production company in the UK and
                  subsequently globally, known for innovation and cultural
                  storytelling. Working with small, medium and big businesses.
                </p>
              </div>
            </motion.div>

            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="bg-gradient-to-br from-red-50 to-gray-50 rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-500 rounded-full mr-4"></span>
                Our Story
              </h4>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                "Birthgiver Film Productions" was founded by Bhaway Mehta as a
                tribute to his mother and all the mothers in the world, who give
                birth and selflessly nurture with utmost love and passion
                towards the new born similarly, we create the best stories in
                the world and nurture them with authenticity and passion to
                represent them in mainstream commercial world.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We saw an industry dominated by recycled ideas and formulaic
                storytelling, and we knew there had to be a better way. Inspired
                by the idea of "giving birth" to new narratives, we set out to
                create a production company that would prioritise originality,
                diversity, and emotional depth.
              </p>
            </motion.div>
          </div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <FaHeart className="text-2xl text-red-600" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">
                Focus on Emotional Impact
              </h5>
              <p className="text-gray-600 leading-relaxed">
                Our films are designed to evoke deep emotional responses.
                Whether it's a heart-wrenching drama, a thought-provoking
                documentary, or a thrilling adventure, we aim to leave audiences
                moved, inspired, and transformed.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <FaHandsHelping className="text-2xl text-red-600" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">
                Collaborative Creativity
              </h5>
              <p className="text-gray-600 leading-relaxed">
                We foster a collaborative environment where writers, directors,
                actors, and crew members are empowered to bring their best ideas
                to the table. Our team is a family of passionate storytellers
                who believe in the power of collective creativity.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <FaRocket className="text-2xl text-red-600" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">
                Innovative Storytelling
              </h5>
              <p className="text-gray-600 leading-relaxed">
                We embrace cutting-edge technology and unconventional
                storytelling techniques to create visually stunning and
                narratively compelling films. From immersive VR experiences to
                interactive narratives, we push the boundaries of what cinema
                can be.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <FaLeaf className="text-2xl text-red-600" />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">
                Social Impact
              </h5>
              <p className="text-gray-600 leading-relaxed">
                We are committed to using our platform for good. We partner with
                nonprofits, activists, and community organisations to amplify
                important social issues and drive meaningful change through our
                films. Focusing on sustainable ways to film.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

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
                          delay: 0.7 + skillIndex * 0.05,
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

      <div className="mt-24 md:mt-40 lg:mt-50">
        <CTASection />
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
