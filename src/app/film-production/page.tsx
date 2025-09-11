import React from "react";

export default function FilmProductionPage() {
  const items = [
    "Final script",
    "Storyboarding",
    "Casting",
    "Location scouting",
    "Budgeting",
    "Scheduling",
    "Crew hiring",
    "Tech planning",
    "Set design",
    "Costumes",
    "Pre-visualization",
    "Principal photography",
    "Direction",
    "Cinematography",
    "Sound recording",
    "Lighting",
    "On-set management",
    "Equipment handling",
    "Live supervision",
    "Video editing",
    "VFX",
    "Sound design/mixing",
    "ADR",
    "Foley",
    "Color grading",
    "Subtitling",
    "Mastering",
    "Trailer creation",
    "Deliverables prep",
  ];

  return (
    <div className="w-full px-4 md:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">End-to-End Film Production</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          From pre-production to final delivery, we manage and execute every stage with precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
            >
              <h2 className="text-lg font-semibold text-gray-900">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


