import { motion, type Variants } from "framer-motion"
import { ArrowRight, WhatsappLogo, Check, CaretDown } from "@phosphor-icons/react"
import { useRef } from "react"
import { HERO } from "../lib/data"
import { LogoMark } from "./Logo"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"
import { useMagnetic, useTypewriter } from "../lib/utils"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

/** Ambient floating particles in the hero background. */
function HeroParticles() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    bottom: `${Math.random() * 30}%`,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 6,
    dur: 8 + Math.random() * 8,
  }))

  return (
    <div className="absolute inset-0 -z-[2] overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle grad-line"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  )
}

const TYPO_PHRASES = ["custom software", "mobile apps", "AI & IoT systems", "digital operations"]

export function Hero() {
  const ctaRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(ctaRef, 0.25)
  const typed = useTypewriter(TYPO_PHRASES)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background: looping video */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/og-image.png"
          preload="metadata"
          // @ts-expect-error fetchPriority is valid HTML but missing from current React types
          fetchPriority="high"
          style={{ opacity: 0.85 }}
        >
          <source src="/videoHome.webm" type="video/webm" />
          <source src="/videoHome.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Theme-aware scrim overlay */}
      <div
        className="absolute inset-0 -z-[5]"
        style={{ background: `linear-gradient(to bottom, var(--scrim-heavy), var(--scrim-mid) 60%, var(--scrim-light))` }}
        aria-hidden
      />

      {/* Bottom fade gradient for smooth content transition */}
      <div
        className="absolute inset-x-0 bottom-0 h-36 -z-[3] bg-gradient-to-t from-bg to-transparent"
        aria-hidden
      />

      <HeroParticles />

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 -z-[1] overflow-hidden" aria-hidden>
        <span className="gradient-orb orb-drift-1 w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] bg-copper/25 -top-20 -right-20" />
        <span className="gradient-orb orb-drift-2 w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px] bg-accent/20 bottom-1/4 -left-16" />
        <span className="gradient-orb orb-drift-3 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] bg-amber/20 top-1/3 right-1/4" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16"
      >
        <div className="w-full lg:max-w-[55%] xl:max-w-[50%] flex flex-col justify-center">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <LogoMark className="size-9 rounded-lg object-contain" />
            <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">{HERO.eyebrow}</p>
          </motion.div>

          <motion.p variants={item} className="mb-4 font-mono text-sm text-mut">
            <span className="text-ink font-medium">{HERO.name}</span> —
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-2xl font-display text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.1] font-bold tracking-tight"
          >
            {HERO.headline[0]}{" "}
            <GradientShimmer
              gradient={BRAND_GRADIENT}
              baseColor="var(--color-copper)"
              easing="smooth"
              duration={2}
              className="font-display font-bold"
            >
              {`${HERO.headline[1]}.`}
            </GradientShimmer>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-mut">
            Engineering for growing businesses
            <br />
            building{" "}
            <span className="inline-block font-medium text-ink">
              {typed}
              <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle" aria-hidden>&nbsp;</span>
            </span>
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-4">
            <a
              ref={ctaRef}
              href={HERO.primaryCta.href}
              className="magnetic-btn group inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-medium text-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-glow"
            >
              {HERO.primaryCta.label}
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={HERO.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg/40 px-7 py-3.5 text-sm font-medium backdrop-blur-sm transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              <WhatsappLogo size={16} weight="fill" />
              {HERO.secondaryCta.label}
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {HERO.trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-mut">
                <Check size={15} weight="bold" className="text-accent" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-15 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5 text-mut/50 transition-colors hover:text-accent"
        aria-label="Scroll to selected work"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <CaretDown size={16} weight="bold" className="anim-bounce" />
      </motion.a>
    </section>
  )
}
