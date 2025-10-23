import HeroSection from "@/components/home-page/HeroSection";
import IntroSection from "@/components/home-page/IntroSection";
import Loop from "@/components/home-page/Loop";
import OtherServices from "@/components/home-page/OtherServices";
import Services from "@/components/home-page/Services";
import CustomerTestimonials from "@/components/home-page/CustomerTestimonials";
import CTASection from "@/components/CTASection";

import React from "react";
import { getGlobalData, getHomepageQuery } from "@/data/loader";

type Props = {};

export default async function Home({}: Props) {
  const response = await getHomepageQuery();

  const herosection = response.data.blocks.find(
    (blocks: any) => blocks.__component === "blocks.hero-section"
  );
  const introSection = response.data.blocks.find(
    (blocks: any) => blocks.__component === "homepage.spectrum"
  );
  const services = response.data.blocks.find(
    (blocks: any) => blocks.__component === "homepage.service"
  );
  const otherServices = response.data.blocks.find(
    (blocks: any) => blocks.__component === "homepage.other-services"
  );
  const ready = response.data.blocks.find(
    (blocks: any) => blocks.__component === "homepage.ready-to-get-started"
  );
  const testimonials = response.data.blocks.find(
    (blocks: any) => blocks.__component === "homepage.testimonials"
  );
  const collaborations = response.data.blocks.find(
    (blocks: any) => blocks.__component === "homepage.collaborations"
  );

  const globalresponse = await getGlobalData();
  const cta = globalresponse?.data?.cta[0];

  console.log("Global cta: ", cta);

  return (
    <div>
      <HeroSection data={herosection} />
      <IntroSection data={introSection} />
      <Services data={services} />
      <OtherServices data={otherServices} readyData={ready} />
      <CustomerTestimonials data={testimonials} />
      <Loop data={collaborations} />
      <CTASection data={cta} />
    </div>
  );
}
