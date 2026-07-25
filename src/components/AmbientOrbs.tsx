"use client";

import { motion } from "framer-motion";

export function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Large saffron orb — top right */}
      <motion.div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-varq-saffron/8 blur-[100px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Medium terracotta orb — bottom left */}
      <motion.div
        className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-varq-terracotta/8 blur-[80px]"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      {/* Small maroon orb — center */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-varq-maroon/5 blur-[60px]"
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />
    </div>
  );
}
