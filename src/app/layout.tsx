"use client";

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const metadata: Metadata = {
  title: "Birthgiver Film Productions",
  description:
    "Birthgiver Film Productions offers comprehensive film and video production services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
