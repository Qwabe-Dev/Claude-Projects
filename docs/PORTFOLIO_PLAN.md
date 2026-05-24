# Portfolio Website — Master Plan
> Andile G. | Updated: 2026-05-24

---

## 1. Stack Decision

| Layer | Tool | Cost |
|---|---|---|
| **Build** | Pure HTML + CSS + JavaScript | Free |
| **Animations** | AOS.js (CDN) | Free |
| **Icons** | Font Awesome (CDN) | Free |
| **Fonts** | Google Fonts | Free |
| **Contact Form** | Formspree | Free (50 submissions/mo) |
| **Hosting** | GitHub Pages | Free |
| **SSL / HTTPS** | GitHub Pages built-in | Free |
| **Custom Domain** | Optional — Namecheap ~$10/yr | Only paid item |

**No Canva needed.** Full coded site = full control, no watermarks, no platform lock-in.

---

## 2. Folder Structure

```
portfolio-website/
├── index.html              ← Main site file
├── src/
│   ├── css/
│   │   └── style.css       ← All styles
│   ├── js/
│   │   └── main.js         ← Interactions, animations
│   └── assets/
│       ├── images/         ← Your photo, project screenshots
│       ├── icons/          ← Favicon, social icons
│       └── fonts/          ← Any local fonts (optional)
├── docs/
│   ├── PORTFOLIO_PLAN.md   ← This file
│   ├── CONTENT.md          ← Your personal content (fill this in)
│   └── SETUP_GUIDE.md      ← Step-by-step deployment guide
└── tests/
    └── test_links.html     ← Manual test checklist
```

---

## 3. Site Sections

### ① Hero
- Your name, job title, tagline (2 sentences max)
- CTA buttons: "View My Work" + "Download CV"
- Your photo (optional but strongly recommended)
- Quick stats: years experience, projects, any metric you're proud of
- Availability badge ("Open to opportunities" or "Currently employed")

### ② About
- Who you are — personal, not a job description
- Skills & tools grid (highlight your top 3–5)
- Optional: a short timeline / experience strip

### ③ Projects
- 3–6 cards minimum, each with:
  - Screenshot or placeholder image
  - Title + 2-line description
  - Tags (tools/skills used)
  - Link to live project or case study
- Filter by category (optional, adds interactivity)

### ④ Contact
- Left: invite copy + social links (email, LinkedIn, GitHub)
- Right: Contact form (powered by Formspree — free, no backend)
- Footer: copyright + back-to-top

---

## 4. Design Decisions

| Decision | Choice | Reason |
|---|---|---|
| Vibe | Clean & Professional | User preference |
| Color accent | `#2563EB` (blue) | Trustworthy, professional |
| Font | Inter (Google Fonts) | Clean, modern, highly readable |
| Layout | Single-page scroll | Easy to navigate, no routing needed |
| Card hover | Subtle border glow | "Wow" without being distracting |
| Scroll animation | AOS fade-up | Smooth, professional feel |
| Mobile | Fully responsive | Essential for recruiters on phones |

---

## 5. "Wow" Features (Still Free)

- [ ] **Smooth scroll** with offset for fixed nav
- [ ] **Typing animation** in hero (cycles through job titles)
- [ ] **Active nav highlight** as you scroll sections
- [ ] **Project image hover zoom** effect
- [ ] **Dark/Light mode toggle** (localStorage)
- [ ] **Back-to-top button** that appears on scroll
- [ ] **Scroll progress bar** at the top of the page
- [ ] **Confetti or sparkle** on contact form submit (micro-delight)
- [ ] **Animated skill bars** or tag cloud

---

## 6. What's Still Needed From You

See `CONTENT.md` — fill that file in before Opus builds the site.

### Critical (site can't be built without these):
- [ ] Your full name and job title/profession
- [ ] Your tagline (what you do in 1–2 sentences)
- [ ] Short bio (3–5 sentences about you)
- [ ] Skills list (tools, software, languages, methodologies)
- [ ] 3–6 projects with: name, description, tags, links (or "in progress")
- [ ] Contact links: email ✅ (ahgumede1@gmail.com), LinkedIn URL, GitHub URL

### Nice to Have:
- [ ] Professional photo (headshot preferred) → drop in `src/assets/images/`
- [ ] Project screenshots → drop in `src/assets/images/`
- [ ] CV/Resume PDF → drop in `src/assets/` (for the "Download CV" button)
- [ ] Any specific colour preference (default: `#2563EB` blue)
- [ ] Custom domain name (if you have or plan to get one)

---

## 7. Build Instructions for Opus

When content is ready, prompt Opus with:

```
Using the content in CONTENT.md and the plan in PORTFOLIO_PLAN.md, 
build the full portfolio website. 

Files to create:
- index.html (full single-page site)
- src/css/style.css (all styles, responsive)
- src/js/main.js (animations, nav, dark mode, typing effect)

Requirements:
- Use AOS.js from CDN for scroll animations
- Use Font Awesome CDN for icons
- Use Google Fonts (Inter)
- Contact form via Formspree (use placeholder action URL, I'll replace)
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll, active nav on scroll, back-to-top button
- Dark/light mode toggle
- No build tools, no frameworks — pure HTML/CSS/JS
- Test that all internal links work
- Run a local server test after building
```

---

## 8. Deployment Steps (GitHub Pages)

1. Create a GitHub account at github.com (free)
2. Create a new repo named `yourusername.github.io`
3. Upload all files from `portfolio-website/` to the repo root
4. Go to repo **Settings → Pages → Source: main branch → /root**
5. Your site goes live at `https://yourusername.github.io` within ~2 minutes
6. (Optional) Add custom domain in the same Settings → Pages section

---

## 9. Testing Checklist

Before going live, run through `tests/test_links.html`:

- [ ] All nav links scroll to correct section
- [ ] "Download CV" button works (if PDF added)
- [ ] Contact form submits and sends email
- [ ] Site looks good on mobile (375px width)
- [ ] Site looks good on tablet (768px width)
- [ ] All project links open correctly
- [ ] Dark mode toggle works
- [ ] No broken images
- [ ] Page loads in under 3 seconds
- [ ] Footer copyright year is correct

---

*Next step: Fill in `CONTENT.md` with your personal details, then hand off to Opus to build.*
