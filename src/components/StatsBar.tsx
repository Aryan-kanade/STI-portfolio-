import { Reveal } from "./Shared"
import { useCountUp } from "../lib/utils"

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

export function StatsBar() {
  return (
    <section className="border-y border-line bg-bg-2/40 py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <StatItem {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
