"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerText({
  text,
  className = "",
  tag: Tag = "h1",
  delay = 0,
  staggerDelay = 0.04,
  once = true,
}: StaggerTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      <Tag className="inline">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, rotateX: -40 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, rotateX: 0 }
                : { opacity: 0, y: 20, rotateX: -40 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: delay + i * staggerDelay,
            }}
            className="inline-block mr-[0.25em]"
            style={{ willChange: "transform, opacity" }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}
