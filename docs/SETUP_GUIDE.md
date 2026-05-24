# Setup & Deployment Guide
> Step-by-step from zero to live website — no prior experience needed.

---

## Phase 1: Fill In Your Content (Before Anything Else)

1. Open `docs/CONTENT.md`
2. Fill in every section — your name, bio, skills, projects, links
3. Drop your photo into `src/assets/images/` (rename it `profile.jpg`)
4. Drop project screenshots into `src/assets/images/` (e.g. `project1.png`)
5. Drop your CV PDF into `src/assets/` (e.g. `Andile_CV_2026.pdf`)

---

## Phase 2: Build the Site (Opus does this)

Once `CONTENT.md` is complete, give Opus the build prompt from section 7 of `PORTFOLIO_PLAN.md`. Opus will create:
- `index.html`
- `src/css/style.css`
- `src/js/main.js`

---

## Phase 3: Set Up Formspree (Contact Form)

1. Go to https://formspree.io and sign up (free)
2. Create a new form — it gives you a URL like `https://formspree.io/f/xyzabc`
3. In `index.html`, find the `<form>` tag and set `action="YOUR_FORMSPREE_URL"`
4. Test it — submit the form and check your email

---

## Phase 4: Test Locally

Open `tests/test_checklist.html` in your browser and work through it.

To preview `index.html` locally:
- **Easiest**: Just double-click `index.html` — it opens in your browser
- **Better**: Use VS Code with the "Live Server" extension (free) for auto-refresh

---

## Phase 5: Deploy to GitHub Pages

### Step 1 — Create GitHub account
Go to https://github.com → Sign up (free)

### Step 2 — Create your repository
- Click the **+** icon → **New repository**
- Name it: `yourusername.github.io` (replace with your actual GitHub username)
- Set it to **Public**
- Click **Create repository**

### Step 3 — Upload your files
- Click **uploading an existing file**
- Drag and drop everything inside `portfolio-website/` (all folders and files)
- Commit with message: "Initial portfolio upload"

### Step 4 — Enable GitHub Pages
- Go to your repo → **Settings** → **Pages** (left sidebar)
- Under **Source**: select **Deploy from a branch**
- Branch: **main**, Folder: **/ (root)**
- Click **Save**

### Step 5 — Go live!
Wait ~2 minutes, then visit: `https://yourusername.github.io`

---

## Phase 6 (Optional): Add a Custom Domain

1. Buy a domain on Namecheap (~$10/yr) or Google Domains
2. In your GitHub repo → **Settings → Pages → Custom domain**
3. Enter your domain (e.g. `andile.co.za`)
4. On Namecheap, set DNS records as GitHub instructs
5. Check "Enforce HTTPS"

Your site now lives at `https://yourdomain.com` 🎉

---

## Understanding the Code (Learning Guide)

### Frontend = What people see
- **HTML** (`index.html`) — The structure. Think of it as the skeleton.
- **CSS** (`src/css/style.css`) — The styling. Colors, fonts, layout, spacing.
- **JavaScript** (`src/js/main.js`) — The behaviour. Animations, form logic, dark mode.

### Backend = What happens behind the scenes
This portfolio has **no traditional backend** — it's a static site. Instead:
- **Formspree** handles the contact form (their servers receive and email you)
- **GitHub Pages** serves the files (their servers send files to visitors)

You don't manage any servers — this is by design. It's simpler, cheaper, and perfectly suited to a portfolio.

### How to make changes after it's live
1. Edit the file locally (e.g. update a project in `index.html`)
2. Go to your GitHub repo → find the file → click the pencil (edit) icon
3. Paste the updated content → Commit
4. GitHub Pages auto-rebuilds in ~1 minute

---

## File Map (Quick Reference)

```
index.html          ← Edit this to change content
src/css/style.css   ← Edit this to change colours, fonts, spacing
src/js/main.js      ← Edit this to change animations, interactions
src/assets/images/  ← Drop photos and screenshots here
src/assets/         ← Drop CV PDF here
```

---

*Questions? Ask Claude — describe what you want to change and Claude will edit the code.*
