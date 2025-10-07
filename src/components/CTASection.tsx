"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFilm, FaHandPeace, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();

  const handleGetQuoteClick = () => {
    router.push('/contact');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-900 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        <div className="text-center mb-16">
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
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Our Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 group"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6 group-hover:bg-red-500/30 transition-colors duration-300">
                <FaMapMarkerAlt className="text-red-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Address</h3>
              <p className="text-gray-300 leading-relaxed">
                Seymour Road<br />
                London, UK<br />
                N8 0BH
              </p>
            </div>
          </motion.div>

          {/* Contact Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 group"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6 group-hover:bg-red-500/30 transition-colors duration-300">
                <FaPhone className="text-red-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                +44 7776 842718<br />
                bgfp@birthgiverfilmproduction.com
              </p>
              <motion.button
                onClick={handleGetQuoteClick}
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors duration-300 font-semibold group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHandPeace className="text-lg group-hover/btn:rotate-12 transition-transform duration-300" />
                Get Your Quote
              </motion.button>
            </div>
          </motion.div>

          {/* Opening Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300 group"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6 group-hover:bg-red-500/30 transition-colors duration-300">
                <FaClock className="text-red-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Opening Hours</h3>
              <div className="text-gray-300 leading-relaxed space-y-1">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: Open only upon request</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
