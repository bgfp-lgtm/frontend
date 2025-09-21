"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  BsCameraVideo,
  BsBuilding,
  BsMusicNote,
  BsTv,
  BsPhone,
  BsX,
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function OtherServices() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 for infinite loop
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Event Coverage",
      description:
        "Filming and producing content for live events like concerts and corporate events.",
      icon: <BsCameraVideo className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Corporate Videos",
      description:
        "Creating training videos, internal communications, and promotional content for businesses.",
      icon: <BsBuilding className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Music Video Production",
      description:
        "Producing videos for musicians and bands to promote their music.",
      icon: <BsMusicNote className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "TV and Digital Commercials",
      description:
        "Producing TV commercials, online ads, promotional videos, and branded content for businesses.",
      icon: <BsTv className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Digital Content Creation",
      description:
        "Producing content for digital platforms like YouTube, Instagram, TikTok, and streaming services.",
      icon: <BsPhone className="w-6 h-6" />,
    },
  ];

  // Auto-play functionality with infinite loop
  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const totalSlides = Math.ceil(services.length / 3);
          const nextSlide = prev + 1;
          
          if (nextSlide >= totalSlides + 2) {
            // Reset to first real slide (index 1) after the last duplicate
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentSlide(1);
            }, 700); // Match transition duration
            setIsTransitioning(true);
            return totalSlides + 1; // Go to last duplicate
          }
          
          return nextSlide;
        });
      }, 4000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, services.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation functions for infinite loop
  const nextSlide = () => {
    const totalSlides = Math.ceil(services.length / 3);
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      
      if (nextSlide >= totalSlides + 2) {
        // Reset to first real slide (index 1) after the last duplicate
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(1);
        }, 700);
        setIsTransitioning(true);
        return totalSlides + 1; // Go to last duplicate
      }
      
      return nextSlide;
    });
  };

  const prevSlide = () => {
    const totalSlides = Math.ceil(services.length / 3);
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1;
      
      if (prevSlide <= 0) {
        // Reset to last real slide (index totalSlides) after the first duplicate
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(totalSlides);
        }, 700);
        setIsTransitioning(true);
        return 1; // Go to first duplicate
      }
      
      return prevSlide;
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <>
      {/* Contact Pop-up Modal */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <BsX className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Your Quote</h3>
                <p className="text-gray-600">Contact us for a personalized quote</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <BsTelephone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <BsEnvelope className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">info@birthgiver.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <BsGeoAlt className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">123 Creative Street, City, State 12345</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => window.open('tel:+15551234567')}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <BsTelephone className="w-4 h-4 mr-2" />
                  Call Now
                </button>
                <button
                  onClick={() => window.open('mailto:info@birthgiver.com')}
                  className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <BsEnvelope className="w-4 h-4 mr-2" />
                  Send Email
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full px-4 md:px-20 py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
          >
            Our Other Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            We guarantee fast and discrete handling of all your business tasks.
            Our team of highly qualified employees is available day and night
            because your satisfaction is our highest priority.
          </motion.p>

          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true, margin: "-100px" }}
            onClick={() => setIsPopupOpen(true)}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 inline-flex items-center group"
          >
            GET YOUR QUOTE NOW
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>
        </div>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
          >
            <motion.div
              className={`flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isTransitioning ? 'transition-none' : ''
              }`}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {/* Duplicate last slide at the beginning for seamless loop */}
              {Array.from({ length: Math.ceil(services.length / 3) }, (_, slideIndex) => {
                const actualSlideIndex = slideIndex === 0 ? Math.ceil(services.length / 3) - 1 : slideIndex - 1;
                return (
                  <div key={`duplicate-${slideIndex}`} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                      {services
                        .slice(actualSlideIndex * 3, actualSlideIndex * 3 + 3)
                        .map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 30, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          whileHover={{ 
                            y: -8, 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                          className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 relative overflow-hidden"
                        >
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/20 group-hover:to-red-50/10 transition-all duration-300" />
                          
                          {/* Icon */}
                          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <div className="text-white">{service.icon}</div>
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {service.description}
                          </p>

                          {/* Learn More Link */}
                          <div className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors duration-300">
                            <span className="mr-2">Learn More</span>
                            <svg
                              className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
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
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {/* Original slides */}
              {Array.from({ length: Math.ceil(services.length / 3) }, (_, slideIndex) => (
                <div key={`original-${slideIndex}`} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {services
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 30, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          whileHover={{ 
                            y: -8, 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                          className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 relative overflow-hidden"
                        >
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/20 group-hover:to-red-50/10 transition-all duration-300" />
                          
                          {/* Icon */}
                          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <div className="text-white">{service.icon}</div>
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {service.description}
                          </p>

                          {/* Learn More Link */}
                          <div className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors duration-300">
                            <span className="mr-2">Learn More</span>
                            <svg
                              className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
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
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
              
              {/* Duplicate first slide at the end for seamless loop */}
              <div key="duplicate-end" className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                  {services
                    .slice(0, 3)
                    .map((service, index) => (
                      <motion.div
                        key={`end-${service.id}`}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 relative overflow-hidden"
                      >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 group-hover:from-red-50/20 group-hover:to-red-50/10 transition-all duration-300" />
                        
                        {/* Icon */}
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">{service.icon}</div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Learn More Link */}
                        <div className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors duration-300">
                          <span className="mr-2">Learn More</span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
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
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl rounded-full p-3 text-gray-600 hover:text-red-600 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 border border-gray-200 hover:border-red-200"
            aria-label="Previous slide"
          >
            <BsChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl rounded-full p-3 text-gray-600 hover:text-red-600 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 border border-gray-200 hover:border-red-200"
            aria-label="Next slide"
          >
            <BsChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(services.length / 3) }, (_, index) => {
                const totalSlides = Math.ceil(services.length / 3);
                const actualIndex = currentSlide > totalSlides ? currentSlide - totalSlides - 1 : currentSlide - 1;
                const isActive = actualIndex === index;
                
                return (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-red-600 w-8"
                        : "bg-gray-300 w-3"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="text-center bg-gray-900 rounded-2xl p-12 relative overflow-hidden mt-10"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Contact us today for a personalized quote and let's bring your
              vision to life
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPopupOpen(true)}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg border-2 border-red-600 flex items-center"
              >
                Get Quote Now
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </motion.button>
            </div>

            <div className="mt-8 flex justify-center items-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                24/7 Support
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                Fast Response
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                Discrete Handling
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
