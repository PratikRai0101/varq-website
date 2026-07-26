"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-varq-night via-varq-night to-varq-night-elevated" />

      {/* Aurora bands */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vw] rounded-full bg-varq-aurora-purple/25 blur-[120px]"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.5, 0.7, 0.55, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[10%] -right-[10%] h-[60vh] w-[60vw] rounded-full bg-varq-aurora-blue/20 blur-[110px]"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.95, 1.05, 1],
          opacity: [0.4, 0.6, 0.45, 0.4],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      <motion.div
        className="absolute -bottom-[10%] left-[20%] h-[50vh] w-[50vw] rounded-full bg-varq-aurora-pink/18 blur-[100px]"
        animate={{
          x: [0, 20, -40, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.08, 0.92, 1],
          opacity: [0.35, 0.5, 0.4, 0.35],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,varq-night_80%)]" />
    </div>
  );
}
