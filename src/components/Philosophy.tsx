import { FOUNDER } from "../lib/data"
import { SectionHeading, Reveal } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"
import { GlowCard } from "@/components/ui/spotlight-card"

export function Philosophy() {
  return (
    <section className="bg-bg-2/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <GlowCard className="relative overflow-hidden rounded-2xl border border-line bg-bg-2/60 py-12 sm:py-16">
            {/* Laurel ornament — left */}
            <img
              src="/laurel_left.png"
              alt=""
              aria-hidden
              className="absolute top-1/2 left-4 hidden h-40 w-auto -translate-y-1/2 opacity-40 sm:block"
              loading="lazy"
            />
            {/* Laurel ornament — right */}
            <img
              src="/laurel_right.png"
              alt=""
              aria-hidden
              className="absolute top-1/2 right-3 hidden h-44 w-auto -translate-y-1/2 opacity-40 sm:block"
              loading="lazy"
            />

            {/* Section heading + quote inside the card, between the laurels */}
            <div className="relative z-10 mx-auto max-w-3xl px-10 sm:px-16 md:px-20">
              <div className="text-center">
                <p className="mb-3 flex items-center justify-center gap-2.5 font-mono text-base tracking-[0.25em] text-accent uppercase">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40" aria-hidden />
                  06 · Philosophy
                  <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40" aria-hidden />
                </p>
                <h2 className="font-display text-xl leading-snug font-bold tracking-tight sm:text-2xl md:text-3xl">
                  <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-medium">{FOUNDER.quote}</GradientShimmer>
                </h2>
                <p className="mt-4 text-mut">
                  — {FOUNDER.name}, {FOUNDER.role}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-center gap-3 font-mono text-xs tracking-widest text-mut">
                <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40" aria-hidden />
                <span className="text-accent">✦</span>
                <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40" aria-hidden />
              </div>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  )
}
