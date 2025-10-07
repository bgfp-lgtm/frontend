import React from "react";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function FilmProductionPage() {
  const services = [
    {
      title: "Final Script & Screenplay Development",
      description: "Crafting compelling scripts & screenplays with strong narrative structure, dialogue, and pacing to engage audiences from first page to final cut.",
      imageUrl: "https://images.unsplash.com/photo-1735893066935-2b7995bab10d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjcmlwdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Storyboarding & Shot Planning",
      description: "Visualise every scene with detailed storyboards and shot-planning to ensure efficient shoots and cinematic consistency.",
      imageUrl: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1887&auto=format&fit=crop"
    },
    {
      title: "Casting & Talent Selection",
      description: "Professional casting services to match the best talent for your film, commercial, or branded content.",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1887&auto=format&fit=crop"
    },
    {
      title: "Location Scouting & Set Design",
      description: "Scouting ideal and permitted locations; designing and preparing sets that enhance your story's visual impact.",
      imageUrl: "https://images.unsplash.com/photo-1467987506553-8f3916508521?q=80&w=1887&auto=format&fit=crop"
    },
    {
      title: "Budgeting & Production Scheduling",
      description: "Clear and realistic budget plans and schedules that keep your project on time and within cost.",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1887&auto=format&fit=crop"
    },
    {
      title: "Principal Photography / Filming",
      description: "High-quality filming using cinematic techniques, skilled crews, and industry-standard equipment.",
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1887&auto=format&fit=crop"
    },
    {
      title: "Direction & Creative Oversight",
      description: "Visionary direction and creative oversight to align all elements towards a cohesive, engaging film.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1887&auto=format&fit=crop"
    },
    {
      title: "Cinematography & Visual Storytelling",
      description: "Cinematic camera work, lighting and composition that elevate your film's visual narrative.",
      imageUrl: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1887&auto=format&fit=crop"
    },
    {
      title: "Post-Production: Editing & VFX",
      description: "Seamless editing, effects, and transitions to bring polish and storytelling clarity in post-production.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1887&auto=format&fit=crop"
    },
    {
      title: "Color Grading & Sound Design",
      description: "Mood-setting colour correction and immersive sound design for a fully professional, cinematic finish.",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1887&auto=format&fit=crop"
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
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative w-full h-44 sm:h-52 md:h-56">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
                <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}


