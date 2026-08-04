import { ArrowRight } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { PROJECTS, CONTACT } from "../lib/data"
import { SectionHeading, Reveal } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"
import { ProjectPreview } from "./ProjectPreview"
import { LogoMark } from "./Logo"
import { GlowCard } from "@/components/ui/spotlight-card"
import { useCountUp } from "../lib/utils"

/** Parses a metric string like "−14%", "3.2x", "< 2s" and animates the numeric portion. */
function MetricValue({ raw }: { raw: string }) {
  const match = raw.match(/^(.*?)([\d.]+)(.*)$/)
  const prefix = match?.[1] ?? raw
  const numStr = match?.[2]
  const suffix = match?.[3] ?? ""

  const numericTarget = numStr ? parseFloat(numStr) : NaN
  const decimals = numStr?.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0
  const { display, ref } = useCountUp(numericTarget, { decimals, duration: 1000 })

  if (isNaN(numericTarget)) {
    return <>{raw}</>
  }

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {prefix}{display}{suffix}
    </span>
  )
}

const cardInner: import("framer-motion").Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.06 } },
}

const cardItem: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
}

export function Projects() {
  return (
    <section id="work" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          num="01"
          kicker="Selected Work"
          title={
            <>
              Work that <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-bold">solves real problems</GradientShimmer>
            </>
          }
          sub="Each piece below started with a broken workflow and ended with the workflow gone. No vanity features — systems built to be used."
        />

        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08} className="h-full">
              <GlowCard className="card-tilt flex h-full flex-col rounded-2xl border border-line bg-bg-2/40 shadow-card backdrop-blur-sm transition-all duration-300 hover:bg-accent/20 hover:border-accent/60 hover:shadow-glow" aria-label={`${p.name} — ${p.headline}`}>
              <motion.article
                variants={cardInner}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="group flex h-full flex-col overflow-hidden"
              >
                {/* Preview — compact, fills the top */}
                <motion.div variants={cardItem} className="border-b border-line bg-bg/40 p-3">
                  <ProjectPreview index={i} />
                </motion.div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <motion.div variants={cardItem} className="mb-3 flex items-center justify-between">
                    <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] tracking-widest text-accent uppercase">
                      [{p.tag}]
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-mut">
                      {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                    </span>
                  </motion.div>

                  <motion.div variants={cardItem} className="mb-2 flex items-center gap-2">
                    <LogoMark className="size-5 rounded object-contain" />
                    <h3 className="font-display text-base font-bold tracking-tight text-ink">
                      {p.name}
                    </h3>
                  </motion.div>

                  <motion.h4 variants={cardItem} className="font-display text-sm font-bold leading-snug tracking-tight text-ink">
                    {p.headline}
                  </motion.h4>

                  <motion.p variants={cardItem} className="mt-2 text-xs leading-relaxed text-mut">{p.solution}</motion.p>

                  {/* Metrics — inline, compact */}
                  {p.metrics && (
                    <motion.div variants={cardItem} className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      {p.metrics.map((m, idx) => (
                        <span key={m.label} className="flex items-baseline gap-1.5">
                          {idx > 0 && <span className="text-mut/40">·</span>}
                          <span className="font-display text-base font-bold tracking-tight text-accent">
                            <MetricValue raw={m.value} />
                          </span>
                          <span className="font-mono text-[9px] tracking-wider text-mut uppercase">
                            {m.label}
                          </span>
                        </span>
                      ))}
                    </motion.div>
                  )}

                  {/* Tech tags */}
                  <motion.ul variants={cardItem} className="mt-3 flex flex-wrap gap-1">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded border border-line bg-bg-2/60 px-1.5 py-0.5 font-mono text-[9px] text-mut"
                      >
                        {t}
                      </li>
                    ))}
                  </motion.ul>

                  <motion.div variants={cardItem} className="mt-auto pt-4">
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-accent"
                    >
                      View Case Study
                      <ArrowRight size={13} weight="bold" className="transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </motion.div>
                </div>
              </motion.article>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
