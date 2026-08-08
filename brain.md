# 🧠 Brain — Shivaswarajya Portfolio

> **Complete reference for the Shivaswarajya Techno Innovation portfolio.**
> Read this file instead of scanning the entire codebase when making changes.
> **After making any code changes, update this file to stay accurate.**

---

## Quick Reference

| Field | Value |
|---|---|
| **Client** | Shivaswarajya Techno Innovation (company portfolio, plural voice) |
| **Type** | Single-page portfolio / marketing site (SPA, no routing) |
| **URL** | `https://shivaswarajya.com` |
| **Location** | Kolhapur, Maharashtra, India |
| **Contact** | +91 89565 29972 · contact@shivaswarajya.com |
| **Framework** | React 19 + TypeScript 6 + Vite 8 |
| **Styling** | Tailwind CSS v4 (`@theme inline` in index.css, no config file) |
| **Animation** | framer-motion v12 + Web Animations API + CSS keyframes |
| **Icons** | @phosphor-icons/react (duotone + bold) |
| **Design** | Dark-only — Copper / Amber / Bronze on near-black |
| **Build** | `tsc -b && vite build` (gzip + brotli) |
| **Deploy** | Static SPA (404.html fallback), no platform-specific config |
| **Env Vars** | None |
| **API** | None (forms use mailto:) |

---

## Directory Structure

```
shivaswarajya/
├── index.html                    # Entry HTML, SEO meta, preloads, OG tags, noscript fallback
├── vite.config.ts                # Plugins, path alias @→./src, manual chunks
├── tsconfig.json                 # Root references (app + node)
├── tsconfig.app.json             # src/ TS config (ES2023, bundler, @/* alias)
├── tsconfig.node.json            # vite.config.ts TS config
├── .oxlintrc.json                # oxlint config (react + TS + oxc plugins)
├── package.json                  # Dependencies & scripts
├── public/
│   ├── logo.png                  # 36 KB, 512×512 — main site logo
│   ├── favicon.svg               # 373 B — branded SVG favicon
│   ├── founder.webp              # 44 KB — preferred founder photo
│   ├── founder.png               # 1.8 MB — founder photo PNG fallback
│   ├── system-engine.webp        # 84 KB — process diagram preferred
│   ├── system-engine.png         # 1.9 MB — process diagram PNG fallback
│   ├── videoHome.webm            # 4.2 MB — hero background video
│   ├── og-image.png              # 1200×630 — social sharing image
│   ├── manifest.json             # PWA manifest (standalone, theme #cd7f32)
│   ├── sitemap.xml               # Single URL, lastmod 2026-08-04
│   ├── robots.txt                # Allow all + sitemap
│   ├── 404.html                  # Styled 404 with 3s auto-redirect
│   ├── laurel_left.png           # Philosophy ornament
│   ├── laurel_right.png          # Philosophy ornament
│   ├── EMS Dashboard/            # 6 PNGs (1.png–6.png) — project preview images
│   │   └── 1.png … 6.png
│   └── fonts/
│       ├── Inter.woff2           # 47 KB — body font (preloaded)
│       ├── SpaceGrotesk.woff2    # 22 KB — display font (preloaded)
│       └── JetBrainsMono.woff2   # 31 KB — monospace font
└── src/
    ├── main.tsx                  # React root: StrictMode > ErrorBoundary > App
    ├── App.tsx                   # Section orchestration, lazy loading, hash scroll
    ├── index.css                 # Tailwind v4 import + @theme + ALL custom CSS
    ├── lib/
    │   ├── data.ts               # ALL content constants (NAV → CTA, ~266 lines)
    │   └── utils.ts              # useCountUp, useMagnetic, useTypewriter (unused)
    └── components/
        ├── Hero.tsx              # Full-screen video hero + particles + orbs
        ├── Navbar.tsx            # Glass nav, mobile menu, active underline, magnetic CTA
        ├── Loader.tsx            # Branded intro animation
        ├── ScrollProgress.tsx    # Fixed top progress bar
        ├── JsonLd.tsx            # Structured data (LocalBusiness, Person, WebSite, FAQPage)
        ├── Projects.tsx          # 3 project cards + StatsBar (embedded), expandable details
        ├── ProjectPreview.tsx    # 3 interactive SVG UI mockups (2 variants each)
        ├── StatsBar.tsx           # ⚠️ DEAD — exported but never imported anywhere
        ├── Capabilities.tsx      # 6 service cards with tech chips
        ├── BuildAnimation.tsx    # Timeline + engine image (process section)
        ├── Domains.tsx           # 4 industry cards
        ├── Principles.tsx        # 4 principle cards
        ├── Philosophy.tsx        # Quote card with laurels
        ├── Founder.tsx           # Portrait + animated border + bio + expandable highlights
        ├── Testimonials.tsx      # Infinite carousel (CSS, keyboard/focus-paused)
        ├── Faq.tsx               # Grid-based accordion with icons
        ├── CtaBand.tsx           # Animated-border CTA band, data-driven headline
        ├── Contact.tsx           # Form + sidebar (ARIA-enhanced floating inputs)
        ├── Footer.tsx            # 3-col footer + social cards + mailto: form
        ├── BackToTop.tsx          # SVG progress ring button
        ├── SectionFade.tsx       # Gradient section dividers
        ├── Shared.tsx            # SectionHeading + Reveal (direction prop)
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
| clsx | ^2.1.1 | ⚠️ Installed but **unused** |
| tailwind-merge | ^3.6.0 | ⚠️ Installed but **unused** |

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
| oxlint | ^1.75.0 | Linter (not ESLint) |

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

### CSS Custom Properties (defined in `@theme inline` in index.css)

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
--radius-sm:  8px   --radius: 12px   --radius-lg: 16px   --radius-xl: 20px

/* Shadows */
--shadow-sm, --shadow, --shadow-glow

/* Scrims (video overlay levels) */
--scrim-heavy: rgba(7,6,10,0.82)
--scrim-mid:   rgba(7,6,10,0.45)
--scrim-light: rgba(7,6,10,0.25)
```

### Brand Gradient

```
linear-gradient(105deg, var(--color-amber) 0%, var(--color-accent) 55%, var(--color-copper) 100%)
```
Used in `.grad-line`, GradientShimmer, various accent bars.

### Tailwind v4 Usage

All `@theme inline` tokens are auto-available as Tailwind utilities: `text-ink`, `bg-bg`, `border-line`, `text-accent`, `font-display`, `shadow-glow`, etc.

---

## Custom CSS Classes (index.css)

| Class | Effect |
|---|---|
| `.glass` | Glassmorphism: glass bg + border + backdrop-filter: blur 14px |
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
@property --border-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
@property --portrait-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
```

### Global Styles

- `scroll-behavior: smooth`, `color-scheme: dark`
- `section[id] { scroll-margin-top: 4.5rem }` (work section: 1rem)
- `::selection` — accent color, `:focus-visible` — outline
- Custom scrollbar: WebKit 8px accent thumb + Firefox thin accent
- **Print:** light theme, hides nav/footer/video, single column, link URLs shown
- **Reduced motion:** `prefers-reduced-motion: reduce` disables all animations/transitions

---

## Component Architecture

### App.tsx — Section Orchestration

**Render order:**
1. Skip-to-content link (accessibility)
2. JsonLd, Loader, ScrollProgress, Navbar (always mounted)
3. `<main id="main">`:
   - **Hero** (eager, `id="home"`)
   - **Projects** (eager, `id="work"` — includes embedded StatsBar)
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
Suspense fallback: `<div className="min-h-[24rem]" aria-hidden />`

**Hash scroll:** Custom `useHashScroll()` hook scrolls to URL hash on mount + hashchange. Retries up to 20× (100ms apart) for lazy-loaded targets.

**MotionConfig:** `<MotionConfig reducedMotion="user">` wraps entire app.

### Navigation IDs

| Label | Hash | Component |
|---|---|---|
| Work | `#work` | Projects |
| Capabilities | `#capabilities` | Capabilities |
| Process | `#process` | BuildAnimation |
| About | `#about` | Founder |
| Contact | `#contact` | Contact |

---

### Section-by-Section Breakdown

#### 01 — Hero (Hero.tsx)
- **Full-screen** with `videoHome.webm` background + scrim overlay
- **`poster="/og-image.png"`** — static fallback for Safari/iOS
- **8 floating particles** (CSS drift animation)
- **3 gradient orbs** — responsive sizing: 180px→420px breakpoints
- **LogoMark** + static 4-line headline from `HERO.headline[]`
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
  - Tech tags with hover lift
  - **Expandable details:** "See how" accordion with `problem` + `approach`, AnimatePresence height animation, CaretDown toggle, `aria-expanded`
  - "Discuss This Project" link → WhatsApp
- **StatsBar embedded inside** (4 stats: 4+ Industries, 6+ Systems, 99.9% Uptime, 24h Response)
- Stagger variants (0.04s stagger)

#### 03 — Capabilities (Capabilities.tsx)
- **Section: "02 Capabilities"**
- **6 cards** in 2×3 grid
- **Icon mapping:** Code, DeviceMobileCamera, Browser, Robot, Cpu, Cloud
- `anim-float` per card
- Deliverables checklist (from CAPABILITIES[i].points)
- TECH_STACK tags below grid with hover lift
- Bottom accent bar per card

#### 04 — BuildAnimation / Process (BuildAnimation.tsx)
- **Section: "03 The Build-Then-Own Loop"**
- **2-column layout:**
  - Left: GlowCard with EngineImage (system-engine.webp, shimmer skeleton)
  - Right: TimelineSteps (4 numbered steps from METHODOLOGY.steps)
- **Static connecting line** — decorative `<span>` with `w-px bg-line`

#### 05 — Domains (Domains.tsx)
- **Section: "04 Industry Domains"**
- **4-col grid** with icons: Lightning, MapPinLine, GearSix, Storefront
- `bg-raise/30` tint per card

#### 06 — Principles (Principles.tsx)
- **Section: "05 Engineering Principles"**
- **4 GlowCards** with number badges
- ArrowUpRight hover reveal, gradient bottom bar

#### 07 — Philosophy (Philosophy.tsx)
- **Section: "06 Philosophy"**
- **Single centered GlowCard**
- Laurel ornaments (laurel_left/right.png, hidden on mobile)
- **GradientShimmer** on FOUNDER.quote

#### 08 — Founder (Founder.tsx)
- **Section: "07 About"**
- **2-column:**
  - Left: Circular portrait (WebP+PNG, shimmer skeleton, **animated-border-portrait** rotating conic gradient)
  - Right: Company name, role, bio, expandable highlights
- **Expandable highlights:** 3 pills, clicking reveals body text with AnimatePresence + CaretDown toggle
- `expandedIdx` state (number | null)

#### 09 — Testimonials (Testimonials.tsx)
- **Section: "09 Testimonials"**
- **Infinite carousel** — items duplicated for seamless loop
- **CSS-only:** `.carousel-track` with `carousel-scroll` keyframe (30s, pause on hover + focus-within)
- `role="region"`, `aria-roledescription="carousel"`, `tabIndex={0}` for keyboard accessibility
- Fade edges (gradient masks)

#### 10 — FAQ (Faq.tsx)
- **Section: "08 FAQ"**
- **Grid-based accordion** — `.faq-grid` / `.faq-grid open` (0fr ↔ 1fr)
- **6 contextual icons** (duotone): Coin, ChatCircle, Wrench, Globe, ArrowClockwise, ShieldCheck
- Plus icon rotates to × (45deg) on open, accent bar on open item

#### 11 — CTA Band (CtaBand.tsx)
- **animated-border** — CSS conic gradient rotation + `glow-pulse`
- Radial gradient background
- Trust signals: 24h reply, NDA, source code
- Magnetic RippleButton + WhatsApp link
- **Data-driven headline:** `CTAHeadline` parses `CTA.headline` from data.ts, shimmers "AI-powered"

#### 12 — Contact (Contact.tsx)
- **Section: "10 Contact"**
- **2-column:**
  - Left: Form with FloatingInput (ARIA: id, aria-describedby, aria-invalid, sr-only hints), success animation, submits via mailto:
  - Right: Sidebar with phone, email, location + icons
- NDA badge

#### 13 — Footer (Footer.tsx)
- **3-column:** logo+description, NAV quick links, social cards
- **Social cards:** LinkedIn, WhatsApp, Email — branded hover tooltips (AnimatePresence)
- **Email form:** "Stay connected" → mailto: with **submit feedback** ("Opening email client…")
- **Availability indicator:** Green pulsing dot + "Available for new projects"
- Dynamic year

---

### Utility Components

#### Shared.tsx
- **`SectionHeading({num, kicker, title, sub})`** — motion fadeIn + slideUp (24px, 0.55s, viewport once, -80px margin). Monospace kicker with gradient lines.
- **`Reveal({children, delay, className, direction})`** — motion fadeIn + slideUp/slideLeft/slideRight/scale (24px or scale 0.92, 0.55s, viewport once, -60px margin). Direction: `"up" | "left" | "right" | "scale"`, default `"up"`.

#### Logo.tsx
- **`LogoMark`** — `<img>` logo.png, 512×512
- **`Logo`** — LogoMark + "Shivaswarajya." text with accent-colored dot

#### GradientShimmer.tsx (~488 lines)
- Web Animations API text shimmer effect
- **9 presets:** sunrise, bubble, peach, tonic, mint, spring, twilight, bay + BRAND_GRADIENT
- Visibility gates: IntersectionObserver, visibilitychange, scroll-idle
- Props: `gradient`, `easing`, `duration`, `spread`, `angle`, `pauseBetween`, `baseColor`, `pauseOnScroll`, `pauseWhenOffscreen`, `respectReducedMotion`, `as`

#### SectionFade.tsx
- 16px gradient div at section boundaries
- Props: `direction` ("up"/"down"), `color`

#### ProjectPreview.tsx
- **3 interactive SVG UI mockups:** EmsDashboard, Console, MobileApp
- Each has **2 data variants** (click to toggle), AnimatePresence crossfade
- Dot indicators for active variant
- **BrowserChrome** shared component with traffic-light dots
- Inline `<animate>` elements for bar charts and pulsing indicators

#### ErrorBoundary.tsx
- Class component, branded error page with WhatsApp link + RippleButton reload

---

### UI Components (ui/)

#### spotlight-card.tsx (GlowCard)
- **Mouse-tracking radial glow:** 600px gradient at cursor position
- **Optional 3D tilt:** When className includes `"card-tilt"` — max 6deg rotation
- **Touch detection:** Static center glow on touch-primary devices
- Uses `outerRef` (mouse tracking) + `innerRef` (3D tilt)

#### RippleButton.tsx
- Material-style click ripple, auto-removes after 600ms
- `rippleColor` prop (default: white 0.35)

---

## Custom Hooks (src/lib/utils.ts)

### `useCountUp` ✅ Active
```ts
useCountUp(target: number, opts?: { decimals?: number; duration?: number; delay?: number })
→ { display: string; ref: React.RefCallback<HTMLElement> }
```
- IntersectionObserver (threshold 0.3), RAF with ease-out cubic, animates 0 → target, fires once.
- **Used in:** StatsBar (inside Projects.tsx), Projects MetricValue

### `useMagnetic` ✅ Active
```ts
useMagnetic<T extends HTMLElement>(ref: RefObject<T>, strength?: number)
```
- Cursor-follow on hover via RAF, direct `style.transform`, springs back on leave.
- Requires `.magnetic-btn` CSS class.
- **Used on:** Hero CTA, Navbar CTA ("Get a Quote"), CtaBand CTA, Contact CTA

### `useTypewriter` ⚠️ DEAD CODE
```ts
useTypewriter(phrases: string[], opts?: { typeSpeed?: number; deleteSpeed?: number; pauseMs?: number })
→ { display: string }
```
- Defined but **never imported anywhere**. Hero used typewriter previously but now uses static multi-line headline.
- **Candidate for removal.**

---

## Data Layer (src/lib/data.ts)

All content is centralized here (~266 lines). **To change any text/links, edit data.ts — no component changes needed.**

### Content Constants

| Constant | Content | Lines |
|---|---|---|
| `NAV` | 5 nav items: Work, Capabilities, Process, About, Contact | 1–7 |
| `CONTACT` | phone, whatsapp (wa.me link), email, location | 9–15 |
| `HERO` | eyebrow, name, headline (4-line static), sub, CTAs, trust (3 items) | 17–34 |
| `PROJECTS` | 3 case studies with name/tag/headline/problem/approach/solution/tech/metrics/trust | 37–87 |
| `CAPABILITIES` | 6 services with icon/title/desc/points | 90–127 |
| `DOMAINS` | 4 industries with icon/title/desc | 130–135 |
| `METHODOLOGY` | "The Build-Then-Own Loop" — name, pitch, 4 steps | 138–167 |
| `PRINCIPLES` | 4 engineering principles with title/body | 170–187 |
| `FOUNDER` | name, role, bio, 3 expandable highlights | 190–199 |
| `TECH_STACK` | 7 items: React, React Native, Node.js, Express.js, MySQL, IoT/Sensors, APIs | 201–209 |
| `FAQ` | 6 Q&A pairs | 212–237 |
| `TESTIMONIALS` | 3 quotes with name/company | 240–256 |
| `CTA` | eyebrow, headline ("AI-powered" keyword for shimmer), sub, CTAs | 259–265 |

### Key Content Details

**HERO.headline** (static 4-line, NOT typewriter):
```
"Custom software,"
"mobile apps &"
"AI solutions for"
"growing businesses."
```

**PROJECTS** (3 case studies):
1. **EMS Dashboard** — Energy/IoT/AI — −14% waste, <2s alerts
2. **Interstellar Platform** — Automation/AI/Web — 3.2x dispatch, 99.9% sync
3. **Field Team App** — Field/Mobile/AI — 95% accuracy, 0 paper logs

**StatsBar** (local to Projects.tsx, NOT in data.ts):
- 4+ Industries, 6+ Systems, 99.9% Uptime, 24h Response

---

## Animation Patterns (18 distinct)

| # | Pattern | Technology | Used By |
|---|---|---|---|
| 1 | Staggered entrance | framer-motion Variants | Hero, Projects, CtaBand |
| 2 | Scroll-triggered reveal | framer-motion whileInView + direction | SectionHeading, Reveal |
| 3 | Layout animation | framer-motion layoutId + spring | Navbar active underline |
| 4 | Scroll progress | framer-motion useScroll + useSpring | ScrollProgress, BackToTop |
| 5 | Magnetic hover | useMagnetic hook + rAF | Hero CTA, Navbar CTA, CtaBand, Contact |
| 6 | Spotlight glow card | GlowCard (mouse-tracking) | Projects, Capabilities, Domains, Principles, Philosophy, BuildAnimation |
| 7 | Gradient shimmer text | Web Animations API (GradientShimmer) | Hero, CtaBand headline, Philosophy |
| 8 | Count-up | useCountUp hook + rAF | StatsBar (Projects), MetricValue |
| 9 | Infinite carousel | Pure CSS (carousel-track, pause on hover/focus) | Testimonials |
| 10 | Grid expand/collapse | CSS grid-template-rows transition | Faq accordion |
| 11 | Conic border rotation | CSS @property --border-angle | CtaBand |
| 12 | Conic border rotation (portrait) | CSS @property --portrait-angle | Founder portrait |
| 13 | Floating particles | CSS drift animation | Hero (8), Loader (6) |
| 14 | Gradient orbs | CSS multi-point drift | Hero (3 orbs, responsive) |
| 15 | Loader sequence | framer-motion | Loader |
| 16 | Click ripple | RippleButton | CtaBand, Contact, Footer, ErrorBoundary |
| 17 | Mobile menu | framer-motion AnimatePresence | Navbar |
| 18 | SVG animate | Inline `<animate>` elements | ProjectPreview (bar charts, pulsing indicators) |

**Reduced motion:** `MotionConfig reducedMotion="user"` + CSS `prefers-reduced-motion: reduce` disables all.

---

## Performance Strategy

1. **Code splitting:** framer-motion + @phosphor-icons/react → separate vendor chunks
2. **Lazy loading:** 9 below-the-fold components via `React.lazy` + `Suspense` (min-h-[24rem] fallback)
3. **Dual compression:** Gzip + Brotli for files > 1 KB
4. **Font optimization:** Self-hosted woff2, font-display: swap, Inter + SpaceGrotesk preloaded
5. **Image optimization:** WebP preferred + PNG fallback, shimmer skeletons
6. **Video:** WebM, preloaded with poster fallback, fetchPriority="low"
7. **Animation pausing:** GradientShimmer pauses when off-screen/tab-hidden/scroll-idle
8. **rAF-based effects:** useMagnetic, useCountUp, Navbar scroll listener

---

## SEO & HTML Head

- `lang="en"`, charset UTF-8, viewport meta
- Meta: description, author ("Shivaswarajya Techno Innovation"), theme-color (#07060a), robots (index follow)
- **Geo meta:** `geo.region` (IN-MH), `geo.placename` (Kolhapur)
- Canonical: `https://shivaswarajya.com`
- Favicons: PNG (logo.png) + SVG (favicon.svg) + Apple touch icon
- Full OG tags: type website, absolute image URL, locale en_IN, site_name, image:alt
- Twitter card: summary_large_image + image:alt
- **Preconnect:** wa.me
- **Preloads:** SpaceGrotesk.woff2, Inter.woff2, videoHome.webm (fetchPriority="low")
- **Noscript fallback:** Company name + email/WhatsApp links
- JSON-LD: LocalBusiness, Person, WebSite, FAQPage schemas
- PWA manifest (standalone, bg #07060a, theme #cd7f32)
- robots.txt + sitemap.xml

---

## Common Tasks Cheat Sheet

### Changing text/content
→ Edit `src/lib/data.ts` — all content is centralized here.

### Adding a new project card
1. Add object to `PROJECTS` in `data.ts` (include `problem` and `approach` for expandable details)
2. Add corresponding SVG mockup in `ProjectPreview.tsx` (follow existing pattern)
3. Update grid layout classes if column count changes

### Adding a new section
1. Create `src/components/NewSection.tsx` with named export
2. If below fold: add lazy import in App.tsx (`lazy(() => import(...).then(m => ({ default: m.X })))`)
3. Place in App.tsx render order
4. Add section ID to NAV in `data.ts` + `SECTION_IDS` in Navbar.tsx
5. Add scroll-margin-top for section in `index.css`

### Changing colors
→ Edit CSS custom properties in `@theme inline` block in `src/index.css`

### Adding an animation
- **Scroll-triggered:** Use framer-motion `whileInView` or `Reveal` wrapper
- **Hover:** Use framer-motion `whileHover` or CSS transitions
- **Continuous:** Use CSS `@keyframes` + animation class

### Changing icons
→ Import from `@phosphor-icons/react` — use `weight="duotone"` for filled, `weight="bold"` for solid

---

## Key Patterns & Conventions

1. **Section numbering** — SectionHeading `num` prop: "01", "02", etc.
2. **GlowCard** — Wrap interactive cards, add `card-tilt` className for 3D tilt
3. **Reveal** — Wrap elements for scroll animation (supports direction: up/left/right/scale)
4. **GradientShimmer** — Wrap headline text, use `gradient="BRAND_GRADIENT"`
5. **RippleButton** — Use for all primary CTAs
6. **useMagnetic** — Apply to CTA buttons (needs `.magnetic-btn` class)
7. **Image pattern** — `<picture>` with WebP primary + PNG fallback, shimmer loading
8. **Data-first** — All content in `data.ts`, components only render
9. **Lazy pattern** — `lazy(() => import(...).then(m => ({ default: m.X })))` with named export
10. **MotionConfig** — `reducedMotion="user"` respects user preference globally
11. **Component exports** — Named exports (not default) for lazy import pattern

---

## User Constraints (DO NOT violate)

- **Dark-only theme** — no light mode, no toggle
- **mailto: forms** — no backend, forms open email client
- **No hover overlay CTAs** on project cards (was added, user removed it)
- **No permanent progress bars** on capability cards (was added, user removed it)
- **No hover-activated vertical lines** on timeline numbers (was added, user removed it)
- **No scroll-animated connecting line** on timeline (was added, user removed it)
- **No founder blockquote** — was present, user removed it

---

## Known Issues / Notes

- **`StatsBar.tsx`** — exported but never imported (dead code). Stats are embedded inside `Projects.tsx` with a local `STATS` array.
- **`useTypewriter`** — defined in utils.ts but never imported anywhere (dead code after Hero switched to static headline).
- **`clsx` + `tailwind-merge`** installed in package.json but unused (cn() was removed).
- **`founder.png`** is 1.8 MB — too large, ideally should be compressed.
- **Contact form** submits via `mailto:` (no backend).
- **No routing** — single-page SPA with hash-based scroll navigation.
- **Hero3D experiment** — was attempted (Three.js) and abandoned (see dev.log). Not in current codebase.
- **No vercel.json / netlify.toml** — static 404.html handles SPA routing.

---

## How to Update This File

After making any changes to the codebase, update this file to keep it accurate:

1. **Content changes** (data.ts) → Update the "Data Layer" section if structure changed
2. **New components** → Add to directory tree + component architecture section
3. **Removed components** → Mark or remove from this file
4. **New dependencies** → Update Tech Stack table
5. **Config changes** → Update Build Configuration section
6. **New CSS classes/animations** → Update Custom CSS section
7. **New hooks** → Update Custom Hooks section
8. **Architecture changes** → Update Component Architecture section

**Last updated:** 2026-08-08
