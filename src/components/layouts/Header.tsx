"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#services", text: "Services" },
    { href: "#about", text: "About us" },
    { href: "#projects", text: "Projects" },
    { href: "#blog", text: "Blog Posts" },
  ];

  return (
    <header className="relative w-full bg-black">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-20 py-5">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={130}
            height={130}
            className=""
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-sm font-medium text-white transition-colors duration-300 hover:text-red-500"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <button className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-red-500/20 text-red-600 transition-colors duration-300 hover:bg-red-200 cursor-pointer">
          Contact
        </button>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
          >
            {isMenuOpen ? (
              <RxCross2 className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-7 right-6 p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
          >
            <RxCross2 className="h-8 w-8" />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-2xl font-semibold text-gray-800 hover:text-red-500"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.text}
            </Link>
          ))}

          <button
            className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-xl text-xl font-semibold bg-red-500 text-white transition-colors duration-300 hover:bg-red-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
