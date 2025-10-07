"use client";

import React, { useState, useEffect, useRef } from "react";
import LogoLoop from "../LogoLoop";

type Props = {};

const techLogos = [
  { src: "/mahindra.png", alt: "Mahindra", title: "Mahindra" },
  { src: "/prime.svg", alt: "Prime Video", title: "Prime Video" },
  { src: "/netflix.png", alt: "Netflix", title: "Netflix" },
  { src: "/kia.png", alt: "Kia", title: "Kia" },
  { src: "/absolut.png", alt: "Absolut", title: "Absolut" },
  { src: "/Oriflame-01.png", alt: "oriflame", title: "oriflame" },
  { src: "/renault.png", alt: "oriflame", title: "oriflame" },
  { src: "/sony.svg", alt: "oriflame", title: "oriflame" },
  { src: "/idbi.png", alt: "oriflame", title: "oriflame" },
  { src: "/london.png", alt: "oriflame", title: "oriflame" },
];

// Counting animation component
const CountingNumber = ({
  end,
  duration = 2000,
  suffix = "",
  className = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className={className}>
      {count}
      {suffix}
    </div>
  );
};

export default function Loop({}: Props) {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-medium">
            Our collaborations
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We've partnered with industry leaders across the globe to deliver
            exceptional results
          </p>
        </div>

        {/* Enhanced statistics section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 dark:border-gray-700">
              <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                worked with
              </div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                <CountingNumber
                  end={150}
                  duration={2500}
                  suffix="+"
                  className="inline-block"
                />
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                global brands
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 dark:border-gray-700">
              <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                worked in
              </div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                <CountingNumber
                  end={15}
                  duration={2000}
                  suffix="+"
                  className="inline-block"
                />
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                countries
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 dark:border-gray-700">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                <CountingNumber
                  end={12}
                  duration={1800}
                  suffix="+"
                  className="inline-block"
                />
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                years of industry experience
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100 dark:border-gray-700">
              <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                {/* intentionally left blank to preserve layout consistency */}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-red-600 dark:text-red-400 mb-2">
                <CountingNumber
                  end={1500}
                  duration={2800}
                  suffix="+"
                  className="inline-block"
                />
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                projects
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced brands section */}
        <div className="relative">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Our Brand Partners
            </h3>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl bg-white "
            style={{ height: 210 }}
          >
            <div className="absolute inset-0  dark:from-gray-800 dark:to-gray-700 opacity-50"></div>
            <div className="relative z-10 h-full flex items-center">
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-300">
                <LogoLoop
                  logos={techLogos}
                  speed={50}
                  direction="left"
                  logoHeight={120}
                  gap={60}
                  pauseOnHover
                  fadeOut
                  ariaLabel="Collaborated brands"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
