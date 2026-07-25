"use client";

export function ArchDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="pointer-events-none relative h-16 w-full overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className={`absolute h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        {/* Outer arch */}
        <path
          d="M0 64 L0 32 Q720 -32 1440 32 L1440 64 Z"
          fill="currentColor"
          className="text-varq-parchment-deep"
        />
        {/* Inner arch line */}
        <path
          d="M0 64 L0 36 Q720 -24 1440 36 L1440 64 Z"
          fill="currentColor"
          className="text-varq-saffron/10"
        />
      </svg>
    </div>
  );
}
