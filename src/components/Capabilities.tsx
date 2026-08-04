import { Code, DeviceMobileCamera, Browser, Robot, Cpu, Cloud, ArrowUpRight, Check } from "@phosphor-icons/react"
import type { ComponentType } from "react"
import type { IconProps } from "@phosphor-icons/react"
import { CAPABILITIES, TECH_STACK } from "../lib/data"
import { SectionHeading, Reveal } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"
import { GlowCard } from "@/components/ui/spotlight-card"

const ICONS: Record<string, ComponentType<IconProps>> = {
  code: Code,
  phone: DeviceMobileCamera,
  browser: Browser,
  robot: Robot,
  cpu: Cpu,
  cloud: Cloud,
}

export function Capabilities() {
  return (
    <section id="capabilities" className="py-12">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          num="02"
          kicker="Capabilities"
          title={
            <>
              What I <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-bold">build</GradientShimmer>
            </>
          }
          sub="Six disciplines, one standard — systems that keep working when your business grows."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <GlowCard className="flex h-full flex-col rounded-xl border border-line bg-bg-2/60 transition-all duration-300 hover:border-accent/50 hover:shadow-glow">
                <article className="group relative flex h-full flex-col overflow-hidden p-4">
                  {/* top row: icon tile + arrow */}
                  <div className="flex items-center justify-between">
                    <div className="grid size-8 place-items-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
                      <Icon size={15} weight="duotone" />
                    </div>
                    <ArrowUpRight
                      size={15}
                      weight="bold"
                      className="text-mut transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>

                  <h3 className="mt-3 font-display text-sm font-semibold">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-mut">{s.desc}</p>

                  {/* deliverables — concrete points that fill the card */}
                  <ul className="mt-3 space-y-1 border-t border-line pt-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-1.5 text-[11px] text-ink/80">
                        <Check size={11} weight="bold" className="shrink-0 text-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* bottom accent bar that fills on hover */}
                  <span
                    className="grad-line absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />
                </article>
                </GlowCard>
              </Reveal>
            )
          })}
        </div>

        {/* Tech stack folded in */}
        <Reveal className="mt-8">
          <p className="mb-4 font-mono text-[10px] tracking-[0.25em] text-mut uppercase">// Stack I work with</p>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
            {TECH_STACK.map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span className="size-1 rounded-full bg-accent/60" aria-hidden />}
                <span className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-mut transition-colors hover:border-accent/40 hover:text-ink">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
