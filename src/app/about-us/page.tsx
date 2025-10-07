"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaHandsHelping, FaRocket, FaLeaf } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import { Award, Users, Heart, Cpu, Leaf } from "lucide-react";

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
    imageSrc: "/vouge.jpeg",
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

const features = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "We've worked with top-tier brands and now bring that experience to small, medium, and large businesses.",
    delay: 0.05,
  },
  {
    icon: Users,
    title: "Collaborative Creativity",
    description:
      "Our team of writers, directors, designers, and developers work together to deliver innovative, high-impact solutions.",
    delay: 0.1,
  },
  {
    icon: Heart,
    title: "Emotional Storytelling",
    description:
      "We create films and content that move audiences, inspire action, and leave lasting impressions.",
    delay: 0.15,
  },
  {
    icon: Cpu,
    title: "Innovative Technology",
    description:
      "From VR experiences to interactive narratives, we leverage cutting-edge tech for memorable storytelling.",
    delay: 0.2,
  },
  {
    icon: Leaf,
    title: "Social & Sustainable Impact",
    description:
      "We prioritize eco-friendly production and social responsibility, partnering with nonprofits and community organizations.",
    delay: 0.25,
    span: true,
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
    <div>
      {/* Hero Section with Video */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/project.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Birthgiver Film Productions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto"
            >
              A studio built to take ideas from spark to screen. We blend
              cinematic craft with technology and strategy—covering film
              production, software development, and marketing—so your story is
              developed, produced, and launched with impact.
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="p-8 md:p-20 w-full"
      >
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
                What Is BirthGiver Film Productions?
              </h2>
              {/* <h3 className="text-2xl md:text-3xl font-semibold text-red-500 mb-8">
                What Is BirthGiver Film Productions?
              </h3> */}
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
                    Our mission is to empower businesses to grow through
                    high-quality, culturally impactful films, digital content,
                    and marketing solutions. We don’t just complete projects. We
                    help you amplify your brand, engage your audience, and
                    achieve measurable growth, whether you are a small business
                    or a large corporation.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-red-500 rounded-full mr-4"></span>
                    Vision
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To be a top-tier UK and global production company,
                    recognized for original storytelling, innovative digital
                    solutions, and transformative marketing strategies. We aim
                    to bring the expertise we’ve delivered for leading brands to
                    businesses of all sizes, helping them thrive locally and
                    globally.
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
                  “BirthGiver Film Productions” was founded by Bhaway Mehta as a
                  heartfelt tribute to his mother and to all mothers and women
                  worldwide, who selflessly nurture with love and dedication. In
                  the same spirit, we craft and nurture exceptional stories with
                  authenticity and passion, bringing them to life in the
                  mainstream commercial world through film production, software
                  development, and strategic marketing ensuring brand and
                  personal stories reach their target audiences across the
                  globe.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We saw an industry dominated by recycled ideas and formulaic
                  storytelling, and we knew there had to be a better way.
                  Inspired by the idea of "giving birth" to new narratives, we
                  set out to create a production company that would prioritise
                  originality, diversity, and emotional depth.
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
                  We create films and content that move audiences, from
                  compelling dramas to engaging documentaries and immersive
                  experiences. Every project is designed to leave a lasting
                  impression and inspire action.
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
                  Our team is a family of writers, directors, designers, and
                  developers who work together to create innovative, high-impact
                  solutions. Collaboration is at the heart of everything we do,
                  ensuring your project reaches its fullest potential.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FaRocket className="text-2xl text-red-600" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  Innovative Storytelling & Technology
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  We combine cutting-edge technology with creative storytelling,
                  from interactive narratives to VR experiences, pushing the
                  boundaries of modern cinema and digital media.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FaLeaf className="text-2xl text-red-600" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  Social & Sustainable Impact
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to social responsibility and sustainability.
                  Partnering with nonprofits, activists, and community
                  organizations, we amplify important social issues while using
                  eco-friendly production practices.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose BirthGiver */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 md:mb-32 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-red-500">BirthGiver</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We blend creative storytelling, technology, and strategy to help
                brands of every size thrive.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: feature.delay,
                  }}
                  className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 hover:border-red-200 hover:shadow-xl transition-all duration-300 ${
                    feature.span ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                  <div className="relative">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="w-full flex flex-col gap-20 md:gap-40">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 md:gap-20 lg:gap-40`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="flex-shrink-0 "
              >
                <Image
                  src={member.imageSrc}
                  alt={`${member.name} - ${member.title}`}
                  width={500}
                  height={index === 1 ? 300 : 500}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 "
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
    </div>
  );
}
