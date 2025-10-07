"use client";

import Image from "next/image";
import Link from "next/link";
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
      id: 2,
      title: "End-to-End Film Production",
      description:
        "Bring your brand story to life with professional films, commercials, and branded content. From concept to post-production, we deliver emotionally engaging, culturally impactful videos that attract and retain customers.",
      image:
        "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbSUyMHByb2R1Y3Rpb258ZW58MHx8MHx8fDA%3D",
      icon: <BsClipboardData className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Marketing & Strategy",
      description:
        "Build a powerful digital presence with custom websites, apps, and software solutions tailored to your business needs. Our focus on UX, scalability, and performance ensures your brand stands out online.",
      image:
        "https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      icon: <BsMegaphone className="w-5 h-5" />,
    },
    {
      id: 1,
      title: "Software & Website Development",
      description:
        "Grow your business with data-driven marketing and branding solutions. From brand identity and digital campaigns to content marketing, we help businesses replicate the success of leading brands.",
      image:
        "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      icon: <BsLightbulb className="w-5 h-5" />,
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
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-500"
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
                {service.title === "Software & Website Development" ? (
                  <Link
                    href="/software-development"
                    className="mt-4 text-red-600 font-medium text-sm hover:text-red-800 transition-colors inline-flex items-center pointer-events-auto"
                  >
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
                  </Link>
                ) : service.title === "End-to-End Film Production" ? (
                  <Link
                    href="/film-production"
                    className="mt-4 text-red-600 font-medium text-sm hover:text-red-800 transition-colors inline-flex items-center pointer-events-auto"
                  >
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
                  </Link>
                ) : service.title === "Marketing & Strategy" ? (
                  <Link
                    href="/marketing-strategy"
                    className="mt-4 text-red-600 font-medium text-sm hover:text-red-800 transition-colors inline-flex items-center pointer-events-auto"
                  >
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
                  </Link>
                ) : (
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
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
