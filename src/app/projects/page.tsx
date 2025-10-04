"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";

export default function ProjectsPage() {
  const videos = [
    { id: "enq3FsysMk0", title: "MARKS AND SPENCER LONDON" },
    { id: "LittDjvruDs", title: "Carlsberg Smooth Soda" },
    { id: "ewj1P99iAC4", title: "KIA MOTORS" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const buildIframeSrc = (videoId: string, isHovered: boolean) => {
    const baseSrc = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams({
      modestbranding: "1",
      rel: "0",
      controls: isHovered ? "0" : "1",
      autoplay: isHovered ? "1" : "0",
      mute: isHovered ? "1" : "0",
      playsinline: "1",
      enablejsapi: "1",
    });
    return `${baseSrc}?${params.toString()}`;
  };

  const getThumbnailUrl = (videoId: string) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div>
      {/* Hero Section with Video */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/about.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto"
            >
              Discover our portfolio of creative projects and see the impact of our work
            </motion.p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600">Hover over a project to play the video.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={video.id}
                  className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="w-full aspect-video relative bg-black">
                    {!isHovered && (
                      <img
                        src={getThumbnailUrl(video.id)}
                        alt={`${video.title} thumbnail`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    {isHovered && (
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={buildIframeSrc(video.id, true)}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900">{video.title}</h2>
                    <p className="text-sm text-gray-600">YouTube embed that plays on hover.</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}


