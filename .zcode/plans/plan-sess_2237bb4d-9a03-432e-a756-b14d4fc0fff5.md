# Shivaswarajya Portfolio — Comprehensive Next-Level Plan

All 18 items from the previous plan are complete. This new plan targets **remaining bugs, accessibility gaps, mobile UX issues, SEO holes, and visual polish** discovered from deep codebase audit.

---

## Phase 1: Critical Fixes (Bugs & Data Integrity)

### 1.1 Fix JsonLd Phone Number Mismatch
**Problem:** `JsonLd.tsx:14` has `telephone: "+91 95525 21122"` but `CONTACT.phone` in `data.ts` is `"+91 89565 29972"`. Search engines index conflicting data.
**Fix:** Import `CONTACT` from data and use `CONTACT.phone` in the structured data object.
**File:** `src/components/JsonLd.tsx`

### 1.2 Add Safari/iOS MP4 Video Fallback
**Problem:** Only `videoHome.webm` exists. Safari on macOS and all browsers on iOS require H.264 MP4 — they show a black/blank hero. This is a **broken experience for ~20% of visitors**.
**Fix:** Add a `<source>` element for MP4 inside the `<video>` tag. Generate the MP4 (I'll provide FFmpeg instructions). Also add `type="video/mp4"` attribute.
**File:** `src/components/Hero.tsx` + new `public/videoHome.mp4`

### 1.3 Fix Missing Video Poster Image
**Problem:** Hero references `poster="/videoHome.jpg"` but no `videoHome.jpg` exists in public/. Causes a 404 request on every page load.
**Fix:** Extract the first frame as a JPEG poster image. If not available, remove the `poster` attribute to eliminate the 404.
**File:** `public/videoHome.jpg` (new) or `src/components/Hero.tsx`

### 1.4 Add Body Scroll Lock for Mobile Menu
**Problem:** When the hamburger menu opens, the page behind it can still scroll. This is a common mobile UX bug — user accidentally scrolls the page while trying to navigate the menu.
**Fix:** Add a `useEffect` in Navbar that sets `document.body.style.overflow = 'hidden'` when `open` is true, and restores it on close/unmount.
**File:** `src/components/Navbar.tsx`

---

## Phase 2: Accessibility & Compliance

### 2.1 FAQ Accordion — Full ARIA Pattern
**Problem:** FAQ buttons have `aria-expanded` but are missing `aria-controls` (pointing to the content panel ID). The content panels lack `id` and `role="region"`. Screen readers can't properly navigate the accordion.
**Fix:** Add unique `id` to each answer panel, `aria-controls` on each button, and `role="region"` + `aria-labelledby` on each panel.
**File:** `src/components/Faq.tsx`

### 2.2 Increase Touch Targets to ≥44px
**Problem:** Two critical interactive elements are below the WCAG 44px minimum touch target:
- Navbar hamburger toggle: `size-9` = 36px
- Back-to-top button: `size-10` = 40px
**Fix:** Increase to `size-11` (44px) for both. Adjust the hamburger lines to match. Keep the visual size the same but expand the clickable area with padding if needed.
**Files:** `src/components/Navbar.tsx`, `src/components/BackToTop.tsx`

### 2.3 Custom Scrollbar Matching Dark Theme
**Problem:** Default white scrollbar on a near-black site looks jarring, especially on Windows.
**Fix:** Add Webkit scrollbar styles in `index.css` matching the accent color (`--color-accent`) with dark track. Add `scrollbar-width: thin` + `scrollbar-color` for Firefox.
**File:** `src/index.css`

### 2.4 Print Stylesheet
**Problem:** No `@media print` styles. Printing shows the dark background (wastes ink), video, animations, and interactive elements.
**Fix:** Add print styles that: switch to white bg / dark text, hide video/animations/nav/footer/back-to-top, show content in single column, add `print-color-adjust: exact` for accent elements.
**File:** `src/index.css`

---

## Phase 3: Visual & Interaction Polish

### 3.1 Apply SectionFade to All Background-Transitioning Sections
**Problem:** Only `Domains.tsx` uses `SectionFade`. Sections like `Philosophy`, `FAQ`, `CTABand`, `Founder` have different backgrounds but no smooth transition — creating hard visual lines.
**Fix:** Wrap `SectionFade` at top/bottom of `Philosophy`, `FAQ`, and `Founder` sections that have `bg-raise/30` or `bg-bg-2/60` backgrounds.
**Files:** `src/components/Philosophy.tsx`, `src/components/Faq.tsx`, `src/components/Founder.tsx`

### 3.2 GlowCard — Add Subtle Static Gradient for Touch/No-Mouse
**Problem:** The spotlight-card effect only activates on `mousemove`. Mobile and touch users see no glow at all — the cards look flat.
**Fix:** In `spotlight-card.tsx`, add a default subtle radial gradient (`radial-gradient(circle at 50% 0%, var(--color-glow), transparent 70%)`) that shows when no mouse interaction has occurred. Hide it once mouse tracking begins.
**File:** `src/components/ui/spotlight-card.tsx`

### 3.3 Metrics Counter Animation
**Problem:** Project metrics (e.g., "−14%", "< 2s", "3.2x") appear instantly with no emphasis. These are the most persuasive data points on the page.
**Fix:** Create a `useCountUp` hook that animates numbers from 0 to their target value when scrolled into view (IntersectionObserver). Apply to metric values in `Projects.tsx`.
**Files:** `src/lib/utils.ts` (new hook), `src/components/Projects.tsx`

### 3.4 Enhanced Scroll Progress Bar
**Problem:** The scroll progress bar is a flat 2px line with no gradient — nearly invisible against the dark background.
**Fix:** Apply the brand gradient (`grad-line`) to the progress bar and increase height slightly to 3px. Add a subtle glow effect.
**File:** `src/components/ScrollProgress.tsx`

---

## Phase 4: SEO & Deployment Readiness

### 4.1 Add robots.txt
**Problem:** No `robots.txt` in public/. Search engines may waste crawl budget on non-existent paths.
**Fix:** Create `public/robots.txt` allowing all crawlers, pointing sitemap to `shivaswarajya.com/sitemap.xml`.
**File:** `public/robots.txt` (new)

### 4.2 Add sitemap.xml
**Problem:** No sitemap. Search engines rely on discovery alone.
**Fix:** Create `public/sitemap.xml` with the single URL, lastmod, changefreq, and priority.
**File:** `public/sitemap.xml` (new)

### 4.3 Create OG Social Sharing Image
**Problem:** Open Graph `og:image` points to `/logo.png` — likely too small (not 1200×630). Social shares on LinkedIn/Twitter will look cropped or blank.
**Fix:** Create a 1200×630 branded OG image. Add as `public/og-image.png` and update `index.html` meta tags.
**File:** `public/og-image.png` (new), `index.html`

### 4.4 Add 404.html Fallback
**Problem:** No custom 404 page. On Netlify/Vercel, direct URL access or typos show a generic server page instead of the portfolio.
**Fix:** Create a minimal `public/404.html` that auto-redirects to the main page after 3 seconds, styled consistently with the brand.
**File:** `public/404.html` (new)

---

## Phase 5: Code Quality & Micro-Improvements

### 5.1 Video Optimization Guidance
**Problem:** `videoHome.webm` is 4.2MB — the largest asset. Slow connections take significant time to load the hero.
**Fix:** Provide FFmpeg commands to compress to ≤1.5MB at 720p. Add `fetchpriority="high"` to the video element for priority loading.
**Files:** Video asset + `src/components/Hero.tsx`

### 5.2 FAQ Page Structured Data
**Problem:** FAQ content exists but isn't exposed as `FAQPage` schema. Missing a free SEO opportunity.
**Fix:** Add a `FAQPage` entry to the `@graph` array in `JsonLd.tsx` mapping each FAQ question/answer.
**File:** `src/components/JsonLd.tsx`

---

## Execution Order
1. **1.1** — Fix JsonLd phone (30s)
2. **1.3** — Fix/remove video poster reference (30s)
3. **1.4** — Body scroll lock for mobile menu (2min)
4. **2.1** — FAQ ARIA pattern (2min)
5. **2.2** — Touch targets ≥44px (2min)
6. **1.2** — Safari/iOS MP4 video fallback (add source tag + guidance)
7. **2.3** — Custom scrollbar (2min)
8. **2.4** — Print stylesheet (3min)
9. **3.1** — SectionFade on more sections (3min)
10. **3.2** — GlowCard static gradient for touch (3min)
11. **3.4** — Enhanced scroll progress bar (2min)
12. **3.3** — Metrics counter animation (5min)
13. **4.1** — robots.txt (1min)
14. **4.2** — sitemap.xml (1min)
15. **4.4** — 404.html (3min)
16. **5.2** — FAQPage structured data (2min)
17. **4.3** — OG image creation guidance (1min code + image creation)
18. **5.1** — Video optimization guidance (1min code + FFmpeg commands)

## Files Changed Estimate
- **Modified:** 10 files (JsonLd, Hero, Navbar, Faq, BackToTop, spotlight-card, Projects, ScrollProgress, Philosophy, Founder, index.css, index.html)
- **New:** 5 files (robots.txt, sitemap.xml, 404.html, og-image.png, videoHome.mp4)
- **Assets:** 1 OG image, 1 MP4 video (FFmpeg guidance provided)

## Build Verification
- Run `tsc -b && vite build` after each phase to catch regressions early.
