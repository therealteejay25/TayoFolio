"use client";
import React, { useEffect, useState } from "react";
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
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#home">Home</a></MagneticLink>
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#about">About</a></MagneticLink>
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#services">Services</a></MagneticLink>
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#projects">Projects</a></MagneticLink>
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></MagneticLink>
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
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#home">Home</a></MagneticLink>
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#about">About</a></MagneticLink>
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#services">Services</a></MagneticLink>
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#projects">Projects</a></MagneticLink>
          <MagneticLink><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></MagneticLink>
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
