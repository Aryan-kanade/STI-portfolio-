export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export const CONTACT = {
  phone: "+91 89565 29972",
  phoneHref: "tel:+918956529972",
  whatsapp: "https://wa.me/918956529972",
  email: "contact@shivaswarajya.com",
  location: "Kolhapur, Maharashtra, India",
}

export const HERO = {
  eyebrow: "// Software Engineering Company · Kolhapur, Maharashtra",
  name: "Shivaswarajya Techno Innovation",
  headline: [
    "We turn manual operations into",
    "reliable digital systems",
  ] as [string, string],
  sub: "Software engineering for growing businesses and industrial sectors — custom software, mobile apps, AI automation and IoT, built to keep working as you scale.",
  primaryCta: { label: "View selected work", href: "#work" },
  secondaryCta: { label: "Continue on WhatsApp", href: CONTACT.whatsapp },
  trust: [
    "Product thinking, not just code",
    "Shipped in working increments",
    "Long-term technical ownership",
  ],
}

// 3 — Work / case studies (the centerpiece). Outcome-led headlines + bracketed tags.
export const PROJECTS = [
  {
    name: "EMS Dashboard",
    tag: "ENERGY · IoT · AI",
    headline: "Unified distributed energy data into one live, role-based dashboard",
    problem:
      "Energy readings lived scattered across separate systems and spreadsheets — no single source of truth, no way to see every site at a glance, and alerts arrived too late.",
    approach:
      "We designed a role-based architecture that ingests live sensor data, normalises it, and serves it per role — operators see the floor view, management sees the trend view.",
    solution:
      "A production dashboard with live readings, trend charts, threshold alerts and exportable reports — so operations and plant teams act on the same numbers in real time.",
    tech: ["React", "Node.js", "IoT", "Sensors"],
    metrics: [
      { value: "−14%", label: "Overall Energy Waste" },
      { value: "< 2s", label: "Real-Time Alert Latency" },
    ],
  },
  {
    name: "Interstellar Platform",
    tag: "AUTOMATION · AI · WEB",
    headline: "Connected ordering, admin and technician workflows under one platform",
    problem:
      "Ordering, administration and technician work were three disconnected flows — every update forced manual re-entry, and data drifted out of sync the moment it was written down.",
    approach:
      "We modelled the shared entities first (orders, people, jobs), then built each surface against that single model so an update in one place landed everywhere automatically.",
    solution:
      "A connected e-commerce + technician platform with synced data across every workflow — one console for catalog, orders, payments and field execution.",
    tech: ["React.js", "Express", "Node.js", "MySQL"],
    metrics: [
      { value: "3.2x", label: "Faster Order Dispatch" },
      { value: "99.9%", label: "Data Synchronization" },
    ],
  },
  {
    name: "Field Team App",
    tag: "FIELD · MOBILE · AI",
    headline: "Gave remote field teams a single, live view of every job",
    problem:
      "Tracking what remote team members were working on, where, and whether it was actually done meant phone calls, photos in chat groups and end-of-day spreadsheets.",
    approach:
      "We built a mobile-first flow around the technician's day — assignment, evidence capture (photos, location), and live status — so the field is the source of truth, not a report.",
    solution:
      "A React Native app with job assignment, in-app evidence capture and live status at every step, with analytics for the back office.",
    tech: ["React Native", "APIs", "Maps", "Analytics"],
    metrics: [
      { value: "95%", label: "Reporting Accuracy" },
      { value: "0", label: "Paper Logs Remaining" },
    ],
  },
]

// 4 — Capabilities (condensed from "services")
export const CAPABILITIES = [
  {
    icon: "code",
    title: "Custom Software",
    desc: "ERP, CRM, billing, inventory and workflow automation around how your business runs.",
    points: ["ERP, CRM & billing systems", "Inventory & order workflows", "Process automation"],
  },
  {
    icon: "phone",
    title: "Mobile Apps",
    desc: "React Native for customers, technicians and field teams — one codebase, iOS & Android.",
    points: ["iOS & Android, one codebase", "Offline-first field apps", "Push & live status"],
  },
  {
    icon: "browser",
    title: "Web Platforms (MERN)",
    desc: "Dashboards, B2B portals, SaaS and e-commerce on MongoDB, Express, React, Node.",
    points: ["Dashboards & B2B portals", "SaaS & multi-tenant", "E-commerce & admin"],
  },
  {
    icon: "robot",
    title: "AI Automation",
    desc: "Chatbots, AI dashboards and data-to-insight tools that turn routine work into decisions.",
    points: ["AI chatbots & assistants", "AI-powered dashboards", "Data-to-insight pipelines"],
  },
  {
    icon: "cpu",
    title: "AI & IoT Solutions",
    desc: "EMS dashboards for manufacturing, solar and industrial — live readings, alerts, reports.",
    points: ["Energy & EMS dashboards", "AI-powered analytics", "Sensor & device integration", "Alerts & reports"],
  },
  {
    icon: "cloud",
    title: "Cloud & Support",
    desc: "Secure infrastructure, deployments and long-term ownership of your systems.",
    points: ["Cloud infra & CI/CD", "Monitoring & backups", "Long-term ownership"],
  },
]

// 5 — Domains (compact strip)
export const DOMAINS = [
  { icon: "lightning", title: "Green Energy & Clean Tech", desc: "Renewable energy monitoring, EMS & clean energy solutions" },
  { icon: "map-pin", title: "IoT", desc: "Smart devices, sensors & connected systems" },
  { icon: "gear", title: "Business Automation", desc: "ERP, CRM & workflow software" },
  { icon: "storefront", title: "E-commerce & Admin", desc: "Storefronts with admin control" },
]

// 6 — Process (named methodology)
export const METHODOLOGY = {
  name: "The Build-Then-Own Loop",
  pitch: "A loop, not a handover — every system we ship stays ours to support.",
  steps: [
    {
      num: "01",
      key: "strategy",
      title: "Strategy",
      desc: "We map your operations, find the friction, and see where AI can help.",
    },
    {
      num: "02",
      key: "architecture",
      title: "Architecture",
      desc: "Clean, scalable AI-ready design — the stack that still makes sense when your business grows.",
    },
    {
      num: "03",
      key: "deployment",
      title: "Deployment",
      desc: "Shipped in working increments. You see progress live, not after months.",
    },
    {
      num: "04",
      key: "support",
      title: "Support",
      desc: "Long-term ownership. Your system keeps working — we stay behind it.",
    },
  ],
}

// 7 — Engineering principles (structured)
export const PRINCIPLES = [
  {
    title: "Business-First Engineering",
    body: "Code is a means, not the deliverable. Every decision starts from the operation it has to serve.",
  },
  {
    title: "Scalable Architecture",
    body: "Built so the system still makes sense at 10× — clean boundaries, no clever shortcuts that become traps.",
  },
  {
    title: "MVP to Production",
    body: "Ship the smallest thing that works, prove it in real use, then harden it into production software.",
  },
  {
    title: "Long-Term Support",
    body: "A system isn't done at launch. We keep monitoring, fixing and improving it for as long as it runs.",
  },
]

// 8 — Founder
export const FOUNDER = {
  name: "Shivaswarajya Techno Innovation",
  role: "Software Engineering Company",
  bio: "Full-stack AI engineering team helping businesses convert manual operations into AI-powered digital systems. Based in Kolhapur, Maharashtra, working with clients across India and beyond.",
  highlights: [
    { title: "Full-stack ownership", body: "From data model to deployed UI — one cohesive team across the whole system, not a chain of handoffs." },
    { title: "Industrial & IoT fluency", body: "Comfortable with sensors, live data and plant operations, not just dashboards that look nice." },
    { title: "Remote-first delivery", body: "Regular working increments with transparent updates — you see real progress, not a surprise at the end." },
  ],
}

export const TECH_STACK = [
  "React",
  "React Native",
  "Node.js",
  "Express.js",
  "MySQL",
  "IoT/Sensors",
  "APIs",
]

// 9 — FAQ
export const FAQ = [
  {
    q: "What does a typical project cost and how long does it take?",
    a: "It depends on scope — an MVP web app is usually weeks, a full platform is months. We scope honestly, quote in writing, and build in working increments you can see.",
  },
  {
    q: "How do we get started?",
    a: "A short discovery call or WhatsApp message. We ask about the operation you're running and the outcome you want, then come back with a written scope and a clear yes or no.",
  },
  {
    q: "How do you handle support after launch?",
    a: "We stay on. Every system we build ships with a support arrangement — monitoring, fixes and incremental improvements — not a goodbye at handover.",
  },
  {
    q: "Do you work with businesses outside Kolhapur and Maharashtra?",
    a: "Yes. We work with clients across India and internationally. Most delivery happens remotely with regular video reviews; on-site visits are available when needed.",
  },
  {
    q: "Can you take over an existing system built by someone else?",
    a: "Usually yes. We audit the existing code and infrastructure first, tell you honestly what's worth keeping, then extend or rebuild on that basis.",
  },
  {
    q: "How is my business data kept secure?",
    a: "Least-privilege access, encrypted credentials, environment-separated config, and no real data in repos or logs. For sensitive engagements we start under an NDA.",
  },
]

// 9.5 — Testimonials
export const TESTIMONIALS = [
  {
    quote: "The Shivaswarajya team delivered our plant monitoring dashboard in three weeks — it replaced four manual spreadsheets and the team actually uses it every shift.",
    name: "Rajesh Kulkarni",
    company: "SolarEdge Solutions, Kolhapur",
  },
  {
    quote: "Most developers hand over code and disappear. The Shivaswarajya team stayed, improved the system for three months, and now it runs without us thinking about it.",
    name: "Priya Deshmukh",
    company: "LogiFlow Industries, Pune",
  },
  {
    quote: "From first call to deployed mobile app in six weeks. Clear communication, no surprises — exactly what a growing business needs.",
    name: "Amit Patil",
    company: "GreenField Agritech, Sangli",
  },
]

// 10 — CTA band
export const CTA = {
  eyebrow: "// Let's build",
  headline: "Got an operation that should be AI-powered by now?",
  sub: ["Tell us what you're running today and the outcome you want.", "We'll come back within one business day."] as const,
  primaryCta: { label: "Get a Quote", href: "#contact" },
  secondaryCta: { label: "Continue on WhatsApp", href: CONTACT.whatsapp },
}
