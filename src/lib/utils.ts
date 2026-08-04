import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useRef, type RefObject } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Makes an element "magnetic" — it subtly follows the cursor while hovering.
 * The element's CSS transform is updated directly for performance.
 * Requires the `magnetic-btn` class on the element (handles the transition).
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  strength = 0.3
) {
  const rafId = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) * strength
        const dy = (e.clientY - cy) * strength
        el.style.transform = `translate(${dx}px, ${dy}px)`
      })
    }

    const onLeave = () => {
      cancelAnimationFrame(rafId.current)
      el.style.transform = "translate(0, 0)"
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
      cancelAnimationFrame(rafId.current)
    }
  }, [ref, strength])
}
