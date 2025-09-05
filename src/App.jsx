import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-100 bg-black">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}