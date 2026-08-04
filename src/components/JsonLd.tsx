import { useEffect } from "react"

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://shivaswarajya.com/#business",
      name: "Shivaswarajya Techno Innovation",
      description:
        "Founder-led software engineering — custom software, mobile apps, AI automation & IoT that turn manual operations into reliable digital systems.",
      url: "https://shivaswarajya.com",
      logo: "https://shivaswarajya.com/logo.png",
      telephone: "+91 95525 21122",
      email: "contact@shivaswarajya.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolhapur",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      founder: {
        "@type": "Person",
        "@id": "https://shivaswarajya.com/#founder",
      },
      serviceType: [
        "Custom Software Development",
        "Mobile App Development",
        "AI Automation",
        "IoT Solutions",
      ],
      areaServed: {
        "@type": "Place",
        name: "Maharashtra, India",
      },
    },
    {
      "@type": "Person",
      "@id": "https://shivaswarajya.com/#founder",
      name: "Omkar Patil",
      jobTitle: "Founder & Software Engineer",
      worksFor: { "@id": "https://shivaswarajya.com/#business" },
      url: "https://shivaswarajya.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://shivaswarajya.com/#website",
      url: "https://shivaswarajya.com",
      name: "Shivaswarajya Techno Innovation",
      publisher: { "@id": "https://shivaswarajya.com/#business" },
    },
  ],
} as const

/** Injects JSON-LD structured data into the document head. */
export function JsonLd() {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(STRUCTURED_DATA)
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}
