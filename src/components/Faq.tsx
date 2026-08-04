import { motion } from "framer-motion"
import { Plus, Coin, ChatCircle, Wrench, Globe, ArrowClockwise, ShieldCheck, type Icon } from "@phosphor-icons/react"
import { useState } from "react"
import { FAQ } from "../lib/data"
import { SectionHeading } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"
import { SectionFade } from "./SectionFade"

const FAQ_ICONS: Icon[] = [Coin, ChatCircle, Wrench, Globe, ArrowClockwise, ShieldCheck]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-bg-2/60 py-8 sm:py-10">
      <SectionFade direction="up" color="var(--color-bg)" />
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          num="08"
          kicker="FAQ"
          title={
            <>
              A few <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-bold">honest answers</GradientShimmer>
            </>
          }
          sub="Before you write in — the questions most clients ask."
        />
        <div className="divide-y divide-line rounded-xl border border-line bg-bg-2/60">
          {FAQ.map((f, i) => (
            <div key={f.q} className={`transition-colors duration-200 ${open === i ? "bg-raise/60" : ""}`}>
                  <button
                    id={`faq-btn-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 pl-5 text-left transition-colors duration-200 hover:bg-raise/40"
                  >
                <span className="flex items-center gap-3 min-w-0">
                  {open === i && (
                    <span className="shrink-0 w-0.5 self-stretch rounded-full bg-accent" aria-hidden />
                  )}
                  {(() => { const Ic = FAQ_ICONS[i % FAQ_ICONS.length]; return <Ic size={18} weight="duotone" className={`shrink-0 ${open === i ? "text-accent" : "text-mut/60"}`} /> })()}
                  <span className="font-display text-base font-semibold sm:text-lg min-w-0">{f.q}</span>
                </span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-mut">
                  <Plus size={18} weight="bold" />
                </motion.span>
              </button>
              {/* Grid-based height animation — smoother than height: auto */}
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`faq-grid${open === i ? " open" : ""}`}
                  >
                    <div>
                      <p className="max-w-2xl pb-5 pl-5 leading-relaxed text-mut">{f.a}</p>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
      <SectionFade direction="down" color="var(--color-bg)" />
    </section>
  )
}
