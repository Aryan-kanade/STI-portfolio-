import { lazy, Suspense, useEffect, useRef } from "react"
import { MotionConfig } from "framer-motion"
import { Loader } from "./components/Loader"
import { Navbar } from "./components/Navbar"
import { ScrollProgress } from "./components/ScrollProgress"
import { JsonLd } from "./components/JsonLd"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Capabilities } from "./components/Capabilities"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { BackToTop } from "./components/BackToTop"

/** Below-the-fold sections — lazy loaded to reduce initial bundle. */
const LazyDomains = lazy(() => import("./components/Domains").then((m) => ({ default: m.Domains })))
const LazyBuildAnimation = lazy(() => import("./components/BuildAnimation").then((m) => ({ default: m.BuildAnimation })))
const LazyPrinciples = lazy(() => import("./components/Principles").then((m) => ({ default: m.Principles })))
const LazyPhilosophy = lazy(() => import("./components/Philosophy").then((m) => ({ default: m.Philosophy })))
const LazyFounder = lazy(() => import("./components/Founder").then((m) => ({ default: m.Founder })))
const LazyFaq = lazy(() => import("./components/Faq").then((m) => ({ default: m.Faq })))
const LazyTestimonials = lazy(() => import("./components/Testimonials").then((m) => ({ default: m.Testimonials })))
const LazyCTABand = lazy(() => import("./components/CtaBand").then((m) => ({ default: m.CtaBand })))

/** Minimal Suspense fallback that preserves section height to prevent layout shift. */
function SectionSkeleton() {
  return <div className="min-h-[24rem]" aria-hidden />
}

/**
 * Programmatically scrolls to the element matching the current URL hash.
 * Retries up to `retries` times (100ms apart) so that lazy-loaded sections
 * have time to resolve before we give up.
 */
function scrollToHash(hash: string, retries = 20) {
  if (!hash) return
  const id = hash.replace(/^#/, "")
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  } else if (retries > 0) {
    setTimeout(() => scrollToHash(hash, retries - 1), 100)
  }
}

/** Hook that listens for hash changes and scrolls to the target section. */
function useHashScroll() {
  const initial = useRef(true)

  useEffect(() => {
    // On first mount, scroll to any hash already in the URL (e.g. direct link)
    if (initial.current) {
      initial.current = false
      scrollToHash(location.hash)
    }

    const onHashChange = () => scrollToHash(location.hash)
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])
}

export default function App() {
  useHashScroll()
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">Skip to content</a>
      <JsonLd />
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Capabilities />
        <Suspense fallback={<SectionSkeleton />}>
          <LazyBuildAnimation />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LazyDomains />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LazyPrinciples />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LazyPhilosophy />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LazyFounder />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LazyFaq />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LazyCTABand />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LazyTestimonials />
        </Suspense>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
