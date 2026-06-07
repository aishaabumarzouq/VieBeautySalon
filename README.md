# Vie Beauty Salon — Website

One-page Next.js 14 website for **Vie Beauty Salon**, Shaab, Kuwait.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (no Tailwind, pure CSS)
- Hosted on **Vercel**

## Project Structure

```
vie-beauty/
├── app/
│   ├── globals.css        ← Design tokens + base styles
│   ├── layout.tsx         ← Root layout + metadata/SEO
│   └── page.tsx           ← Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Services.tsx / .module.css
│   ├── About.tsx / .module.css
│   ├── Hours.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   ├── MapSection.tsx / .module.css
│   └── Footer.tsx / .module.css
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

### Option A — GitHub Import (recommended)
1. Push this folder to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo → Vercel auto-detects Next.js
4. Click **Deploy** — done ✅

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel
```

## Salon Info

| | |
|---|---|
| **Phone** | +965 9901 2207 |
| **Address** | Shaab Al Bahri Building 24, 2nd Floor, Hawalli, Kuwait |
| **Instagram** | [@vie.kuwait](https://www.instagram.com/vie.kuwait/) |
| **Hours** | Open Daily 10:00 am – 8:00 pm |
