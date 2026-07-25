"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface BlurImageProps {
  src: string;
  placeholderSrc: string;
  mobileSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  caption?: string;
}

export function BlurImage({
  src,
  placeholderSrc,
  mobileSrc,
  alt,
  width = 1600,
  height = 1040,
  className = "",
  priority = false,
  caption,
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const srcSet = `${mobileSrc} 800w, ${src} 1600w`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder — loads instantly */}
      <img
        src={placeholderSrc}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(20px) scale(1.05)", transform: "translateZ(0)" }}
      />

      {/* Main image with fade-in */}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        srcSet={srcSet}
        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 800px"
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        onLoad={handleLoad}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-full w-full object-cover"
        style={{ willChange: "opacity" }}
      />

      {/* Skeleton shimmer while loading */}
      {!loaded && (
        <div className="absolute inset-0 bg-varq-parchment-deep animate-pulse" />
      )}

      {caption && (
        <p className="mt-4 text-center text-sm font-medium text-varq-ink-light/60">
          {caption}
        </p>
      )}
    </div>
  );
}
