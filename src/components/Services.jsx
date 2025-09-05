import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Video Production", desc: "From concept to delivery — storytelling-led productions." },
  { title: "Drone Filming", desc: "Aerial cinematography for dynamic visuals." },
  { title: "Live Streaming", desc: "Low-latency, multi-platform live events." },
  { title: "Equipment Rental", desc: "Professional cameras, lighting & audio packages." },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Services</h2>
        <p className="text-gray-400 max-w-2xl">
          Comprehensive audio-visual solutions tailored for events, film and corporate projects.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-white/3 p-6 rounded-lg backdrop-blur-sm border border-white/6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}