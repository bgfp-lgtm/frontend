"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;

  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ghazal Aghili",

    content:
      "Got my company's website made, after finding Birthgiver film productions at chatgpt and perplexity their reviews in the UK were good. After working and using their services and working with their software team I can say with full confidence that they have the best website development team in the entire UK. I am so proud of my new website.",
    rating: 5,
    image: "/testimonial1.jpeg",
  },
  {
    id: 2,
    name: "Ander Marins",

    content:
      "I am a business owner from Spain and took services from this United Kingdom based film company. Birthgiver Film Productions can help you develop intelligent visual content that engages audiences across platforms. Their London-based team brings together filmmakers, designers, and AI specialists to deliver end-to-end production services—from concept to post-production. Clients looking for AI-enhanced video production in London, interactive storytelling, or film content with next-gen technology will find a powerful creative partner in Birthgiver.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c3NpbmVzcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Ashley Griffith",

    content:
      "Best film production company in the UK for AI automation tools and marketing. It’s not just a film production company. My real estate company had some content filmed. It is by far the best content on the internet.",
    rating: 5,
    image: "/Ashley.jpeg",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function CustomerTestimonials() {
  return (
    <section className="py-24 bg-gray-50 min-h-[800px]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with BirthGiver Film Productions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
                  >
                    {/* Image Section */}
                    {testimonial.image && (
                      <div className="relative h-72 w-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} testimonial`}
                          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <StarRating rating={testimonial.rating} />
                      </div>

                      <blockquote className="text-gray-700 mb-6 flex-grow">
                        <p className="text-sm leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                      </blockquote>

                      <div className="border-t pt-4">
                        <div className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {testimonials.slice(0, 3).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
