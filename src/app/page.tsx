"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  Library,
  Lock,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { StaggerText } from "@/components/StaggerText";
import { TiltCard } from "@/components/TiltCard";
import { AuroraBackground } from "@/components/AuroraBackground";
import { BlurImage } from "@/components/BlurImage";

/* ───────── Navbar ───────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Features", "Showcase", "FAQ", "Download"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-varq-night/80 backdrop-blur-xl border-b border-varq-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/compass-mark.svg"
            alt="Varq compass mark"
            width={28}
            height={28}
            className="opacity-90"
          />
          <span className="font-serif text-xl font-semibold tracking-tight text-white">
            Varq
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
          <a
            href="https://github.com/PratikRai0101/Varq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-varq-border text-white/70 transition-colors hover:bg-white/5 md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-varq-border bg-varq-night/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center md:pt-32 md:pb-24">
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-varq-saffron" />
          <span className="text-xs font-medium tracking-wide text-white/80 uppercase">
            Native macOS e-reader
          </span>
        </motion.div>

        <StaggerText
          text="Your books, beautifully at home on your Mac."
          tag="h1"
          className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
          delay={0.5}
          staggerDelay={0.04}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          A native, open-source reader for EPUB, PDF, and CBZ. Built in Swift/SwiftUI — no Electron, no web wrappers. Warm, distinctly Indian, and completely private.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-varq-night shadow-lg shadow-white/10 transition-colors hover:bg-white/90"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.95 1.07-3.11-1.05.05-2.31.72-3.06 1.64-.68.84-1.27 2.18-1.11 3.29 1.19.09 2.39-.6 3.1-1.82z" />
            </svg>
            Download for Mac
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            href="https://github.com/PratikRai0101/Varq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Star on GitHub
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 22, delay: 1.6 }}
        className="relative z-10 mt-14 w-full max-w-5xl px-4"
      >
        <TiltCard tiltAmount={4}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_32px_80px_-20px_rgba(124,58,237,0.25)] backdrop-blur-sm">
            <BlurImage
              src="/screenshots/library-light.webp"
              placeholderSrc="/screenshots/library-light-placeholder.webp"
              mobileSrc="/screenshots/library-light-mobile.webp"
              alt="Varq library showing book covers on a warm parchment background"
              width={1600}
              height={1040}
              className="w-full"
              priority
            />
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}

/* ───────── Intro Feature ───────── */
function FeatureIntro() {
  const cards = [
    {
      icon: <Library size={24} />,
      title: "Your whole library",
      description: "Drag and drop EPUB, PDF, and CBZ. Auto-extracted covers, titles, and authors.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Native reading",
      description: "Paginated EPUB and PDF with native macOS rendering. Arrow keys, swipe, and click zones.",
    },
    {
      icon: <Lock size={24} />,
      title: "Privacy first",
      description: "Touch ID-gated private shelf with real CryptoKit encryption at rest. No analytics, no tracking.",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-varq-night px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <AnimatedSection>
            <span className="text-sm font-medium tracking-widest text-varq-saffron uppercase">
              Built for macOS
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
              At home on your Mac.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
              A native app that lives in your Dock and feels like it belongs. No web wrappers, no Electron, no compromise.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2} className="mb-16 flex justify-center">
          <TiltCard tiltAmount={3}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
              <BlurImage
                src="/screenshots/reading-assistant.webp"
                placeholderSrc="/screenshots/reading-assistant-placeholder.webp"
                mobileSrc="/screenshots/reading-assistant-mobile.webp"
                alt="Varq reader with the reading assistant panel open"
                width={1600}
                height={1040}
                className="w-full max-w-4xl"
              />
            </div>
          </TiltCard>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="group rounded-2xl border border-white/8 bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-varq-saffron transition-transform group-hover:scale-105">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {card.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ───────── Showcase Cards ───────── */
function ShowcaseCards() {
  const cards = [
    {
      eyebrow: "Warm reading modes",
      title: "Five appearances, one perfect page.",
      description: "Light, Indigo, Black, and Monochrome for the chrome — plus an independent Sepia tone for the book itself.",
      src: "/screenshots/reader-highlights.webp",
      placeholder: "/screenshots/reader-highlights-placeholder.webp",
      mobile: "/screenshots/reader-highlights-mobile.webp",
      alt: "Varq reader with sepia page and terracotta highlights",
    },
    {
      eyebrow: "Highlights & notes",
      title: "Mark what matters. Export what you learn.",
      description: "Persistent highlights in terracotta and saffron. Notes with citation markers. Export to Markdown or JSON for Obsidian.",
      src: "/screenshots/reading-assistant.webp",
      placeholder: "/screenshots/reading-assistant-placeholder.webp",
      mobile: "/screenshots/reading-assistant-mobile.webp",
      alt: "Varq reading assistant explaining selected text",
    },
  ];

  return (
    <section id="showcase" className="relative overflow-hidden bg-varq-night-elevated px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <AnimatedSection>
            <span className="text-sm font-medium tracking-widest text-varq-saffron uppercase">
              Showcase
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Designed for deep reading.
            </h2>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid gap-8 lg:grid-cols-2" staggerDelay={0.15}>
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <TiltCard className="h-full" tiltAmount={4}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <BlurImage
                      src={card.src}
                      placeholderSrc={card.placeholder}
                      mobileSrc={card.mobile}
                      alt={card.alt}
                      width={1600}
                      height={1040}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-varq-night-elevated via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span className="text-xs font-medium uppercase tracking-widest text-varq-saffron">
                      {card.eyebrow}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-semibold text-white md:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                      {card.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Varq?",
      answer: "Varq is a native, open-source e-reader for macOS. It reads EPUB, PDF, and CBZ files with a warm, distinctly Indian visual design and native SwiftUI performance.",
    },
    {
      question: "Is Varq an official Apple Books or Calibre app?",
      answer: "No. Varq is an independent app built by Pratik Rai. It is not affiliated with, endorsed, sponsored, or associated with Apple Inc. or Calibre in any way.",
    },
    {
      question: "What do I need to use Varq?",
      answer: "Varq requires macOS 15 (Sequoia) or later. It is a native Mac app, so it is not available on Windows, iOS, or the web.",
    },
    {
      question: "Is my library data safe?",
      answer: "Yes. Your books and reading data stay local on your Mac. The private shelf uses real CryptoKit encryption at rest, and the app includes no analytics or tracking.",
    },
    {
      question: "Can I export my highlights?",
      answer: "Absolutely. Highlights and notes can be exported to Markdown or JSON, making it easy to bring them into Obsidian, Notion, or any other note-taking tool.",
    },
    {
      question: "Is Varq free?",
      answer: "Yes. Varq is free and open source under the MIT License. You can download it from the Mac App Store or build it from source on GitHub.",
    },
  ];

  return (
    <section id="faq" className="relative overflow-hidden bg-varq-night px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <AnimatedSection>
              <span className="text-sm font-medium tracking-widest text-varq-saffron uppercase">
                FAQ
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Frequently asked questions.
              </h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.08}>
            {faqs.map((faq, i) => (
              <StaggerItem key={faq.question}>
                <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="font-serif text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-white/50"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-white/50">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ───────── Download CTA ───────── */
function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-varq-night-elevated px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,varq-aurora-purple/10,transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <div className="mb-6 flex justify-center">
            <img src="/compass-mark.svg" alt="Varq" width={56} height={56} className="opacity-90" />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Start reading with Varq today.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
            Free on the Mac App Store. Open source on GitHub. Built for readers who care about craft and privacy.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-varq-night shadow-lg shadow-white/10 transition-colors hover:bg-white/90"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.95 1.07-3.11-1.05.05-2.31.72-3.06 1.64-.68.84-1.27 2.18-1.11 3.29 1.19.09 2.39-.6 3.1-1.82z" />
              </svg>
              Download on the Mac App Store
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="https://github.com/PratikRai0101/Varq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View source on GitHub
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="border-t border-varq-border bg-varq-night px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <img src="/compass-mark.svg" alt="Varq" width={20} height={20} className="opacity-60" />
          <span className="font-serif text-base font-semibold text-white/60">Varq</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          {[
            { label: "GitHub", href: "https://github.com/PratikRai0101/Varq" },
            { label: "Contributing", href: "https://github.com/PratikRai0101/Varq/blob/main/CONTRIBUTING.md" },
            { label: "License", href: "https://github.com/PratikRai0101/Varq/blob/main/LICENSE" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Pratik Rai. Built with care in SwiftUI.
        </p>
      </div>
    </footer>
  );
}

/* ───────── Page ───────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureIntro />
        <ShowcaseCards />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
