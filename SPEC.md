# Portfolio Redesign — Specification

## 1. Objective

Redesign Tanjim Hasan's personal portfolio from a static HTML/jQuery/Bootstrap site into a modern, dark-themed, scroll-based single-page application built with Next.js, Tailwind CSS, and GSAP animations. The portfolio targets recruiters, hiring managers, and potential collaborators evaluating a **Software Engineer — Frontend** with 5+ years of professional experience.

### Success Criteria

- Lighthouse performance score >= 90 on mobile
- Fully responsive (mobile-first: 320px to 1440px+)
- Deploys to GitHub Pages via static export
- All sections load with scroll-triggered GSAP animations
- Contact form functional without a backend

---

## 2. Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 14+ (App Router) | Static export for GitHub Pages, React ecosystem |
| Styling | Tailwind CSS 3+ | Utility-first, fast iteration, dark theme support |
| Animations | GSAP + ScrollTrigger | Scroll-triggered, performant, professional feel |
| Icons | React Icons (or Lucide React) | Tree-shakeable, modern icon set |
| Contact Form | Formspree (free tier) | No backend needed, works with static sites |
| Fonts | Google Fonts (Inter + optional display font) | Clean, modern, highly readable |
| Deployment | GitHub Pages | Free hosting, `next export` compatible |
| Package Manager | npm | Standard |

### Build & Export

- `next build` with `output: 'export'` in `next.config.js`
- Static files output to `/out` directory
- GitHub Actions workflow for automated deployment

---

## 3. Design System

### Theme: Dark

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0a` | Page background |
| `--bg-secondary` | `#111111` | Card/section backgrounds |
| `--bg-tertiary` | `#1a1a1a` | Hover states, subtle containers |
| `--text-primary` | `#f5f5f5` | Headings, primary text |
| `--text-secondary` | `#a3a3a3` | Body text, descriptions |
| `--text-muted` | `#666666` | Labels, captions |
| `--accent` | `#3b82f6` | Links, CTAs, active states (blue) |
| `--accent-hover` | `#60a5fa` | Hover variant |
| `--border` | `#262626` | Dividers, card borders |
| `--gradient-start` | `#3b82f6` | Gradient accent start |
| `--gradient-end` | `#8b5cf6` | Gradient accent end (purple) |

> Colors are suggestions — can be tuned during implementation. The key constraint is dark background with high-contrast text and a vibrant accent.

### Typography

- **Headings:** Inter (700/800 weight) or a display font like Space Grotesk
- **Body:** Inter (400/500 weight)
- **Code/Mono:** JetBrains Mono (for skill tags if needed)
- Scale: 14px base, modular scale for h1-h6

### Spacing & Layout

- Max content width: 1200px, centered
- Section vertical padding: 80px-120px
- Consistent 8px spacing grid (Tailwind default)

---

## 4. Sections & Content

### 4.1 Navigation (Fixed Top)

- Fixed/sticky top navbar, transparent on hero, solid on scroll
- Logo or name on the left: "Tanjim Hasan"
- Nav links on the right: Home, About, Resume, Portfolio, Contact
- Smooth scroll to sections on click
- Active link highlight based on scroll position
- Mobile: hamburger menu with slide-in drawer
- Subtle backdrop blur effect

### 4.2 Home / Hero Section

- Full viewport height (100vh)
- Large heading: "Hi, I'm **Tanjim Hasan**"
- Subtitle with typing/reveal animation: "Software Engineer — Frontend"
- Brief tagline from professional summary
- CTA buttons: "View My Work" (scrolls to Portfolio) + "Contact Me"
- Subtle animated background element (gradient orbs, particles, or grid pattern)
- Social links: GitHub, LinkedIn, Email
- Scroll-down indicator at bottom

### 4.3 About Section

- Two-column layout: profile image (left) + bio (right)
- Profile image with subtle border/glow effect
- Professional summary text (from CV)
- Key highlights / quick stats (e.g., "5+ years experience", "10+ projects", "Lead Engineer")
- Tech stack icons grid showing core technologies
- GSAP: fade-in-up on scroll

### 4.4 Resume Section

Split into two sub-sections:

**Experience Timeline**
- Vertical timeline layout
- Two entries:
  1. **Sovware** (Apr 2020 — Present) — Software Engineer, Frontend → Lead Engineer
     - Formgent, Helpgent, HexaDash, Directorist Pricing Plan
     - Business websites: directorist.com, sovware.com, wpwax.com
  2. **Bestweby** (May 2019 — Mar 2020) — Frontend Developer
     - Client-facing projects, cross-functional team collaboration
- Each entry animates in on scroll

**Education Timeline**
- Same timeline style
- B.Sc. in CSE — Daffodil International University (2014-2018), CGPA 3.90/4.0
- H.S.C — Narsingdi Science College (2012-2014), GPA 5.0/5.0

**Skills**
- Grouped skill tags/badges (not progress bars — more modern):
  - Languages: JavaScript, TypeScript
  - Frameworks: React, Next.js, Node.js, WordPress, Gutenberg
  - Styling: Tailwind CSS, SCSS, Styled Components
  - Tools: Git, GitHub, Webpack, VS Code, Postman
  - APIs: REST API, JWT Authentication
- Hover effects on tags

### 4.5 Portfolio Section

- Section heading with description
- Filter tabs: All | React | WordPress | Other
- Project cards in a responsive grid (3 cols desktop, 2 tablet, 1 mobile)
- Each card:
  - Project thumbnail/screenshot
  - Project name
  - Short description
  - Tech tags
  - Hover: overlay with "View Details" / external links
- GSAP: staggered card entrance animation
- Projects to showcase (from CV):
  1. **Formgent** — Custom Gutenberg blocks for form builder, WordPress data stores, Interactivity API
  2. **Helpgent** — Builder, admin panel, frontend submission system with React, React Query, Context API. Video/voice/screen recording.
  3. **HexaDash** — Admin dashboard for ThemeForest, reusable components, modern frontend practices
  4. **Directorist Pricing Plan** — Feature development, customization, maintenance
  5. **Business Websites** — directorist.com, sovware.com, wpwax.com
  6. *(Add more as needed)*

> Note: Project screenshots/thumbnails will need to be provided or captured during implementation.

### 4.6 Contact Section

- Two-column layout: contact info (left) + form (right)
- Contact info:
  - Email: tanjim.hasan.dev@gmail.com
  - Phone: +8801867499143
  - Location: Dhaka, Bangladesh
  - GitHub: github.com/tanjimhasan
- Contact form fields:
  - Name (required)
  - Email (required)
  - Subject (optional)
  - Message (required, textarea)
  - Submit button with loading state
- Form submission via Formspree (or EmailJS)
- Success/error toast notifications
- GSAP: slide-in animation

### 4.7 Footer

- Minimal footer
- Social links row
- "Designed & Built by Tanjim Hasan" credit
- Copyright year (dynamic)

---

## 5. Animations Strategy (GSAP + ScrollTrigger)

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero heading | Reveal/clip from bottom | On page load |
| Hero subtitle | Typing or fade-in with delay | On page load (staggered) |
| Hero CTAs | Fade up | On page load (staggered) |
| Background element | Continuous subtle float/pulse | Always |
| Navbar | Background opacity transition | On scroll past hero |
| Section headings | Fade-in-up | ScrollTrigger, on enter |
| About image | Scale-in or reveal | ScrollTrigger |
| About text | Fade-in-right | ScrollTrigger |
| Timeline items | Staggered fade-in from alternating sides | ScrollTrigger |
| Skill tags | Staggered pop-in | ScrollTrigger |
| Portfolio cards | Staggered fade-up | ScrollTrigger |
| Contact form | Slide-in from right | ScrollTrigger |

### Performance Rules

- Use `will-change` sparingly
- Animate only `transform` and `opacity` (GPU-composited)
- Respect `prefers-reduced-motion` — disable animations for users who prefer it
- Lazy-load images below the fold

---

## 6. Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   │       ├── formgent.png
│   │       ├── helpgent.png
│   │       ├── hexadash.png
│   │       └── ...
│   ├── favicon.ico
│   └── resume.pdf              # Optional downloadable CV
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata, dark theme)
│   │   ├── page.tsx            # Main page composing all sections
│   │   └── globals.css         # Tailwind directives + CSS variables
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Resume.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeading.tsx  # Reusable section title component
│   │   ├── ProjectCard.tsx
│   │   ├── TimelineItem.tsx
│   │   └── SkillTag.tsx
│   │
│   ├── data/
│   │   ├── experience.ts       # Work experience entries
│   │   ├── education.ts        # Education entries
│   │   ├── projects.ts         # Portfolio project data
│   │   └── skills.ts           # Skills grouped by category
│   │
│   ├── hooks/
│   │   └── useGsapScrollTrigger.ts  # Custom hook for GSAP animations
│   │
│   └── lib/
│       └── constants.ts        # Nav links, social links, contact info
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions → GitHub Pages
│
├── next.config.js              # output: 'export', basePath if needed
├── tailwind.config.ts          # Dark theme colors, fonts
├── tsconfig.json
├── package.json
└── SPEC.md
```

---

## 7. Code Style

- **Language:** TypeScript (strict mode)
- **Components:** Functional React components with hooks
- **Naming:** PascalCase for components, camelCase for functions/variables
- **Styling:** Tailwind utility classes inline; extract to components (not CSS files) when repeated
- **Data:** Separate data files in `src/data/` — no hardcoded content in components
- **Images:** Next.js `<Image>` component with proper alt text and sizing
- **Accessibility:** Semantic HTML, proper heading hierarchy, ARIA labels where needed, keyboard navigation
- **SEO:** Meta tags, Open Graph, structured data via Next.js Metadata API

---

## 8. Testing Strategy

Given this is a static portfolio site, testing is lightweight:

- **Visual verification:** Manual check across Chrome, Firefox, Safari
- **Responsive check:** DevTools at 320px, 768px, 1024px, 1440px
- **Lighthouse audit:** Target >= 90 on Performance, Accessibility, Best Practices, SEO
- **Animation check:** Verify `prefers-reduced-motion` disables animations
- **Form test:** Submit test message via Formspree to confirm delivery
- **Build test:** `npm run build` succeeds with no errors
- **Deploy test:** GitHub Pages serves correctly with proper asset paths

---

## 9. Deployment

### GitHub Pages Setup

1. `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true }, // Required for static export
     // basePath: '/portfolio', // Uncomment if repo name != username.github.io
   };
   ```

2. GitHub Actions workflow (`.github/workflows/deploy.yml`):
   - Trigger on push to `main`/`master`
   - Install deps → build → deploy `/out` to `gh-pages` branch

3. Repo settings: set GitHub Pages source to `gh-pages` branch

---

## 10. Boundaries

### Always Do
- Keep all content data in separate data files (easy to update)
- Use semantic HTML elements
- Respect `prefers-reduced-motion`
- Optimize images (WebP where possible)
- Maintain mobile-first responsive design

### Ask First
- Before changing the color scheme from what's specified
- Before adding any third-party analytics or tracking
- Before adding any sections not in this spec

### Never Do
- No server-side features (SSR, API routes) — must be fully static
- No database or authentication
- No paid services or APIs (free tier only)
- No auto-playing audio or video
- No excessive animations that hurt performance
