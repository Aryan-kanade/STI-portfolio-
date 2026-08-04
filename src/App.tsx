import { MotionConfig } from "framer-motion"
import { Loader } from "./components/Loader"
import { Navbar } from "./components/Navbar"
import { ScrollProgress } from "./components/ScrollProgress"
import { JsonLd } from "./components/JsonLd"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Capabilities } from "./components/Capabilities"
import { Domains } from "./components/Domains"
import { BuildAnimation } from "./components/BuildAnimation"
import { Principles } from "./components/Principles"
import { Philosophy } from "./components/Philosophy"
import { Founder } from "./components/Founder"
import { Faq } from "./components/Faq"
import { CTABand } from "./components/CTABand"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { BackToTop } from "./components/BackToTop"

export default function App() {
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
        <Domains />
        <BuildAnimation />
        <Principles />
        <Philosophy />
        <Founder />
        <Faq />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
