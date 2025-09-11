import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Software & Development",
      description: "Strategic project development from concept to completion. We bring your ideas to life with comprehensive planning and execution.",
      href: "/software-development",
      subServices: [
        "Concept creation",
        "Scriptwriting",
        "Feasibility analysis",
        "Funding",
        "Strategy",
        "Rights acquisition",
        "Team assembly",
        "Project",
        "Official website creation",
        "Streaming integration",
        "EPK (electronic press kit) hosting",
        "Mobile app development",
        "UI/UX design for platforms & apps",
      ],
    },
    {
      title: "End-to-End Film Production",
      description: "Thorough pre-production planning including scriptwriting, storyboarding, casting, and location scouting for seamless execution.",
      href: "/film-production",
      subServices: [
        "Final script",
        "Storyboarding",
        "Casting",
        "Location scouting",
        "Budgeting",
        "Scheduling",
        "Crew hiring",
        "Tech planning",
        "Set design",
        "Costumes",
        "Pre-visualization",
        "Principal photography",
        "Direction",
        "Cinematography",
        "Sound recording",
        "Lighting",
        "On-set management",
        "Equipment handling",
        "Live supervision",
        "Video editing",
        "VFX",
        "Sound design/mixing",
        "ADR",
        "Foley",
        "Color grading",
        "Subtitling",
        "Mastering",
        "Trailer creation",
        "Deliverables prep",
      ],
    },
    {
      title: "Marketing & Strategy",
      description: "Comprehensive digital marketing strategies, social media management, and content marketing to amplify your brand reach.",
      href: "/marketing-strategy",
      subServices: [
        "Film branding",
        "Trailer/promo editing",
        "Poster/key art design",
        "Press kits",
        "Festival submissions",
        "Digital PR",
        "SEO",
        "Social media campaigns",
      ],
    },
  ];

  return (
    <div className="w-full px-4 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive creative services to bring your vision to life. 
            From initial concept to final delivery, we handle every aspect of your project.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                  >
                    View Details
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.subServices.map((subService, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <h3 className="text-sm font-medium text-gray-900">{subService}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
