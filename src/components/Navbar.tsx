import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { NAV, CONTACT } from "../lib/data"
import { Logo } from "./Logo"

const SECTION_IDS = ["work", "capabilities", "process", "about", "contact"]

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const [active, setActive] = useState("")
  // Blur intensity: increases as user scrolls deeper (max 20px blur)
  const [blurIntensity, setBlurIntensity] = useState(0)

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24)
    setBlurIntensity(Math.min(y / 300, 1) * 20)
  })

  // Track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  // Close + return focus on ESC; focus trap within the mobile menu
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      // Focus trap: cycle through focusable elements inside the menu
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])',
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKey)
    firstLinkRef.current?.focus()
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  function isActive(href: string) {
    return href === `#${active}`
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass" : "border-transparent bg-transparent"
      }`}
      style={
        scrolled || open
          ? { backdropFilter: `blur(${blurIntensity}px)`, WebkitBackdropFilter: `blur(${blurIntensity}px)` }
          : undefined
      }
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" aria-label="Shivaswarajya — home">
          <Logo />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`relative text-sm transition-colors duration-150 ${
                isActive(n.href) ? "text-ink font-medium" : "text-mut hover:text-ink"
              }`}
            >
              {n.label}
              {/* Active indicator dot */}
              {isActive(n.href) && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-transform duration-150 hover:-translate-y-0.5 sm:block"
          >
            Get a Quote
          </a>
          <button
            ref={toggleRef}
            className="grid size-9 place-items-center rounded-lg border border-line md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-px w-4 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu — slide-down animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="px-5 pb-5">
              {NAV.map((n, i) => (
                <a
                  key={n.href}
                  href={n.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm transition-colors duration-150 ${
                    isActive(n.href) ? "text-ink font-medium" : "text-mut hover:text-ink"
                  }`}
                >
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-medium text-white">
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="sr-only">Contact: {CONTACT.phone} · {CONTACT.email}</p>
    </header>
  )
}
