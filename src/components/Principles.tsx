import { ArrowUpRight } from "@phosphor-icons/react"
import { PRINCIPLES } from "../lib/data"
import { SectionHeading, Reveal } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"
import { GlowCard } from "@/components/ui/spotlight-card"

export function Principles() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          num="05"
          kicker="Engineering Principles"
          title={
            <>
              How I think about <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-bold">software</GradientShimmer>
            </>
          }
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <GlowCard className="flex h-full flex-col rounded-xl border border-line bg-bg-2/60 transition-all duration-300 hover:border-accent/50 hover:shadow-glow">
              <article className="group relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
                {/* top row: number + arrow */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    className="text-mut/0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>

                <h3 className="mt-3 font-display text-sm font-semibold leading-snug sm:text-base">{p.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-mut sm:text-sm">{p.body}</p>

                {/* bottom accent bar */}
                <span
                  className="grad-line absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
              </article>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
