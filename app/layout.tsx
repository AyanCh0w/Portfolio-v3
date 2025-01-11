import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayan Chowdhary",
  description: "Portolfio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0e100f]`}
      >
        <div className="h-[8vh] md:h-[10vh] w-fit text-[#ffffe3] mx-auto flex flex-col justify-center">
          <div className="flex flex-row  border border-[#4b4b4b] rounded-full text-xl font-medium gap-4">
            <Link href="/">
              <div className="pl-4 py-2 hover:text-[#727272] cursor-pointer">
                <p>Home</p>
              </div>
            </Link>
            {/* <a href="/about">
              <div className="px-4 py-2 hover:text-[#727272] cursor-pointer">
                <p>About</p>
              </div>
            </a> */}
            <Link href="/projects">
              <div className="px-2 py-2 hover:text-[#727272] cursor-pointer">
                <p>Projects</p>
              </div>
            </Link>
            <Link href="/resume">
              <div className="pr-4 py-2 hover:text-[#727272] cursor-pointer">
                <p>Resume</p>
              </div>
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
