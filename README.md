# Nada Ahmed — Software QA & Testing Specialist Portfolio

Interactive portfolio built with Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, and Framer Motion. Theme: "QA Lab × Circuit Bench" — purple (violet) primary with a circuit-board animated background and terminal-style panels.

## ✨ Features

- Sticky navbar with smooth scroll + active section observer + mobile sheet menu
- **Hook-driven Hero**: "Bugs don't ship on my watch." headline + client-focused value tagline
- **Real profile photo** (loaded automatically from `/public/avatar.png`)
- **Light/Dark mode toggle** (default: light) — sun/moon button in navbar, choice persisted via localStorage
- **Animated circuit board background** — PCB traces with flowing electron pulses (theme-aware)
- **Avatar circuit frame** — corner ticks + scan-line overlay + glow
- **Core Competencies**: 3 columns (Software Testing Process / Testing Techniques / Technical Skills) + animated language proficiency bars
- **Tools**: IntelliJ IDEA, Code::Blocks, VS Code, Proteus, Jira
- **Services**: 3 cards (Manual Testing / Test Case Creation / QA Consulting)
- **Featured Projects** (interactive tabs):
  1. AI & Machine Learning Projects
  2. Medication Management System
  3. Digital Logic Circuit Design
  4. **Healthcare Clinic Booking Platform (DEPI)** — with full STLC metrics panel (test cases, bug severity, defect lifecycle, personal contribution) + documentation links
- **Education timeline**: Helwan NU B.Sc. → DEPI Software Testing Track → ITI AI & ML Internship
- **Contact section**: Email + LinkedIn + Phone (tel: link)
- Fully responsive (mobile 390px → desktop 1440px+)

## 🚀 Run Locally

Requirements: Node.js 18+, Bun (recommended) or npm

```bash
# 1. Install dependencies
bun install        # or: npm install

# 2. Start dev server
bun run dev        # or: npm run dev

# 3. Open http://localhost:3000
```

## 📦 Deploy to Vercel (Recommended)

1. Push this folder to a new GitHub repository
2. Sign in at [vercel.com](https://vercel.com) with GitHub
3. "Add New Project" → select the repo → "Deploy"
4. Vercel auto-detects Next.js — no config needed
5. Get your free domain like `nada-ahmed-portfolio.vercel.app`

## 🖼️ Replace the Profile Photo

Replace `public/avatar.png` with your own photo (any of `.jpg`, `.png`, or `.webp` works). The avatar component auto-detects the file and shows it inside the circuit frame. If no photo is found, a stylized "NA" initials placeholder is shown.

To use a different filename, edit `src/components/portfolio/avatar.tsx` line: `const PRIMARY_SRC = '/avatar.png?ts=1'`

## 🎨 Customize Theme Colors

All colors live in `src/app/globals.css`:
- `:root` — Light mode palette (soft lavender + deep violet)
- `.dark` — Dark mode palette (deep purple-black + bright violet)

Primary color is `oklch(0.55 0.24 300)` (light) / `oklch(0.72 0.20 300)` (dark) — adjust the hue `300` (300 = violet, 330 = magenta, 270 = indigo, etc.) to recolor the whole site.

## 📝 Edit Content

All section content is in dedicated component files under `src/components/portfolio/`:
- `hero.tsx` — Hero section (hook, name, tagline, CTAs, stats, avatar)
- `about.tsx` — About section + quote + value proposition
- `competencies.tsx` — Skills (3 columns + proficiency bars)
- `tools.tsx` — Tools grid
- `services.tsx` — Services cards
- `projects.tsx` — Projects tabs + metrics panel for DEPI project
- `education.tsx` — Education timeline
- `contact.tsx` — Contact CTA + footer

## 📞 Contact Info

- Email: nada.18.ahmed.0.5@gmail.com
- LinkedIn: https://www.linkedin.com/in/nada-ahmed-robotics/
- Phone: +20 101 754 9141

---

Built with care by Nada Ahmed · Software QA & Robotics
