import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LinkedinLogo, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react"
import type { Icon } from "@phosphor-icons/react"
import { NAV, CONTACT } from "../lib/data"
import { Logo } from "./Logo"
import { Reveal } from "./Shared"

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
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-mut">
                Founder-led software engineering — custom software, mobile apps, AI &amp; IoT for growing businesses.
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
          <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-mut sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Shivaswarajya Techno Innovation. All rights reserved.</p>
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
