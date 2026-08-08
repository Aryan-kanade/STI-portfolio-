import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const BRONZE = "#cd7f32"
const AMBER = "#f5b945"
const COPPER = "#8b5a1c"

function defs(id: string) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop stopColor={AMBER} />
        <stop offset="0.55" stopColor={BRONZE} />
        <stop offset="1" stopColor={COPPER} />
      </linearGradient>
      <linearGradient id={`${id}-fill`} x1="0" y1="1" x2="0" y2="0">
        <stop stopColor={BRONZE} stopOpacity="0" />
        <stop offset="1" stopColor={BRONZE} stopOpacity="0.22" />
      </linearGradient>
    </defs>
  )
}

function BrowserChrome({ tag, live }: { tag: string; live?: string }) {
  return (
    <g>
      <rect x="1" y="1" width="618" height="318" rx="14" fill="var(--color-bg2)" stroke="var(--color-line)" />
      <rect x="1" y="1" width="618" height="34" rx="14" fill="var(--color-glass)" />
      <rect x="1" y="21" width="618" height="14" fill="var(--color-glass)" />
      <circle cx="20" cy="18" r="4" fill="#e06c5a" opacity="0.7" />
      <circle cx="34" cy="18" r="4" fill="#e0b65a" opacity="0.7" />
      <circle cx="48" cy="18" r="4" fill="#5ac28a" opacity="0.7" />
      <rect x="70" y="11" width="120" height="14" rx="7" fill="var(--color-raise)" />
      <rect x="470" y="11" width="120" height="14" rx="7" fill="var(--color-raise)" />
      <rect x="200" y="13" width="78" height="10" rx="3" fill={`url(#${tag})`} opacity="0.55" />
      {live && (
        <g>
          <rect x="540" y="11" width="64" height="14" rx="7" fill="none" stroke="#5ac28a" opacity="0.8" />
          <circle cx="551" cy="18" r="3" fill="#5ac28a">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <text x="560" y="21" fontSize="8" fill="#5ac28a" fontFamily="JetBrains Mono, monospace" letterSpacing="0.5">
            {live}
          </text>
        </g>
      )}
    </g>
  )
}

/* ---- 0 — EMS Energy Dashboard (Image Carousel) ---------------------------- */
const EMS_SLIDES = Array.from({ length: 6 }, (_, i) => `/EMS%20Dashboard/${i + 1}.png`)

function EmsDashboard() {
  const [slide, setSlide] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval>>()

  const startTimer = useCallback(() => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setSlide((s) => (s + 1) % EMS_SLIDES.length)
    }, 3000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timer.current)
  }, [startTimer])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl" style={{ aspectRatio: "620/320", background: "var(--color-bg2)", border: "1px solid var(--color-line)" }}>
      {/* Carousel images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slide}
          src={EMS_SLIDES[slide]}
          alt={`EMS Dashboard screenshot ${slide + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          draggable={false}
        />
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-2 inset-x-0 z-10 flex justify-center gap-1.5">
        {EMS_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setSlide(i); startTimer() }}
            className={`size-1.5 rounded-full transition-all duration-200 ${i === slide ? "bg-accent scale-125" : "bg-mut/30 hover:bg-mut/50"}`}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ---- 1 — Interstellar Automation Console --------------------------------- */
function Console({ variant = 0 }: { variant?: number }) {
  const rows = variant === 1
    ? [["#1088", "Return", "Received", AMBER], ["#1087", "Order", "Delivered", "#5ac28a"], ["#1086", "Job", "Complete", "#5ac28a"], ["#1085", "Order", "Pending", "var(--color-mut)"], ["#1084", "Job", "Cancelled", "#e06c5a"]]
    : [["#1042", "Order", "Paid", "#5ac28a"], ["#1041", "Job", "In field", AMBER], ["#1040", "Order", "Shipped", "#5ac28a"], ["#1039", "Job", "Queued", "var(--color-mut)"], ["#1038", "Order", "Refund", "#e06c5a"]]
  const stats = variant === 1 ? ["2,041", "456", "97%"] : ["1,284", "312", "98%"]
  return (
    <svg viewBox="0 0 620 320" fill="none" className="h-full w-full" role="img" aria-label="Automation admin console UI">
      {defs("csl")}
      <BrowserChrome tag="csl" />
      {/* sidebar */}
      <rect x="1" y="35" width="120" height="284" fill="var(--color-glass)" />
      {["Orders", "Technicians", "Catalog", "Payments", "Reports"].map((m, i) => (
        <g key={m}>
          <rect
            x="12"
            y={52 + i * 34}
            width="98"
            height="24"
            rx="6"
            fill={i === 0 ? "var(--color-raise)" : "transparent"}
            stroke={i === 0 ? "var(--color-line)" : "transparent"}
          />
          <circle cx="24" cy={64 + i * 34} r="3.5" fill={i === 0 ? BRONZE : "var(--color-mut)"} opacity="0.8" />
          <rect x="34" y={60 + i * 34} width={i === 0 ? 60 : 50} height="7" rx="3" fill={i === 0 ? "var(--color-ink)" : "var(--color-mut)"} opacity="0.7" />
        </g>
      ))}
      {/* header */}
      <rect x="138" y="50" width="160" height="11" rx="3" fill="var(--color-ink)" opacity="0.8" />
      <rect x="138" y="68" width="220" height="7" rx="3" fill="var(--color-mut)" opacity="0.5" />
      <rect x="500" y="50" width="100" height="26" rx="8" fill={`url(#csl)`} opacity="0.9" />
      <text x="520" y="67" fontSize="9" fill="#fff" fontFamily="Inter, sans-serif" fontWeight="600">+ New order</text>
      {/* Blinking cursor in sidebar search */}
      <rect x="22" y="210" width="80" height="18" rx="6" fill="var(--color-raise)" stroke="var(--color-line)" />
      <rect x="28" y="215" width="30" height="8" rx="2" fill="var(--color-ink)" opacity="0.6" />
      <rect x="62" y="216" width="1.5" height="6" rx="0.75" fill={AMBER}>
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>
      {/* stat chips */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={138 + i * 156} y={92} width="146" height="44" rx="8" fill="var(--color-glass)" stroke="var(--color-line)" />
          <rect x={150 + i * 156} y={102} width="44" height="6" rx="2" fill="var(--color-mut)" opacity="0.5" />
          <text x={150 + i * 156} y={126} fontSize="14" fontWeight="700" fill="var(--color-ink)" fontFamily="Space Grotesk, sans-serif">
            {stats[i]}
          </text>
        </g>
      ))}
      {/* table */}
      <rect x="138" y="148" width="462" height="152" rx="10" fill="var(--color-glass)" stroke="var(--color-line)" />
      {["ID", "Type", "Status", "Date"].map((h, i) => (
        <text key={h} x={158 + i * 120} y="166" fontSize="8" fill="var(--color-mut)" fontFamily="JetBrains Mono, monospace" letterSpacing="0.5">
          {h.toUpperCase()}
        </text>
      ))}
      <line x1="150" y1="174" x2="588" y2="174" stroke="var(--color-line)" />
      {rows.map((r, i) => (
        <g key={r[0]}>
          <text x="158" y={192 + i * 24} fontSize="9" fill="var(--color-ink)" fontFamily="JetBrains Mono, monospace">{r[0]}</text>
          <text x="278" y={192 + i * 24} fontSize="9" fill="var(--color-ink)" opacity="0.85" fontFamily="Inter, sans-serif">{r[1]}</text>
          <rect x="392" y={182 + i * 24} width="56" height="14" rx="7" fill="none" stroke={r[3]} opacity="0.7" />
          <circle cx="402" cy={189 + i * 24} r="3" fill={r[3]} />
          <text x="411" y={192 + i * 24} fontSize="8" fill={r[3]} fontFamily="Inter, sans-serif">{r[2]}</text>
          <text x="510" y={192 + i * 24} fontSize="8" fill="var(--color-mut)" fontFamily="JetBrains Mono, monospace">Aug {1 + i}</text>
        </g>
      ))}
    </svg>
  )
}

/* ---- 2 — Field Team Mobile App ------------------------------------------- */
function MobileApp({ variant = 0 }: { variant?: number }) {
  const tasks = variant === 1
    ? [["Generator check — B7", "Done", "#5ac28a"], ["Thermal imaging — Roof", "In progress", AMBER], ["Cable inspection", "Assigned", BRONZE]]
    : [["Replace inverter unit", "In progress", AMBER], ["Panel cleaning — Row C", "Done", "#5ac28a"], ["Voltage inspection", "Assigned", BRONZE]]
  return (
    <svg viewBox="0 0 620 320" fill="none" className="h-full w-full" role="img" aria-label="Field team mobile app UI">
      {defs("mob")}
      <rect x="1" y="1" width="618" height="318" rx="14" fill="var(--color-bg2)" stroke="var(--color-line)" />
      <rect x="200" y="12" width="220" height="296" rx="26" fill="var(--color-bg)" stroke="var(--color-line)" strokeWidth="2" />
      <rect x="276" y="24" width="68" height="8" rx="4" fill="var(--color-raise)" />
      {/* app header */}
      <rect x="216" y="48" width="100" height="12" rx="3" fill="var(--color-ink)" opacity="0.85" />
      <rect x="216" y="66" width="150" height="7" rx="3" fill="var(--color-mut)" opacity="0.5" />
      <circle cx="402" cy="56" r="14" fill={`url(#mob)`} opacity="0.25" />
      <text x="394" y="60" fontSize="11" fontWeight="700" fill={BRONZE} fontFamily="Space Grotesk, sans-serif">5</text>
      {/* map sliver */}
      <rect x="216" y="86" width="188" height="56" rx="10" fill="var(--color-raise)" stroke="var(--color-line)" />
      <path d="M224 130l40-26 38 14 44-30 40 18 18-12" stroke={`url(#mob)`} strokeWidth="2" fill="none" />
      <circle cx="304" cy="118" r="5" fill={AMBER}>
        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="304" cy="118" r="11" fill={AMBER} opacity="0.18" />
      {/* task list */}
      <rect x="216" y="152" width="64" height="8" rx="3" fill="var(--color-mut)" opacity="0.5" />
      {tasks.map((t, i) => (
        <g key={t[0]}>
          <rect x="216" y={166 + i * 50} width="188" height="44" rx="10" fill="var(--color-glass)" stroke="var(--color-line)" />
          <rect x={i === 1 ? "226" : "226"} y={176 + i * 50} width="12" height="12" rx="3" fill={i === 1 ? "#5ac28a" : "transparent"} stroke={t[2]} />
          {i === 1 && <path d="M228 182l3 3 5-6" stroke="#fff" strokeWidth="1.6" fill="none" />}
          <rect x="246" y={176 + i * 50} width="118" height="7" rx="3" fill="var(--color-ink)" opacity="0.8" />
          <rect x="246" y={188 + i * 50} width="40" height="14" rx="7" fill="none" stroke={t[2]} opacity="0.7" />
          <text x="252" y={198 + i * 50} fontSize="7" fill={t[2]} fontFamily="Inter, sans-serif">{t[1]}</text>
        </g>
      ))}
      {/* floating evidence thumbnail */}
      <rect x="378" y="232" width="34" height="34" rx="8" fill={`url(#mob)`} opacity="0.2" stroke="var(--color-line)" />
      <circle cx="395" cy="244" r="5" fill={AMBER} opacity="0.6" />
      <path d="M378 258l10-9 8 6 16-14v25z" fill={`url(#mob)`} opacity="0.5" />
      {/* side annotations */}
      <g opacity="0.55">
        <rect x="40" y="70" width="120" height="9" rx="3" fill="var(--color-mut)" />
        <rect x="40" y="88" width="80" height="6" rx="3" fill="var(--color-mut)" opacity="0.6" />
        <rect x="40" y="110" width="100" height="9" rx="3" fill="var(--color-mut)" />
        <rect x="40" y="128" width="70" height="6" rx="3" fill="var(--color-mut)" opacity="0.6" />
        <rect x="40" y="150" width="90" height="9" rx="3" fill="var(--color-mut)" />
      </g>
      <rect x="40" y="180" width="120" height="36" rx="10" fill={`url(#mob)`} opacity="0.12" stroke={BRONZE} strokeOpacity="0.4" />
      <text x="56" y="203" fontSize="9" fill={BRONZE} fontFamily="JetBrains Mono, monospace" letterSpacing="0.5">EVIDENCE · GPS</text>
      <g opacity="0.55">
        <rect x="458" y="70" width="120" height="9" rx="3" fill="var(--color-mut)" />
        <rect x="478" y="88" width="90" height="6" rx="3" fill="var(--color-mut)" opacity="0.6" />
        <rect x="460" y="110" width="110" height="9" rx="3" fill="var(--color-mut)" />
        <rect x="480" y="128" width="70" height="6" rx="3" fill="var(--color-mut)" opacity="0.6" />
      </g>
    </svg>
  )
}

const VIEWS = [EmsDashboard, Console, MobileApp]
const VARIANTS_COUNT = 2 // each preview has 2 data variants

export function ProjectPreview({ index }: { index: number }) {
  const [variant, setVariant] = useState(0)
  const View = VIEWS[index] ?? EmsDashboard
  const isEms = index === 0

  return (
    <div>
      <div
        className={`group/preview relative shadow-card overflow-hidden rounded-xl${isEms ? "" : " cursor-pointer"}`}
        {...(!isEms && {
          onClick: () => setVariant((v) => (v + 1) % VARIANTS_COUNT),
          role: "button",
          tabIndex: 0,
          "aria-label": `Toggle preview variant ${variant + 1} of ${VARIANTS_COUNT}`,
          onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") setVariant((v) => (v + 1) % VARIANTS_COUNT) },
        })}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isEms ? "ems" : variant}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <View variant={variant} />
          </motion.div>
        </AnimatePresence>
        {/* Scan-line sweep on hover */}
        <div
          className="pointer-events-none absolute inset-0 -translate-y-full opacity-0 transition-[opacity,transform] duration-500 group-hover/preview:translate-y-0 group-hover/preview:opacity-100"
          aria-hidden
        >
          <div className="h-full w-full bg-gradient-to-b from-accent/8 via-accent/4 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-px grad-line opacity-70" />
        </div>
      </div>
      {/* Dot indicators (only for variant-based previews) */}
      {!isEms && (
        <div className="mt-2 flex justify-center gap-1.5">
          {Array.from({ length: VARIANTS_COUNT }, (_, i) => (
            <button
              key={i}
              onClick={() => setVariant(i)}
              className={`size-1.5 rounded-full transition-all duration-200 ${i === variant ? "bg-accent scale-125" : "bg-mut/30 hover:bg-mut/50"}`}
              aria-label={`Show variant ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
