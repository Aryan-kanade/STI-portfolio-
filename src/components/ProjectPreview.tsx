import { motion } from "framer-motion"

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

/* ---- 0 — EMS Energy Dashboard -------------------------------------------- */
function EmsDashboard() {
  const sites = ["Solar Array A", "Plant Floor 2", "Warehouse"]
  const bars = [38, 52, 64, 49, 71, 60, 78, 66, 84, 72, 90, 80]
  return (
    <svg viewBox="0 0 620 320" fill="none" className="h-full w-full" role="img" aria-label="Energy monitoring dashboard UI">
      {defs("ems")}
      <BrowserChrome tag="ems" live="LIVE" />
      {/* KPI row */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={20 + i * 146} y={48} width="134" height="56" rx="10" fill="var(--color-glass)" stroke="var(--color-line)" />
          <rect x={32 + i * 146} y={60} width="54" height="8" rx="3" fill="var(--color-mut)" opacity="0.5" />
          <text x={32 + i * 146} y={92} fontSize="18" fontWeight="700" fill="var(--color-ink)" fontFamily="Space Grotesk, sans-serif">
            {["2.4 MW", "−8%", "12", "OK"][i]}
          </text>
        </g>
      ))}
      {/* chart card */}
      <rect x="20" y="116" width="388" height="184" rx="12" fill="var(--color-glass)" stroke="var(--color-line)" />
      <rect x="34" y="128" width="90" height="9" rx="3" fill="var(--color-mut)" opacity="0.5" />
      <rect x="34" y="142" width="44" height="6" rx="2" fill={`url(#ems)`} opacity="0.7" />
      {/* bars — animate in from bottom */}
      {bars.map((h, i) => (
        <rect
          key={i}
          x={42 + i * 28}
          width="16"
          rx="3"
          fill={`url(#ems)`}
          opacity={i === bars.length - 2 ? 1 : 0.5}
        >
          <animate attributeName="y" from="280" to={280 - h * 1.4} dur="0.8s" begin={`${0.3 + i * 0.06}s`} fill="freeze" />
          <animate attributeName="height" from="0" to={h * 1.4} dur="0.8s" begin={`${0.3 + i * 0.06}s`} fill="freeze" />
        </rect>
      ))}
      <line x1="34" y1="280" x2="394" y2="280" stroke="var(--color-line)" />
      {/* side: site list */}
      <rect x="424" y="116" width="176" height="184" rx="12" fill="var(--color-glass)" stroke="var(--color-line)" />
      <rect x="438" y="128" width="70" height="9" rx="3" fill="var(--color-mut)" opacity="0.5" />
      {sites.map((s, i) => (
        <g key={s}>
          <rect x="438" y={150 + i * 46} width="148" height="38" rx="8" fill="var(--color-raise)" stroke="var(--color-line)" />
          <circle cx="452" cy={169 + i * 46} r="4.5" fill={i === 0 ? AMBER : i === 1 ? "#5ac28a" : "#e06c5a"} />
          <rect x="466" y={163 + i * 46} width="78" height="7" rx="3" fill="var(--color-ink)" opacity="0.75" />
          <rect x="466" y={175 + i * 46} width="48" height="5" rx="2.5" fill="var(--color-mut)" opacity="0.55" />
          <rect x="556" y={163 + i * 46} width="22" height="12" rx="6" fill={`url(#ems)`} opacity="0.6" />
        </g>
      ))}
    </svg>
  )
}

/* ---- 1 — Interstellar Automation Console --------------------------------- */
function Console() {
  const rows = [
    ["#1042", "Order", "Paid", "#5ac28a"],
    ["#1041", "Job", "In field", AMBER],
    ["#1040", "Order", "Shipped", "#5ac28a"],
    ["#1039", "Job", "Queued", "var(--color-mut)"],
    ["#1038", "Order", "Refund", "#e06c5a"],
  ]
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
            {["1,284", "312", "98%"][i]}
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
function MobileApp() {
  const tasks = [
    ["Replace inverter unit", "In progress", AMBER],
    ["Panel cleaning — Row C", "Done", "#5ac28a"],
    ["Voltage inspection", "Assigned", BRONZE],
  ]
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

export function ProjectPreview({ index }: { index: number }) {
  const View = VIEWS[index] ?? EmsDashboard
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group/preview relative shadow-card overflow-hidden rounded-xl"
    >
      <View />
      {/* Scan-line sweep on hover */}
      <div
        className="pointer-events-none absolute inset-0 -translate-y-full opacity-0 transition-[opacity,transform] duration-500 group-hover/preview:translate-y-0 group-hover/preview:opacity-100"
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-b from-accent/8 via-accent/4 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px grad-line opacity-70" />
      </div>
    </motion.div>
  )
}
