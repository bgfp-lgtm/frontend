import React from "react";
import { MdArrowOutward } from "react-icons/md";
import HeroCarousel from "./HeroCarousel";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight">
          Birthgiver Film Productions:
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-0">
          <p className="mt-6 sm:mt-8 lg:mt-10 w-full lg:w-[80%] text-base sm:text-lg md:text-xl text-[#7f7f7f] leading-relaxed">
            Birthgiver Film Productions brings your vision to life by
            specializing in creative storytelling and high-quality
            cinematography. As a comprehensive film and video production
            service, we meticulously guide projects from the initial concept to
            the final cut, delivering tailored solutions for commercials, short
            films, and corporate videos. Our commitment to post-production
            excellence ensures we craft compelling narratives that captivate
            audiences and achieve unforgettable results for your brand.
          </p>

          <p className="flex items-center font-bold gap-1 text-base sm:text-lg hover:text-red-500 cursor-pointer group self-start lg:self-auto">
            See More
            <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1">
              <MdArrowOutward />
            </span>
          </p>
        </div>
      </div>
      <HeroCarousel />
    </div>
  );
}
