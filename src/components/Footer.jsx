import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="py-12 bg-black/90"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h3 className="font-bold text-lg">LET'S TURN YOUR IDEAS INTO REALITY</h3>
          <p className="mt-3 text-sm">
            Email: hello@example.com<br />Phone: +1 234 567 890
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Social</h4>
          <ul className="mt-3 text-sm space-y-2">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 text-sm space-y-2">
            <li>Services</li>
            <li>Projects</li>
            <li>References</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} VSP video. All rights reserved.
      </div>
    </motion.footer>
  );
}