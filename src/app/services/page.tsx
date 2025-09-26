import React from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaCode, FaVideo, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Software & Development",
      description:
        "Strategic project development from concept to completion. We bring your ideas to life with comprehensive planning and execution.",
      href: "/software-development",
      video: "/coding.mp4",
      icon: FaCode,
      color: "from-blue-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1200&auto=format&fit=crop",
      ],
      subServices: [
        {
          name: "Concept Creation",
          description:
            "Transform your ideas into viable software concepts with strategic planning.",
        },
        {
          name: "Scriptwriting",
          description:
            "Create comprehensive technical specifications and user stories.",
        },
        {
          name: "Feasibility Analysis",
          description:
            "Evaluate technical feasibility, market potential, and resource requirements.",
        },
        {
          name: "Funding Strategy",
          description:
            "Develop funding strategies and pitch materials for investment.",
        },
        {
          name: "Team Assembly",
          description:
            "Build and manage development teams with the right expertise.",
        },
        {
          name: "Project Management",
          description: "Oversee project execution with agile methodologies.",
        },
        {
          name: "Website Creation",
          description:
            "Design and develop professional websites for your brand.",
        },
        {
          name: "Streaming Integration",
          description:
            "Integrate streaming capabilities and real-time features.",
        },
        {
          name: "Mobile App Development",
          description: "Build native and cross-platform mobile applications.",
        },
        {
          name: "UI/UX Design",
          description:
            "Design intuitive user interfaces and exceptional experiences.",
        },
        {
          name: "EPK Hosting",
          description: "Create and host electronic press kits for marketing.",
        },
        {
          name: "Rights Acquisition",
          description:
            "Handle intellectual property rights and legal documentation.",
        },
      ],
    },
    {
      title: "End-to-End Film Production",
      description:
        "Thorough pre-production planning including scriptwriting, storyboarding, casting, and location scouting for seamless execution.",
      href: "/film-production",
      video: "/production.mp4",
      icon: FaVideo,
      color: "from-red-500 to-orange-600",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963f?q=80&w=1600&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1517964603305-11c0f7b3e06e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464375117522-1311d763d328?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?q=80&w=1200&auto=format&fit=crop",
      ],
      subServices: [
        {
          name: "Final Script",
          description:
            "Complete script development with dialogue and technical directions.",
        },
        {
          name: "Storyboarding",
          description:
            "Visual planning through detailed storyboards for every scene.",
        },
        {
          name: "Casting",
          description:
            "Professional talent scouting, auditions, and casting decisions.",
        },
        {
          name: "Location Scouting",
          description:
            "Finding and securing perfect locations for your production.",
        },
        {
          name: "Budgeting",
          description: "Comprehensive budget planning and cost management.",
        },
        {
          name: "Principal Photography",
          description: "Main filming phase with professional camera work.",
        },
        {
          name: "Direction",
          description:
            "Creative direction to bring your vision to life on screen.",
        },
        {
          name: "Cinematography",
          description:
            "Professional camera work and visual storytelling techniques.",
        },
        {
          name: "Video Editing",
          description:
            "Professional post-production editing for narrative flow.",
        },
        {
          name: "VFX",
          description:
            "Visual effects creation and integration for enhanced storytelling.",
        },
        {
          name: "Color Grading",
          description:
            "Professional color correction and grading for visual consistency.",
        },
        {
          name: "Sound Design",
          description:
            "Creating immersive audio experiences through sound design.",
        },
      ],
    },
    {
      title: "Marketing & Strategy",
      description:
        "Comprehensive digital marketing strategies, social media management, and content marketing to amplify your brand reach.",
      href: "/marketing-strategy",
      video: "/marketing.mp4",
      icon: FaChartLine,
      color: "from-green-500 to-teal-600",
      image:
        "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1600&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop",
      ],
      subServices: [
        {
          name: "Film Branding",
          description:
            "Develop comprehensive brand identity and visual language.",
        },
        {
          name: "Trailer/Promo Editing",
          description: "Create compelling trailers and promotional content.",
        },
        {
          name: "Poster/Key Art Design",
          description: "Design striking posters and key art for your project.",
        },
        {
          name: "Press Kits",
          description: "Develop professional press kits for media outreach.",
        },
        {
          name: "Festival Submissions",
          description: "Strategic festival submission planning and execution.",
        },
        {
          name: "Digital PR",
          description: "Comprehensive digital public relations strategies.",
        },
        {
          name: "SEO",
          description: "Search engine optimization for improved visibility.",
        },
        {
          name: "Social Media Campaigns",
          description: "Engaging social media strategies across all platforms.",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/trailer.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 md:px-20 py-16 mt-24 md:mt-40 lg:mt-56 mb-20">
        <div className="w-full mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 max-w-3xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.subServices.map((subService, subIndex) => (
                      <div
                        key={subIndex}
                        className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                      >
                        <div className="relative h-40 w-full overflow-hidden">
                          <img
                            src={
                              service.images?.[
                                subIndex % (service.images?.length || 1)
                              ]
                            }
                            alt={subService.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {subService.name}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {subService.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-10 md:hidden">
                    <Link
                      href={service.href}
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
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
