import React from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaCode, FaVideo, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Software & Development",
      description: "Strategic project development from concept to completion. We bring your ideas to life with comprehensive planning and execution.",
      href: "/software-development",
      video: "/coding.mp4",
      icon: FaCode,
      color: "from-blue-500 to-purple-600",
      subServices: [
        {
          name: "Concept Creation",
          description: "Transform your ideas into viable software concepts with strategic planning."
        },
        {
          name: "Scriptwriting",
          description: "Create comprehensive technical specifications and user stories."
        },
        {
          name: "Feasibility Analysis",
          description: "Evaluate technical feasibility, market potential, and resource requirements."
        },
        {
          name: "Funding Strategy",
          description: "Develop funding strategies and pitch materials for investment."
        },
        {
          name: "Team Assembly",
          description: "Build and manage development teams with the right expertise."
        },
        {
          name: "Project Management",
          description: "Oversee project execution with agile methodologies."
        },
        {
          name: "Website Creation",
          description: "Design and develop professional websites for your brand."
        },
        {
          name: "Streaming Integration",
          description: "Integrate streaming capabilities and real-time features."
        },
        {
          name: "Mobile App Development",
          description: "Build native and cross-platform mobile applications."
        },
        {
          name: "UI/UX Design",
          description: "Design intuitive user interfaces and exceptional experiences."
        },
        {
          name: "EPK Hosting",
          description: "Create and host electronic press kits for marketing."
        },
        {
          name: "Rights Acquisition",
          description: "Handle intellectual property rights and legal documentation."
        },
      ],
    },
    {
      title: "End-to-End Film Production",
      description: "Thorough pre-production planning including scriptwriting, storyboarding, casting, and location scouting for seamless execution.",
      href: "/film-production",
      video: "/production.mp4",
      icon: FaVideo,
      color: "from-red-500 to-orange-600",
      subServices: [
        {
          name: "Final Script",
          description: "Complete script development with dialogue and technical directions."
        },
        {
          name: "Storyboarding",
          description: "Visual planning through detailed storyboards for every scene."
        },
        {
          name: "Casting",
          description: "Professional talent scouting, auditions, and casting decisions."
        },
        {
          name: "Location Scouting",
          description: "Finding and securing perfect locations for your production."
        },
        {
          name: "Budgeting",
          description: "Comprehensive budget planning and cost management."
        },
        {
          name: "Principal Photography",
          description: "Main filming phase with professional camera work."
        },
        {
          name: "Direction",
          description: "Creative direction to bring your vision to life on screen."
        },
        {
          name: "Cinematography",
          description: "Professional camera work and visual storytelling techniques."
        },
        {
          name: "Video Editing",
          description: "Professional post-production editing for narrative flow."
        },
        {
          name: "VFX",
          description: "Visual effects creation and integration for enhanced storytelling."
        },
        {
          name: "Color Grading",
          description: "Professional color correction and grading for visual consistency."
        },
        {
          name: "Sound Design",
          description: "Creating immersive audio experiences through sound design."
        },
      ],
    },
    {
      title: "Marketing & Strategy",
      description: "Comprehensive digital marketing strategies, social media management, and content marketing to amplify your brand reach.",
      href: "/marketing-strategy",
      video: "/marketing.mp4",
      icon: FaChartLine,
      color: "from-green-500 to-teal-600",
      subServices: [
        {
          name: "Film Branding",
          description: "Develop comprehensive brand identity and visual language."
        },
        {
          name: "Trailer/Promo Editing",
          description: "Create compelling trailers and promotional content."
        },
        {
          name: "Poster/Key Art Design",
          description: "Design striking posters and key art for your project."
        },
        {
          name: "Press Kits",
          description: "Develop professional press kits for media outreach."
        },
        {
          name: "Festival Submissions",
          description: "Strategic festival submission planning and execution."
        },
        {
          name: "Digital PR",
          description: "Comprehensive digital public relations strategies."
        },
        {
          name: "SEO",
          description: "Search engine optimization for improved visibility."
        },
        {
          name: "Social Media Campaigns",
          description: "Engaging social media strategies across all platforms."
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We offer comprehensive creative services to bring your vision to life. 
              From initial concept to final delivery, we handle every aspect of your project.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Video Hero Section for each service */}
                <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    className="w-full h-full object-cover"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <service.icon className="text-3xl text-white" />
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                      >
                        View Details
                        <FaArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Service Cards */}
                <div className="p-8 md:p-12">
                  <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      What We Offer
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Comprehensive solutions tailored to your specific needs and goals.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.subServices.map((subService, subIndex) => (
                      <div
                        key={subIndex}
                        className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <service.icon className="text-white text-lg" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                              {subService.name}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {subService.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <Link
                      href={service.href}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Explore {service.title}
                      <FaArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
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
