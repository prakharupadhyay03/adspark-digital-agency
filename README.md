# ADSPARK — Creative Advertising & Digital Marketing Studio

> A refined, compact, and responsive digital advertising and marketing studio website built with **React** + **Vite**, featuring **Three.js 3D motion** and **short looping campaign videos**. Inspired by the design philosophy of **Squarespace**, **Locomotive**, and **Pentagram**.

---

## ⚡ Core Architecture: Refined, Compact & Responsive

This version is structured into **8 intentional, high-impact sections** (no repetitive fluff, no 12-section fatigue, no card-grid templates):

1. **NAVBAR ([`Navbar.jsx`](./src/components/Navbar.jsx))**
   - Height: 72px compact header with solid `#F4F1EA` background
   - Desktop: `ADSPARK`, `Work`, `Services`, `Solutions`, `FAQ`, `START A PROJECT →`
   - Mobile: Smooth animated dropdown drawer with zero horizontal overflow

2. **HERO / ZERO SECTION ([`Hero.jsx`](./src/components/Hero.jsx) + [`Hero3D.jsx`](./src/components/Hero3D.jsx))**
   - Desktop: Balanced 1 viewport height layout (`min-height: calc(100vh - 72px)`)
   - Eyebrow: `INDEPENDENT CREATIVE & DIGITAL STUDIO`
   - Main Headline:
     ```
     WE MAKE
     BRANDS
     IMPOSSIBLE TO IGNORE.
     ```
   - Concise copy: *"Strategy, creative and digital campaigns designed to turn attention into meaningful growth."*
   - Buttons: `START A PROJECT` & `VIEW OUR WORK`
   - **3D Visual Centerpiece:** Lightweight Three.js procedural campaign monolith plaque with mouse parallax, slow ambient rotation, terracotta geometric accents, and an integrated 2-3s looping muted campaign video badge.

3. **ABOUT + SERVICES ([`AboutServices.jsx`](./src/components/AboutServices.jsx))**
   - Combined compact section with editorial statement:
     *"Strategy meets creative to build brands people remember."*
   - 5 compact horizontal rows:
     - `01 Brand Strategy`
     - `02 Creative Advertising`
     - `03 Social & Content`
     - `04 Performance Marketing`
     - `05 Digital Experiences`
   - Interactive hover background shift, arrow toggle, and inline deliverables drawer.

4. **FEATURED CAMPAIGN / 3D MEDIA ([`FeaturedCampaign.jsx`](./src/components/FeaturedCampaign.jsx))**
   - Heading: `SELECTED CAMPAIGN`
   - Large media composition with 2-3s looping muted video (`AURA BOTANICA`)
   - Minimal information bar: `CAMPAIGN 01`, `"Built to stop the scroll."`, verified metrics (`4.4x ROAS`, `+215% Revenue Lift`, `14.2M Reach`)
   - `VIEW CAMPAIGN →` button opening the detailed case study modal.

5. **PRODUCTS / SOLUTIONS ([`Solutions.jsx`](./src/components/Solutions.jsx))**
   - 3 clean editorial blocks:
     - `01 BRAND` (Strategy, identity & campaign direction)
     - `02 GROWTH` (Performance marketing & acquisition)
     - `03 DIGITAL` (Web experiences & digital campaigns)
   - Large typography, capability inclusion tags, and direct inquiry links.

6. **FAQ ([`FAQ.jsx`](./src/components/FAQ.jsx))**
   - Concise 5-question editorial accordion:
     1. What does AdSpark do?
     2. How does a project begin?
     3. Which platforms do you work with?
     4. How long does a campaign take?
     5. How can I start a project?
   - Clean horizontal rows with `+ / −`, smooth animation, no boxy cards.

7. **CONTACT / REQUIREMENT ([`Contact.jsx`](./src/components/Contact.jsx))**
   - Headline: `"LET'S MAKE SOMETHING WORTH NOTICING."`
   - Compact line-bordered form: Name, Email, Company, Service, Budget, Project Requirements.
   - Frontend validation, loading state, and refined confirmation screen.

8. **FOOTER ([`Footer.jsx`](./src/components/Footer.jsx))**
   - Clean brand wordmark `ADSPARK`, tagline, navigation, social links, copyright, and legal modal links.

---

## 🎨 Design System & Palette

- **Warm Off-White:** `#F4F1EA`
- **Deep Black:** `#111111`
- **Dark Charcoal:** `#1C1C1A`
- **Muted Terracotta:** `#C84B35` (used sparingly as accent)
- **Soft Beige:** `#D9D1C3`
- **Strictly Prohibited:** Zero blue, purple, cyan, neon, or glassmorphic blurs.

---

## 📱 Mobile Responsiveness Tested & Verified

Optimized across all screen widths:
- **320px & 375px:** Recomposed hero (Headline ↓ short text ↓ CTA ↓ 3D / video visual), single-column stacked forms and blocks, zero horizontal scrollbar (`overflow-x: hidden`).
- **390px & 480px:** Scaled typography and comfortable touch targets.
- **768px & 1024px:** Clean tablet rebalancing.
- **1200px & 1920px:** Balanced two-column layouts, 1-viewport-height hero, smooth cursor parallax.

---

## 🛠️ Commands & Deployment

```bash
# Start local development server
npm run dev

# Run oxlint static analysis (0 errors, 0 warnings)
npm run lint

# Build production bundle (optimized three.js chunking, 0 errors)
npm run build

# Preview build locally
npm run preview
```

Pre-configured with [`vercel.json`](./vercel.json) for 1-click Vercel deployment.
