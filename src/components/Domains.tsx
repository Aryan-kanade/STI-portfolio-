import { Lightning, MapPinLine, GearSix, Storefront } from "@phosphor-icons/react"
import type { Icon } from "@phosphor-icons/react"
import { DOMAINS } from "../lib/data"
import { SectionHeading, Reveal } from "./Shared"
import { GlowCard } from "@/components/ui/spotlight-card"
import { SectionFade } from "./SectionFade"
import { useCountUp } from "../lib/utils"

const ICON_MAP: Record<string, Icon> = {
  lightning: Lightning,
  "map-pin": MapPinLine,
  gear: GearSix,
  storefront: Storefront,
}

const STATS = [
  { value: 4, suffix: "+", label: "Industries Served", decimals: 0 },
  { value: 6, suffix: "+", label: "Systems Delivered", decimals: 0 },
  { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
  { value: 24, suffix: "h", label: "Response Time", decimals: 0 },
]

function StatItem({ value, suffix, label, decimals }: { value: number; suffix: string; label: string; decimals: number }) {
  const { display, ref } = useCountUp(value, { decimals, duration: 1400 })

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {display}<span className="text-accent">{suffix}</span>
      </p>
      <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-mut uppercase">{label}</p>
    </div>
  )
}

export function Domains() {
  return (
    <section aria-label="Industry domains" className="bg-raise/30">
      <SectionFade direction="up" />
      <div className="mx-auto max-w-7xl px-5 py-6 sm:py-8">
        <SectionHeading
          num="04"
          kicker="Industry Domains"
          title={<>Sectors we <span className="text-accent">serve</span></>}
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {DOMAINS.map((d, i) => {
            const Icon = ICON_MAP[d.icon]
            return (
              <Reveal key={d.title} delay={i * 0.06}>
                <GlowCard className="flex h-full flex-col rounded-xl border border-line bg-bg-2/60 transition-all duration-300 hover:border-accent/50 hover:shadow-glow" role="listitem" aria-label={`${d.title} — ${d.desc}`}>
                  <div className="flex flex-1 items-start gap-3.5 p-5 sm:p-6">
                    {Icon && (
                      <div className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-raise">
                        <Icon size={16} weight="duotone" className="text-accent" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-display text-sm font-semibold">{d.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-mut">{d.desc}</p>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            )
          })}
        </div>
        {/* Stats bar */}
        <div className="mt-8 border-y border-line bg-bg-2/40 py-8 sm:py-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <StatItem {...s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SectionFade direction="down" />
    </section>
  )
}
