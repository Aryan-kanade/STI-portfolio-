import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "@phosphor-icons/react"

/**
 * Floating back-to-top button that appears after scrolling past the hero.
 * Smooth fade + scale entrance, accent-colored with glass backdrop.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
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
          className="fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full border border-line bg-bg/80 text-accent shadow-lg backdrop-blur-sm transition-colors duration-150 hover:border-accent hover:bg-accent/10"
        >
          <ArrowUp size={18} weight="bold" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
