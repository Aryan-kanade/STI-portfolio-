import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { LogoMark } from "./Logo"

/** Small ambient particles that float upward around the logo during loading. */
function LoaderParticles() {
  const dots = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: 40 + Math.random() * 20 - 10,           // % from left
    delay: 0.15 + Math.random() * 0.3,
    dur: 1.2 + Math.random() * 0.6,
    size: 2 + Math.random() * 2,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d) => (
        <span
          key={d.id}
          className="particle grad-line"
          style={{
            left: `${d.x}%`,
            bottom: "45%",
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  )
}

/**
 * Branded intro reveal — kept brief.
 * Waits for the main bundle to be ready before dismissing, but caps at 1.5 s
 * so it never blocks first content paint or accessibility.
 */
export function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    // If document is already complete (SPA navigations), dismiss quickly
    if (document.readyState === "complete") {
      const t = setTimeout(() => setDone(true), 400)
      return () => clearTimeout(t)
    }

    const onReady = () => {
      const t = setTimeout(() => setDone(true), 300)
      return () => clearTimeout(t)
    }

    // Cap at 1.5 s regardless of load state
    const cap = setTimeout(() => {
      setDone(true)
    }, 1500)

    window.addEventListener("load", onReady)
    return () => {
      window.removeEventListener("load", onReady)
      clearTimeout(cap)
    }
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.45, ease: "easeInOut" } }}
          aria-hidden
        >
          <LoaderParticles />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <LogoMark className="size-12 rounded-xl object-contain" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.35, ease: "easeOut" }}
            className="mt-4 font-display text-sm tracking-widest text-accent/70 uppercase"
          >
            Shivaswarajya
          </motion.p>

          <div className="mt-5 h-px w-44 overflow-hidden bg-line">
            <motion.div
              className="grad-line h-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
