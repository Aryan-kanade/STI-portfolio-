import { useState } from "react"
import { METHODOLOGY } from "../lib/data"
import { SectionHeading, Reveal } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"
import { GlowCard } from "@/components/ui/spotlight-card"

/** System engine diagram with shimmer skeleton while loading */
function EngineImage() {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full rounded-lg bg-bg-2">
      {!loaded && <div className="absolute inset-0 animate-pulse rounded-lg bg-bg-2" />}
      <picture>
        <source srcSet="/system-engine.webp" type="image/webp" />
        <img
          src="/system-engine.png"
          alt="System Engine — four layers (Client, Service, Data, IoT) wired to one central engine, illustrating long-term ownership"
          className="w-full rounded-lg transition-opacity duration-500"
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  )
}

export function BuildAnimation() {
  return (
    <section id="process" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          num="03"
          kicker={METHODOLOGY.name}
          title={
            <>
              Watch a system <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-bold">come together</GradientShimmer>
            </>
          }
          sub={METHODOLOGY.pitch}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* The building object */}
          <Reveal className="order-2 lg:order-1">
            <GlowCard className="relative overflow-hidden rounded-2xl border border-line bg-bg-2/40 p-5 shadow-card sm:p-8">
              <EngineImage />
              <p className="mt-5 text-center font-mono text-[10px] tracking-widest text-mut uppercase">
                // four layers · one engine · long-term ownership
              </p>
            </GlowCard>
          </Reveal>

          {/* The process steps */}
          <div className="order-1 lg:order-2">
            <ol className="relative space-y-10">
              {METHODOLOGY.steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 0.1}>
                  <li className="group relative flex gap-12">
                    <div className="flex flex-col items-center">
                      <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-bg-2/60 font-mono text-xs text-accent transition-all duration-200 group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:scale-110">
                        {s.num}
                      </span>
                      {i < METHODOLOGY.steps.length - 1 && (
                        <span
                          className="w-px flex-1 grad-line mb-[-2.5rem]"
                          aria-hidden
                        />
                      )}
                    </div>
                    <div className="min-w-0 pb-2 pl-2">
                      <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-mut">{s.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
