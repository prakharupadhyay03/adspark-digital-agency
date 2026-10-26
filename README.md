# ADSPARK — Creative Advertising & Digital Marketing Studio

ADSPARK is a premium digital advertising and marketing studio website built with React and Vite.

The project delivers an editorial, art-directed experience featuring responsive layouts, interactive navigation, campaign showcases, subtle motion, and a streamlined project inquiry flow.

## Live Demo

[View ADSPARK Live](https://adspark-digital-agency.vercel.app/)

## Overview

ADSPARK combines brand strategy, creative advertising, social content, performance marketing, and bespoke digital experiences into a single responsive studio website.

The design follows a minimal editorial direction with a warm neutral palette, authoritative typography, generous spacing, and restrained interactions rather than a traditional generic SaaS interface.

## Features

- Responsive desktop, tablet, and mobile layouts
- Compact animated mobile navigation with backdrop dismiss
- Interactive hero section with CSS-based 3D motion and perspective depth
- Featured campaign showcase with video and key metrics
- Interactive case-study modal with campaign analysis
- Expandable services section with modal breakdowns
- Strategic solutions and capabilities matrix
- Responsive FAQ accordion
- Project requirement selector and inquiry contact form
- Client-side form validation and submission feedback
- Subtle hover states and micro-interactions
- Reduced-motion accessibility support (`prefers-reduced-motion`)
- Touch-optimized mobile interactions
- Unified editorial design system tokens
- Vercel-ready production build configuration

## Website Sections

### 01 — Navigation

The header features:

- ADSPARK vector logo mark and brand name
- Desktop anchor navigation (Work, Services, Solutions, FAQ)
- "Start a Project" call-to-action
- Accessible hamburger drawer with numbered mobile links

### 02 — Hero

The opening section introduces the studio with the headline:

> **WE MAKE BRANDS IMPOSSIBLE TO IGNORE.**

It combines concise studio positioning with an interactive CSS 3D monolith card that responds to cursor movements and device orientation.

### 03 — About & Services

A compact editorial manifesto followed by five core service areas:

- **Brand Strategy** — Market whitespace discovery and positioning
- **Creative Advertising** — Concept-driven campaign art direction
- **Social & Content** — Editorial short-form production and creator seeding
- **Performance Marketing** — Quantitative media buying across Google, Meta & TikTok
- **Digital Experiences** — Bespoke editorial digital flagships

Each service features an interactive drawer detailing methodology and deliverables.

### 04 — Featured Campaign

A selected campaign presentation for *Aura Botanica* featuring:

- Looping campaign video and art direction poster
- Return on Ad Spend (4.4x), direct revenue lift, and reach metrics
- Interactive modal examining campaign strategy, creative execution, and results

### 05 — Solutions

Three primary capability pillars:

- **Brand** — Strategy, identity & campaign direction
- **Growth** — Performance marketing & acquisition
- **Digital** — Web experiences & digital campaigns

### 06 — FAQ

An editorial accordion addressing key client questions:

- Studio capabilities and service scope
- Project onboarding and discovery sprint
- Omnichannel platform coverage
- Campaign launch and turnaround timelines
- Engagement kick-off procedure

### 07 — Contact

A project inquiry section allowing clients to select services, specify budget tiers, and submit project briefs with instant validation.

### 08 — Footer

Includes:

- ADSPARK studio identity and tagline
- Anchor navigation links
- Social channel links (Instagram, LinkedIn, X)
- Codified studio standards and legal modals (Privacy, Terms)
- Studio copyright notice

## Design System

The visual identity uses a curated editorial palette:

| Token | Hex | Role |
|---|---|---|
| Warm Off-White | `#F4F1EA` | Primary canvas & section backgrounds |
| Deep Black | `#111111` | Primary typography & high-contrast elements |
| Dark Charcoal | `#1C1C1A` | Secondary surfaces & dark footer |
| Muted Terracotta | `#C84B35` | Accent highlights & spark mark |
| Soft Beige | `#D9D1C3` | Subtle hairline dividers & borders |

The design strictly avoids generic AI SaaS aesthetics, bright neon colors, and excessive glassmorphism in favor of high-craft editorial restraint.

## Tech Stack

- **React 19** — Component-driven user interface architecture
- **Vite 8** — Next-generation frontend tooling and fast HMR
- **JavaScript (ES6+)** — Application logic and state management
- **Vanilla CSS** — Custom editorial design system with CSS 3D transforms
- **Lucide React** — Modern, lightweight SVG iconography
- **Vercel** — Production deployment and edge hosting

> *Note: The hero centerpiece is engineered using pure CSS 3D perspective transforms (`perspective`, `rotateX`, `rotateY`) for lightweight, hardware-accelerated performance without requiring heavy external 3D libraries.*

## Responsive Design

The website is engineered across all standard screen sizes:

- **Mobile**: `320px – 767px` (Compact navigation, stacked layouts, touch-friendly tap targets)
- **Tablet**: `768px – 1199px` (Balanced multi-column grids and adjusted padding)
- **Desktop**: `1200px – 1919px` (Full editorial layouts with expanded typography)
- **Ultra-Wide**: `1920px+` (Max-width container constraints ensuring legibility)

## Getting Started

### Prerequisites

- Node.js (version 18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/prakharupadhyay03/adspark-digital-agency.git
cd digital-marketing-agency
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

Compile and optimize the project for production:

```bash
npm run build
```

The output bundle will be generated in the `dist/` directory.

### Preview Production Build

Locally test the compiled production build:

```bash
npm run preview
```

### Code Quality

Run the oxlint linter:

```bash
npm run lint
```

## Project Structure

```text
digital-marketing-agency/
│
├── public/
│   ├── adspark-logo.svg        # ADSPARK vector brand mark
│   ├── favicon.svg             # ADSPARK browser favicon
│   └── icons.svg               # SVG sprite definitions
│
├── src/
│   ├── assets/                 # Static imagery
│   ├── components/             # Reusable UI components
│   │   ├── About.jsx
│   │   ├── AboutServices.jsx
│   │   ├── AgencyPhilosophyModal.jsx
│   │   ├── BackToTop.jsx
│   │   ├── BrandStrip.jsx
│   │   ├── CampaignProcess.jsx
│   │   ├── CaseStudyModal.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── FeaturedCampaign.jsx
│   │   ├── FeaturedWork.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Hero3D.jsx
│   │   ├── LegalModal.jsx
│   │   ├── Navbar.jsx
│   │   ├── Process.jsx
│   │   ├── Results.jsx
│   │   ├── ServiceModal.jsx
│   │   ├── Services.jsx
│   │   ├── Solutions.jsx
│   │   ├── WhyAdSpark.jsx
│   │   └── WhyChooseUs.jsx
│   │
│   ├── data/
│   │   └── agencyData.js       # Centralized editorial content
│   │
│   ├── App.jsx                 # Main application layout
│   ├── App.css                 # Editorial component styling
│   ├── index.css               # Core design tokens & typography
│   └── main.jsx                # React DOM entrypoint
│
├── index.html                  # HTML entrypoint & SEO metadata
├── package.json                # Project dependencies and scripts
├── vercel.json                 # Vercel deployment configuration
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## License

All rights reserved © 2026 ADSPARK. Independent Creative & Digital Studio.