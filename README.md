# Fermor – Frontend Assignment

An independent homepage concept for [Fermor](https://fermor.in), built as a frontend developer assignment. It is not an official Fermor site.

**Live demo:** ADD_YOUR_VERCEL_URL_HERE
**GitHub:** https://github.com/kishorekrish1122/Fermor-frontend

## Overview

Fermor is a personal finance platform for India that offers free calculators (SIP, EMI, FD, income tax, take-home pay). It is independent: it does not sell funds, FDs or insurance, every result shows its formula, and the math runs in the browser with no login needed.

The homepage is built around that promise. Instead of a mock dashboard full of fake balances, the hero and the main section show **real, working arithmetic**, so a visitor understands the product by using it.

**Who it is for:** people in India about to make a money decision, such as starting a SIP, taking a loan or choosing an FD, who want to check the numbers themselves.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (one hero entrance and nothing else)
- lucide-react (icons)

## Features

- Responsive layout for desktop, tablet and mobile, with a hamburger menu on small screens
- Live SIP calculator with sliders for monthly amount, years and return, plus a growth chart that updates instantly
- A "Show the full math" panel that prints the formula with the visitor's own values
- Insight cards whose figures are computed from the same formulas, not typed in
- Smooth scrolling, anchor offsets for the sticky navbar, hover and focus states
- Reduced-motion support and visible keyboard focus

## Design Decisions

**Product story first.** I checked fermor.in before designing and built the page around what Fermor actually is: free, independent, transparent calculators. That is why there is no "connect your bank" flow and no signup form.

**A calculator as the product visual.** A mock dashboard with invented balances says little. A calculator the visitor can drag makes the value of the product clear in seconds.

**Computed numbers.** All figures come from `src/lib/finance.js` (SIP future value, EMI, real return after inflation) and are formatted with Indian digit grouping and lakh/crore shorthand in `src/lib/format.js`. Nothing in the insights is hardcoded.

**Visual system.** Off-white background, charcoal text, white cards with light gray borders and a single restrained emerald accent used for actions and positive values. One typeface (Manrope) with tabular numerals so money lines up. Colors and fonts are defined once as Tailwind theme tokens in `src/index.css`.

**Different layouts per section.** A sticky-heading split list for the value section, a two-panel calculator, a numbered timeline for the three steps (the only place numbers make sense, because it is a sequence) and a featured-plus-grid layout for insights.

**Restrained motion.** One orchestrated entrance in the hero. Everything else responds to the visitor's actions, such as the sliders, hover states and the mobile menu.

## Assumptions and Limits

- The SIP formula is the standard textbook one: monthly compounding, with each instalment invested at the start of the month. Fermor's own calculators may use slightly different conventions, so results can differ.
- All figures are estimates for learning, not financial advice.
- There is no backend. Everything runs in the browser.

## Project Structure

```
src/
├── components/
│   ├── ui/            Button, Section (shared wrappers)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ValueSection.jsx
│   ├── DashboardPreview.jsx   (the SIP calculator)
│   ├── FinancialCard.jsx
│   ├── HowItWorks.jsx
│   ├── Insights.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── data/              navLinks, insights
├── lib/               finance math, number formatting
├── App.jsx
├── main.jsx
└── index.css          theme tokens
```

## Run Locally

1. Clone the repository
```bash
   git clone https://github.com/kishorekrish1122/Fermor-frontend.git
   cd Fermor-frontend
```
2. Install dependencies
```bash
   npm install
```
3. Start the development server
```bash
   npm run dev
```
4. Open http://localhost:5173

To create a production build, run `npm run build`.