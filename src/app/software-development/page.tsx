import React from "react";

export default function SoftwareDevelopmentPage() {
  const items = [
    "Concept creation",
    "Scriptwriting",
    "Feasibility analysis",
    "Funding",
    "Strategy",
    "Rights acquisition",
    "Team assembly",
    "Project",
    "Official website creation",
    "Streaming integration",
    "EPK (electronic press kit) hosting",
    "Mobile app development",
    "UI/UX design for platforms & apps",
  ];

  return (
    <div className="w-full px-4 md:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Software & Development</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          We offer end-to-end software and digital product services covering the full lifecycle from concept to launch and beyond.
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


