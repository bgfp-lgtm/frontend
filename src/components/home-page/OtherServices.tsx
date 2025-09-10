"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  BsCameraVideo,
  BsBuilding,
  BsMusicNote,
  BsTv,
  BsPhone,
} from "react-icons/bs";

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function OtherServices() {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Event Coverage",
      description:
        "Filming and producing content for live events like concerts and corporate events.",
      icon: <BsCameraVideo className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Corporate Videos",
      description:
        "Creating training videos, internal communications, and promotional content for businesses.",
      icon: <BsBuilding className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Music Video Production",
      description:
        "Producing videos for musicians and bands to promote their music.",
      icon: <BsMusicNote className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "TV and Digital Commercials",
      description:
        "Producing TV commercials, online ads, promotional videos, and branded content for businesses.",
      icon: <BsTv className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Digital Content Creation",
      description:
        "Producing content for digital platforms like YouTube, Instagram, TikTok, and streaming services.",
      icon: <BsPhone className="w-6 h-6" />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className="w-full px-4 md:px-20 py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
          >
            Our Other Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            We guarantee fast and discrete handling of all your business tasks.
            Our team of highly qualified employees is available day and night
            because your satisfaction is our highest priority.
          </motion.p>

          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-flex items-center group"
          >
            GET YOUR QUOTE NOW
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-red-200"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors duration-300">
                <span className="mr-2">Learn More</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="text-center bg-gray-900 rounded-2xl p-12 relative overflow-hidden mt-10"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Contact us today for a personalized quote and let's bring your
              vision to life
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg border-2 border-red-600 flex items-center"
              >
                Get Quote Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </motion.button>
            </div>

            <div className="mt-8 flex justify-center items-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                24/7 Support
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                Fast Response
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                Discrete Handling
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
