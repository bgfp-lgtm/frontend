import HeroSection from "@/components/home-page/HeroSection";
import Services from "@/components/home-page/Services";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <HeroSection />
      <Services />
    </div>
  );
}
