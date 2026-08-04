import { useRef, type ReactNode, useCallback, useState, useEffect, type HTMLAttributes } from "react"

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/** Max rotation angle (degrees) for the 3D tilt. */
const TILT_MAX = 6

/**
 * A wrapper that adds a mouse-tracking spotlight / glow overlay to any card.
 * When the `card-tilt` class is present in `className`, a 3D perspective tilt
 * is also applied based on cursor position.
 */
export function GlowCard({ children, className = "", ...rest }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isTouch, setIsTouch] = useState(false)
  const hasTilt = className.includes("card-tilt")

  // Detect touch-primary devices where mousemove never fires
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onFirstMove = () => setIsTouch(false)
    const onFirstTouch = () => { setIsTouch(true); el.removeEventListener("touchstart", onFirstTouch) }
    el.addEventListener("mousemove", onFirstMove, { once: true })
    el.addEventListener("touchstart", onFirstTouch, { once: true })
    return () => {
      el.removeEventListener("mousemove", onFirstMove)
      el.removeEventListener("touchstart", onFirstTouch)
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPosition({ x, y })

    if (hasTilt && innerRef.current) {
      const midX = rect.width / 2
      const midY = rect.height / 2
      const pctX = (x - midX) / midX   // -1 → 1
      const pctY = (y - midY) / midY
      innerRef.current.style.transform =
        `rotateY(${pctX * TILT_MAX}deg) rotateX(${-pctY * TILT_MAX}deg)`
    }
  }, [hasTilt])

  const handleMouseEnter = useCallback(() => {
    if (!isTouch) setOpacity(1)
  }, [isTouch])

  const handleMouseLeave = useCallback(() => {
    setOpacity(0)
    if (hasTilt && innerRef.current) {
      innerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)"
    }
  }, [hasTilt])

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {/* Radial glow — static for touch, dynamic for mouse */}
      <div
        className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isTouch ? 0.7 : opacity,
          background: isTouch
            ? "radial-gradient(circle at 50% 0%, var(--color-glow), transparent 70%)"
            : `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--color-glow), transparent 40%)`,
        }}
        aria-hidden
      />
      {/* Card content sits above the glow — receives 3D tilt when applicable */}
      <div ref={hasTilt ? innerRef : undefined} className={`relative z-10 h-full${hasTilt ? " card-tilt-inner" : ""}`}>
        {children}
      </div>
    </div>
  )
}
