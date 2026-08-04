import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion"
import { ArrowUp } from "@phosphor-icons/react"

const RADIUS = 16
const STROKE = 2.5
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/**
 * Floating back-to-top button with circular progress ring.
 * The SVG ring fills as you scroll down, providing a visual affordance.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  // Convert 0→1 progress to dashoffset: CIRCUMFERENCE→0
  const strokeOffset = useTransform(smoothProgress, [0, 1], [CIRCUMFERENCE, 0])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full border border-line bg-bg/80 shadow-lg backdrop-blur-sm transition-colors duration-150 hover:border-accent hover:bg-accent/10"
        >
          {/* Progress ring SVG */}
          <svg className="absolute inset-0 -rotate-90" width="44" height="44" aria-hidden>
            {/* Track */}
            <circle
              cx="22"
              cy="22"
              r={RADIUS}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              className="opacity-25"
            />
            {/* Progress arc */}
            <motion.circle
              cx="22"
              cy="22"
              r={RADIUS}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              style={{ strokeDashoffset: strokeOffset }}
            />
          </svg>
          <ArrowUp size={18} weight="bold" className="relative z-10 text-accent" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
