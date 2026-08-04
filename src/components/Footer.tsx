import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LinkedinLogo, WhatsappLogo, EnvelopeSimple, ArrowRight, CheckCircle } from "@phosphor-icons/react"
import type { Icon } from "@phosphor-icons/react"
import { NAV, CONTACT } from "../lib/data"
import { Logo } from "./Logo"
import { Reveal } from "./Shared"
import { RippleButton } from "./ui/RippleButton"

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/omkar-patil",
    icon: LinkedinLogo as Icon,
    brand: "#0A66C2",
  },
  {
    label: "WhatsApp",
    href: CONTACT.whatsapp,
    icon: WhatsappLogo as Icon,
    brand: "#25D366",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    icon: EnvelopeSimple as Icon,
    brand: "var(--color-accent)",
  },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-mut">
                Software engineering — custom software, mobile apps, AI &amp; IoT for growing businesses.
              </p>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.25em] text-mut uppercase">Quick links</p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-mut transition-colors duration-150 hover:text-ink">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.25em] text-mut uppercase">Connect</p>
              <div className="flex gap-3">
                {SOCIAL.map((s) => (
                  <SocialCard key={s.label} social={s} />
                ))}
              </div>
              <p className="mt-4 text-sm text-mut">
                <a href={CONTACT.phoneHref} className="hover:text-ink">{CONTACT.phone}</a>
                <br />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">{CONTACT.email}</a>
              </p>
            </div>
          </div>

          {/* Stay connected */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-2 text-sm text-accent"
                >
                  <CheckCircle size={16} weight="fill" />
                  Opening email client…
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                  <p className="text-sm text-mut">Stay connected:</p>
                  <form
                    className="flex gap-2"
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (!email) return
                      setSubmitted(true)
                      clearTimeout(timer.current)
                      timer.current = setTimeout(() => {
                        window.location.href = `mailto:${CONTACT.email}?subject=Let's%20stay%20connected&body=Hi%2C%20I'd%20like%20to%20stay%20updated%20on%20your%20work.%0A%0AEmail%3A%20${encodeURIComponent(email)}`
                      }, 600)
                    }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-56 rounded-lg border border-line bg-bg px-3.5 py-2 text-sm text-ink placeholder:text-mut/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                    <RippleButton
                      type="submit"
                      rippleColor="rgba(245, 185, 69, 0.3)"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      <ArrowRight size={14} weight="bold" />
                    </RippleButton>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-mut sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative block size-2 rounded-full bg-green-500" />
              </span>
              <span>Available for new projects</span>
              <span className="mx-1 text-mut/30">·</span>
              <p>© {new Date().getFullYear()} Shivaswarajya Techno Innovation. All rights reserved.</p>
            </div>
            <p className="font-mono">Kolhapur · Maharashtra · India</p>
      </div>
    </Reveal>
      </div>
    </footer>
  )
}

// ---------------------------------------------------------------------------
// Social icon with branded hover card
// ---------------------------------------------------------------------------

function SocialCard({ social }: { social: (typeof SOCIAL)[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
      className="relative grid size-10 place-items-center rounded-lg border border-line text-mut transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-glow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <social.icon size={18} weight="bold" aria-hidden />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-none absolute -top-12 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold shadow-lg"
            style={{
              color: "#fff",
              backgroundColor: social.brand,
            }}
          >
            {social.label}
            {/* Tiny arrow pointing down */}
            <span
              className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45"
              style={{ backgroundColor: social.brand }}
              aria-hidden
            />
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  )
}
