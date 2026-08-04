import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "@phosphor-icons/react"
import { FOUNDER } from "../lib/data"
import { SectionHeading, Reveal } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"

/** Founder portrait with shimmer skeleton while loading */
function FounderImage() {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative size-full bg-bg-2">
      {!loaded && <div className="absolute inset-0 animate-pulse rounded-full bg-bg-2" />}
      <picture>
        <source srcSet="/founder.webp" type="image/webp" />
        <img
          src="/founder.png"
          alt={FOUNDER.name}
          className="size-full object-cover transition-opacity duration-500"
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  )
}

export function Founder() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="-mb-10">
        <SectionHeading
          num="07"
          kicker="About"
          title={
            <>
              The engineer <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-bold">behind the systems</GradientShimmer>
            </>
          }
        />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[200px_1fr] lg:gap-12">
          {/* Portrait */}
          <Reveal className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="rounded-full p-[1.5px] grad-line">
                <div className="size-44 overflow-hidden rounded-full border-4 border-bg sm:size-48">
                  <FounderImage />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="space-y-5">
            <Reveal>
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                {FOUNDER.name}
                <span className="mt-1 block text-sm font-medium text-accent sm:text-base">{FOUNDER.role}</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mut">{FOUNDER.bio}</p>
            </Reveal>

            {/* Highlights */}
            <Reveal delay={0.08}>
              <div className="flex flex-wrap gap-2">
                {FOUNDER.highlights.map((h) => (
                  <span
                    key={h.title}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-glass px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent/50"
                  >
                    <Check size={12} weight="bold" className="shrink-0 text-accent" />
                    {h.title}
                  </span>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  )
}
