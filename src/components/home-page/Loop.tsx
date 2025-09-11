import React from "react";
import LogoLoop from "../LogoLoop";

type Props = {};

const techLogos = [
  { src: "/mahindra.png", alt: "Mahindra", title: "Mahindra" },
  { src: "/prime.svg", alt: "Prime Video", title: "Prime Video" },
  { src: "/netflix.png", alt: "Netflix", title: "Netflix" },
  { src: "/kia.png", alt: "Kia", title: "Kia" },
  { src: "/absolut.png", alt: "Absolut", title: "Absolut" },
  { src: "/Oriflame-01.png", alt: "oriflame", title: "oriflame" },
  { src: "/renault.png", alt: "oriflame", title: "oriflame" },
  { src: "/sony.svg", alt: "oriflame", title: "oriflame" },
  { src: "/idbi.png", alt: "oriflame", title: "oriflame" },
];

export default function Loop({}: Props) {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 lg:mb-20">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Our collaborations
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mt-2">
            Brands we’ve collaborated with
          </h2>
        </div>

        <div className="relative overflow-hidden" style={{ height: 100 }}>
          <div
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            style={{ filter: "grayscale(100%)" }}
          >
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={56}
              gap={56}
              pauseOnHover
              fadeOut
              ariaLabel="Collaborated brands"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
