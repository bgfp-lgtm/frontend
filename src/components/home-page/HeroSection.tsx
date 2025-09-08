"use client";

import React from "react";
import { motion } from "framer-motion";
import Video from "../Video";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <Video />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-white text-7xl md:text-9xl shadow-lg font-bold mb-4 tracking-wider"
          >
            Birthgiver Film Productions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="text-2xl shadow-lg mb-4 tracking-wider text-white max-w-2xl"
          >
            Crafting Your Vision with End-to-End Cinematic Production.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
