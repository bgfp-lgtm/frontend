import React from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaCode, FaVideo, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "End-to-End Film Production",
      description:
        "Everything from concept to final cut, crafted with cinematic excellence.",
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
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524712023315-99a081552848?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200&auto=format&fit=crop",
      ],
      subServices: [
        {
          name: "Final Script & Screenplay Development",
          description:
            "Crafting compelling scripts & screenplays with strong narrative structure, dialogue, and pacing to engage audiences from first page to final cut.",
        },
        {
          name: "Storyboarding & Shot Planning",
          description:
            "Visualise every scene with detailed storyboards and shot-planning to ensure efficient shoots and cinematic consistency.",
        },
        {
          name: "Casting & Talent Selection",
          description:
            "Professional casting services to match the best talent for your film, commercial, or branded content.",
        },
        {
          name: "Location Scouting & Set Design",
          description:
            "Scouting ideal and permitted locations; designing and preparing sets that enhance your story's visual impact.",
        },
        {
          name: "Budgeting & Production Scheduling",
          description:
            "Clear and realistic budget plans and schedules that keep your project on time and within cost.",
        },
        {
          name: "Principal Photography / Filming",
          description:
            "High-quality filming using cinematic techniques, skilled crews, and industry-standard equipment.",
        },
        {
          name: "Direction & Creative Oversight",
          description:
            "Visionary direction and creative oversight to align all elements towards a cohesive, engaging film.",
        },
        {
          name: "Cinematography & Visual Storytelling",
          description:
            "Cinematic camera work, lighting and composition that elevate your film's visual narrative.",
        },
        {
          name: "Post-Production: Editing & VFX",
          description:
            "Seamless editing, effects, and transitions to bring polish and storytelling clarity in post-production.",
        },
        {
          name: "Color Grading & Sound Design",
          description:
            "Mood-setting colour correction and immersive sound design for a fully professional, cinematic finish.",
        },
      ],
    },
    {
      title: "Marketing & Strategy",
      description:
        "Amplify your reach. Engage your audience. Build lasting impact.",
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
          name: "Film Branding & Identity Design",
          description:
            "Develop strong film branding and visual identity to make your project memorable and recognisable.",
        },
        {
          name: "Trailer & Promo Video Editing",
          description:
            "Create powerful trailers or promotional teasers that generate excitement and share-ability.",
        },
        {
          name: "Poster & Key Art Design",
          description:
            "Design eye-catching posters and key art that capture attention in both print and digital channels.",
        },
        {
          name: "Press Kits & Media Outreach",
          description:
            "Prepare professional press kits and conduct media outreach to build buzz and press coverage.",
        },
        {
          name: "Festival Submission Strategy",
          description:
            "Strategic festival submission planning to maximise exposure, awards, and screening opportunities.",
        },
        {
          name: "PR & Influencer",
          description:
            "Leverage online PR and influencer partnerships to expand reach and build credibility.",
        },
        {
          name: "SEO for Films & Video",
          description:
            "Search engine optimization strategies tailored to film content so your work is discovered online.",
        },
        {
          name: "Social Media Campaigns & Community Engagement",
          description:
            "Engaging social campaigns and community building to increase audience interaction and sharing.",
        },
      ],
    },
    {
      title: "Software & Development",
      description:
        "Tech-forward tools to expand your film's capabilities and reach.",
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
          name: "Concept & Technical Planning",
          description:
            "Defining software or app concepts, user stories, tech stack, and product roadmap aligned with your film's goals.",
        },
        {
          name: "Scriptwriting for Software / User Stories",
          description:
            "Creating detailed software specifications, scripts, and user stories for development clarity.",
        },
        {
          name: "Feasibility & Market Analysis",
          description:
            "Evaluating technical, financial, and market feasibility to ensure project success.",
        },
        {
          name: "Funding Strategy & Pitch Materials",
          description:
            "Crafting investor pitches and funding plans to secure backing for your software / film tech projects.",
        },
        {
          name: "Team Assembly & Project Management",
          description:
            "Bringing together expert teams & supervising development using agile methodologies for efficient delivery.",
        },
        {
          name: "Web & Mobile App Development",
          description:
            "Building responsive websites and mobile apps that enhance your film's reach and viewer experience.",
        },
        {
          name: "Streaming Platform / Integration Solutions",
          description:
            "Integrating streaming capabilities for live-video, VOD platforms or multi-device streaming.",
        },
        {
          name: "UI/UX Design & Interactive Tools",
          description:
            "Designing intuitive user interfaces and immersive UX experiences for web, apps, or interactive film content.",
        },
        {
          name: "Electronic Press Kit (EPK) Hosting & Web Services",
          description:
            "Hosting and maintaining EPKs and websites to showcase your film, cast, and media assets seamlessly.",
        },
        {
          name: "Rights Acquisition & Legal / Licensing Software Support",
          description:
            "Guiding rights acquisition, licensing, and digital rights management to legally protect your content.",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
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
      <div className="w-full px-4 md:px-20 py-16  mb-20">
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
