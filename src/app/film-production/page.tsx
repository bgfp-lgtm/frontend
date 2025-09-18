import React from "react";
import CTASection from "@/components/CTASection";

export default function FilmProductionPage() {
  const services = [
    {
      title: "Final Script",
      description: "Complete script development with dialogue, action, and technical directions for production."
    },
    {
      title: "Storyboarding",
      description: "Visual planning through detailed storyboards that map out every scene and shot sequence."
    },
    {
      title: "Casting",
      description: "Professional talent scouting, auditions, and casting decisions for all roles."
    },
    {
      title: "Location Scouting",
      description: "Finding and securing the perfect locations that match the script requirements."
    },
    {
      title: "Budgeting",
      description: "Comprehensive budget planning and cost management throughout the production process."
    },
    {
      title: "Scheduling",
      description: "Detailed production scheduling and timeline management for efficient execution."
    },
    {
      title: "Crew Hiring",
      description: "Assembling professional production teams with specialized skills and experience."
    },
    {
      title: "Tech Planning",
      description: "Technical planning including equipment selection, camera setups, and technical specifications."
    },
    {
      title: "Set Design",
      description: "Creating immersive and authentic sets that bring the story to life."
    },
    {
      title: "Costumes",
      description: "Designing and sourcing costumes that enhance character development and period accuracy."
    },
    {
      title: "Pre-visualization",
      description: "Creating detailed pre-visualization to plan complex shots and sequences."
    },
    {
      title: "Principal Photography",
      description: "Main filming phase with professional camera work and on-set direction."
    },
    {
      title: "Direction",
      description: "Creative direction and guidance to bring the vision to life on screen."
    },
    {
      title: "Cinematography",
      description: "Professional camera work, framing, and visual storytelling techniques."
    },
    {
      title: "Sound Recording",
      description: "High-quality audio capture during filming with professional sound equipment."
    },
    {
      title: "Lighting",
      description: "Expert lighting design and execution to create the perfect mood and atmosphere."
    },
    {
      title: "On-set Management",
      description: "Coordinating all aspects of production on set for smooth operations."
    },
    {
      title: "Equipment Handling",
      description: "Professional management and operation of all production equipment."
    },
    {
      title: "Live Supervision",
      description: "Real-time monitoring and supervision of all production activities."
    },
    {
      title: "Video Editing",
      description: "Professional post-production editing to create the final narrative flow."
    },
    {
      title: "VFX",
      description: "Visual effects creation and integration for enhanced storytelling."
    },
    {
      title: "Sound Design/Mixing",
      description: "Creating immersive audio experiences through professional sound design and mixing."
    },
    {
      title: "ADR",
      description: "Automated Dialogue Replacement for crystal clear audio quality."
    },
    {
      title: "Foley",
      description: "Creating custom sound effects to enhance the audio experience."
    },
    {
      title: "Color Grading",
      description: "Professional color correction and grading for visual consistency and mood."
    },
    {
      title: "Subtitling",
      description: "Creating accurate and professional subtitles for accessibility and international distribution."
    },
    {
      title: "Mastering",
      description: "Final mastering process to ensure optimal quality across all platforms."
    },
    {
      title: "Trailer Creation",
      description: "Compelling trailer production to promote and market your film effectively."
    },
    {
      title: "Deliverables Prep",
      description: "Preparing all final deliverables in various formats for distribution."
    },
  ];

  return (
    <div className="w-full">
      {/* Video Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
        >
          <source src="/production.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">End-to-End Film Production</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              From pre-production to final delivery, we manage and execute every stage with precision and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Production Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Complete film production services covering every aspect from initial concept to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}


