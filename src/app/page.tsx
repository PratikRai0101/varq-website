"use client";

import Image from "next/image";
import {
  BookOpen,
  Download,
  Fingerprint,
  Highlighter,
  Library,
  Palette,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { StaggerText } from "@/components/StaggerText";
import { TiltCard } from "@/components/TiltCard";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { JaliPattern } from "@/components/JaliPattern";
import { ArchDivider } from "@/components/ArchDivider";

/* ───────── Navbar ───────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-varq-parchment/90 backdrop-blur-md shadow-[0_1px_0_rgba(36,31,61,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/compass-mark.svg"
              alt="Varq compass mark"
              width={28}
              height={28}
              className="opacity-90"
            />
            <span className="font-serif text-xl font-semibold tracking-tight text-varq-ink-light">
              Varq
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {["Features", "Showcase", "Download"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-varq-ink-light/70 transition-colors hover:text-varq-ink-light"
              >
                {item}
              </a>
            ))}
            <a
              href="https://github.com/PratikRai0101/Varq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-varq-ink-light/70 transition-colors hover:text-varq-terracotta"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-varq-parchment px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <JaliPattern />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-varq-saffron/30 bg-varq-saffron/10 px-4 py-1.5"
            >
              <Sparkles size={14} className="text-varq-terracotta" />
              <span className="text-xs font-medium tracking-wide text-varq-terracotta uppercase">
                Now on the Mac App Store
              </span>
            </motion.div>

            <StaggerText
              text="The Apple Books polish Calibre never had."
              tag="h1"
              className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-varq-indigo md:text-6xl lg:text-7xl"
              delay={0.5}
              staggerDelay={0.05}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1.2 }}
              className="max-w-lg text-lg leading-relaxed text-varq-ink-light/80"
            >
              A native, open-source e-reader for macOS. Built in Swift/SwiftUI
              with native macOS reader components — no Electron, no web
              wrappers. Reads EPUB, PDF, and CBZ with a warm, distinctly Indian
              visual soul.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="#download"
                className="inline-flex items-center gap-2 rounded-xl bg-varq-indigo px-7 py-3.5 text-sm font-semibold text-varq-parchment shadow-lg shadow-varq-indigo/20 transition-colors hover:bg-varq-indigo-light hover:shadow-xl hover:shadow-varq-indigo/30"
              >
                <Download size={18} />
                Download for macOS
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://github.com/PratikRai0101/Varq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-varq-ink-light/15 bg-transparent px-7 py-3.5 text-sm font-semibold text-varq-ink-light transition-colors hover:border-varq-terracotta hover:text-varq-terracotta"
              >
                <Star size={18} />
                Star on GitHub
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-xs text-varq-ink-light/50"
            >
              Requires macOS 15+ (Sequoia or later). Free & open source under MIT License.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.8 }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <div className="relative rounded-2xl shadow-[0_32px_64px_-12px_rgba(181,80,42,0.25)] ring-1 ring-varq-ink-light/5">
              <Image
                src="/screenshots/library-light.png"
                alt="Varq library view showing warm parchment background with book covers"
                width={1710}
                height={1112}
                className="rounded-2xl"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1.6 }}
              className="absolute -bottom-6 -right-6 hidden lg:block"
            >
              <div className="rounded-xl border border-varq-saffron/20 bg-varq-parchment-deep/95 p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-varq-saffron/20">
                    <BookOpen size={20} className="text-varq-terracotta" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-varq-ink-light">
                      EPUB · PDF · CBZ
                    </p>
                    <p className="text-xs text-varq-ink-light/60">
                      All your books, one app
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Brand Story ───────── */
function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-varq-indigo px-6 py-24 md:py-32">
      <AmbientOrbs />
      <div className="relative mx-auto max-w-3xl text-center">
        <AnimatedSection delay={0.1}>
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="h-px w-12 bg-varq-saffron/40" />
            <span className="mx-4 font-serif text-sm font-medium tracking-widest text-varq-saffron uppercase">
              The Name
            </span>
            <div className="h-px w-12 bg-varq-saffron/40" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h2 className="font-serif text-3xl font-semibold leading-snug text-varq-parchment md:text-4xl">
            Varq
            <span className="mx-3 text-varq-saffron/60">—</span>
            <span className="italic text-varq-saffron">वर्क़</span>
            <span className="mx-3 text-varq-saffron/60">—</span>
            <span className="italic text-varq-saffron">ورق</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-6 text-lg leading-relaxed text-varq-parchment/80">
            Meaning <em className="text-varq-saffron">leaf</em> or{" "}
            <em className="text-varq-saffron">page</em> in Hindi and Urdu. Also
            the term for the gossamer-thin gold and silver foil pressed onto Indian
            sweets and art — delicate, precious, and luminous.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="mt-4 text-lg leading-relaxed text-varq-parchment/70">
            That is the spirit of this app: a reading experience that feels like
            turning pages of gold. Warm where it matters, restrained where it
            counts. The Indian visual soul — in color, warmth, and elegance — not
            in cliché.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-varq-saffron/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-varq-saffron/40" />
            <div className="h-px w-16 bg-varq-saffron/20" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ───────── Features ───────── */
function Features() {
  const features = [
    {
      icon: <Library size={22} />,
      title: "Beautiful library",
      description:
        "Drag and drop EPUB, PDF, and CBZ files. Auto-extracted covers, titles, and authors. Duplicate detection. Sortable grid view.",
    },
    {
      icon: <BookOpen size={22} />,
      title: "Native reading",
      description:
        "Paginated EPUB and PDF rendering via native macOS components. Page turns via arrow keys, trackpad swipe, and click zones. Remembers your exact position.",
    },
    {
      icon: <Highlighter size={22} />,
      title: "Highlights & notes",
      description:
        "Persistent highlights in warm terracotta and saffron tones. Personal notes with clickable citation markers. Export to Markdown or JSON.",
    },
    {
      icon: <Palette size={22} />,
      title: "Warm reading modes",
      description:
        "Five appearances: Light, Indigo, Black, and Monochrome for the chrome — plus an independent Sepia page tone for the book itself, regardless of UI mode.",
    },
    {
      icon: <Fingerprint size={22} />,
      title: "Private shelf",
      description:
        "Touch ID-gated access to your most personal books. Real encryption at rest via CryptoKit — not just UI hiding.",
    },
    {
      icon: <Sparkles size={22} />,
      title: "Reading assistant",
      description:
        "On-device AI explanations, summaries, and grounded Q&A via Apple Intelligence. Private, fast, and contextual to your selected text.",
    },
  ];

  return (
    <section id="features" className="relative bg-varq-parchment px-6 py-24 md:py-32">
      <JaliPattern />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <AnimatedSection>
            <span className="font-serif text-sm font-medium tracking-widest text-varq-terracotta uppercase">
              Features
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-varq-indigo md:text-5xl">
              Everything you need to read deeply.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-varq-ink-light/70">
              No Electron wrappers. No web views. Just native macOS performance
              with a design language that feels like home.
            </p>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <TiltCard className="h-full">
                <div className="group h-full rounded-2xl border border-varq-ink-light/8 bg-varq-parchment-deep/50 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-varq-saffron/20 hover:bg-varq-parchment-deep hover:shadow-lg hover:shadow-varq-saffron/5">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-varq-saffron/10 text-varq-terracotta transition-transform group-hover:scale-105">
                    {f.icon}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-varq-ink-light">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-varq-ink-light/65">
                    {f.description}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ───────── Showcase ───────── */
function Showcase() {
  const shots = [
    {
      src: "/screenshots/library-light.png",
      alt: "Varq library view in warm light mode with book covers",
      caption: "Light library — warm parchment, never sterile white",
    },
    {
      src: "/screenshots/reader-highlights.png",
      alt: "Varq reader with terracotta text highlights on sepia page",
      caption: "Sepia reading page with terracotta highlights",
    },
    {
      src: "/screenshots/reading-assistant.png",
      alt: "Varq reading assistant AI panel explaining selected text",
      caption: "On-device reading assistant — private and contextual",
    },
  ];

  return (
    <section id="showcase" className="relative bg-varq-parchment-deep px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <AnimatedSection>
            <span className="font-serif text-sm font-medium tracking-widest text-varq-terracotta uppercase">
              Showcase
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-varq-indigo md:text-5xl">
              See it for yourself.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-varq-ink-light/70">
              Every pixel is native SwiftUI. Every color is deliberate. Every
              animation is fluid.
            </p>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.12}>
          {shots.map((shot) => (
            <StaggerItem key={shot.src}>
              <TiltCard className="group" tiltAmount={6}>
                <div className="overflow-hidden rounded-2xl border border-varq-ink-light/8 bg-varq-parchment shadow-lg shadow-varq-indigo/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-varq-terracotta/10">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1710}
                    height={1112}
                    className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-medium text-varq-ink-light/60">
                  {shot.caption}
                </p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ───────── Download CTA ───────── */
function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-varq-indigo px-6 py-24 md:py-32"
    >
      <AmbientOrbs />
      <div className="relative mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <div className="mb-6 inline-flex items-center justify-center">
            <Image
              src="/compass-mark.svg"
              alt="Varq compass mark"
              width={48}
              height={48}
              className="opacity-80"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-varq-parchment md:text-5xl">
            Start reading with Varq today.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-varq-parchment/70">
            Free on the Mac App Store. Open source on GitHub. Built for readers
            who care about craft.
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
              className="inline-flex items-center gap-3 rounded-xl bg-varq-parchment px-8 py-4 text-base font-semibold text-varq-indigo shadow-lg shadow-black/20 transition-colors hover:bg-white hover:shadow-xl"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
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
              className="inline-flex items-center gap-3 rounded-xl border-2 border-varq-parchment/20 px-8 py-4 text-base font-semibold text-varq-parchment transition-colors hover:border-varq-saffron hover:text-varq-saffron"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View source on GitHub
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="mt-6 text-sm text-varq-parchment/40">
            macOS 15+ required. MIT Licensed. v1.0
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="border-t border-varq-ink-light/8 bg-varq-parchment px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <Image
            src="/compass-mark.svg"
            alt="Varq"
            width={20}
            height={20}
            className="opacity-60"
          />
          <span className="font-serif text-base font-semibold text-varq-ink-light/60">
            Varq
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-varq-ink-light/50">
          {[
            { label: "GitHub", href: "https://github.com/PratikRai0101/Varq" },
            { label: "Contributing", href: "https://github.com/PratikRai0101/Varq/blob/main/CONTRIBUTING.md" },
            { label: "Roadmap", href: "https://github.com/PratikRai0101/Varq/blob/main/docs/PRD.md" },
            { label: "MIT License", href: "https://github.com/PratikRai0101/Varq/blob/main/LICENSE" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-varq-terracotta"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-varq-ink-light/40">
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
        <ArchDivider />
        <BrandStory />
        <ArchDivider flip />
        <Features />
        <Showcase />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
