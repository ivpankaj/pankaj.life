# pankaj.life — Premium Personal Tech Universe

Official personal tech portfolio and digital home for **Pankaj Verma** (also known online as **Pankaj** and **@ivpankaj**).

🌐 **Production Website**: [https://www.pankaj.life](https://www.pankaj.life) (canonical, redirects from `pankaj.life`)

---

## 🎨 Creative Direction & Visual Identity

- **Pixar-Inspired 3D Digital Cosmos**: Built with a sense of wonder, cinematic lighting, and layered atmospheric depth.
- **Curated Cosmic Palette**: Deep midnight indigo (`#070a18`, `#0c102a`), electric blue (`#38bdf8`), cosmic violet (`#818cf8`), sunset coral (`#fb7185`), aurora mint (`#34d399`), and sunshine gold (`#fbbf24`).
- **Zero AI-Generated Images**: Pure code-generated SVG illustrations, celestial orbs, tactile glass panels, and authentic brand vector graphics for all technologies and social platforms.
- **Truthful Content Standards**: All personal milestones and handles are accurate (@ivpankaj on GitHub, LinkedIn, X, Instagram, YouTube) and project showcases clearly distinguish verified personal work from conceptual templates.

---

## 🚀 Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org) (Strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + Custom Cosmic Design System
- **Typography**: `Plus Jakarta Sans` (Display/Headings) & `Space Grotesk` (Body/Code) via `next/font`
- **SEO & Social**: Next.js Metadata API, dynamic Open Graph & Twitter cards (`next/og`), `robots.ts`, `sitemap.ts`, `manifest.ts`, JSON-LD Structured Data
- **Contact**: Server Actions with honeypot bot protection and client-side validation feedback

---

## 📂 Project Architecture

```
pankaj.life/
├── app/
│   ├── actions/
│   │   └── contact.ts          # Server action with honeypot spam protection
│   ├── about/
│   │   └── page.tsx            # Digital identity & philosophy deep dive
│   ├── projects/
│   │   ├── page.tsx            # Featured projects & tools gallery
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic project case study & architecture
│   ├── achievements/
│   │   └── page.tsx            # Milestone timeline & verification logs
│   ├── socials/
│   │   └── page.tsx            # Verified social media universe (@ivpankaj)
│   ├── contact/
│   │   └── page.tsx            # Direct contact hub & inquiry form
│   ├── layout.tsx              # Root layout with fonts, JSON-LD, navbar & footer
│   ├── page.tsx                # Homepage assembling complete universe
│   ├── globals.css             # Tailwind v4 theme tokens & cosmic glass styles
│   ├── not-found.tsx           # Custom 404 "Lost in the Cosmos" page
│   ├── opengraph-image.tsx     # Dynamic OG image generator
│   ├── twitter-image.tsx       # Dynamic Twitter card generator
│   ├── robots.ts               # Robots.txt configuration
│   ├── sitemap.ts              # Canonical XML sitemap
│   └── manifest.ts             # Web app manifest
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Floating glass nav with brand mark
│   │   ├── Footer.tsx          # Cosmic footer with verified links
│   │   └── BackgroundCosmos.tsx# Lightweight SVG celestial atmosphere
│   ├── sections/
│   │   ├── HeroSection.tsx     # 3D diorama, headline, quick connect
│   │   ├── AboutSection.tsx    # Digital identity & tech pillars
│   │   ├── TechUniverseSection.tsx # Filterable tech stack with authentic SVGs
│   │   ├── ProjectsSection.tsx # Projects gallery with category tabs
│   │   ├── WebsitesSection.tsx # pankaj.life flagship showcase
│   │   ├── AchievementsSection.tsx # Timeline milestones
│   │   ├── SocialsUniverseSection.tsx # Verified social profiles
│   │   ├── ExploringSection.tsx# Live radar lab dashboard
│   │   └── ContactSection.tsx  # Contact card & form
│   ├── contact/
│   │   └── ContactForm.tsx     # React 19 interactive form
│   ├── seo/
│   │   └── JsonLd.tsx          # Person, WebSite & SoftwareApplication schema
│   └── ui/
│       ├── BrandIcon.tsx       # Pixel-perfect authentic brand SVGs
│       ├── GlassCard.tsx       # Tactile glass panel with specular rim
│       └── SectionHeader.tsx   # Vibrant section header with badges
├── data/
│   ├── profile.ts              # Centralized profile & identity config
│   ├── technologies.ts         # Categorized tech stack & metadata
│   ├── projects.ts             # Projects, case studies, and flags
│   ├── websites.ts             # Domains owned and maintained
│   ├── achievements.ts         # Chronological milestones
│   ├── socials.ts              # Verified @ivpankaj platforms
│   └── exploring.ts            # Ongoing technical explorations
└── lib/
    ├── metadata.ts             # Canonical SEO metadata constructor
    └── utils.ts                # Tailwind class merge helper
```

---

## 🛠️ Content Customization Guide

All personal and technical content is stored in typed data files under `data/`:

1. **Profile (`data/profile.ts`)**:
   Edit your name, display name, handle (`@ivpankaj`), tagline, bio, and contact email.
2. **Projects (`data/projects.ts`)**:
   Add or update projects, live links, GitHub repos, and architectural highlights. Set `isSample: false` for your personal verified projects.
3. **Websites (`data/websites.ts`)**:
   Manage domains owned or maintained, such as `pankaj.life`.
4. **Technologies (`data/technologies.ts`)**:
   Update your tools, frameworks, and categorized skillsets.
5. **Socials (`data/socials.ts`)**:
   Manage links and handles for GitHub, LinkedIn, X, Instagram, YouTube.
6. **Milestones (`data/achievements.ts`)**:
   Record learning milestones, certifications, and project launches.
7. **Currently Exploring (`data/exploring.ts`)**:
   Update your ongoing research and experimental prototypes.

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 🧪 Production Build & Type Checking

To verify strict TypeScript compilation, route generation, and Turbopack build:

```bash
npm run build
```

---

## 🔍 Technical SEO & Verification

- **Canonical Domain**: `https://www.pankaj.life`
- **Sitemap**: `https://www.pankaj.life/sitemap.xml`
- **Robots**: `https://www.pankaj.life/robots.txt`
- **JSON-LD**: Automatically rendered in page head (`Person`, `WebSite`, `ProfilePage`, `BreadcrumbList`, `SoftwareApplication`, `TechArticle`, `ContactPage`)
- **OpenGraph & Twitter**: Automatically rendered via Edge route handlers at `/opengraph-image` and `/twitter-image`.

### Google Search Console Setup
1. Open [Google Search Console](https://search.google.com/search-console).
2. Add Property `https://www.pankaj.life`.
3. Choose HTML Tag verification and paste the verification code into `.env.local` as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...`.
4. Submit `https://www.pankaj.life/sitemap.xml` under Sitemaps.

---

## 🌐 Deployment to Vercel / Cloudflare

1. Push this repository to GitHub under `ivpankaj/pankaj.life`.
2. Connect the repository on [Vercel](https://vercel.com) or [Cloudflare Pages](https://pages.cloudflare.com).
3. Set the Custom Domain to `www.pankaj.life` (with apex redirect `pankaj.life` -> `www.pankaj.life`).
4. Deploy! Next.js 16 will automatically build static pages, edge image routes, and server actions.
