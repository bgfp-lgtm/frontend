import React from "react";
import Image from "next/image";
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
          image:
            "https://images.unsplash.com/photo-1735893066935-2b7995bab10d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjcmlwdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Storyboarding & Shot Planning",
          description:
            "Visualise every scene with detailed storyboards and shot-planning to ensure efficient shoots and cinematic consistency.",
          image:
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Casting & Talent Selection",
          description:
            "Professional casting services to match the best talent for your film, commercial, or branded content.",
          image:
            "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Location Scouting & Set Design",
          description:
            "Scouting ideal and permitted locations; designing and preparing sets that enhance your story's visual impact.",
          image:
            "https://images.unsplash.com/photo-1668911128137-2f40fb6bde1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fExvY2F0aW9uJTIwU2NvdXRpbmclMjAlMjYlMjBTZXQlMjBEZXNpZ258ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Budgeting & Production Scheduling",
          description:
            "Clear and realistic budget plans and schedules that keep your project on time and within cost.",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Principal Photography / Filming",
          description:
            "High-quality filming using cinematic techniques, skilled crews, and industry-standard equipment.",
          image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Direction & Creative Oversight",
          description:
            "Visionary direction and creative oversight to align all elements towards a cohesive, engaging film.",
          image:
            "https://plus.unsplash.com/premium_photo-1681488007344-c75b0cf8b0cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlYXRpdmV8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Cinematography & Visual Storytelling",
          description:
            "Cinematic camera work, lighting and composition that elevate your film's visual narrative.",
          image:
            "https://images.unsplash.com/photo-1512025316832-8658f04f8a83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2luZW1hdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Post-Production: Editing & VFX",
          description:
            "Seamless editing, effects, and transitions to bring polish and storytelling clarity in post-production.",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Color Grading & Sound Design",
          description:
            "Mood-setting colour correction and immersive sound design for a fully professional, cinematic finish.",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
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
          image:
            "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Trailer & Promo Video Editing",
          description:
            "Create powerful trailers or promotional teasers that generate excitement and share-ability.",
          image:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmlkZW8lMjBFZGl0aW5nfGVufDB8fDB8fHww",
        },
        {
          name: "Poster & Key Art Design",
          description:
            "Design eye-catching posters and key art that capture attention in both print and digital channels.",
          image:
            "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Press Kits & Media Outreach",
          description:
            "Prepare professional press kits and conduct media outreach to build buzz and press coverage.",
          image:
            "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Festival Submission Strategy",
          description:
            "Strategic festival submission planning to maximise exposure, awards, and screening opportunities.",
          image:
            "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RyYXRlZ3l8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "PR & Influencer",
          description:
            "Leverage online PR and influencer partnerships to expand reach and build credibility.",
          image:
            "https://plus.unsplash.com/premium_photo-1677846526184-86a9d87b5394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UFJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "SEO for Films & Video",
          description:
            "Search engine optimization strategies tailored to film content so your work is discovered online.",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Social Media Campaigns & Community Engagement",
          description:
            "Engaging social campaigns and community building to increase audience interaction and sharing.",
          image:
            "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1200&auto=format&fit=crop",
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
          name: "Custom Web Application Development",
          description:
            "Build powerful, scalable, and secure web applications tailored to your unique business workflows. Our expert developers create custom web solutions from the ground up, ensuring they are perfectly aligned with your operational needs. We focus on delivering high-performance applications that streamline processes, boost efficiency, and drive growth for your business.",
          image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Mobile App Development",
          description:
            "Engage your customers on the go with our top-tier mobile app development services. We specialize in creating high-performance native and cross-platform applications for both iOS and Android. Whether you need a native iOS app, an Android app, or a cross-platform solution with Flutter or React Native, our team has the expertise to build an app that delivers a seamless user experience and achieves your business goals.",
          image:
            "https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "ERP & CRM Solutions",
          description:
            "Streamline your business operations and enhance customer relationships with our end-to-end ERP and CRM solutions. We provide comprehensive enterprise systems that help you manage your operations, customers, and resources more effectively. Our solutions are customized to your industry and business size, enabling you to improve efficiency, make data-driven decisions, and foster long-term customer loyalty.",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "API Development & Integration",
          description:
            "Connect your systems and applications for seamless data exchange with our expert API development and integration services. We build robust, secure, and well-documented APIs that enable your software to communicate flawlessly. Our team can also integrate third-party APIs to extend the functionality of your existing applications, ensuring a smooth and efficient workflow.",
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Cloud Solutions & Deployment",
          description:
            "Leverage the power of the cloud with our comprehensive cloud solutions and deployment services. We specialize in building cloud-native applications, migrating existing systems to the cloud, and implementing serverless architecture on leading platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our solutions are designed to be scalable, secure, and cost-effective, helping you to innovate faster and reduce your IT overhead.",
          image:
            "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "E-Commerce Platforms",
          description:
            "Launch a successful online store with our custom e-commerce platform development services. We create feature-rich online stores with secure payment gateway integrations, subscription management, and multi-language support to help you reach a global audience. Our e-commerce solutions are designed to provide an exceptional shopping experience for your customers and drive online sales for your business.",
          image:
            "https://images.unsplash.com/photo-1657256031812-4702fe316f1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEUtQ29tbWVyY2UlMjBQbGF0Zm9ybXN8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Automation & Workflow Tools",
          description:
            "Boost your business efficiency and reduce manual tasks with our custom automation and workflow tools. We develop Robotic Process Automation (RPA) solutions, custom bots, and internal tools to automate repetitive tasks and streamline your business processes. Our goal is to help you save time, reduce errors, and free up your team to focus on more strategic initiatives.",
          image:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "UI/UX Design & Prototyping",
          description:
            "Create a lasting impression on your users with our modern and intuitive UI/UX design and prototyping services. We focus on user-centered design principles to create clean, user-friendly interfaces that enhance usability and deliver an exceptional user experience. Our design process includes in-depth research, wireframing, and prototyping to ensure that the final product is both beautiful and easy to use.",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
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
                          <Image
                            src={
                              subService.image ||
                              service.images?.[
                                subIndex % (service.images?.length || 1)
                              ] ||
                              "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963f?q=80&w=1200&auto=format&fit=crop"
                            }
                            alt={subService.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            priority={subIndex < 3}
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
