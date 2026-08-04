export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Shivaswarajya Techno Innovation logo"
      className={className}
      width={512}
      height={512}
      loading="eager"
      decoding="async"
    />
  )
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-8 rounded-md object-contain" />
      <span className="font-display text-base font-bold tracking-tight leading-none">
        Shivaswarajya<span className="text-accent">.</span>
      </span>
    </span>
  )
}
