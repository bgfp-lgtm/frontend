"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  BsLightbulb,
  BsClipboardData,
  BsCameraReels,
  BsPlayCircle,
  BsMegaphone,
  BsCode,
} from "react-icons/bs";

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

type Props = {};

export default function Services({}: Props) {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Development",
      description:
        "Strategic project development from concept to completion. We bring your ideas to life with comprehensive planning and execution.",
      image: "/d.jpg",
      icon: <BsLightbulb className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Pre-Production",
      description:
        "Thorough pre-production planning including scriptwriting, storyboarding, casting, and location scouting for seamless execution.",
      image: "/pp.jpg",
      icon: <BsClipboardData className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Production",
      description:
        "Professional video and film production with state-of-the-art equipment and experienced crew for high-quality results.",
      image: "/p.jpg",
      icon: <BsCameraReels className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Post-Production",
      description:
        "Expert video editing, color correction, sound design, and visual effects to polish your content to perfection.",
      image: "/po.jpg",
      icon: <BsPlayCircle className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Marketing & Digital",
      description:
        "Comprehensive digital marketing strategies, social media management, and content marketing to amplify your brand reach.",
      image: "/dm.jpg",
      icon: <BsMegaphone className="w-5 h-5" />,
    },
    {
      id: 6,
      title: "Web & App Development",
      description:
        "Custom web and mobile app development solutions tailored to your business needs with modern technologies and user-centric design.",
      image: "/wa.jpg",
      icon: <BsCode className="w-5 h-5" />,
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full px-4 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl w-full mb-4 font-bold"
        >
          Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl"
        >
          We offer comprehensive creative services to bring your vision to life
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <button className="mt-4 text-red-600 font-medium text-sm hover:text-red-800 transition-colors inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
