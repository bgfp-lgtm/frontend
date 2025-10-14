"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/about-us", text: "About us" },
    { href: "/projects", text: "Projects" },
    { href: "/careers", text: "Careers" },
    { href: "/blog", text: "Blog Posts" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`relative w-full ${isHomePage ? "bg-black" : "bg-white"}`}
    >
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
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href.startsWith("#") && pathname === "/");

            return (
              <Link
                key={link.text}
                href={link.href}
                className={`text-sm transition-colors duration-300 hover:text-red-500 ${
                  isHomePage ? "text-white" : "text-gray-800"
                } ${isActive ? "font-semibold" : "font-medium"}`}
              >
                {link.text}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-red-500/20 text-red-600 transition-colors duration-300 hover:bg-red-200 cursor-pointer"
        >
          Contact
        </Link>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 ${
              isHomePage ? "text-white" : "text-gray-700"
            }`}
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

          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href.startsWith("#") && pathname === "/");

            return (
              <Link
                key={link.text}
                href={link.href}
                className={`text-2xl text-gray-800 hover:text-red-500 ${
                  isActive ? "font-bold" : "font-semibold"
                }`}
                onClick={handleLinkClick}
              >
                {link.text}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-xl text-xl font-semibold bg-red-500 text-white transition-colors duration-300 hover:bg-red-600 cursor-pointer"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
