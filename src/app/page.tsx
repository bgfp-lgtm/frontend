import HeroSection from "@/components/home-page/HeroSection";
import IntroSection from "@/components/home-page/IntroSection";
import Loop from "@/components/home-page/Loop";
import OtherServices from "@/components/home-page/OtherServices";
import Services from "@/components/home-page/Services";
import CustomerTestimonials from "@/components/home-page/CustomerTestimonials";
import CTASection from "@/components/CTASection";

import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <Services />
      <OtherServices />
      <CustomerTestimonials />
      <Loop />
      <CTASection />
    </div>
  );
}
