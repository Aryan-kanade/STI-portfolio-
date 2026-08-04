import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function SectionHeading({ num, kicker, title, sub }: { num: string; kicker: string; title: ReactNode; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-14"
    >
      <p className="mb-3 flex items-center gap-2.5 font-mono text-base tracking-[0.25em] text-accent uppercase">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/40" aria-hidden />
        {num} · {kicker}
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/40" aria-hidden />
      </p>
      <h2 className="font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-4 max-w-xl text-mut">{sub}</p>}
    </motion.div>
  )
}

export function Reveal({ children, delay = 0, className, direction = "up" }: { children: ReactNode; delay?: number; className?: string; direction?: "up" | "left" | "right" | "scale" }) {
  const initials: Record<string, { opacity: number; x?: number; y?: number; scale?: number }> = {
    up:    { opacity: 0, y: 24 },
    left:  { opacity: 0, x: -24 },
    right: { opacity: 0, x: 24 },
    scale: { opacity: 0, scale: 0.92 },
  }
  const visibles: Record<string, { opacity: number; x?: number; y?: number; scale?: number }> = {
    up:    { opacity: 1, y: 0 },
    left:  { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1 },
  }
  return (
    <motion.div
      initial={initials[direction]}
      whileInView={visibles[direction]}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
