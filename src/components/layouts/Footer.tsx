"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsInstagram, BsYoutube, BsFacebook, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="relative bg-gray-950 text-gray-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div>
            <h3 className="text-white text-2xl font-bold tracking-wide mb-3">
              Birthgiver
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Cinematic storytelling from concept to screen. We craft compelling visuals that move audiences and grow brands.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <BsInstagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
                <BsYoutube className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <BsFacebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <BsLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors">
                <Link href="/services">All Services</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/film-production">Film Production</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/software-development">Software Development</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/marketing-strategy">Marketing Strategy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/projects">Our Work</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/careers">Careers</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">We Work With</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">United Kingdom</li>
              <li className="text-gray-400">United States</li>
              <li className="text-gray-400">India</li>
              <li className="text-gray-400">Canada</li>
              <li className="text-gray-400">Australia</li>
              <li className="text-gray-400 text-red-400">+ 6 more countries</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Stay in the loop</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get updates on new releases, behind-the-scenes, and exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Your email address"
                className="w-full rounded-md bg-gray-900 border border-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="rounded-md bg-red-600 hover:bg-red-700 text-white px-4 py-3 text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Birthgiver Film Productions</div>
          {/* Legal pages removed until implemented */}
        </div>
      </div>
    </motion.footer>
  );
}
