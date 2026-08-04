import { useRef } from "react"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, WhatsappLogo, ClockCountdown, ShieldCheck, Code } from "@phosphor-icons/react"
import { CTA } from "../lib/data"
import { Reveal } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"
import { RippleButton } from "./ui/RippleButton"
import { useMagnetic } from "../lib/utils"

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const TRUST = [
  { icon: ClockCountdown, label: "Reply within 24 h" },
  { icon: ShieldCheck, label: "NDA on request" },
  { icon: Code, label: "Full source code ownership" },
]

export function CTABand() {
  const magneticRef = useRef<HTMLDivElement>(null)
  useMagnetic(magneticRef, 0.25)

  return (
    <section className="px-5 py-14">
      <Reveal>
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="cta-band relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-accent/30 bg-bg-2 px-7 py-14 text-center sm:px-12 sm:py-20"
        >
          <div
            className="absolute inset-0 -z-10 opacity-60"
            style={{ background: "radial-gradient(circle at 50% 100%, var(--color-raise), transparent 70%)" }}
            aria-hidden
          />

          <motion.p variants={item} className="mb-4 font-mono text-xs tracking-[0.25em] text-accent uppercase">
            {CTA.eyebrow}
          </motion.p>

          <motion.h2
            variants={item}
            className="mx-auto max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Got an operation that should be{" "}
            <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-bold">software</GradientShimmer>{" "}
            by now?
          </motion.h2>

          <motion.p variants={item} className="mx-auto mt-5 max-w-lg text-mut">
            {CTA.sub}
          </motion.p>

          {/* Trust signals */}
          <motion.div variants={item} className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {TRUST.map((t) => (
              <span key={t.label} className="flex items-center gap-1.5 text-[11px] text-mut">
                <t.icon size={14} weight="duotone" className="text-accent" />
                {t.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <div ref={magneticRef} className="magnetic-btn">
              <RippleButton
                rippleColor="rgba(255, 255, 255, 0.3)"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-[15px] font-medium text-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-glow"
                onClick={() => {
                  document.getElementById(CTA.primaryCta.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {CTA.primaryCta.label}
                <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
              </RippleButton>
            </div>
            <a
              href={CTA.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-7 py-3.5 text-sm font-medium transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              <WhatsappLogo size={16} weight="fill" />
              {CTA.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>
      </Reveal>
    </section>
  )
}
