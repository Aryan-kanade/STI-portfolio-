# 🧠 Brain — Shivaswarajya Portfolio

> **Complete reference for the Shivaswarajya Techno Innovation portfolio.**
> Read this file instead of scanning the entire codebase when making changes.

---

## Quick Reference

| Field | Value |
|---|---|
| **Client** | Shivaswarajya Techno Innovation (company portfolio, plural voice) |
| **Type** | Single-page portfolio / marketing site |
| **URL** | `https://shivaswarajya.com` |
| **Location** | Kolhapur, Maharashtra, India |
| **Contact** | +91 89565 29972 · contact@shivaswarajya.com |
| **Framework** | React 19 + TypeScript 6 + Vite 8 |
| **Styling** | Tailwind CSS v4 (`@theme inline`, no config file) |
| **Animation** | framer-motion v12 + Web Animations API + CSS keyframes |
| **Icons** | @phosphor-icons/react (duotone + bold) |
| **Design** | Dark Copper / Amber / Bronze — near-black backgrounds |
| **Build** | `tsc -b && vite build` (gzip + brotli) |
| **Deploy** | Vercel (primary) / Netlify / Cloudflare (configs present) |

---

## Directory Structure

```
shivaswarajya/
├── index.html                    # Entry HTML, meta, preloads, OG tags, noscript fallback
├── vite.config.ts                # Plugins, path alias, manual chunks
├── vercel.json                   # Vercel cache headers
├── tsconfig.json                 # Root references (app + node)
├── tsconfig.app.json             # src/ TS config (ES2023, bundler, @/* alias)
├── tsconfig.node.json            # vite.config.ts TS config
├── .oxlintrc.json                # oxlint config (react + TS + oxc plugins)
├── package.json                  # Dependencies & scripts
├── public/
│   ├── logo.png                  # 36 KB, 512×512 — main site logo
│   ├── favicon.svg               # 373 B — branded SVG favicon (copper/amber bars+dot)
│   ├── founder.webp              # 44 KB — preferred founder photo format
│   ├── founder.png               # 1.8 MB — founder photo PNG fallback
│   ├── system-engine.webp        # 84 KB — process diagram preferred format
│   ├── system-engine.png         # 1.9 MB — process diagram PNG fallback
│   ├── videoHome.webm            # 4.2 MB — hero background video
│   ├── og-image.png              # 1200×630 — social sharing image (PNG)
│   ├── manifest.json             # PWA manifest (standalone, theme #cd7f32)
│   ├── sitemap.xml               # Single URL, lastmod 2026-08-04
│   ├── robots.txt                # Allow all + sitemap
│   ├── 404.html                  # Styled 404 with 3s auto-redirect
│   ├── laurel_left.png           # 2.5 KB — Philosophy ornament
│   ├── laurel_right.png          # 2.4 KB — Philosophy ornament
│   └── fonts/
│       ├── Inter.woff2           # 47 KB — body font (preloaded in HTML)
│       ├── SpaceGrotesk.woff2    # 22 KB — display font (preloaded in HTML)
│       └── JetBrainsMono.woff2   # 31 KB — monospace font
└── src/
    ├── main.tsx                  # React root, StrictMode, ErrorBoundary
    ├── App.tsx                   # Section orchestration, lazy loading, hash scroll
    ├── index.css                 # Tailwind v4 + @theme + ALL custom CSS
    ├── lib/
    │   ├── data.ts               # ALL content constants (NAV → CTA)
    │   └── utils.ts              # useCountUp, useMagnetic, useTypewriter
    └── components/
        ├── Hero.tsx              # Full-screen video hero + particles + orbs
        ├── Navbar.tsx            # Glass nav, mobile menu, active underline, magnetic CTA
        ├── Loader.tsx            # Branded intro animation
        ├── ScrollProgress.tsx    # Fixed top progress bar
        ├── JsonLd.tsx            # Structured data (LocalBusiness, Person, etc.)
        ├── Projects.tsx          # 3 project cards with expandable details + metric animation
        ├── ProjectPreview.tsx    # 3 interactive SVG UI mockups
        ├── StatsBar.tsx          # 4 animated stat counters
        ├── Capabilities.tsx      # 6 service cards with tech chips
        ├── BuildAnimation.tsx    # Timeline + engine image
        ├── Domains.tsx           # 4 industry cards
        ├── Principles.tsx        # 4 principle cards
        ├── Philosophy.tsx        # Quote card with laurels
        ├── Founder.tsx           # Portrait + animated border + bio + expandable highlights
        ├── Testimonials.tsx      # Infinite carousel (CSS, keyboard/focus-paused)
        ├── Faq.tsx               # Grid-based accordion with icons
        ├── CtaBand.tsx           # Animated-border CTA band, data-driven headline
        ├── Contact.tsx           # Form + sidebar (ARIA-enhanced floating inputs)
        ├── Footer.tsx            # 3-col footer + social cards + mailto: form with feedback
        ├── BackToTop.tsx          # SVG progress ring button
        ├── SectionFade.tsx       # Gradient section dividers
        ├── Shared.tsx            # SectionHeading + Reveal (with direction prop)
        ├── Logo.tsx              # LogoMark + Logo components
        ├── GradientShimmer.tsx   # Web Animations API text shimmer (~488 lines)
        ├── ErrorBoundary.tsx     # Class component error page
        └── ui/
            ├── spotlight-card.tsx # GlowCard (mouse-tracking glow + 3D tilt)
            └── RippleButton.tsx  # Material-style click ripple
```

---

## Tech Stack & Dependencies

### Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | ^19.2.8 | UI framework |
| react-dom | ^19.2.8 | DOM renderer |
| framer-motion | ^12.43.0 | Animation library |
| @phosphor-icons/react | ^2.1.10 | Icon system (duotone + bold weights) |
| @tailwindcss/vite | ^4.3.3 | Tailwind Vite plugin |
| tailwindcss | ^4.3.3 | Utility CSS framework |
| clsx | ^2.1.1 | Conditional classNames (installed but **unused** — cn() was removed) |
| tailwind-merge | ^3.6.0 | Tailwind class conflict resolution (installed but **unused**) |

### Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| vite | ^8.2.0 | Build tool |
| typescript | ~6.0.2 | Type checking |
| @vitejs/plugin-react | ^6.0.4 | React Fast Refresh |
| vite-plugin-compression | ^0.5.1 | gzip + brotli output |
| @types/react | ^19.2.17 | React types |
| @types/react-dom | ^19.2.3 | ReactDOM types |
| @types/node | ^24.13.3 | Node types |
| oxlint | ^1.75.0 | Linter |

### npm Scripts

```bash
npm run dev      # vite dev server
npm run build    # tsc -b && vite build
npm run lint     # oxlint
npm run preview  # vite preview (production preview)
```

---

## Build Configuration

### vite.config.ts

- **Plugins:** react(), tailwindcss(), compression(gzip, threshold 1KB), compression(brotli, threshold 1KB)
- **Path alias:** `@` → `./src`
- **Manual chunks:**
  - `framer-motion` → `'framer-motion'` (isolates large vendor lib)
  - `@phosphor-icons/react` → `'phosphor'` (isolates icon bundle)

### TypeScript Config

- **tsconfig.app.json:** target ES2023, bundler module resolution, `verbatimModuleSyntax`, `erasableSyntaxOnly`, `jsx: react-jsx`, strict unused checks, path alias `@/*` → `./src/*`
- **tsconfig.node.json:** target ES2023, nodenext (for vite.config.ts)

### Linting (.oxlintrc.json)

- Plugins: react, typescript, oxc
- `react/rules-of-hooks: error`
- `react/only-export-components: warn` with `allowConstantExport: true`

---

## Color & Theme System

**Design Language: "Dark Copper"** — dark-only theme (no light mode)

### CSS Custom Properties (defined in `@theme inline`)

```css
/* Backgrounds */
--color-bg:       #07060a    /* primary — near-black */
--color-bg2:      #0f0b13    /* secondary — dark purple-black */
--color-bg-40:    rgba(15,11,19,0.40)

/* Text */
--color-ink:      #ece8e2    /* primary text — warm off-white */
--color-mut:      #9c948a    /* muted text — warm gray */

/* Borders */
--color-line:     rgba(205,127,50,0.16)

/* Accents */
--color-accent:   #cd7f32    /* primary — copper/bronze */
--color-copper:   #8b5a1c    /* deep copper */
--color-amber:    #f5b945    /* bright amber/gold */

/* Effects */
--color-glass:    rgba(245,185,69,0.035)   /* glassmorphism bg */
--color-raise:    rgba(205,127,50,0.07)     /* raised surface */
--color-glow:     rgba(245,185,69,0.08)     /* glow highlight */

/* Fonts */
--font-display:   'Space Grotesk', ...    /* headings */
--font-body:      'Inter', ...             /* body text */
--font-mono:      'JetBrains Mono', ...    /* code/monospace */

/* Radii */
--radius-sm:  8px
--radius:     12px
--radius-lg:  16px
--radius-xl:  20px

/* Shadows */
--shadow-sm:   subtle shadow
--shadow:      medium shadow
--shadow-glow: copper accent glow

/* Scrims (video overlay levels) */
--scrim-heavy: rgba(7,6,10,0.82)
--scrim-mid:   rgba(7,6,10,0.45)
--scrim-light: rgba(7,6,10,0.25)
```

### Brand Gradient

```
linear-gradient(105deg, var(--color-amber) 0%, var(--color-accent) 55%, var(--color-copper) 100%)
```

Used in `.grad-line` (horizontal bar), GradientShimmer component, various accent bars.

### Tailwind v4 Usage

All `@theme inline` tokens are auto-available as Tailwind utilities:
- `text-ink`, `bg-bg`, `border-line`, `text-accent`, `font-display`, `shadow-glow`, etc.

---

## Custom CSS Classes (index.css)

### Key Utility Classes

| Class | Effect |
|---|---|
| `.glass` | glassmorphism: glass bg + border + backdrop-filter: blur 14px |
| `.shadow-card` | Card shadow (dark) |
| `.shadow-glow` | Copper accent glow shadow |
| `.grad-line` | Brand gradient as horizontal bar |
| `.scroll-progress` | Fixed top bar, 3px, z-200, glow shadow |
| `.card-tilt` / `.card-tilt-inner` | 3D perspective (800px) + transform target |
| `.magnetic-btn` | Magnetic hover transition (0.2s cubic-bezier) |
| `.particle` | Floating particle (drift animation) |
| `.faq-grid` / `.faq-grid.open` | Grid expand/collapse (0fr → 1fr) |
| `.animated-border` | Conic gradient rotating border (CTA band) |
| `.animated-border-portrait` | Conic gradient rotating border (founder portrait) |
| `.gradient-orb` | Large blurred gradient orb (blur 80px, opacity 0.15) |
| `.anim-float` | 5s float animation |
| `.anim-bounce` | 2s bounce animation |
| `.cta-band` | 4s glow pulse |
| `.carousel-track` | 30s infinite scroll, pauses on hover + focus-within |
| `.animate-ripple` | Click ripple (0.6s) |
| `.skip-link` | Accessibility skip (absolute, z-200) |

### All Keyframes (11 total)

`float-y`, `bounce-down`, `drift`, `ripple`, `glow-pulse`, `carousel-scroll`, `rotate-border`, `rotate-portrait-border`, `orb-drift-1`, `orb-drift-2`, `orb-drift-3`

### CSS @property

```css
@property --border-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
/* Used by .animated-border for conic gradient rotation on CTA band */

@property --portrait-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
/* Used by .animated-border-portrait for conic gradient rotation on founder portrait */
```

### Global Styles

- `scroll-behavior: smooth`
- `color-scheme: dark`
- `section[id] { scroll-margin-top: 4.5rem }` (work section: 1rem)
- `::selection` — accent color
- `:focus-visible` — outline
- Custom scrollbar: WebKit 8px accent thumb + Firefox thin accent
- **Print:** light theme, hides nav/footer/video, single column, link URLs shown
- **Reduced motion:** `prefers-reduced-motion: reduce` disables all animations/transitions

---

## Component Architecture

### App.tsx — Section Orchestration

**Render order:**
1. Skip-to-content link (accessibility)
2. JsonLd, Loader, ScrollProgress, Navbar (always mounted)
3. `<main>`:
   - **Hero** (eager, `id="home"`)
   - **Projects** (eager, `id="work"`)
   - **StatsBar** (eager)
   - **Capabilities** (eager, `id="capabilities"`)
   - **BuildAnimation** (LAZY, `id="process"`)
   - **Domains** (LAZY)
   - **Principles** (LAZY)
   - **Philosophy** (LAZY)
   - **Founder** (LAZY, `id="about"`)
   - **Faq** (LAZY)
   - **CTABand** (LAZY)
   - **Testimonials** (LAZY)
   - **Contact** (eager, `id="contact"`)
4. **Footer** (eager)
5. **BackToTop** (eager)

**Lazy loading pattern:**
```ts
const LazyX = lazy(() => import("./components/X").then(m => ({ default: m.X })))
```
Suspense fallback: `<div className="min-h-[24rem]">`

**Hash scroll:** Custom `useHashScroll()` hook scrolls to URL hash on mount + hashchange. Retries up to 20× (100ms apart) for lazy-loaded targets.

**MotionConfig:** `<MotionConfig reducedMotion="user">` wraps entire app.

---

### Section-by-Section Breakdown

#### 01 — Hero (Hero.tsx)
- **Full-screen** with `videoHome.webm` background + scrim overlay
- **`poster="/og-image.png"`** — static fallback for Safari/iOS
- **8 floating particles** (CSS drift animation)
- **3 gradient orbs** — responsive sizing:
  - Orb 1: `w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px]`
  - Orb 2: `w-[140px] sm:w-[220px] md:w-[280px] lg:w-[340px]`
  - Orb 3: `w-[120px] sm:w-[180px] md:w-[220px] lg:w-[260px]`
- **LogoMark** + typewriter cycling: `["custom software", "mobile apps", "AI & IoT systems", "digital operations"]`
- **GradientShimmer** on headline
- **Magnetic CTA** buttons (useMagnetic hook)
- Trust checkmarks (3 items from HERO.trust)
- **Scroll indicator** — bouncing arrow at `bottom-15`
- Stagger variants — 0.1s stagger, 0.15s initial delay

#### 02 — Projects (Projects.tsx)
- **Section: "01 Selected Work"**
- **3-col GlowCard** grid with `card-tilt`
- Each card:
  - `ProjectPreview` SVG (interactive, click to toggle data variant)
  - Tag badge (colored pill)
  - LogoMark + headline + solution text
  - Animated metrics via `useCountUp` (MetricValue sub-component)
  - Tech tags with hover lift (`hover:-translate-y-0.5 hover:shadow-sm`)
  - **Expandable details:** `ProjectDetails` component — "See how" accordion revealing `problem` (Target icon) + `approach` (Lightbulb icon), AnimatePresence height animation, CaretDown toggle, `aria-expanded`
  - "Discuss This Project" link → WhatsApp
- Stagger variants (0.04s stagger)

#### 02.5 — StatsBar (StatsBar.tsx)
- **4 stats:** 3+ Industries, 6+ Systems, 99.9% Uptime, 24h Response
- `useCountUp` with 1400ms duration
- **Local STATS array** (defined in component, NOT in data.ts)
- Grid: 2×2 on mobile → 4-col on desktop

#### 03 — Capabilities (Capabilities.tsx)
- **Section: "02 Capabilities"**
- **6 cards** in 2×3 grid
- **Icon mapping:** Code, DeviceMobileCamera, Browser, Robot, Cpu, Cloud
- `anim-float` per card
- Deliverables checklist (from CAPABILITIES[i].points)
- TECH_STACK tags below grid with hover lift (`hover:-translate-y-0.5 hover:shadow-sm hover:border-accent/40 hover:text-ink`)
- Bottom accent bar per card

#### 04 — BuildAnimation / Process (BuildAnimation.tsx)
- **Section: "03 The Build-Then-Own Loop"**
- **2-column layout:**
  - Left: GlowCard with EngineImage (system-engine.webp, shimmer skeleton)
  - Right: TimelineSteps (4 numbered steps)
- **Static connecting line** — decorative `<span>` with `w-px bg-line` (no scroll animation)
- Steps from METHODOLOGY.steps

#### 05 — Domains (Domains.tsx)
- **Section: "04 Industry Domains"**
- **4-col grid** with icons: Lightning, MapPinLine, GearSix, Storefront
- `bg-raise/30` tint per card

#### 06 — Principles (Principles.tsx)
- **Section: "05 Engineering Principles"**
- **4 GlowCards** with number badges
- ArrowUpRight hover reveal
- Gradient bottom bar

#### 07 — Philosophy (Philosophy.tsx)
- **Section: "06 Philosophy"**
- **Single centered GlowCard**
- Laurel ornaments (laurel_left/right.png, hidden on mobile)
- **GradientShimmer** on FOUNDER.quote
- Decorative divider

#### 08 — Founder (Founder.tsx)
- **Section: "07 About"**
- **2-column:**
  - Left: Circular portrait (WebP+PNG, shimmer skeleton, **animated-border-portrait** rotating conic gradient)
  - Right: Company name, role, bio, expandable highlights
- **Expandable highlights:** 3 pills, clicking reveals body text with AnimatePresence height animation + CaretDown toggle icon
- `expandedIdx` state (number | null)
- **No blockquote** — quote was removed per user request
- Section heading: "The team behind the systems"

#### 09 — Testimonials (Testimonials.tsx)
- **Section: "09 Testimonials"**
- **Infinite carousel** — items duplicated for seamless loop
- **CSS-only:** `.carousel-track` with `carousel-scroll` keyframe (30s, pause on hover + focus-within)
- `role="region"`, `aria-roledescription="carousel"`, `aria-label`, `tabIndex={0}` for keyboard accessibility
- Fade edges (gradient masks)
- Card width: 300px / 340px

#### 10 — FAQ (Faq.tsx)
- **Section: "08 FAQ"**
- **Grid-based accordion** — `.faq-grid` / `.faq-grid open` (0fr ↔ 1fr)
- **6 contextual icons** (duotone, colored when open):
  - Coin, ChatCircle, Wrench, Globe, ArrowClockwise, ShieldCheck
- Plus icon rotates to × (45deg) on open
- Accent bar on open item
- Full ARIA (aria-expanded, aria-controls, role=region)

#### 11 — CTA Band (CtaBand.tsx)
- **animated-border** — CSS conic gradient rotation
- `glow-pulse` animation
- Radial gradient background
- Trust signals: 24h reply, NDA, source code
- Magnetic RippleButton + WhatsApp link (useMagnetic)
- **Data-driven headline:** `CTAHeadline` component parses `CTA.headline` from data.ts, shimmers the keyword ("AI-powered") via GradientShimmer

#### 12 — Contact (Contact.tsx)
- **Section: "10 Contact"**
- **2-column:**
  - Left: Form with FloatingInput (ARIA-enhanced: `id`, `aria-describedby`, `aria-invalid`, sr-only hint spans), success animation, submits via mailto:
  - Right: Sidebar with phone, email, location + icons
- NDA badge
- **FloatingInput:** Local sub-component with floating labels, `peer-focus` pattern, `invalid` state, screen-reader hint `<span id={hintId}>`, floating label `aria-hidden`

#### 13 — Footer (Footer.tsx)
- **3-column:** logo+description, NAV quick links, social cards
- **Social cards:** LinkedIn, WhatsApp, Email — branded hover tooltips (AnimatePresence)
- **Email form:** "Stay connected" → mailto: with **submit feedback** (animated "Opening email client…" state via AnimatePresence + CheckCircle icon before redirect)
- **Availability indicator:** Green pulsing dot + "Available for new projects"
- Dynamic year

---

### Utility Components

#### Shared.tsx
- **`SectionHeading({num, kicker, title, sub})`** — motion fadeIn + slideUp (24px, 0.55s, viewport once, -80px margin). Monospace kicker with gradient lines.
- **`Reveal({children, delay, className, direction})`** — motion fadeIn + slideUp/slideLeft/slideRight/scale (24px or scale 0.92, 0.55s, viewport once, -60px margin). Direction prop: `"up" | "left" | "right" | "scale"`, default `"up"`.

#### Logo.tsx
- **`LogoMark`** — `<img>` logo.png, 512×512
- **`Logo`** — LogoMark + "Shivaswarajya." text with accent-colored dot

#### GradientShimmer.tsx (~488 lines)
- Web Animations API text shimmer effect
- **9 presets:** sunrise, bubble, peach, tonic, mint, spring, twilight, bay + BRAND_GRADIENT
- Visibility gates: IntersectionObserver, visibilitychange, scroll-idle
- SSR-safe
- Props: `gradient`, `easing` (smooth/gentle/snappy), `duration`, `spread`, `angle`, `pauseBetween`, `baseColor`, `pauseOnScroll`, `pauseWhenOffscreen`, `respectReducedMotion`, `as`

#### SectionFade.tsx
- 16px gradient div at section boundaries
- Props: `direction` ("up"/"down"), `color`
- Uses inline `backgroundImage` style

#### ProjectPreview.tsx
- **3 interactive SVG UI mockups:** EmsDashboard, Console, MobileApp
- Each has **2 data variants** (click to toggle)
- AnimatePresence crossfade between variants
- Dot indicators for active variant
- **BrowserChrome** shared component with traffic-light dots
- Inline `<animate>` elements for bar charts and pulsing indicators
- Brand gradient SVG defs

#### ErrorBoundary.tsx
- Class component
- Branded error page with WhatsApp link + RippleButton reload

---

### UI Components (ui/)

#### spotlight-card.tsx (GlowCard)
- **Mouse-tracking radial glow:** 600px gradient at cursor position
- **Optional 3D tilt:** When className includes `"card-tilt"` — max 6deg rotation
- **Touch detection:** Static center glow on touch-primary devices
- Uses `outerRef` (mouse tracking) + `innerRef` (3D tilt)
- State: `position`, `opacity`, `isTouch`

#### RippleButton.tsx
- Material-style click ripple
- Tracks ripples by ID, auto-removes after 600ms
- `rippleColor` prop (default: white 0.35)
- Spawns expanding circle from click coordinates

---

## Custom Hooks (src/lib/utils.ts)

### `useCountUp`
```ts
useCountUp(target: number, opts?: { decimals?: number; duration?: number; delay?: number })
→ { display: string; ref: React.RefCallback<HTMLElement> }
```
- IntersectionObserver (threshold 0.3), RAF with ease-out cubic
- Animates 0 → target, fires once

### `useMagnetic`
```ts
useMagnetic<T extends HTMLElement>(ref: RefObject<T>, strength?: number)
```
- Cursor-follow on hover via RAF
- Direct `style.transform` manipulation
- Requires `.magnetic-btn` CSS class on the element
- **Used on:** Hero CTA, Navbar CTA ("Get a Quote" `<a>` link), CtaBand CTA, Contact CTA

### `useTypewriter`
```ts
useTypewriter(phrases: string[], opts?: { typeSpeed?: number; deleteSpeed?: number; pauseMs?: number })
→ { text: string; cursor: boolean }
```
- Cycles phrases typing/deleting char by char
- setTimeout chain
- Default: typeSpeed=60, deleteSpeed=30, pauseMs=2000

---

## Data Layer (src/lib/data.ts)

All content is centralized here. **To change any text/links, edit data.ts — no component changes needed.**

### NAV
```ts
[
  { label: "Work",         href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process",      href: "#process" },
  { label: "About",        href: "#about" },
  { label: "Contact",      href: "#contact" },
]
```

### CONTACT
```ts
{
  phone: "+91 89565 29972",
  phoneHref: "tel:+918956529972",
  whatsapp: "https://wa.me/918956529972",
  email: "contact@shivaswarajya.com",
  location: "Kolhapur, Maharashtra, India",
}
```

### HERO
- eyebrow: `"// Software Engineering Company · Kolhapur, Maharashtra"`
- name: `"Shivaswarajya Techno Innovation"`
- headline: `["We turn manual operations into", "reliable digital systems"]`
- sub: Software engineering description
- primaryCta: "View selected work" → `#work`
- secondaryCta: "Continue on WhatsApp" → WhatsApp link
- trust: 3 items (product thinking, working increments, long-term ownership)

### PROJECTS (3 case studies)
1. **EMS Dashboard** — Energy / IoT / AI — -14% waste, <2s alerts
2. **Interstellar Platform** — Automation / AI / Web — 3.2x dispatch, 99.9% sync
3. **Field Team App** — Field / Mobile / AI — 95% accuracy, 0 paper logs

Each: `name, tag, headline, problem, approach, solution, tech[], metrics[]`

### CAPABILITIES (6 services)
Custom Software, Mobile Apps, Web Platforms (MERN), AI Automation, AI & IoT Solutions, Cloud & Support
Each: `icon` (key), `title`, `desc`, `points[]`

### DOMAINS (4)
Green Energy & Clean Tech, IoT, Business Automation, E-commerce & Admin

### METHODOLOGY
- name: "The Build-Then-Own Loop"
- pitch, 4 steps: Strategy, Architecture, Deployment, Support

### PRINCIPLES (4)
Business-First Engineering, Scalable Architecture, MVP to Production, Long-Term Support

### FOUNDER
- name: "Shivaswarajya Techno Innovation"
- role: "Software Engineering Company"
- bio: Full-stack AI engineering team description
- **highlights:** 3 items with `title` + `body` (expandable in Founder.tsx)

### TECH_STACK (7)
React, React Native, Node.js, Express.js, MySQL, IoT/Sensors, APIs

### FAQ (6 Q&As)
Cost/timeline, getting started, post-launch support, remote work, existing systems, data security

### TESTIMONIALS (3)
Rajesh Kulkarni (SolarEdge Solutions), Priya Deshmukh (LogiFlow Industries), Amit Patil (GreenField Agritech)
Each: `quote, name, company`

### CTA
- eyebrow: `"// Let's build"`
- headline: "Got an operation that should be AI-powered by now?"
- sub: 2 strings
- primaryCta: "Get a Quote" → `#contact`
- secondaryCta: "Continue on WhatsApp"

---

## Animation Patterns (18 distinct)

| # | Pattern | Technology | Used By |
|---|---|---|---|
| 1 | Staggered entrance | framer-motion Variants (staggerChildren) | Hero, Projects, CtaBand |
| 2 | Scroll-triggered reveal | framer-motion whileInView + direction prop | SectionHeading, Reveal (Shared) |
| 3 | Layout animation | framer-motion layoutId + spring | Navbar active underline |
| 4 | Scroll progress | framer-motion useScroll + useSpring | ScrollProgress, BackToTop |
| 5 | Magnetic hover | Custom useMagnetic hook + rAF | Hero CTA, Navbar CTA, CtaBand, Contact |
| 6 | Spotlight glow card | Custom GlowCard (mouse-tracking) | Projects, Capabilities, Domains, Principles, Philosophy, BuildAnimation |
| 7 | Typewriter | Custom useTypewriter hook | Hero |
| 8 | Count-up | Custom useCountUp hook + rAF | StatsBar, Projects (MetricValue) |
| 9 | Gradient shimmer text | Web Animations API (GradientShimmer) | Hero, Projects, Capabilities, BuildAnimation, Principles, CtaBand (CTAHeadline), Contact, Philosophy |
| 10 | Infinite carousel | Pure CSS (carousel-track, hover + focus-within pause) | Testimonials |
| 11 | Grid expand/collapse | CSS grid-template-rows transition | Faq accordion |
| 12 | Conic border rotation | CSS @property --border-angle | CtaBand |
| 13 | Conic border rotation (portrait) | CSS @property --portrait-angle | Founder portrait |
| 14 | Floating particles | CSS drift animation | Hero (8), Loader (6) |
| 15 | Gradient orbs | CSS multi-point drift (responsive sizing) | Hero (3 orbs) |
| 16 | Loader sequence | framer-motion | Loader |
| 17 | Click ripple | Custom RippleButton | CtaBand, Contact, Footer, ErrorBoundary |
| 18 | Mobile menu | framer-motion AnimatePresence | Navbar |

**Reduced motion:** `MotionConfig reducedMotion="user"` + CSS `prefers-reduced-motion: reduce` disables all animations. GradientShimmer shows static gradient when reduced motion is preferred.

---

## Performance Strategy

1. **Code splitting:** framer-motion and @phosphor-icons/react → separate vendor chunks
2. **Lazy loading:** 8 below-the-fold components via `React.lazy` + `Suspense` (min-height fallback prevents layout shift)
3. **Dual compression:** Gzip + Brotli for all files > 1 KB
4. **Font optimization:** Self-hosted woff2, font-display: swap, Inter + SpaceGrotesk preloaded
5. **Image optimization:** WebP preferred + PNG fallback, lazy loading + async decoding below fold, shimmer skeletons
6. **Video:** WebM, preloaded with `poster="/og-image.png"` fallback, `fetchPriority="low"`
7. **Cache headers:** Immutable 1-year for static assets, must-revalidate for HTML
8. **Animation performance:** rAF-based effects, spring-smoothed scroll, will-change hints, cleanup in useEffect
9. **Minimal dependencies:** Only 6 active runtime packages (clsx + tailwind-merge installed but unused)

---

## Deployment Configs

### Vercel (vercel.json)
- `/assets/*`, `/images/*` + JS/CSS/fonts/webm/woff2 → immutable 1-year
- HTML → must-revalidate

### PWA (manifest.json)
- Display: standalone
- Background: #07060a
- Theme: #cd7f32

### SEO
- `robots.txt`: Allow all + sitemap link
- `sitemap.xml`: Single URL, monthly, priority 1.0
- `og-image.png`: 1200×630 branded social sharing image (absolute URL in OG tags)
- JSON-LD structured data: LocalBusiness, Person, WebSite, FAQPage

---

## HTML Head (index.html)

- `lang="en"`, charset UTF-8, viewport meta
- Meta: description, author (Shivaswarajya Techno Innovation), theme-color (#07060a), robots (index follow)
- **Geo meta:** `geo.region` (IN-MH), `geo.placename` (Kolhapur)
- Canonical: `https://shivaswarajya.com`
- Favicons: PNG (logo.png) + SVG (favicon.svg) + Apple touch icon
- OG tags: type website, url, title, description, image (absolute URL to og-image.png 1200×630), locale en_IN, **site_name**, **image:alt**
- Twitter card: summary_large_image, **image:alt**
- **Preconnect:** wa.me
- **Preloads:** SpaceGrotesk.woff2, Inter.woff2 (fonts), videoHome.webm (video, fetchPriority="low")
- Manifest: /manifest.json
- **Noscript fallback:** Company name + email/WhatsApp links for JS-disabled visitors

---

## Common Tasks Cheat Sheet

### Changing text/content
→ Edit `src/lib/data.ts` — all content is centralized here.

### Adding a new project card
1. Add object to `PROJECTS` in `data.ts` (include `problem` and `approach` for expandable details)
2. Add corresponding SVG mockup in `ProjectPreview.tsx` (follow existing pattern)
3. Update any layout classes if grid count changes

### Adding a new section
1. Create `src/components/NewSection.tsx`
2. If below fold: add `export { default as NewSection } from "./NewSection"` pattern for lazy import
3. Import in `App.tsx`, add lazy wrapper, place in render order
4. Add section ID to NAV in `data.ts` + `SECTION_IDS` in Navbar.tsx
5. Add scroll-margin-top for section in `index.css`

### Changing colors
→ Edit CSS custom properties in `@theme inline` block in `src/index.css`

### Adding an animation
- **Scroll-triggered:** Use `whileInView` from framer-motion, or `useScroll` + `useTransform`
- **Hover:** Use framer-motion `whileHover` or CSS transitions
- **Continuous:** Use CSS `@keyframes` + animation class
- **Entrance:** Use existing `Reveal` or `SectionHeading` wrappers (supports `direction`: up/left/right/scale)

### Changing icons
→ Import from `@phosphor-icons/react` — use `weight="duotone"` for filled style, `weight="bold"` for solid

### Adding new CSS utility
→ Add to `@theme inline` block in `index.css` for Tailwind integration, or add as plain `.class` in the same file

---

## Key Patterns & Conventions

1. **Section numbering** — SectionHeading `num` prop: "01", "02", etc.
2. **GlowCard** — Wrap interactive cards, add `card-tilt` className for 3D tilt
3. **Reveal** — Wrap any element that should animate in on scroll (supports `direction`: up/left/right/scale)
4. **GradientShimmer** — Wrap headline text for shimmer effect, use `gradient="BRAND_GRADIENT"`
5. **RippleButton** — Use for all primary CTAs
6. **useMagnetic** — Apply to CTA buttons for cursor-follow effect (needs `.magnetic-btn` class)
7. **Image pattern** — `<picture>` with WebP primary + PNG fallback, shimmer loading state
8. **Data-first** — All content in `data.ts`, components only render
9. **Lazy pattern** — `lazy(() => import(...).then(m => ({ default: m.X })))` with named export
10. **MotionConfig** — `reducedMotion="user"` respects user preference globally

---

## User Constraints (DO NOT violate)

- **Dark-only theme** — no light mode, no light/dark toggle
- **mailto: forms** — no backend, forms open email client
- **No hover overlay CTAs** on project cards (was added, user removed it)
- **No permanent progress bars** on capability cards (was added, user removed it)
- **No hover-activated vertical lines** on timeline numbers (was added, user removed it)
- **No scroll-animated connecting line** on timeline (was added, user removed it)
- **No founder blockquote** — was present, user removed it

---

## Known Issues / Notes

- **`founder.png`** is 1.8 MB — too large, but sharp/imagemin not available on system for compression
- **FAQ** has a known quirk: icon mapping uses `i % FAQ_ICONS.length` (6 icons for 6 items, 1:1 currently)
- **StatsBar** stats are defined locally in the component, NOT in `data.ts`
- **Contact form** submits via `mailto:` (no backend)
- **No routing** — single-page SPA with hash-based scroll navigation
- **clsx + tailwind-merge** are still installed in package.json but unused (cn() was removed from utils.ts)

---

## Changelog

### Phase 1–4 Improvements + Founder Quote Removal

| Change | File(s) |
|---|---|
| OG image → absolute URL + og:site_name + og:image:alt + twitter:image:alt | index.html |
| Dead CSS cleanup (removed 3 unused keyframes: shimmer, particle-float, scan-line) | index.css |
| Dead assets deleted (LOGO 02.png, founder-min.png, og-image.svg) | public/ |
| Dead _headers deleted (redundant with vercel.json) | public/ |
| Font preload added for Inter.woff2 | index.html |
| Video preload → fetchPriority="low" | index.html |
| Founder portrait → animated conic gradient border (.animated-border-portrait) | Founder.tsx, index.css |
| Navbar "Get a Quote" → magnetic effect (useMagnetic on CTA link) | Navbar.tsx |
| Tech stack chips → hover lift (hover:-translate-y-0.5 hover:shadow-sm) | Capabilities.tsx |
| Reveal component → direction prop ("up" \| "left" \| "right" \| "scale") | Shared.tsx |
| Hero orbs → responsive sizing (180px → 420px breakpoints) | Hero.tsx |
| SectionFade → dead Tailwind class removed | SectionFade.tsx |
| Project cards → expandable problem/approach details (ProjectDetails) | Projects.tsx |
| "View Case Study" → "Discuss This Project" | Projects.tsx |
| Noscript fallback added (company name + email/WhatsApp) | index.html |
| Footer mailto: form → submit feedback ("Opening email client…") | Footer.tsx |
| CTA headline → data-driven via CTAHeadline (shimmers "AI-powered") | CtaBand.tsx |
| Carousel → keyboard/focus pause + ARIA (role, aria-roledescription, tabIndex) | Testimonials.tsx, index.css |
| Hero video → poster="/og-image.png" fallback | Hero.tsx |
| Contact floating inputs → ARIA (id, aria-describedby, aria-invalid, sr-only hints) | Contact.tsx |
| Geo meta tags (IN-MH, Kolhapur) + wa.me preconnect | index.html |
| Dead `cn()` function removed from utils.ts | utils.ts |
| Founder blockquote removed | Founder.tsx, data.ts |
| Scroll-driven connecting line removed from timeline | BuildAnimation.tsx |
| Permanent progress bars removed from capability cards | Capabilities.tsx |

### I → We / Personal → Company Voice Conversion

| Change | File(s) |
|---|---|
| HERO.name → "Shivaswarajya Techno Innovation", eyebrow → company label | data.ts |
| HERO.headline: "I turn" → "We turn", sub: removed "Founder-led" | data.ts |
| Hero intro: removed "Hi, I'm" (company name shown directly) | Hero.tsx |
| Hero sub-line: "Founder-led engineering" → "Engineering" | Hero.tsx |
| All project approaches: "I designed/modelled/built" → "We designed/modelled/built" | data.ts |
| METHODOLOGY.pitch: "mine to support" → "ours to support" | data.ts |
| METHODOLOGY steps: "I map" → "We map", "I stay" → "we stay" | data.ts |
| PRINCIPLES: "I keep monitoring" → "We keep monitoring" | data.ts |
| FOUNDER: name → company, role → "Software Engineering Company", bio → team voice, highlights → team language | data.ts |
| Philosophy quote attribution auto-updated via FOUNDER data | Philosophy.tsx |
| Founder section: "The engineer behind" → "The team behind" | Founder.tsx |
| Principles heading: "How I think" → "How we think" | Principles.tsx |
| Capabilities heading: "What I build" → "What we build" | Capabilities.tsx |
| Tech stack label: "Stack I work with" → "Stack we work with" | Capabilities.tsx |
| Domains heading: "Sectors I serve" → "Sectors we serve" | Domains.tsx |
| ErrorBoundary: "reach me on" → "reach us on" | ErrorBoundary.tsx |
| Footer description: removed "Founder-led" | Footer.tsx |
| FAQ answers (5): "I scope/ask/stay/work/audit" → "We scope/ask/stay/work/audit" | data.ts |
| Testimonials: "Omkar delivered" → "The Shivaswarajya team delivered", "Omkar stayed" → "The Shivaswarajya team stayed" | data.ts |
| CTA sub: "Tell me" → "Tell us", "I'll come back" → "We'll come back" | data.ts |
| index.html: meta description, author, og:title, og:description, twitter:title, twitter:description, <title> — all removed "Omkar Patil" and "Founder-led" | index.html |
| JsonLd LocalBusiness description: removed "Founder-led" | JsonLd.tsx |
| manifest.json description: removed "Founder-led" | manifest.json |
| LinkedIn URL kept as personal profile, Person schema kept for SEO | Footer.tsx, JsonLd.tsx |
