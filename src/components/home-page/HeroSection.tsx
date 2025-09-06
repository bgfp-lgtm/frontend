import React from "react";
import { MdArrowOutward } from "react-icons/md";
import HeroCarousel from "./HeroCarousel";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="">
      <div className="px-20 py-10">
        <h1 className="font-bold text-9xl ">Birthgiver Film Productions:</h1>
        <div className="flex items-end justify-between">
          <p className="mt-10 w-[80%] text-xl text-[#7f7f7f]">
            Birthgiver Film Productions brings your vision to life by
            specializing in creative storytelling and high-quality
            cinematography. As a comprehensive film and video production
            service, we meticulously guide projects from the initial concept to
            the final cut, delivering tailored solutions for commercials, short
            films, and corporate videos. Our commitment to post-production
            excellence ensures we craft compelling narratives that captivate
            audiences and achieve unforgettable results for your brand.
          </p>

          <p className="flex items-center gap-1 text-lg hover:text-red-500 cursor-pointer group">
            See More{" "}
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
