"use client";
import React, { useState } from "react";
import MagneticLink from "../utils/MagneticLink";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl text-black">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Image src="/logo.svg" alt="Logo" width={36} height={36} />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-black">
          <MagneticLink>Home</MagneticLink>
          <MagneticLink>About</MagneticLink>
          <MagneticLink>Services</MagneticLink>
          <MagneticLink>Projects</MagneticLink>
          <MagneticLink>Contact</MagneticLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="py-2.5 px-6 bg-gradient-to-b from-dark to-black text-white shadow-lg shadow-dark/25 rounded-xl font-medium hover:scale-105 transition">
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav w/ Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden backdrop-blur-2xl flex flex-col gap-6 text-center h-screen px-6 py-10 font-medium"
          >
            <MagneticLink>Home</MagneticLink>
            <MagneticLink>About</MagneticLink>
            <MagneticLink>Services</MagneticLink>
            <MagneticLink>Projects</MagneticLink>
            <MagneticLink>Contact</MagneticLink>
            <button className="mt-6 w-full py-3 px-6 bg-gradient-to-b from-dark to-black text-white shadow-lg shadow-dark/25 rounded-xl font-medium">
              Let&apos;s Talk
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
