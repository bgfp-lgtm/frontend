import React from "react";
import CTASection from "@/components/CTASection";

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: "Concept Creation",
      description: "Transform your ideas into viable software concepts with our strategic planning and ideation process."
    },
    {
      title: "Scriptwriting",
      description: "Create comprehensive technical specifications and user stories that guide development teams."
    },
    {
      title: "Feasibility Analysis",
      description: "Evaluate technical feasibility, market potential, and resource requirements for your project."
    },
    {
      title: "Funding Strategy",
      description: "Develop funding strategies and pitch materials to secure investment for your software projects."
    },
    {
      title: "Rights Acquisition",
      description: "Handle intellectual property rights, licensing agreements, and legal documentation."
    },
    {
      title: "Team Assembly",
      description: "Build and manage development teams with the right mix of skills and expertise."
    },
    {
      title: "Project Management",
      description: "Oversee project execution with agile methodologies and best practices for software development."
    },
    {
      title: "Official Website Creation",
      description: "Design and develop professional websites that represent your brand and engage your audience."
    },
    {
      title: "Streaming Integration",
      description: "Integrate streaming capabilities and real-time features into your applications."
    },
    {
      title: "EPK Hosting",
      description: "Create and host electronic press kits for effective digital marketing and media outreach."
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications for iOS and Android devices."
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive user interfaces and exceptional user experiences for platforms and applications."
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
          <source src="/coding.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Software & Development</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We offer end-to-end software and digital product services covering the full lifecycle from concept to launch and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From initial concept to final deployment, we provide comprehensive software development solutions tailored to your needs.
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


