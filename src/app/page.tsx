import HeroSection from "@/components/home-page/HeroSection";
import Loop from "@/components/home-page/Loop";
import OtherServices from "@/components/home-page/OtherServices";
import Services from "@/components/home-page/Services";
import CTASection from "@/components/CTASection";

import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <HeroSection />
      <Services />
      <OtherServices />
      <Loop />
      <CTASection />
    </div>
  );
}
