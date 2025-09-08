"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="py-16 bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h3 className="font-bold text-xl text-white mb-4">
            Birthgiver Film Productions
          </h3>
          <p className="text-gray-400 mb-4">
            Bringing your vision to life through creative storytelling and high-quality cinematography.
          </p>
          <p className="text-sm">
            Email: hello@birthgiverfilms.com
            <br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="text-sm space-y-2">
            <li className="hover:text-red-500 cursor-pointer transition-colors">Video Production</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">Post-Production</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">Creative Direction</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">Live Event Coverage</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Connect</h4>
          <ul className="text-sm space-y-2">
            <li className="hover:text-red-500 cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">Facebook</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">YouTube</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors">LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Birthgiver Film Productions. All rights reserved.
      </div>
    </motion.footer>
  );
}
