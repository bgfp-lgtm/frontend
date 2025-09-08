import HeroSection from "@/components/home-page/HeroSection";
import Services from "@/components/home-page/Services";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="h-screen">
      <HeroSection />
      <div className="h-screen flex flex-col justify-center mt-10">
        <h1 className="text-6xl font-bold text-center">Services</h1>
        <Services />
      </div>
    </div>
  );
}
