# I → We / Personal → Company Voice Conversion

**Goal:** Replace all personal/singular language ("I", "Omkar Patil", "me", "mine") with company/plural language ("We", "Shivaswarajya", "us", "ours") across the entire website.

**Decisions (from user answers):**
- About section: Keep portrait, reframe as company (not person)
- Testimonials: Change "Omkar" → "The Shivaswarajya team"
- LinkedIn URL: Keep as-is (personal profile — user didn't request change)
- JsonLd Person schema: Keep (valid structured data for founder, good for SEO)

---

## File 1: `src/lib/data.ts` (~25 changes)

| Line | Old | New |
|------|-----|-----|
| 18 | `// Full-Stack Engineer · Kolhapur, Maharashtra` | `// Software Engineering Company · Kolhapur, Maharashtra` |
| 19 | `name: "Omkar Patil"` | `name: "Shivaswarajya Techno Innovation"` |
| 21 | `"I turn manual operations into"` | `"We turn manual operations into"` |
| 24 | `"Founder-led software engineering..."` | `"Software engineering..."` |
| 43 | `"I designed a role-based architecture..."` | `"We designed a role-based architecture..."` |
| 59 | `"I modelled the shared entities..."` | `"We modelled the shared entities..."` |
| 75 | `"I built a mobile-first flow..."` | `"We built a mobile-first flow..."` |
| 137 | `"...every system I ship stays mine to support."` | `"...every system we ship stays ours to support."` |
| 143 | `"I map your operations, find the friction..."` | `"We map your operations, find the friction..."` |
| 161 | `"...I stay behind it."` | `"...we stay behind it."` |
| 182 | `"I keep monitoring, fixing and improving..."` | `"We keep monitoring, fixing and improving..."` |
| 188 | `name: "Omkar Patil"` | `name: "Shivaswarajya Techno Innovation"` |
| 189 | `role: "Founder · Shivaswarajya Techno Innovation"` | `role: "Software Engineering Company"` |
| 190 | bio text — rewrite from singular to plural | `"Full-stack AI engineering team helping businesses convert manual operations into AI-powered digital systems. Based in Kolhapur, Maharashtra, working with clients across India and beyond."` |
| 192 | `"From data model to deployed UI — one engineer across the whole system, not a chain of handoffs."` | `"From data model to deployed UI — one cohesive team across the whole system, not a chain of handoffs."` |
| 194 | `"Regular working increments over long silences..."` | `"Regular working increments with transparent updates — you see real progress, not a surprise at the end."` |
| 212 | `"I scope honestly, quote in writing..."` | `"We scope honestly, quote in writing..."` |
| 216 | `"I ask about the operation..."` | `"We ask about the operation..."` |
| 220 | `"I stay on. Every system I build..."` | `"We stay on. Every system we build..."` |
| 224 | `"I work with clients across India..."` | `"We work with clients across India..."` |
| 228 | `"I audit the existing code..."` | `"We audit the existing code..."` |
| 239 | `"Omkar delivered our plant monitoring..."` | `"The Shivaswarajya team delivered our plant monitoring..."` |
| 244 | `"Omkar stayed, improved the system..."` | `"The Shivaswarajya team stayed, improved the system..."` |
| 259 | `"Tell me what you're running..."` | `"Tell us what you're running..."` |
| 259 | `"I'll come back within one business day."` | `"We'll come back within one business day."` |

## File 2: `src/components/Hero.tsx` (1 change)

| Line | Old | New |
|------|-----|-----|
| 116 | `Hi, I'm <span ...>{HERO.name}</span> —` | `<span ...>{HERO.name}</span> —` |

(Remove "Hi, I'm" since HERO.name is now the company name — "Hi, I'm Shivaswarajya Techno Innovation" makes no sense)

## File 3: `src/components/Founder.tsx` (1 change)

| Line | Old | New |
|------|-----|-----|
| 41-43 | `The engineer behind the systems` | `The team behind the systems` |

(The name, role, bio, and highlights all come from FOUNDER in data.ts — already changed there)

## File 4: `src/components/Philosophy.tsx` (0 changes needed)

The quote attribution `— {FOUNDER.name}, {FOUNDER.role}` will automatically update because we're changing FOUNDER.name and FOUNDER.role in data.ts. Result: `"— Shivaswarajya Techno Innovation, Software Engineering Company"` ✓

## File 5: `src/components/Principles.tsx` (1 change)

| Line | Old | New |
|------|-----|-----|
| 16 | `How I think about` | `How we think about` |

## File 6: `src/components/Capabilities.tsx` (2 changes)

| Line | Old | New |
|------|-----|-----|
| 27 | `What I build` | `What we build` |
| 81 | `// Stack I work with` | `// Stack we work with` |

## File 7: `src/components/Domains.tsx` (1 change)

| Line | Old | New |
|------|-----|-----|
| 23 | `Sectors I serve` | `Sectors we serve` |

## File 8: `src/components/ErrorBoundary.tsx` (1 change)

| Line | Old | New |
|------|-----|-----|
| 36 | `reach me on` | `reach us on` |

## File 9: `index.html` (6 changes)

| Line | Old | New |
|------|-----|-----|
| 10 | `content="Omkar Patil — founder-led software engineering at Shivaswarajya..."` | `content="Shivaswarajya Techno Innovation — software engineering: custom software, mobile apps, AI automation & IoT that turn manual operations into reliable digital systems."` |
| 11 | `content="Omkar Patil"` | `content="Shivaswarajya Techno Innovation"` |
| 22 | `content="Shivaswarajya Techno Innovation — Omkar Patil, Software Engineer"` | `content="Shivaswarajya Techno Innovation — Software, Mobile, AI & IoT"` |
| 34 | `content="Shivaswarajya Techno Innovation — Omkar Patil"` | `content="Shivaswarajya Techno Innovation"` |
| 39 | `<title>Shivaswarajya Techno Innovation — Omkar Patil · Software, Mobile, AI & IoT</title>` | `<title>Shivaswarajya Techno Innovation · Software, Mobile, AI & IoT</title>` |

## File 10: `src/components/JsonLd.tsx` (2 changes)

| Line | Old | New |
|------|-----|-----|
| 12 | `description: "Founder-led software engineering..."` | `description: "Software engineering..."` |
| 41 | `name: "Omkar Patil"` | Keep as-is (Person schema for founder is valid SEO) |

Only change the LocalBusiness description to remove "Founder-led" — keep Person schema as-is.

## File 11: `public/manifest.json` (1 change)

| Line | Old | New |
|------|-----|-----|
| 4 | `"Founder-led software engineering..."` | `"Software engineering..."` |

---

**Total: ~40 text replacements across 11 files. No structural/component changes. No new dependencies. After implementing, run `npm run build` to verify, then update brain.md.**