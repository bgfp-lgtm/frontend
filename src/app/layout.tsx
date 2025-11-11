// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getGlobalData } from "@/data/loader";
import Script from "next/script"; // <-- 1. IMPORT next/script

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
        {/* --- 2. ADD YOUR GOOGLE TAGS HERE --- */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Z05REZD9HS"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z05REZD9HS');
          `}
        </Script>
        {/* --- END OF GOOGLE TAGS --- */}

        <Header data={headerData} />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
