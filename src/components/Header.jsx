import React from "react";

export default function Header() {
  return (
    <header className="fixed w-full z-40 backdrop-blur-md bg-black/40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-wide">
          VSP<span className="text-red-400">.</span>
        </a>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#projects" className="hover:underline">Latest Projects</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="px-4 py-2 border border-gray-700 rounded hover:bg-white/5">Contact</a>
        </nav>
        <button className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </header>
  );
}