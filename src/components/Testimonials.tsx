import { Quotes } from "@phosphor-icons/react"
import { TESTIMONIALS } from "../lib/data"
import { SectionHeading, Reveal } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"
import { GlowCard } from "@/components/ui/spotlight-card"

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <GlowCard className="flex h-full flex-col rounded-xl border border-line bg-bg-2/60 p-6">
                <Quotes size={24} weight="fill" className="mb-3 text-accent/40" aria-hidden />
                <blockquote className="flex-1 text-sm leading-relaxed text-ink/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 border-t border-line pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-0.5 text-xs text-mut">{t.company}</p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
