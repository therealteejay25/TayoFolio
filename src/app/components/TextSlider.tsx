"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function TextSlider() {
  const words = ["Code.", "Design.", "Build.", "Repeat."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1700);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden text-white h-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-bold text-transparent py-2 bg-clip-text bg-gradient-to-b from-accent to-accent"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
