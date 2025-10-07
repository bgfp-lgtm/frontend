import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { FaCode, FaVideo, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "End-to-End Film Production: From Concept to Cinematic Final Cut",
      description: (
        <>
          Our UK-based film production team handles every detail, blending
          creative vision with meticulous planning to deliver stories that
          captivate and resonate. We specialize in transforming your concept
          into a visually stunning narrative, ensuring a smooth, professional
          process from the first brainstorm to the final cut.{" "}
          <span className="text-red-600 font-semibold">Filming in the UK?</span>{" "}
          We will handle everything you need. Navigating location permits and
          regulations can be complex. As your local production partner, we
          manage all the necessary permissions and logistics for your UK shoot.
          From historic city streets to scenic national parks, we ensure your
          project is fully compliant and set up for success, so you can focus
          purely on the creative vision.
        </>
      ),
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
            "We craft compelling, narrative-driven scripts that form the bedrock of any great film. Our screenwriting team focuses on strong structure, authentic dialogue, and engaging pacing to ensure your story holds audience attention from the first page to the final scene.",
          image: "/scripting.webp",
        },
        {
          name: "Storyboarding & Shot Planning",
          description:
            "Visualize your film before the camera rolls. Our detailed storyboards and precise shot plans ensure cinematic consistency, streamline your filming schedule, and guarantee that every visual element aligns with your creative director’s vision.",
          image: "/storyboard.webp",
        },
        {
          name: "Casting & Talent Selection",
          description:
            "Find the perfect faces for your story. Our professional casting services connect you with the ideal on-screen talent for your film, commercial, or branded content, ensuring performances that are both authentic and powerful.",
          image: "/casting.webp",
        },
        {
          name: "Location Scouting & Set Design",
          description:
            "We find and secure the perfect backdrop for your narrative. Our team scouts permitted locations and designs immersive sets across the UK that enhance your story's visual impact and authenticity.",
          image: "/location.webp",
        },
        {
          name: "Budgeting & Production Scheduling",
          description:
            "Maintain complete creative and financial control. We provide clear, realistic budgets and efficient production schedules that keep your project on track and within budget, without ever compromising on quality.",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Principal Photography / Filming",
          description:
            "Lights, camera, action. Our skilled crews and industry-standard equipment bring the plan to life, using cinematic techniques to capture high-quality footage that forms the core of your visual story.",
          image: "/filming.webp",
        },
        {
          name: "Direction & Creative Oversight",
          description:
            "Guide your project with a steady, visionary hand. Our directors provide comprehensive creative oversight, aligning every element—from performance to pacing—into a cohesive and engaging final film.",
          image: "/director.webp",
        },
        {
          name: "Cinematography & Visual Storytelling",
          description:
            "Elevate your narrative through the power of imagery. Our cinematography employs masterful camera work, lighting, and composition to create a powerful visual language that connects with viewers on an emotional level.",
          image: "/cinemato.png",
        },
        {
          name: "Post-Production: Editing & VFX",
          description:
            "We stitch the story together with invisible art. Our post-production team specializes in seamless editing, dynamic visual effects, and smooth transitions that bring clarity, polish, and power to your narrative.",
          image: "/vfx.jpeg",
        },
        {
          name: "Color Grading & Sound Design",
          description:
            "Add the final layer of professional polish. Through mood-enhancing color correction and immersive sound design, we deliver the fully cinematic finish that makes your film stand out with a professional, theatrical quality.",
          image: "/color.webp",
        },
      ],
    },
    {
      title: "Marketing & Strategy",
      description:
        "A powerful marketing strategy is not just an option, it's essential. Whether you're a small startup, a growing medium-sized business, or a large enterprise in the UK, our tailored marketing and strategy services are designed to make your project unforgettable and discoverable by a global audience. ",
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
            "Craft a unique visual DNA that makes your project instantly recognizable and deeply memorable. We develop powerful film branding and visual identity systems—from logos to colour palettes—that build lasting audience connection and drive recognition and loyalty across the UK and beyond.",
          image:
            "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Trailer & Promo Video Editing",
          description:
            "Create buzz-worthy previews that hook viewers from the first second and compel them to share. Our expert trailer and promo editing crafts compelling narratives that capture the essence of your story—perfect for launching your project to a global audience.",
          image: "/promo.webp",
        },
        {
          name: "Poster & Key Art Design",
          description:
            "Design stunning visuals that stop scrollers in their tracks, both online and in the real world. We specialize in eye-catching posters and key art that communicate your film's tone and capture attention across digital and print—essential for a successful UK film marketing launch.",
          image:
            "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Press Kits & Media Outreach",
          description:
            "Build authentic buzz and secure valuable press coverage with professionally crafted materials. Our comprehensive press kits and media outreach connect your project with the right journalists and influencers in the UK and internationally to generate impactful coverage.",
          image:
            "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Festival Submission Strategy",
          description:
            "Navigate the film festival circuit with a clear plan to maximise awards, exposure, and opportunities. We identify the best-fit festivals to increase your chances of awards, screenings, and recognition—key for UK filmmakers targeting global audiences.",
          image:
            "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RyYXRlZ3l8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "PR & Influencer Partnerships",
          description:
            "Leverage trusted voices to expand your reach and build undeniable credibility. We connect your project with authentic PR and influencer partners to create genuine buzz and drive engagement—a powerful growth tactic in the UK.",
          image:
            "https://plus.unsplash.com/premium_photo-1677846526184-86a9d87b5394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UFJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "SEO for Films & Video",
          description:
            "Ensure your content gets discovered by the right audience, right when they're searching. Our SEO for films and video uses tailored strategies like optimized titles, descriptions, and transcripts to help your work rank and be easily found online.",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Social Media Campaigns & Community Engagement",
          description:
            "Foster a dedicated community and turn viewers into passionate advocates. We launch engaging social media campaigns and community initiatives that drive interaction and sharing—building long-term loyalty around your project.",
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
                      <p className="text-gray-600 text-justify max-w-8xl">
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
                        <div className="relative h-50 w-full overflow-hidden">
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
