# Jayden Encarnacao Vásquez — Portfolio

A premium personal portfolio website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Theming | next-themes (dark/light) |
| Icons | Lucide React |
| Data | TypeScript data files (`/data/`) |
| Deployment | Azure Static Web Apps / Vercel |

---

## Project Structure

```
.
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout (Header, Footer, ThemeProvider)
│   ├── globals.css              # Global styles, CSS variables, Tailwind base
│   ├── page.tsx                 # Home (/) — Hero, Featured Projects, Timeline
│   ├── about/page.tsx           # /about — Bio, Skills, Education, Languages
│   ├── projects/
│   │   ├── page.tsx             # /projects — Filterable project grid
│   │   └── [slug]/page.tsx      # /projects/[slug] — Full case study
│   ├── resume/page.tsx          # /resume — Inline resume + PDF download
│   └── contact/page.tsx        # /contact — Form + contact cards
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Sticky nav with mobile menu
│   │   ├── Footer.tsx           # Social links + copyright
│   │   ├── ThemeProvider.tsx    # next-themes wrapper
│   │   └── ThemeToggle.tsx      # Dark/light toggle button
│   ├── home/
│   │   ├── Hero.tsx             # Hero section with CTAs
│   │   ├── FeaturedProjects.tsx # Top 3 featured project cards
│   │   └── ExperienceTimeline.tsx # Career timeline
│   ├── projects/
│   │   ├── ProjectCard.tsx      # Individual project card
│   │   └── ProjectGrid.tsx      # Grid with search + category filters
│   └── ui/
│       ├── AnimatedSection.tsx  # Scroll-triggered fade-in, stagger helpers
│       ├── Badge.tsx            # Category + status badges
│       └── Button.tsx           # Button + LinkButton variants
│
├── data/
│   ├── projects.ts              # 8 projects with full case study data
│   └── experience.ts            # 4 work experiences
│
├── lib/
│   └── utils.ts                 # cn() utility, slugify
│
├── public/
│   └── CV.pdf                   # ← Place your CV here
│
├── staticwebapp.config.json     # Azure Static Web Apps routing config
├── .github/workflows/
│   └── azure-static-web-apps.yml # CI/CD pipeline for Azure SWA
├── next.config.ts               # Static export config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This generates a static export in the `/out` directory (configured via `output: "export"` in `next.config.ts`).

### Lint

```bash
npm run lint
```

---

## Customization

### Update Personal Info

1. **Name, bio, title** — edit `components/home/Hero.tsx` and `app/about/page.tsx`
2. **Contact links** — update `components/layout/Footer.tsx` and `app/contact/page.tsx`
3. **Email** — search for `jayden@example.com` and replace with your actual email
4. **GitHub / LinkedIn URLs** — search and replace `jaydev-dev` / `jayden-encarnacao`

### Add/Edit Projects

Edit `data/projects.ts`. Each project follows this interface:

```typescript
interface Project {
  slug: string;                  // URL slug: /projects/my-project
  title: string;
  categories: ProjectCategory[]; // ["AI/Automation", "Backend", ...]
  summary: string;               // 1-line outcome shown on cards
  description: string;           // Longer description
  tech: string[];                // Tech tags
  links: { demo?: string; github?: string };
  featured: boolean;             // Show on home page (max 3)
  // Case study fields:
  problem: string;
  constraints: string[];
  solution: string;
  architectureDescription: string; // "Step A → Step B → Step C"
  keyFeatures: string[];
  results: string[];
  lessons: string[];
}
```

### Add CV

Replace `public/CV-placeholder.txt` with your actual PDF:

```
public/CV.pdf
```

The download buttons in `/resume` and the Hero section link to `/CV.pdf`.

### Update Experience

Edit `data/experience.ts` to update your work history. It powers both the home timeline and the resume page.

---

## Design System

### Colors

The palette uses CSS custom properties for dark/light mode switching:

| Token | Light | Dark |
|-------|-------|------|
| Background | White | `zinc-950` |
| Surface/Card | White | `zinc-800/60` |
| Primary accent | `indigo-600` | `indigo-400` |
| Secondary accent | `violet-500` | `violet-400` |
| Text | `zinc-900` | `zinc-100` |
| Muted text | `zinc-500` | `zinc-400` |
| Border | `zinc-200` | `zinc-700/60` |

### Typography

- **Body**: Inter (variable, Google Fonts)
- **Mono**: JetBrains Mono (Google Fonts) — used for tech tags and code

### Animations

Framer Motion is used for:
- Hero text — staggered fade-in on mount
- Section content — fade + slide-up on scroll (via `useInView`)
- Project cards — staggered reveal on scroll
- Timeline items — staggered reveal
- No layout shifts, animations are `once: true` (won't re-trigger)

---

## Deployment

### Option 1: Azure Static Web Apps (Recommended)

#### Manual Setup

1. **Create an Azure Static Web App** in the Azure Portal
   - Source: GitHub (connect your repo)
   - Build preset: Custom
   - App location: `/`
   - Output location: `out`

2. **Add the API token as a GitHub secret**
   ```
   AZURE_STATIC_WEB_APPS_API_TOKEN = <token from Azure Portal>
   ```

3. **Push to `main`** — the GitHub Actions workflow in `.github/workflows/azure-static-web-apps.yml` will automatically build and deploy.

#### Azure CLI Setup

```bash
# Login
az login

# Create resource group
az group create --name portfolio-rg --location eastus

# Create Static Web App
az staticwebapp create \
  --name jayden-portfolio \
  --resource-group portfolio-rg \
  --source https://github.com/YOUR_USERNAME/portfolio \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --login-with-github

# Get the deployment token (add to GitHub secrets)
az staticwebapp secrets list \
  --name jayden-portfolio \
  --resource-group portfolio-rg
```

#### Custom Domain

```bash
az staticwebapp hostname set \
  --name jayden-portfolio \
  --resource-group portfolio-rg \
  --hostname www.yourdomain.com
```

---

### Option 2: Vercel (Easiest)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo — Vercel auto-detects Next.js
4. Set **Output Directory** to `out` (or remove `output: "export"` from `next.config.ts` to use Vercel's native Next.js runtime)
5. Deploy — done

> **Note**: If deploying to Vercel with server-side features in the future, remove `output: "export"` from `next.config.ts`. The current config produces a fully static site for Azure compatibility.

---

### Option 3: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --dir=out --prod
```

---

## Contact Form Integration

The contact form at `/contact` currently simulates a submission (1.2s delay + success state). To connect it to a real backend:

### Option A: Formspree

1. Create a form at [formspree.io](https://formspree.io)
2. In `app/contact/page.tsx`, replace the simulated submit:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (!response.ok) throw new Error("Submission failed");
```

### Option B: EmailJS

```bash
npm install @emailjs/browser
```

```typescript
import emailjs from "@emailjs/browser";

await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  { from_name: form.name, from_email: form.email, message: form.message },
  "YOUR_PUBLIC_KEY"
);
```

---

## Performance Notes

- `output: "export"` generates fully static HTML — no server needed, optimal for CDN delivery
- Fonts loaded via `next/font/google` with `display: swap` — no layout shift
- Images use `next/image` with `unoptimized: true` for static export compatibility
- Framer Motion animations are `once: true` — no repeated work on scroll
- No heavy runtime dependencies — bundle stays lean

### Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

---

## Accessibility

- Semantic HTML throughout (`<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`, `<section>`)
- All interactive elements have visible `:focus-visible` styles (2px indigo ring)
- `aria-label` on icon-only buttons
- `aria-pressed` on filter toggle buttons
- `aria-invalid` + `aria-describedby` on form inputs with errors
- `role="alert"` on error messages
- `role="progressbar"` with `aria-valuenow` on language bars
- Color contrast meets WCAG AA in both light and dark modes
- Dark mode respects `prefers-color-scheme` via `enableSystem` in next-themes

---

## License

MIT — free to use and adapt for your own portfolio.
