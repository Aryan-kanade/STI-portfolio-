import { useRef, useState, type ComponentProps, type MouseEvent, useCallback } from "react"

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export function RippleButton({
  rippleColor = "rgba(255, 255, 255, 0.35)",
  className = "",
  children,
  onClick,
  ...rest
}: ComponentProps<"button"> & { rippleColor?: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const nextId = useRef(0)

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current
      if (!button) return

      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * 2
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      const id = nextId.current++
      setRipples((prev) => [...prev, { id, x, y, size }])
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600)

      onClick?.(e)
    },
    [onClick],
  )

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden${className ? ` ${className}` : ""}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor,
          }}
        />
      ))}
    </button>
  )
}
