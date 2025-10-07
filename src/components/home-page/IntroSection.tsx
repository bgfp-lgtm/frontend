"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 h-80 w-80 rounded-full bg-red-600/8 blur-3xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-gray-900/5 blur-3xl"
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative w-full px-6 md:px-20 pt-30">
        <div className="max-w-6xl mx-auto">
          {/* Main heading with accent */}
          <div className="text-center mb-24">
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-red-100 bg-red-50 rounded-full"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-sm font-medium text-red-600">
                Full Spectrum Services
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              We are the only film production company in the{" "}
              <span className="relative inline-block">
                <span className="relative z-10">UK</span>
                {/* <span className="absolute bottom-2 left-0 right-0 h-3 bg-red-600/70 -z-0" /> */}
              </span>{" "}
              offering this full spectrum of services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1,
                  }}
                >
                  Transforming Stories.{" "}
                  <span className="text-red-600">Empowering Businesses.</span>{" "}
                  Driving Growth.
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                >
                  We are a UK-based Film Production, Website & Software
                  Development, and Marketing Strategy company, dedicated to
                  helping businesses of all sizes.
                </motion.p>
              </div>

              <div className="space-y-4 border-l-2 border-red-600 pl-6">
                <motion.div
                  className="group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                >
                  <p className="text-gray-700 leading-relaxed text-base">
                    <span className="font-semibold text-gray-900">
                      Have a small startup?
                    </span>{" "}
                    We'll help you grow.
                  </p>
                </motion.div>
                <motion.div
                  className="group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
                >
                  <p className="text-gray-700 leading-relaxed text-base">
                    <span className="font-semibold text-gray-900">
                      Manage a global corporation?
                    </span>{" "}
                    We'll help you make a bigger impact and reach audiences
                    worldwide.
                  </p>
                </motion.div>
              </div>

              <Link href={"/projects"}>
                <motion.button
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap="tap"
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-flex items-center group"
                >
                  View Our Projects
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
              </Link>
            </div>

            {/* Right content */}
            <div className="space-y-10">
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  From creating impactful stories to building high-performing
                  digital solutions and executing growth-focused marketing
                  strategies, we deliver results that drive{" "}
                  <span className="font-semibold text-red-600">
                    real business success
                  </span>
                  .
                </motion.p>

                <div className="grid grid-cols-2 gap-4">
                  <Link href={"/film-production"}>
                    <motion.div
                      className="group p-4 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="h-10 w-10 rounded-lg bg-red-600 mb-3 flex items-center justify-center">
                        <div className="h-5 w-5 border-2 border-white rounded" />
                      </div>
                      <p className="font-semibold text-gray-900 text-base mb-1">
                        Film Production
                      </p>
                      <p className="text-gray-500 text-sm">
                        Concept to final cut
                      </p>
                    </motion.div>
                  </Link>
                  <Link href={"/software-development"}>
                    <motion.div
                      className="group p-4 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="h-10 w-10 rounded-lg bg-red-600 mb-3 flex items-center justify-center">
                        <div className="h-5 w-5 border-2 border-white rounded" />
                      </div>
                      <p className="font-semibold text-gray-900 text-base mb-1">
                        Web & Software
                      </p>
                      <p className="text-gray-500 text-sm">
                        Design, build, scale
                      </p>
                    </motion.div>
                  </Link>
                  <Link href={"/marketing-strategy"}>
                    <motion.div
                      className="group p-4 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="h-10 w-10 rounded-lg bg-red-600 mb-3 flex items-center justify-center">
                        <div className="h-5 w-5 border-2 border-white rounded" />
                      </div>
                      <p className="font-semibold text-gray-900 text-base mb-1">
                        Marketing Strategy
                      </p>
                      <p className="text-gray-500 text-sm">
                        Reach and conversion
                      </p>
                    </motion.div>
                  </Link>
                  {/* <motion.div
                    className="group p-4 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="h-10 w-10 rounded-lg bg-red-600 mb-3 flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white rounded" />
                    </div>
                    <p className="font-semibold text-gray-900 text-base mb-1">
                      End-to-End Partner
                    </p>
                    <p className="text-gray-500 text-sm">One team for growth</p>
                  </motion.div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
