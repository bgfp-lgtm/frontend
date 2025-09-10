"use client";

import React from "react";
import { motion } from "framer-motion";
import Video from "../Video";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="lg:h-screen w-full relative overflow-hidden">
      <Video />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-white text-4xl sm:text-5xl md:text-9xl font-bold mb-4 tracking-wider leading-tight"
          >
            Birthgiver Film Productions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="text-base sm:text-lg md:text-2xl mb-4 tracking-wide text-white max-w-xl sm:max-w-2xl"
          >
            Giving Birth To Your Imagination
          </motion.p>
        </div>
      </div>
    </div>
  );
}
