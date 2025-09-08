import React from "react";
import Video from "../Video";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <Video />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 flex flex-col items-center">
          <h1 className="text-white text-7xl md:text-9xl shadow-lg font-bold mb-4 tracking-wider">
            Birthgiver Film Productions
          </h1>
          <p className="text-2xl shadow-lg mb-4 tracking-wider text-white max-w-2xl">
            Crafting Your Vision with End-to-End Cinematic Production.
          </p>
        </div>
      </div>
    </div>
  );
}
