# Mrinmoy Porel — Developer Portfolio.

> A sleek & modern portfolio website built with React + Tailwind CSS + Vite. Featuring a floating bottom navbar, Web Audio click sounds, dark/light theming and sections for work, projects, skills, education, blog & open-source contributions.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Theming](#4-theming)
5. [Click Sound](#5-click-sound)
6. [Visitor Counter](#6-visitor-counter)
7. [Favicon](#7-favicon)
8. [Deploying](#8-deploying)
9. [Custom Domain](#9-custom-domain)
10. [Build Plan](#10-build-plan)
11. [Getting Started](#11-getting-started)

---

## 1. Overview

| Field             | Detail                                 |
| ----------------- | -------------------------------------- |
| **Owner**         | Mrinmoy Porel                          |
| **Type**          | Personal developer portfolio           |
| **Primary stack** | React 18 · Tailwind CSS · Vite         |
| **Fonts**         | Instrument Serif · DM Mono · Geist     |
| **Theme**         | Dark-first with full light mode toggle |
| **Deployment**    | Vercel                                 |
| **Live URL**      | `mrinnnmoy.dev`                        |

---

## 2. Tech Stack

| Tool           | Purpose                                       |
| -------------- | --------------------------------------------- |
| React 18       | UI framework                                  |
| Vite           | Build tool & dev server with HMR              |
| Tailwind CSS 3 | Utility-first styling                         |
| CSS Variables  | Dark/light theme switching without a library  |
| Web Audio API  | Button click sounds — no audio files required |
| Google Fonts   | Instrument Serif · DM Mono · Geist            |
| Vercel         | Deployment & hosting                          |

---

## 3. Project Structure

```
portfolio/
├── public/
│   └── favicon.svg                  ← Your personal favicon
├── src/
│   ├── assets/                      ← Images: profile photo, logos
│   ├── components/
│   │   └── Navbar.jsx               ← Floating bottom navbar
│   ├── hooks/
│   │   └── useClickSound.js         ← Web Audio API click sound hook
│   ├── sections/
│   │   ├── Hero.jsx                 ← Name, pfp, email copy button, tagline, CTAs
│   │   ├── About.jsx                ← Bio paragraphs + quick stat cards
│   │   ├── Experience.jsx           ← Work experience cards with logo + date range
│   │   ├── Skills.jsx               ← Categorised skill tags
│   │   ├── Projects.jsx             ← Project cards with links
│   │   ├── Education.jsx            ← Education card with logo support
│   │   └── Footer.jsx               ← Copyright + live visitor counter
│   ├── App.jsx                      ← Root component: theme state, layout
│   ├── index.css                    ← CSS variables, animations, base styles
│   └── main.jsx                     ← React entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 4. Theming

All colors are CSS variables defined in `src/index.css`. To change your accent color or background:

```css
:root {
  /* dark theme (default) */
  --accent: #c8f542; /* ← change this to your brand color */
  --bg: #0a0a0a;
  --bg-card: #141414;
  --text: #e8e8e8;
  --text-muted: #666666;
  /* ... */
}

[data-theme="light"] {
  --accent: #1a7a2e; /* ← light-mode version of your accent */
  --bg: #f5f5f0;
  /* ... */
}
```

The theme toggles via the sun/moon button in the floating navbar. The `data-theme` attribute is set on `<html>` by `App.jsx` — no extra libraries needed.

---

## 5. Click Sound

Click sounds are generated entirely via the **Web Audio API** in `src/hooks/useClickSound.js`. No audio files, no dependencies.

The hook attaches a global click listener and plays a short sine wave tone whenever any `<a>`, `<button>`, or interactive element is clicked.

**To disable click sounds**, remove the `useClickSound()` call from `src/App.jsx`:

```jsx
// App.jsx — remove or comment out this line:
useClickSound();
```

**To adjust the sound**, edit the oscillator settings in `useClickSound.js`:

```js
oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // pitch
gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime); // volume (0–1)
```

---

## 6. Visitor Counter

The counter in the footer currently shows a static placeholder (`34,085`). To make it real, integrate one of these options:

### Vercel Analytics (simplest if deploying on Vercel)

```bash
npm install @vercel/analytics
```

Add to `src/main.jsx`:

```jsx
import { inject } from "@vercel/analytics";
inject();
```

Then query the Vercel Analytics API to pull the real page view count into `Footer.jsx`.

---

## 7. Favicon

Replace `public/favicon.svg` with your own SVG, or use a `.ico` / `.png` file.

If switching format, update the `<link>` tag in `index.html`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

Tools to generate a favicon from an image or logo:

| Tool                                                         | Notes                               |
| ------------------------------------------------------------ | ----------------------------------- |
| [favicon.io](https://favicon.io)                             | Generate from text, image, emoji    |
| [realfavicongenerator.net](https://realfavicongenerator.net) | Multi-size export for all platforms |

---

## 8. Deploying

### Vercel

```bash
npm i -g vercel
vercel
```

Vercel auto-detects Vite. No extra configuration needed.

---

## 9. Custom Domain

1. Buy a domain — [Namecheap](https://namecheap.com), [Cloudflare Registrar](https://cloudflare.com), or [Porkbun](https://porkbun.com)
2. **On Vercel:** Project Settings → Domains → Add Domain → follow the DNS instructions
3. SSL is provisioned automatically — no extra setup needed

---

## 10. Build Plan

A complete step-by-step checklist for taking this portfolio from first run to live on the internet.

### Step 1 — Project setup

- [x] Unzip the project and open it in your code editor
- [x] Run `npm install` to install all dependencies
- [x] Run `npm run dev` and confirm the site loads at `http://localhost:5173`
- [x] Initialise a Git repo: `git init && git add . && git commit -m "init: project setup"`
- [x] Create a new GitHub repository and push: `git remote add origin <url> && git push -u origin main`

### Step 2 — Design decisions

- [ ] Pick your accent color and update `--accent` in `src/index.css`
- [ ] Confirm the dark-first vibe looks right — toggle to light mode and check both
- [ ] Decide on your profile photo crop — square works best, aim for at least 400×400px
- [x] Design or generate your personal favicon at [favicon.io](https://favicon.io) and drop it in `public/`

### Step 3 — Content — personal info

- [ ] Add your profile photo to `src/assets/pfp.jpg` and wire it up in `Hero.jsx`
- [ ] Update your email address in `Hero.jsx`
- [ ] Update your GitHub, LinkedIn, Twitter, and Cal.com links in `Navbar.jsx`
- [ ] Write your real bio paragraphs in `About.jsx`
- [ ] Update the four quick stat cards in `About.jsx` with accurate numbers

### Step 4 — Content — work, skills & education

- [ ] Fill in the `experiences` array in `Experience.jsx` with your real jobs
- [ ] Add company logos to `src/assets/` and import them in `Experience.jsx`
- [ ] Update the `skillGroups` array in `Skills.jsx` with your actual tech stack
- [ ] Fill in the `education` array in `Education.jsx` with your college details
- [ ] Add your college logo to `src/assets/` and import it in `Education.jsx`

### Step 5 — Content — projects

- [ ] Fill in the `projects` array in `Projects.jsx` with your real projects
- [ ] Add live website URLs for deployed projects — set to `null` for anything not deployed yet
- [ ] Add GitHub source links — set to `null` for private repos
- [ ] Mark your best 1–2 projects as `featured: true`
- [ ] Review all project descriptions — keep them sharp: what it is, what problem it solves, what you're proud of

### Step 6 — Meta & SEO

- [ ] Update `<title>` in `index.html` to your name
- [ ] Update `<meta name="description">` in `index.html` with your tagline
- [ ] Update `<meta name="theme-color">` if you changed the background color
- [ ] Confirm the favicon shows up correctly in the browser tab

### Step 7 — Visitor counter

- [ ] Choose an analytics option from [Section 6](#6-visitor-counter) — Vercel Analytics is the quickest to set up if deploying on Vercel
- [ ] Wire up the real count into `Footer.jsx` and test that it increments on reload

### Step 8 — QA before deploying

- [ ] Run `npm run build` — confirm it completes with zero errors
- [ ] Run `npm run preview` — test the production build locally at `http://localhost:4173`
- [ ] Click through every section — Hero, About, Experience, Skills, Projects, Education, Footer
- [ ] Test the email copy button in Hero — confirm it copies and shows the checkmark
- [ ] Test the dark/light theme toggle — confirm both modes look correct
- [ ] Test click sounds — confirm they fire on buttons and links
- [ ] Resize the browser to mobile width (~375px) — confirm the floating navbar and all sections look right
- [ ] Test all external links — GitHub, LinkedIn, Twitter, Cal.com, project live links, source links

### Step 9 — Deploy

- [ ] Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one
- [ ] Run `npm i -g vercel && vercel` from the project root — follow the prompts
- [ ] Confirm the deployed URL loads correctly
- [ ] Check all sections and links on the live URL (not just localhost)

### Step 10 — Custom domain

- [ ] Buy your domain — [Porkbun](https://porkbun.com) is the cheapest, [Cloudflare Registrar](https://cloudflare.com/products/registrar/) has no markup
- [ ] In Vercel: Project Settings → Domains → Add Domain → enter your domain
- [ ] Follow the DNS instructions Vercel gives you — usually add an A record and a CNAME
- [ ] Wait for DNS to propagate (5 min to 48 hours depending on your registrar)
- [ ] Confirm `https://your-domain.com` loads with a valid SSL certificate

### Step 11 — Polish (do this after it's live)

- [ ] Check the site on a real phone — not just a browser resize
- [ ] Share the URL with one person and watch them use it — note anything confusing
- [ ] Fix any layout or content issues that come up from real usage
- [ ] Update the `Live URL` field in [Section 1](#1-overview) of this README
- [ ] Share it publicly — Twitter, LinkedIn, wherever you build in public 🚀

---

## 11. Getting Started

- 🎨 Any improvements to the design & UI are welcome.

- 🔨 Try to break the app by testing it to find any bugs. If you find any, check if there is an issue already open for it. If there is none, then report it.

- 💡 All code must be written in **JavaScript** — no `any` types. All API inputs must be validated with **Zod**.

- 📱 For UI changes, test on both desktop and mobile viewport sizes before submitting.

### 🔃 Steps to be followed in order to make valid contributions to this repo.

1. Fork the [dev-portfolio](https://github.com/mrinnnmoy/dev-portfolio) repo by clicking on the fork button on the top of the page. This will create a copy of this repository in your account.

2. **Clone the forked repository**

   ```bash
   git clone "https://github.com/<your-github-username>/dev-portfolio"
   ```

   Then set up your local environment:
   - Download and install **Node.js v18** or higher
   - Download and install **Git**
   - Navigate into the project and install dependencies:

     ```bash
     cd dev-portfolio
     npm install
     ```

   - Start the app in development mode:

     ```bash
     npm run dev
     ```

   After running `npm run dev` you should have:
   - website at `http://localhost:5174`

3. **Make necessary changes & commit those changes.**

   Remember, **never push anything directly to the `main` branch.**

   Always switch your branch to `develop` first:

   ```bash
   git checkout develop
   ```

   Verify your current branch:

   ```bash
   git branch
   ```

   It should show `* develop`

   Add your changes:

   ```bash
   git add files-you-edited
   ```

   If there are multiple files:

   ```bash
   git add .
   ```

   Create a commit message following the [Conventional Commits](https://www.conventionalcommits.org) standard:

   ```bash
   git commit -m "<type>: <short description>"
   ```

   | Prefix      | Use for                                          |
   | ----------- | ------------------------------------------------ |
   | `feat:`     | A new feature                                    |
   | `fix:`      | A bug fix                                        |
   | `docs:`     | Documentation changes only                       |
   | `style:`    | Formatting, missing semicolons — no logic change |
   | `refactor:` | Code restructure — no feature or bug change      |
   | `test:`     | Adding or updating tests                         |
   | `chore:`    | Build process, dependency updates, tooling       |

   Run lint and type checks before pushing — the CI pipeline will reject failures:

   ```bash
   npm lint
   npm typecheck
   ```

4. **Push changes to GitHub.**

   ```bash
   git push origin develop
   ```

5. **Create a Pull Request. 👋**

   Go to your repository on GitHub, you'll see a **Compare & pull request** button.

   Click it & write a summary of what changes you made (attach screenshots for any UI changes).

   I will review your code & merge it if it passes all checks. ❤️

   **Before opening a PR, always check:**
   - [ ] `npm lint` passes with no errors
   - [ ] `npm typecheck` passes with no errors
   - [ ] The feature works correctly on `http://localhost:5173` (app) if applicable
   - [ ] You've commented on the related issue so others know it's being worked on

   **Getting help:**
   - Open a [GitHub Discussion](https://github.com/mrinnnmoy/dev-portfolio/discussions) for general questions
   - Comment directly on the issue you're working on
   - Reach out on [Twitter](https://x.com/mrinnnmoy)

---
