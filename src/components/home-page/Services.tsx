import React from "react";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";
import { BsCameraReels } from "react-icons/bs";
import { redirect } from "next/dist/server/api-utils";

type Props = {};

export default function Services({}: Props) {
  return (
    <ScrollStack className="w-full">
      <ScrollStackItem itemClassName="shadow-none text-white border border-gray-500 w-full flex flex-col gap-5 bg-white">
        <div className="text-red-500 bg-black flex text-2xl items-center justify-center w-20 h-50 rounded-full">
          <BsCameraReels />
        </div>
        <h1 className="text-black text-4xl font-semibold">
          Filming and Video Production
        </h1>
        <p className="text-black text-xl">
          Birthgiver Film Productions offers comprehensive film and video
          production services, specializing in creative storytelling,
          high-quality cinematography, and post-production excellence. From
          concept to final cut, they deliver tailored solutions for commercials,
          short films, corporate videos, and more.
        </p>
      </ScrollStackItem>
      <ScrollStackItem itemClassName="shadow-none text-white border border-gray-500 w-full flex flex-col gap-5 bg-white">
        <div className="text-red-500 bg-black flex text-2xl items-center justify-center w-20 h-50 rounded-full">
          <BsCameraReels />
        </div>
        <h1 className="text-black text-4xl font-semibold">
          Filming and Video Production
        </h1>
        <p className="text-black text-xl">
          Birthgiver Film Productions offers comprehensive film and video
          production services, specializing in creative storytelling,
          high-quality cinematography, and post-production excellence. From
          concept to final cut, they deliver tailored solutions for commercials,
          short films, corporate videos, and more.
        </p>
      </ScrollStackItem>
      <ScrollStackItem itemClassName="shadow-none text-white border border-gray-500 w-full flex flex-col gap-5 bg-white">
        <div className="text-red-500 bg-black flex text-2xl items-center justify-center w-20 h-50 rounded-full">
          <BsCameraReels />
        </div>
        <h1 className="text-black text-4xl font-semibold">
          Filming and Video Production
        </h1>
        <p className="text-black text-xl">
          Birthgiver Film Productions offers comprehensive film and video
          production services, specializing in creative storytelling,
          high-quality cinematography, and post-production excellence. From
          concept to final cut, they deliver tailored solutions for commercials,
          short films, corporate videos, and more.
        </p>
      </ScrollStackItem>
    </ScrollStack>
  );
}
