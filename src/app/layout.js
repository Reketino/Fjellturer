"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CoffeeButton from "@/components/CoffeeButton";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
         <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <Navbar />
        
        <main className="flex-1">
          {children}
          </main>

        <Footer />
        <CoffeeButton />
        
      </body>
    </html>
  );
}
