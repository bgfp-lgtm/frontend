import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {};

function HeroCarousel({}: Props) {
  return (
    <div className="w-full py-6 sm:py-8 md:py-10">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="relative"
      >
        <CarouselContent>
          <CarouselItem className="basis-full sm:basis-11/12 md:basis-5/6">
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
              <Image
                src={"/carlsberg.jpg"}
                alt="Behind the scenes on a film set"
                fill
                className="object-cover rounded-lg sm:rounded-xl"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-full sm:basis-11/12 md:basis-5/6">
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
              <Image
                src={"/chevrolet.jpg"}
                alt="Another scene from a film set"
                fill
                className="object-cover rounded-lg sm:rounded-xl"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-full sm:basis-11/12 md:basis-5/6">
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
              <Image
                src={"/kia.jpg"}
                alt="Close-up of camera equipment"
                fill
                className="object-cover rounded-lg sm:rounded-xl"
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4">
          <CarouselPrevious className="bg-black/40 hover:bg-black/60 border-none text-red-500 hover:text-red-300 cursor-pointer rounded-full h-8 w-8 sm:h-9 sm:w-9" />
          <CarouselNext className="bg-black/40 hover:bg-black/60 border-none text-red-500 hover:text-red-300 cursor-pointer rounded-full h-8 w-8 sm:h-9 sm:w-9" />
        </div>
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
