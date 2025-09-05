import React from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Dubrovnik Gala", img: "/projects/p1.jpg" },
  { id: 2, title: "Ocean Promo", img: "/projects/p2.jpg" },
  { id: 3, title: "Corporate Event", img: "/projects/p3.jpg" },
  { id: 4, title: "Short Film", img: "/projects/p4.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black/0 to-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Latest Projects</h2>
          <a href="#" className="text-sm underline">See more</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, index) => (
            <motion.article
              key={p.id}
              className="relative overflow-hidden rounded-lg group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={p.img} alt={p.title} className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 z-10 text-white">
                <h3 className="font-semibold">{p.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}