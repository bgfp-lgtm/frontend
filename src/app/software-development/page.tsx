import React from "react";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: "UI/UX Design & Interactive Tools",
      description:
        "Designing intuitive user interfaces and immersive UX experiences for web, apps, or interactive film content.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Building responsive websites and mobile apps that enhance your film's reach and viewer experience.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "Concept & Technical Planning",
      description:
        "Defining software or app concepts, user stories, tech stack, and product roadmap aligned with your film's goals.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "Scriptwriting for Software / User Stories",
      description:
        "Creating detailed software specifications, scripts, and user stories for development clarity.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "Feasibility & Market Analysis",
      description:
        "Evaluating technical, financial, and market feasibility to ensure project success.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
    },
    // {
    //   title: "Funding Strategy & Pitch Materials",
    //   description:
    //     "Crafting investor pitches and funding plans to secure backing for your software / film tech projects.",
    //   image:
    //     "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center",
    // },
    {
      title: "Team Assembly & Project Management",
      description:
        "Bringing together expert teams & supervising development using agile methodologies for efficient delivery.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop&crop=center",
    },

    {
      title: "Streaming Platform / Integration Solutions",
      description:
        "Integrating streaming capabilities for live-video, VOD platforms or multi-device streaming.",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop&crop=center",
    },

    {
      title: "Electronic Press Kit (EPK) Hosting & Web Services",
      description:
        "Hosting and maintaining EPKs and websites to showcase your film, cast, and media assets seamlessly.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop&crop=center",
    },
    // {
    //   title: "Rights Acquisition & Legal / Licensing Software Support",
    //   description: "Guiding rights acquisition, licensing, and digital rights management to legally protect your content.",
    //   image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop&crop=center"
    // },
  ];

  return (
    <div className="w-full">
      {/* Video Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/coding.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Software & Development
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We offer end-to-end software and digital product services covering
              the full lifecycle from concept to launch and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From initial concept to final deployment, we provide comprehensive
              software development solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
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
