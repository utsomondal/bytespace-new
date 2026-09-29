# ByteSpace Landing Page

A pixel-accurate, responsive recreation of the **ByteSpace landing page** from Figma, developed as part of the **Doin Tech Limited Jr. Software Engineer (Frontend) assessment**.

The project focuses on visual fidelity, reusable React components, clean structure, and responsive behavior.

**Live Demo:** https://bytespace-new-theta.vercel.app/
**Design Reference:** [ByteSpace Figma Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website)

---

## Tech Stack

* **React** — component-based UI
* **Vite** — development and build tooling
* **Tailwind CSS** — responsive utility-first styling
* **JavaScript** — implementation language

---

## Implementation Highlights

### Design-to-Code

Built directly from the Figma design with attention to layout, typography, spacing, colors, asset placement, and responsive behavior.

### Design Tokens

Core colors, typography, spacing, and common UI styles are centralized in `index.css` using Tailwind CSS v4 `@theme` tokens.

### Reusable Components

Shared patterns are implemented through reusable components such as `Button`, `CourseCard`, `AvatarStack`, Category Pills, and Section Containers.

### Data-Driven Rendering

Courses, categories, testimonials, navigation links, and repeated UI elements are generated from JavaScript data arrays to reduce duplicated JSX.

### Responsive Design

The interface adapts across desktop, tablet, and mobile through responsive grids, flexible layouts, mobile navigation, content stacking, and repositioned decorative elements.

---

## Sections Implemented

* [x] Responsive Navbar
* [x] Hero & Search
* [x] Partner Logo Strip
* [x] Course Discovery
* [x] Category Filters
* [x] Learning Paths
* [x] Growth Section
* [x] Creator Showcase & CTA
* [x] Testimonials
* [x] Footer & Newsletter UI
* [ ] Login / Signup pages

---

## Project Structure

```text
src/
├── components/
│   ├── CategoryGrid.jsx
│   ├── CourseSection.jsx
│   ├── CreatorCTA.jsx
│   ├── Footer.jsx
│   ├── GrowthSection.jsx
│   ├── Hero.jsx
│   ├── LogoStrip.jsx
│   ├── Navbar.jsx
│   └── Testimonials.jsx
├── ui/
│   ├── Button.jsx
│   └── CourseCard.jsx
├── App.jsx
└── index.css
```

---

## Getting Started

```bash
git clone https://github.com/utsomondal/bytespace-new.git
cd bytespace-new
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

---

## Engineering Approach

The implementation prioritizes:

* **Visual fidelity** through Figma-based measurements
* **Reusability** through shared components and data-driven UI
* **Maintainability** through centralized design tokens
* **Simplicity** by avoiding unnecessary dependencies and architecture

The structure also allows future additions such as API integration, routing, form handling, and additional pages.

---

## Assessment Context

Built for the **Doin Tech Limited Jr. Software Engineer (Frontend) assessment** to demonstrate Figma-to-React implementation, reusable components, responsive development, asset organization, and maintainable frontend code.

---

## Author

**Utso Mondal**

[Portfolio](https://utsomondal.vercel.app/) · [GitHub](https://github.com/utsomondal) · [LinkedIn](https://www.linkedin.com/in/utsodev)
