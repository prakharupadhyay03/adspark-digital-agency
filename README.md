# RV CANVAS — Creative Advertising & Digital Marketing Studio

RV CANVAS is a premium digital advertising and marketing studio website built with React and Vite.

The project focuses on an editorial, art-directed experience with responsive layouts, interactive navigation, campaign showcases, subtle motion, and a streamlined project inquiry flow.

## Live Demo

[View RV CANVAS Live](https://adspark-digital-agency.vercel.app/)

## Overview

RV CANVAS combines strategy, creative advertising, social content, performance marketing, and digital experiences into a single responsive studio website.

The design follows a minimal editorial direction with a warm neutral palette, large typography, generous spacing, and restrained interactions rather than a traditional SaaS-style interface.

## Features

- Responsive desktop, tablet, and mobile layouts
- Compact animated mobile navigation
- Interactive hero section with motion and 3D visual effects
- Featured campaign showcase
- Campaign case-study modal
- Interactive services section
- Solutions and capabilities section
- FAQ accordion
- Project requirements and inquiry form
- Client-side form validation
- Subtle hover and interaction effects
- Reduced-motion accessibility support
- Responsive touch interactions
- Clean editorial visual system
- Vercel-ready production build

## Website Sections

### 01 — Navigation

The navigation includes:

- RV CANVAS logo and brand identity
- Work
- Services
- Solutions
- FAQ
- Start a Project

The mobile navigation uses a compact animated dropdown with responsive spacing and protection against horizontal overflow.

### 02 — Hero

The opening section introduces the studio with the headline:

> **WE MAKE BRANDS IMPOSSIBLE TO IGNORE.**

It combines concise studio messaging with an interactive visual centerpiece and subtle motion effects.

### 03 — About & Services

A compact editorial introduction followed by five core service areas:

- Brand Strategy
- Creative Advertising
- Social & Content
- Performance Marketing
- Digital Experiences

Each service can be expanded to reveal additional information.

### 04 — Featured Campaign

A selected campaign presentation featuring:

- Campaign media
- Campaign information
- Performance metrics
- Interactive case-study modal

### 05 — Solutions

Three primary capability areas:

- **Brand** — Strategy, identity & campaign direction
- **Growth** — Performance marketing & acquisition
- **Digital** — Web experiences & digital campaigns

### 06 — FAQ

A responsive accordion covering common questions about:

- Services
- Project process
- Platforms
- Campaign timelines
- Starting a project

The FAQ uses clean editorial rows with smooth expand/collapse interactions.

### 07 — Contact

A project inquiry section with fields for:

- Name
- Email
- Company
- Service
- Budget
- Project Requirements

The form includes frontend validation, loading feedback, and a confirmation state.

### 08 — Footer

The footer includes:

- RV CANVAS branding
- Navigation
- Social links
- Copyright
- Legal information

## Design System

| Element | Value |
|---|---|
| Warm Off-White | `#F4F1EA` |
| Deep Black | `#111111` |
| Dark Charcoal | `#1C1C1A` |
| Muted Terracotta | `#C84B35` |
| Soft Beige | `#D9D1C3` |

The interface intentionally avoids excessive gradients, neon colors, glassmorphism, and generic SaaS visual patterns.

The visual direction is inspired by premium editorial design, modern creative studios, and art-directed digital experiences.

## Tech Stack

- **React**
- **Vite**
- **JavaScript / JSX**
- **CSS**
- **Lucide Icons**
- **Vercel**

> Note: The interactive hero visual uses CSS-based 3D transforms and motion effects rather than requiring a heavy 3D model.

## Responsive Design

The website is designed for:

- Mobile: `320px+`
- Tablet: `768px+`
- Desktop: `1200px+`
- Large screens: `1920px+`

The mobile experience includes a compact navigation panel, responsive typography, stacked layouts, touch-friendly controls, and protection against horizontal overflow.

## Accessibility

The project includes:

- Semantic HTML structure
- Accessible navigation controls
- `aria-expanded` and `aria-controls` for interactive elements
- Keyboard-friendly interactions
- Reduced-motion support
- Descriptive image alt text
- Responsive touch interactions

## Project Structure

```text
digital-marketing-agency/
│
├── public/
│   ├── favicon.svg
│   └── rv-canvas-logo.png
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero3D.jsx
│   │   ├── WhyRVCanvas.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   │
│   ├── data/
│   │   └── agencyData.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md