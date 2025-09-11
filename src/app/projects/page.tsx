"use client";

import React, { useMemo, useState } from "react";

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
    <div className="w-full px-4 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
          <p className="text-gray-600 mt-3">Hover over a project to play the video.</p>
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
  );
}


