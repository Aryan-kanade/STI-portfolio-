import { Quotes } from "@phosphor-icons/react"
import { TESTIMONIALS } from "../lib/data"
import { SectionHeading } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"

/** Duplicate testimonials for seamless infinite loop */
const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          num="09"
          kicker="Testimonials"
          title={
            <>
              What clients <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-bold">say</GradientShimmer>
            </>
          }
          sub="Real outcomes from real projects — no fluff."
        />
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative mt-10">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-24" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-24" aria-hidden />

        <div className="flex gap-4 carousel-track pl-5 pr-5" role="region" aria-roledescription="carousel" aria-label="Testimonials carousel" tabIndex={0}>
          {ITEMS.map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              className="shrink-0 w-[300px] sm:w-[340px] rounded-xl border border-line bg-bg-2/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/50"
            >
              <Quotes size={24} weight="fill" className="mb-3 text-accent/40" aria-hidden />
              <blockquote className="flex-1 text-sm leading-relaxed text-ink/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-line pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="mt-0.5 text-xs text-mut">{t.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
