# BONDZE Precious Metals and Mineral Trading LLC

Professional corporate website for BONDZE Precious Metals and Mineral Trading LLC, built with React, Vite, and modern responsive design.

## Overview

This is a frontend-only corporate website designed with an institutional aesthetic. The site features:

- **Design System**: Dark blue, charcoal, and gold accent color scheme inspired by the company logo
- **Typography**: Modern sans-serif fonts (Inter) for clear readability
- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, and 1024px
- **Accessibility**: Semantic HTML, keyboard navigation, screen reader support

## Tech Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: CSS with CSS variables (no heavy CSS frameworks)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
/bondze-website
├── /public
│   ├── logo.svg
│   └── favicon.svg
├── /src
│   ├── /assets
│   ├── /components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── ContactForm.jsx
│   │   └── MapSection.jsx
│   ├── /pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Business.jsx
│   │   ├── Geography.jsx
│   │   ├── Governance.jsx
│   │   ├── Partnerships.jsx
│   │   ├── Investors.jsx
│   │   ├── Careers.jsx
│   │   ├── Contact.jsx
│   │   └── Legal.jsx
│   ├── /styles
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── layout.css
│   ├── /data
│   │   └── siteContent.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About BPMM |
| `/business` | Our Business |
| `/geography` | Geographic Footprint |
| `/governance` | Governance & Compliance |
| `/partnerships` | Partnerships |
| `/investors` | Investors |
| `/careers` | Careers |
| `/contact` | Contact |
| `/legal` | Legal & Policies |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Design Principles

- **Minimalist**: Clean layouts with intentional white space
- **Institutional**: Professional appearance suitable for financial/trading sector
- **No Flashy Animations**: Subtle, professional transitions only
- **Trust & Clarity**: Information architecture prioritizes ease of understanding
- **Responsive**: Seamless experience across all device sizes

## Color System

| Role | Color | Hex |
|------|-------|-----|
| Primary Dark | Dark Blue | `#0a1628` |
| Primary | Navy | `#1a2a4a` |
| Primary Light | Light Navy | `#2a3f6a` |
| Accent | Gold | `#b8860b` |
| Accent Light | Light Gold | `#d4af37` |
| Charcoal | Dark Gray | `#2d3436` |
| Background | White | `#ffffff` |
| Background Alt | Light Gray | `#f7f9fc` |

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© BONDZE Precious Metals and Mineral Trading LLC. All Rights Reserved.
