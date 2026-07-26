"use client";

import { useId } from "react";

interface HalftoneProps {
  color?: string;
  dotSize?: number;
  spacing?: number;
  className?: string;
}

export function HalftonePattern({
  color = "#2E2717",
  dotSize = 1.5,
  spacing = 6,
  className = "",
}: HalftoneProps) {
  const id = useId();
  const patternId = `ht-${id.replace(/:/g, "")}`;
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id={patternId}
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={spacing / 2} cy={spacing / 2} r={dotSize / 2} fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
