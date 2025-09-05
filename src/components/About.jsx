import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-gray-300">
            With over 35 years of experience, we produce engaging audiovisual content — events,
            films, and corporate storytelling. Our team combines technical excellence with cinematic creativity.
          </p>
          <ul className="mt-4 text-gray-300 list-disc list-inside">
            <li>Concept & Script</li>
            <li>Camera & Lighting</li>
            <li>Post Production & Color Grading</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-full h-64 bg-white/5 rounded-lg flex items-center justify-center">
            [Video / Image about team]
          </div>
        </motion.div>
      </div>
    </section>
  );
}