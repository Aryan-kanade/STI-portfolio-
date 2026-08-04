import { useState, useRef, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, EnvelopeSimple, MapPin, ArrowRight, WhatsappLogo, ShieldCheck, CheckCircle } from "@phosphor-icons/react"
import { CONTACT } from "../lib/data"
import { RippleButton } from "@/components/ui/RippleButton"
import { SectionHeading, Reveal } from "./Shared"
import { GradientShimmer, BRAND_GRADIENT } from "./GradientShimmer"

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Work Email", type: "email", required: true },
  { name: "company", label: "Company", type: "text", required: false },
  { name: "phone", label: "Phone", type: "tel", required: false },
] as const

/** Single floating-label input field. */
function FloatingInput({
  name,
  label,
  type,
  required,
  value,
  onChange,
  autoComplete,
  isTextarea = false,
  rows,
  placeholder,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  autoComplete?: string
  isTextarea?: boolean
  rows?: number
  placeholder?: string
}) {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const active = value.length > 0

  const shared =
    "peer w-full rounded-lg border border-line bg-bg px-3.5 pt-5 pb-2 text-sm text-ink transition-colors duration-150 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"

  return (
    <label className="block">
      <div className="relative">
        {isTextarea ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            name={name}
            required={required}
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder || " "}
            className={`${shared} resize-y`}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            name={name}
            type={type}
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder=" "
            autoComplete={autoComplete}
            className={shared}
          />
        )}
        <span
          className={`pointer-events-none absolute left-3.5 transition-all duration-150 ${
            active
              ? "top-1.5 text-[10px] font-semibold tracking-wide text-accent uppercase"
              : "top-1/2 -translate-y-1/2 text-sm text-mut/60 peer-focus:top-1.5 peer-focus:-translate-y-0 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:tracking-wide peer-focus:text-accent peer-focus:uppercase"
          }${isTextarea && !active ? " !top-3.5 !translate-y-0" : ""}`}
        >
          {label}
          {required && <span className="text-accent"> *</span>}
        </span>
      </div>
    </label>
  )
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", details: "" })
  const [submitted, setSubmitted] = useState(false)
  const submitTimer = useRef<ReturnType<typeof setTimeout>>()

  function update(name: string, value: string) {
    setForm((f) => ({ ...f, [name]: value }))
  }

  // Build a pre-filled mailto: link from the current form state.
  function buildMailto() {
    const subject = `Project enquiry — ${form.name || "New enquiry"}`
    const lines = [
      form.name && `Name: ${form.name}`,
      form.email && `Work email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      "",
      "Project process / outcome:",
      form.details || "(please describe the operation you run and the outcome you want)",
    ].filter(Boolean)
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    // Show success animation briefly, then open mailto
    clearTimeout(submitTimer.current)
    submitTimer.current = setTimeout(() => {
      window.location.href = buildMailto()
    }, 800)
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          num="09"
          kicker="Contact"
          title={
            <>
              Tell me what you're <GradientShimmer gradient={BRAND_GRADIENT} baseColor="var(--color-copper)" duration={2} className="font-display font-bold">running today</GradientShimmer>
            </>
          }
          sub="I reply within one business day — usually faster. Everything stays under NDA on request."
        />

        <div className="grid gap-4 overflow-hidden rounded-2xl border border-line lg:grid-cols-[1fr_280px]">
          {/* Form */}
          <Reveal className="relative p-5 sm:p-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex min-h-[280px] flex-col items-center justify-center gap-3 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <CheckCircle size={48} weight="fill" className="text-accent" />
                  </motion.div>
                  <p className="font-display text-lg font-bold text-ink">Opening your email client…</p>
                  <p className="text-sm text-mut">Redirecting to mailto now</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="grid gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {FIELDS.map((f) => (
                      <FloatingInput
                        key={f.name}
                        name={f.name}
                        label={f.label}
                        type={f.type}
                        required={f.required}
                        value={form[f.name as keyof typeof form]}
                        onChange={(v) => update(f.name, v)}
                        autoComplete={f.name === "email" ? "email" : f.name === "phone" ? "tel" : "name"}
                      />
                    ))}
                  </div>
                  <FloatingInput
                    name="details"
                    label="Project Process / Outcome"
                    required
                    value={form.details}
                    onChange={(v) => update("details", v)}
                    isTextarea
                    rows={3}
                    placeholder="What process are you running today, and what outcome do you want?"
                  />

                  <div className="flex flex-wrap items-center gap-3">
                    <RippleButton
                      type="submit"
                      rippleColor="rgba(245, 185, 69, 0.4)"
                      className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      Send via Email
                      <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
                    </RippleButton>
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors duration-150 hover:border-accent hover:text-accent"
                    >
                      <WhatsappLogo size={15} weight="fill" />
                      WhatsApp
                    </a>
                    <span className="ml-auto flex items-center gap-1.5 text-[11px] text-mut">
                      <ShieldCheck size={13} weight="duotone" className="text-accent" />
                      NDA on request · No data stored
                    </span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Contact details — compact sidebar */}
          <div className="flex flex-col justify-center gap-3.5 border-t border-line bg-bg-2/40 px-5 py-5 sm:px-7 lg:border-t-0 lg:border-l">
            <a href={CONTACT.phoneHref} className="group flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <Phone size={17} weight="duotone" />
              </span>
              <span>
                <span className="block text-[11px] leading-none text-mut">Phone / WhatsApp</span>
                <span className="mt-0.5 block text-sm font-semibold">{CONTACT.phone}</span>
              </span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="group flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <EnvelopeSimple size={17} weight="duotone" />
              </span>
              <span>
                <span className="block text-[11px] leading-none text-mut">Email</span>
                <span className="mt-0.5 block text-sm font-semibold">{CONTACT.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <MapPin size={17} weight="duotone" />
              </span>
              <span>
                <span className="block text-[11px] leading-none text-mut">Based in</span>
                <span className="mt-0.5 block text-sm font-semibold">{CONTACT.location}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
