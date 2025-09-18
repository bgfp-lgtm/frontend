"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFilm, FaHandPeace } from "react-icons/fa";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-900 py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        <div className="text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 border border-white rounded-full mb-8"
          >
            <FaFilm className="text-red-500 text-lg" />
            <span className="text-white font-medium text-sm uppercase tracking-wide">
              WE GIVE BIRTH TO YOUR STORIES
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-500 mb-12 leading-tight"
          >
            Let's turn your ideas
            <br />
            into reality.
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="inline-flex items-center gap-3 text-white hover:text-red-500 transition-colors duration-300 cursor-pointer group"
          >
            <FaHandPeace className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold uppercase tracking-wide underline decoration-white underline-offset-4 group-hover:decoration-red-500 transition-colors duration-300">
              GET YOUR QUOTE NOW
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
