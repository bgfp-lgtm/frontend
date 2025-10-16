"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import VideoModal from "@/components/VideoModal";
import { getProject } from "@/data/loader";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openVideoUrl, setOpenVideoUrl] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProject();
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
              Discover our portfolio of creative projects and see the impact of
              our work
            </motion.p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">Click a project to watch its video.</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-lg text-gray-600">Loading projects...</div>
            </div>
          ) : projects.length === 0 ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-lg text-gray-600">
                No projects available at the moment.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                if (!project.link) return null;

                return (
                  <button
                    key={project.id}
                    onClick={() => {
                      setOpenVideoUrl(project.link);
                      setOpenTitle(project.title);
                    }}
                    className="group text-left rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  >
                    {/* The container no longer has a fixed aspect ratio */}
                    <div className="w-full relative bg-black">
                      <img
                        src={project.image.url}
                        alt={`${project.title} image`}
                        className="w-full h-auto object-cover block"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {project.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        Tap to watch video.
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <CTASection />
      <VideoModal
        open={Boolean(openVideoUrl)}
        videoUrl={openVideoUrl}
        title={openTitle}
        onClose={() => {
          setOpenVideoUrl(null);
          setOpenTitle(undefined);
        }}
      />
    </div>
  );
}
