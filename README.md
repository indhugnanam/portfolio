# Indhu Gnanasekaran — Portfolio Site

A single-page portfolio site covering **Portfolio**, **Experience**, and **Contact**, built with plain HTML/CSS/JS — no build step, no framework, deploys anywhere that serves static files.

## Structure

```
portfolio-site/
├── index.html          All page content and structure
├── css/style.css        All styling
├── js/script.js         Mobile nav, skill-bar animation, contact form
├── assets/images/       Achievement screenshots (placeholders included)
└── README.md
```

## Before you deploy — things to personalize

1. **Achievement screenshots** — `assets/images/phase-1.jpg`, `phase-2.jpg`, `funded.jpg` are placeholders. Replace them with your own funded-account dashboard screenshots, keeping the same filenames (or update the `src` attributes in `index.html` under the `#portfolio` section).

2. **Contact details** — in `index.html`, under `#contact`:
   - Replace `your.email@gmail.com` (appears twice: the `mailto:` link and the visible text)
   - Replace `https://twitter.com/your_handle` and `@your_handle`
   - Replace `https://instagram.com/indhu.trades` and the handle text with your actual Instagram page

3. **Contact form** — the form posts to [Formspree](https://formspree.io) (free tier works fine):
   - Create a free Formspree account and a new form
   - Copy your form endpoint (looks like `https://formspree.io/f/abcd1234`)
   - Replace `YOUR_FORM_ID` in the form's `action` attribute in `index.html`
   - Until you do this, the form will show a friendly reminder instead of submitting

4. **Skill percentages** — the numbers under Technology experience (JavaScript, PHP, Python, GCP, AWS) are starting estimates. Adjust the `%` text and the matching `style="--pct:__%"` value on each `.skill-bar-fill` in `index.html` to match your own levels.

5. **Trade/experience copy** — the bullet points under Trading and Technology experience are written from what you described; tighten or expand them as you like.

## Running locally

No build tools needed. Either:
- Open `index.html` directly in a browser, or
- Serve it locally: `python3 -m http.server 8000` from the project folder, then visit `http://localhost:8000`

## Deploying

**GitHub Pages** (free, simplest)
1. Create a new GitHub repository and push this folder's contents to it
2. In the repo, go to Settings → Pages
3. Under "Build and deployment", set Source to "Deploy from a branch", branch `main`, folder `/root`
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

**Netlify**
1. Drag and drop this folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repo
2. Netlify deploys automatically with no configuration needed

**Vercel**
1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: "Other" — no build command needed, output directory is the project root

## Notes

- Fonts (Fraunces, Inter) load from Google Fonts via CDN — no local font files needed.
- The site is fully responsive and respects reduced-motion preferences.
- No analytics or tracking included; add your own (e.g. Plausible, GA4) in `index.html` `<head>` if wanted.
