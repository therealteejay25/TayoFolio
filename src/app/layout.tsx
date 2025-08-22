// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tayo ✦ Full-Stack Web Developer ✦ UI/UX Designer",
  description:
    "Tayo ✦ Frontend & Full-stack developer, UI/UX designer. Building creative, innovative web solutions for clients and the dev community.",
  keywords: [
    "Tayo", 
    "Full-stack Developer", 
    "Frontend Developer", 
    "UI/UX Designer", 
    "ReactJS", 
    "NextJS", 
    "Portfolio", 
    "Web Development", 
    "Design Portfolio"
  ],
  authors: [{ name: "Tayo" }],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Tayo ✦ Full-Stack Web Developer & UI/UX Designer",
    description:
      "Creative, innovative web solutions by Tayo. Explore projects, services, and design-driven ideas.",
    url: "https://tayo01.vercel.app",
    siteName: "Tayo ✦ Dev ✦ Design",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayo ✦ Full-Stack Web Developer & UI/UX Designer",
    description:
      "Creative, innovative web solutions by Tayo. Explore projects, services, and design-driven ideas.",
    images: ["/banner.png"],
    creator: "@therealteejay25",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
