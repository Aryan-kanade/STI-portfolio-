import { useScroll, useSpring, motion } from "framer-motion"

/**
 * Thin gradient progress bar pinned to the top of the viewport.
 * Uses a spring-smoothed scroll percentage for fluid motion.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="scroll-progress grad-line"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
