"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaHandsHelping, FaRocket, FaLeaf } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import { Award, Users, Heart, Cpu, Leaf } from "lucide-react";

type Props = {};

// const features = [
//   {
//     icon: Award,
//     title: "Proven Expertise",
//     description:
//       "We've worked with top-tier brands and now bring that experience to small, medium, and large businesses.",
//     delay: 0.05,
//   },
//   {
//     icon: Users,
//     title: "Collaborative Creativity",
//     description:
//       "Our team of writers, directors, designers, and developers work together to deliver innovative, high-impact solutions.",
//     delay: 0.1,
//   },
//   {
//     icon: Heart,
//     title: "Emotional Storytelling",
//     description:
//       "We create films and content that move audiences, inspire action, and leave lasting impressions.",
//     delay: 0.15,
//   },
//   {
//     icon: Cpu,
//     title: "Innovative Technology",
//     description:
//       "From VR experiences to interactive narratives, we leverage cutting-edge tech for memorable storytelling.",
//     delay: 0.2,
//   },
//   {
//     icon: Leaf,
//     title: "Social & Sustainable Impact",
//     description:
//       "We prioritize eco-friendly production and social responsibility, partnering with nonprofits and community organizations.",
//     delay: 0.25,
//     span: true,
//   },
// ];

export default function AboutUs({
  herosectionData,
  mission,
  vision,
  ourStory,
  highlights,
  features,
  members,
  cta,
}: any) {
  console.log("AboutUs Component - Herosection Data:", herosectionData);

  const title = features?.title;
  const highlightWord = "BirthGiver";

  const parts = title.split(highlightWord);
  const titlePart1 = parts[0];
  const titlePart2 = parts[1];

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
          <source src={herosectionData?.video?.url} type="video/mp4" />
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
              {herosectionData?.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto"
            >
              {herosectionData?.description}
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
                    {mission?.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {mission?.description}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-red-500 rounded-full mr-4"></span>
                    {vision?.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {vision?.description}
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
                  {ourStory?.title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {ourStory?.description}
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
              {highlights?.map((highlight: any, index: any) => (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src={highlight.image?.url}
                      alt={highlight.id}
                      width={24}
                      height={24}
                      className="w-6 h-6 text-red-500"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h5>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
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
                {/* Use the dynamic parts here */}
                {titlePart1}
                <span className="text-red-500">{highlightWord}</span>
                {titlePart2}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {features?.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features?.cards?.map((feature: any, index: any) => (
                <motion.div
                  key={feature.id}
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
                      <Image
                        src={feature.image?.url}
                        alt={feature.title}
                        width={50}
                        height={50}
                        className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300"
                      />
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
          {members.map((member: any, index: any) => (
            <motion.div
              key={member.id}
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
                  src={member.image?.url}
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
                      {member.skills.map((skill: any) => (
                        <motion.span
                          key={skill.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.7 + 1 * 0.05,
                          }}
                          className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                        >
                          {skill.name}
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
          <CTASection data={cta} />
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
