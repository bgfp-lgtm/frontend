import React from "react";
import CTASection from "@/components/CTASection";

export default function MarketingStrategyPage() {
  const services = [
    {
      title: "Film Branding",
      description: "Develop comprehensive brand identity and visual language that resonates with your target audience."
    },
    {
      title: "Trailer/Promo Editing",
      description: "Create compelling trailers and promotional content that capture attention and drive engagement."
    },
    {
      title: "Poster/Key Art Design",
      description: "Design striking posters and key art that effectively communicate your project's essence and appeal."
    },
    {
      title: "Press Kits",
      description: "Develop professional press kits with high-quality materials for media outreach and coverage."
    },
    {
      title: "Festival Submissions",
      description: "Strategic festival submission planning and execution to maximize exposure and recognition."
    },
    {
      title: "Digital PR",
      description: "Comprehensive digital public relations strategies to build buzz and media coverage online."
    },
    {
      title: "SEO",
      description: "Search engine optimization to improve online visibility and discoverability of your content."
    },
    {
      title: "Social Media Campaigns",
      description: "Engaging social media strategies across all platforms to build community and drive awareness."
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
          <source src="/marketing.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Marketing & Strategy</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive marketing solutions to maximize your project's reach and impact across all platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Marketing Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Strategic marketing solutions designed to elevate your project and connect with your target audience effectively.
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
