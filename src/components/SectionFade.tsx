/** Gradient fade at section boundaries for smooth background transitions. */
export function SectionFade({ direction = "down", color = "var(--color-bg)" }: { direction?: "up" | "down"; color?: string }) {
  return (
    <div
      aria-hidden
      className={`relative h-16 w-full ${direction === "up" ? "bg-gradient-to-t" : "bg-gradient-to-b"}`}
      style={{
        backgroundImage: `linear-gradient(${direction === "up" ? "to top" : "to bottom"}, transparent, ${color})`,
      }}
    />
  )
}
