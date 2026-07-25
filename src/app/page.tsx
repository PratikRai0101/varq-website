"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { HalftonePattern } from "@/components/HalftonePattern";

/* ───────── Top Bar ───────── */
function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-aspen-border bg-white">
      <div className="flex h-14 items-stretch">
        {/* Logo */}
        <div className="flex w-14 items-center justify-center border-r border-aspen-border">
          <img src="/compass-mark.svg" alt="Varq" className="h-6 w-6" />
        </div>

        {/* Time / Location */}
        <div className="hidden items-center border-r border-aspen-border px-6 text-xs font-medium tracking-widest uppercase text-aspen-dark/60 md:flex">
          Native e-reader for macOS
        </div>

        {/* Nav */}
        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-aspen-dark md:flex">
          {["About", "Features", "Testimonials", "Download"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-opacity hover:opacity-60"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-1 items-center justify-end border-l border-aspen-border px-6 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Contact CTA */}
        <a
          href="#download"
          className="hidden items-center gap-2 border-l border-aspen-border bg-aspen-dark px-6 text-sm font-medium text-white transition-colors hover:bg-varq-indigo md:flex"
        >
          Get Varq
          <ArrowRight size={16} />
        </a>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-b border-aspen-border bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            {["About", "Features", "Testimonials", "Download"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="py-2"
              >
                {item}
              </a>
            ))}
            <a
              href="#download"
              className="mt-2 inline-flex items-center gap-2 bg-aspen-dark px-4 py-3 text-sm font-medium text-white"
            >
              Get Varq <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section id="about" className="relative mt-14 min-h-[calc(100vh-3.5rem)]">
      <div className="grid min-h-[calc(100vh-3.5rem)] md:grid-cols-2">
        {/* Left — White + Massive Varq */}
        <div className="relative flex flex-col border-b border-aspen-border bg-white md:border-b-0 md:border-r">
          <div className="flex flex-1 items-end p-6 md:p-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[clamp(5rem,15vw,14rem)] font-bold leading-[0.85] tracking-tighter text-aspen-dark"
            >
              Varq
            </motion.h1>
          </div>

          {/* Halftone bottom-left quadrant */}
          <div className="relative h-48 border-t border-aspen-border md:h-auto md:flex-1">
            <HalftonePattern color="#2E2717" dotSize={1.2} spacing={5} />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="max-w-xs text-sm leading-relaxed text-aspen-dark/80">
                A native, open-source e-reader for macOS. Built in Swift/SwiftUI — no Electron, no web wrappers.
              </p>
            </div>
          </div>
        </div>

        {/* Right — Halftone + Cards */}
        <div className="relative flex flex-col">
          {/* Halftone top */}
          <div className="relative flex-1">
            <HalftonePattern color="#2E2717" dotSize={1.2} spacing={5} />
          </div>

          {/* Dark card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative border-t border-aspen-border bg-aspen-dark p-6 md:p-8"
          >
            <p className="max-w-md text-lg leading-snug text-white/90">
              The Apple Books polish{" "}
              <span className="text-varq-saffron">Calibre</span> never had.
              Reads EPUB, PDF, and CBZ with a warm, distinctly Indian visual soul.
            </p>
          </motion.div>

          {/* Saffron accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative border-t border-aspen-border bg-varq-saffron p-6 md:p-8"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-aspen-dark/70">
              Now on the Mac App Store
            </p>
            <p className="mt-2 text-lg font-medium text-aspen-dark">
              Free & open source. MIT Licensed.
            </p>
            <a
              href="#download"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-aspen-dark transition-opacity hover:opacity-60"
            >
              Start a conversation <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Features Grid ───────── */
function Features() {
  const features = [
    {
      title: "Library",
      text: "Drag and drop EPUB, PDF, CBZ. Auto-extracted covers, titles, authors. Duplicate detection. Sortable grid.",
      bg: "bg-white",
      hasHalftone: true,
    },
    {
      title: "Reader",
      text: "Native paginated EPUB/PDF. Arrow keys, swipe, click zones. Remembers exact position per book.",
      bg: "bg-aspen-dark",
      textColor: "text-white/90",
      hasHalftone: false,
    },
    {
      title: "Highlights",
      text: "Persistent highlights in terracotta and saffron. Notes with citation markers. Export to Markdown or JSON.",
      bg: "bg-varq-saffron",
      textColor: "text-aspen-dark",
      hasHalftone: true,
    },
    {
      title: "Private",
      text: "Touch ID-gated private shelf. Real CryptoKit encryption at rest — not just UI hiding.",
      bg: "bg-white",
      hasHalftone: true,
    },
  ];

  return (
    <section id="features" className="border-t border-aspen-border">
      <div className="grid md:grid-cols-2">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative min-h-[320px] border-b border-aspen-border p-8 md:min-h-[400px] md:p-10 ${f.bg} ${
              i % 2 === 0 ? "md:border-r" : ""
            }`}
          >
            {f.hasHalftone && (
              <HalftonePattern
                color={f.bg === "bg-white" ? "#2E2717" : "#2E2717"}
                dotSize={1}
                spacing={5}
                className="opacity-[0.08]"
              />
            )}
            <div className="relative">
              <span className="text-xs font-medium uppercase tracking-widest text-aspen-dark/40">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-4xl font-bold tracking-tight text-aspen-dark md:text-5xl">
                {f.title}
              </h3>
              <p className={`mt-4 max-w-sm text-sm leading-relaxed ${f.textColor || "text-aspen-dark/70"}`}>
                {f.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────── Showcase ───────── */
function Showcase() {
  return (
    <section id="showcase" className="relative border-t border-aspen-border">
      <div className="grid md:grid-cols-2">
        {/* Left — Halftone + Screenshot */}
        <div className="relative min-h-[400px] border-b border-aspen-border bg-white md:min-h-[600px] md:border-b-0 md:border-r">
          <HalftonePattern color="#2E2717" dotSize={1.2} spacing={5} className="opacity-[0.06]" />
          <div className="relative flex h-full items-center justify-center p-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src="/screenshots/library-light.webp"
              alt="Varq library"
              className="max-h-[70%] w-auto rounded shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right — Massive "Read" */}
        <div className="relative flex min-h-[300px] flex-col justify-between bg-aspen-gray p-8 md:min-h-[600px] md:p-10">
          <div />
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(5rem,12vw,12rem)] font-bold leading-[0.8] tracking-tighter text-aspen-dark"
          >
            Read
          </motion.h2>
          <p className="max-w-xs text-sm leading-relaxed text-aspen-dark/60">
            Five warm reading modes. Light, Indigo, Black, Monochrome — plus an independent Sepia page tone.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials ───────── */
function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-aspen-border">
      <div className="grid md:grid-cols-[1fr_2fr_1fr]">
        {/* Left — Image panel */}
        <div className="relative min-h-[300px] border-b border-aspen-border bg-aspen-gray md:min-h-auto md:border-b-0 md:border-r">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/screenshots/reader-highlights.webp"
              alt="Varq reader"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Center — Quote */}
        <div className="flex flex-col justify-between border-b border-aspen-border bg-white p-8 md:border-b-0 md:border-r md:p-12">
          <div />
          <div>
            <p className="text-xl font-medium leading-snug text-aspen-dark md:text-2xl">
              "Varq finally gave me the native macOS reading experience I was looking for. The warm sepia mode is perfect for late-night sessions, and exporting highlights to Obsidian is seamless."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-aspen-dark" />
              <div>
                <p className="text-sm font-semibold text-aspen-dark">Alex Chen</p>
                <p className="text-xs uppercase tracking-wider text-aspen-dark/50">Researcher & Writer</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs text-aspen-dark/40">
            <span>01</span>
            <div className="h-px flex-1 bg-aspen-border" />
            <span>03</span>
          </div>
        </div>

        {/* Right — Dark metadata */}
        <div className="flex flex-col justify-between bg-aspen-dark p-8 md:p-10">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40">Position</p>
              <p className="mt-1 text-sm font-medium text-white">Power Reader</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40">Formats</p>
              <p className="mt-1 text-sm font-medium text-white">EPUB · PDF · CBZ</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40">Platform</p>
              <p className="mt-1 text-sm font-medium text-white">macOS 15+</p>
            </div>
          </div>
          <div className="mt-8">
            <HalftonePattern color="#FFFFFF" dotSize={1} spacing={6} className="opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Team / Download ───────── */
function DownloadSection() {
  return (
    <section id="download" className="border-t border-aspen-border">
      <div className="grid md:grid-cols-2">
        {/* Left — Logo on dark */}
        <div className="relative flex min-h-[300px] flex-col items-center justify-center border-b border-aspen-border bg-aspen-dark p-10 md:min-h-[400px] md:border-b-0 md:border-r">
          <img src="/compass-mark.svg" alt="Varq" className="h-16 w-16 opacity-90" />
          <p className="mt-4 text-3xl font-bold text-white">Varq</p>
          <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
            © 2026 Pratik Rai
          </p>
        </div>

        {/* Right — Contact */}
        <div className="flex flex-col">
          <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-aspen-dark/40">Contact</p>
              <a
                href="https://github.com/PratikRai0101/Varq"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-aspen-dark transition-opacity hover:opacity-60"
              >
                github.com/PratikRai0101/Varq
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:mt-0">
              <a
                href="https://github.com/PratikRai0101/Varq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-aspen-border p-4 text-sm font-medium text-aspen-dark transition-colors hover:bg-aspen-gray"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/PratikRai0101/Varq/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-aspen-border p-4 text-sm font-medium text-aspen-dark transition-colors hover:bg-aspen-gray"
              >
                Contribute <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* CTA bar */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-t border-aspen-border bg-varq-saffron p-6 text-aspen-dark transition-colors hover:bg-varq-terracotta hover:text-white md:p-8"
          >
            <span className="text-lg font-semibold">Download on the Mac App Store</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="border-t border-aspen-border bg-white">
      <div className="flex h-12 items-stretch text-xs font-medium uppercase tracking-wider text-aspen-dark/50">
        <div className="flex items-center border-r border-aspen-border px-6">
          macOS 15+ Required
        </div>
        <div className="flex flex-1 items-center px-6">
          MIT Licensed — Open Source
        </div>
        <div className="flex items-center border-l border-aspen-border px-6">
          Built with care in SwiftUI
        </div>
      </div>
    </footer>
  );
}

/* ───────── Page ───────── */
export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
