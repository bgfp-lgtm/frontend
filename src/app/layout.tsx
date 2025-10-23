// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getGlobalData } from "@/data/loader";

const metadata: Metadata = {
  title: "Birthgiver Film Productions",
  description:
    "Birthgiver Film Productions offers comprehensive film and video production services",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalResponse = await getGlobalData();
  const headerData = globalResponse?.data?.header; // Extract header data

  return (
    <html lang="en">
      <body className="antialiased">
        <Header data={headerData} />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
