"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Helper function to create URL-friendly slugs
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export default function IntroSection({ data }: any) {
  // --- Logic for Main Title (title) ---
  const title = data?.title;
  const highlight = "UK";
  if (!title) return null;
  const parts = title.split(highlight);
  const before = parts[0];
  const after = parts.slice(1).join(highlight);

  // --- Logic for Second Title (title2) ---
  const title2 = data?.title2;
  const highlight2 = "Empowering Businesses.";
  const parts2 = title2 ? title2.split(highlight2) : ["", ""];
  const before2 = parts2[0];
  const after2 = parts2.slice(1).join(highlight2);

  // --- Logic for Right Description ---
  const rightDesc = data?.right_description;
  const rightDescHighlight = "real business success";
  const rightDescParts = rightDesc
    ? rightDesc.split(rightDescHighlight)
    : ["", ""];
  const rightDescBefore = rightDescParts[0];
  const rightDescAfter = rightDescParts.slice(1).join(rightDescHighlight);

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
                {data?.subtitle || "Full Spectrum Services"}
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {before}
              <span className="relative inline-block">
                <span className="relative z-10">{highlight}</span>
              </span>
              {after}
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
                  {before2}
                  <span className="text-red-600">{highlight2}</span>
                  {after2}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                >
                  {data?.subtitle2}
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
                      {data?.ques1}
                    </span>{" "}
                    {data?.ans1}
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
                      {data?.ques2}
                    </span>{" "}
                    {data?.ans2}
                  </p>
                </motion.div>
              </div>

              <Link href={data?.link?.path || "#"}>
                <motion.button
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap="tap"
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-flex items-center group"
                >
                  {data?.link?.name || "View Our Projects"}
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
                  {rightDescBefore}
                  <span className="font-semibold text-red-600">
                    {rightDescHighlight}
                  </span>
                  {rightDescAfter}
                </motion.p>

                <div className="grid grid-cols-2 gap-4">
                  {/* Map over the right_block array */}
                  {data?.right_block?.map((item: any, index: number) => (
                    <Link href={`/${slugify(item.title)}`} key={item.id}>
                      <motion.div
                        className="group p-4 rounded-xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.1 + index * 0.1, // Staggered delay
                        }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="h-10 w-10 rounded-lg bg-red-600 mb-3 flex items-center justify-center">
                          {/* You can customize this icon */}
                          <div className="h-5 w-5 border-2 border-white rounded" />
                        </div>
                        <p className="font-semibold text-gray-900 text-base mb-1">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-sm">{item.subtitle}</p>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
