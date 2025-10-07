import React from "react";
import CTASection from "@/components/CTASection";

export default function FilmProductionPage() {
  const services = [
    {
      title: "Final Script & Screenplay Development",
      description: "Crafting compelling scripts & screenplays with strong narrative structure, dialogue, and pacing to engage audiences from first page to final cut."
    },
    {
      title: "Storyboarding & Shot Planning",
      description: "Visualise every scene with detailed storyboards and shot-planning to ensure efficient shoots and cinematic consistency."
    },
    {
      title: "Casting & Talent Selection",
      description: "Professional casting services to match the best talent for your film, commercial, or branded content."
    },
    {
      title: "Location Scouting & Set Design",
      description: "Scouting ideal and permitted locations; designing and preparing sets that enhance your story's visual impact."
    },
    {
      title: "Budgeting & Production Scheduling",
      description: "Clear and realistic budget plans and schedules that keep your project on time and within cost."
    },
    {
      title: "Principal Photography / Filming",
      description: "High-quality filming using cinematic techniques, skilled crews, and industry-standard equipment."
    },
    {
      title: "Direction & Creative Oversight",
      description: "Visionary direction and creative oversight to align all elements towards a cohesive, engaging film."
    },
    {
      title: "Cinematography & Visual Storytelling",
      description: "Cinematic camera work, lighting and composition that elevate your film's visual narrative."
    },
    {
      title: "Post-Production: Editing & VFX",
      description: "Seamless editing, effects, and transitions to bring polish and storytelling clarity in post-production."
    },
    {
      title: "Color Grading & Sound Design",
      description: "Mood-setting colour correction and immersive sound design for a fully professional, cinematic finish."
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


