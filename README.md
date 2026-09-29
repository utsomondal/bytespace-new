# ByteSpace Landing Page

A pixel-accurate, responsive implementation of the **ByteSpace landing page**, recreated from a Figma design as part of the **Doin Tech Limited Jr. Software Engineer (Frontend) assessment**.

The project focuses on translating a high-fidelity visual design into maintainable, reusable React components while preserving the original layout, typography, spacing, asset placement, and responsive behavior.

**Live Demo:** [https://bytespace-new-theta.vercel.app/](https://bytespace-new-theta.vercel.app/)
**Design Reference:** [ByteSpace Figma Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website)

---

## Tech Stack

* **React** — component-based UI architecture
* **Vite** — lightweight development and production build tooling
* **Tailwind CSS** — utility-first styling with custom design tokens
* **JavaScript** — no TypeScript, keeping the implementation aligned with the assessment scope

---

## Implementation Approach

The implementation was approached as a **design-to-code exercise**, with emphasis on visual accuracy, reusable components, and maintainable styling.

### 1. Framework Decision

The landing page was developed using **React** with **Vite** as the frontend framework and build tool. **Tailwind CSS** was used for styling and responsive layout implementation. This combination provides a lightweight, fast, and flexible development environment for building the interface based on the Figma design.

The project uses **React** for component-based UI development, **Vite** for fast development and production builds, and **Tailwind CSS** for consistent utility-based styling, responsive design, spacing, typography, and visual elements.

### 2. Design Token Extraction

Before implementing individual sections, the core visual system was extracted from the Figma design.

This included:

* Neutral, Primary, and Secondary color scales
* Heading, Body, and Label typography scales
* Consistent spacing and sizing patterns
* Common UI treatments such as rounded corners, borders, shadows, and pills

These values were centralized in `index.css` using Tailwind CSS v4's `@theme` directive.

As a result, components use semantic project tokens such as:

```jsx
bg-primary-800
text-neutral-950
text-secondary-500
heading-s
body-m
label-m
```

instead of repeatedly defining raw values.

This keeps the styling system consistent and allows global design changes to be made from a single location.

### 3. Asset Organization

Figma assets were renamed before export using a predictable naming convention instead of keeping automatically generated names such as `Frame`, `Ellipse 7`, or `Group 12`.

For example:

```text
shape-{color}-{form}-{variant}.png
```

Example:

```text
shape-lime-squiggle-lg.png
```

Assets are then grouped by their purpose or page section:

```text
public/
├── images/
│   ├── avatars/
│   ├── courses/
│   ├── cta/
│   ├── growth/
│   ├── hero/
│   ├── logo/
│   ├── persons/
│   └── testimonials/
└── icons/
```

This makes assets easier to locate, reuse, and maintain as the project grows.

### 4. Pixel-Accurate Layout Implementation

For visually complex sections, especially areas containing overlapping cards, decorative shapes, and character cutouts, positioning was based on the Figma design rather than visual approximation alone.

The implementation process was:

1. Inspect the element dimensions and placement in Figma.
2. Identify its relationship to the main 1440px layout container.
3. Translate the measured dimensions into responsive CSS.
4. Layer overlapping elements using predictable positioning and `z-index`.
5. Compare the browser output against the reference and refine spacing and alignment.

A shared `container-1440` layout pattern is used to maintain consistent horizontal alignment across major sections.

This approach is particularly important for the Hero, Growth, and Creator CTA sections where multiple visual layers interact with one another.

### 5. Component-First Architecture

The page was developed **section by section**, with each major area isolated into its own component.

This keeps components focused on a single responsibility and makes individual sections easier to test, refine, and reuse.

A simplified architecture looks like:

```text
App
├── Navbar
├── Hero
├── LogoStrip
├── CourseSection
├── CategoryGrid
├── GrowthSection
├── CreatorCTA
├── Testimonials
└── Footer
```

Shared UI primitives such as buttons and course cards live separately from page-specific sections.

### 6. Data-Driven Rendering

Repeated UI is generated from JavaScript data arrays rather than duplicated JSX.

For example:

```jsx
const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];
```

and then rendered through:

```jsx
{benefits.map((item) => (
  <li key={item}>{item}</li>
))}
```

The same principle is applied to courses, categories, testimonials, avatars, navigation links, and footer link groups.

This means adding a new item generally requires adding data rather than copying and modifying an entire JSX block.

---

## Reusable Components

| Component / Pattern   | Used In                     | Reusability                                                    |
| --------------------- | --------------------------- | -------------------------------------------------------------- |
| `ui/Button.jsx`       | Hero, Creator CTA, Footer   | Centralizes button styles and supports multiple variants       |
| `ui/CourseCard.jsx`   | Course Discovery, Growth    | Uses props for image, title, rating, level, avatars, and price |
| `AvatarStack` pattern | Hero, Course Cards, Growth  | Provides a consistent social-proof avatar treatment            |
| Category Pill         | Category filters            | Shared visual pattern driven by category data                  |
| Feature / List Item   | Growth and related sections | Reusable icon + text structure for feature lists               |
| Section Container     | Major page sections         | Keeps content aligned to the same desktop layout width         |

### Component Reuse Philosophy

Reusable components are designed around **shared visual and behavioral patterns**, rather than extracting every small JSX fragment into a separate file.

For example, a course card is a meaningful reusable component because the same structure appears in multiple sections with different content.

On the other hand, highly section-specific decorative positioning remains inside its parent section, preventing unnecessary abstraction.

This keeps the codebase reusable without making the component hierarchy unnecessarily complex.

---

## Project Structure

```text
bytespace-landing/
├── public/
│   ├── images/
│   │   ├── avatars/
│   │   ├── courses/
│   │   ├── cta/
│   │   ├── growth/
│   │   ├── hero/
│   │   ├── logo/
│   │   ├── persons/
│   │   └── testimonials/
│   └── icons/
│
├── src/
│   ├── components/
│   │   ├── CategoryGrid.jsx
│   │   ├── CourseSection.jsx
│   │   ├── CreatorCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── GrowthSection.jsx
│   │   ├── Hero.jsx
│   │   ├── LogoStrip.jsx
│   │   ├── Navbar.jsx
│   │   └── Testimonials.jsx
│   │
│   ├── ui/
│   │   ├── Button.jsx
│   │   └── CourseCard.jsx
│   │
│   ├── App.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Responsive Implementation

The original Figma design is desktop-focused, but the implementation is structured to adapt to smaller screens.

Responsive behavior includes:

* Responsive grid layouts
* Mobile navigation handling
* Flexible content widths
* Responsive typography and spacing
* Repositioning of layered decorative elements
* Mobile-friendly card and content stacking
* Hidden decorative elements where necessary to preserve readability

The goal is not simply to scale the desktop layout down, but to maintain the visual hierarchy and usability of the design across viewport sizes.

---

## Sections Implemented

* [x] Navbar with responsive mobile menu
* [x] Hero section
* [x] Hero search interface
* [x] Decorative hero illustrations
* [x] Statistics / social-proof cards
* [x] Partner logo strip
* [x] Course discovery section
* [x] Course cards with reusable data-driven rendering
* [x] Category filters
* [x] Learning paths grid
* [x] Professional growth section
* [x] Course creator / management showcase
* [x] Creator CTA
* [x] Community testimonials
* [x] Footer
* [x] Newsletter signup UI
* [ ] Login / Signup pages *(bonus — not implemented)*

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/utsomondal/bytespace-new
cd bytespace-landing
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Development Workflow

The implementation followed an incremental workflow:

```text
Figma Inspection
      ↓
Design Token Extraction
      ↓
Asset Organization
      ↓
Reusable UI Primitives
      ↓
Section-by-Section Implementation
      ↓
Responsive Refinement
      ↓
Visual Comparison
      ↓
Final Build & Deployment
```

Each major section was implemented and refined independently before moving to the next section. This reduced visual regressions and made it easier to isolate layout issues.

---

## Engineering Considerations

### Maintainability

Shared typography, color, and spacing tokens reduce duplicated styling decisions.

### Reusability

Repeated UI patterns are represented as components or data-driven templates rather than copied markup.

### Consistency

Common design elements such as buttons, cards, pills, typography, and avatar stacks follow shared patterns throughout the page.

### Visual Fidelity

Complex compositions use measured dimensions and positioning from the original design instead of relying only on approximate CSS placement.

### Simplicity

The implementation intentionally avoids unnecessary dependencies or architectural complexity because the project is a static frontend landing page.

---

## Why This Architecture?

The project intentionally uses a relatively simple architecture because the requirements are primarily visual and frontend-focused.

There is no backend, authentication flow, database, or server-side business logic required for the assessment. Introducing additional infrastructure would increase complexity without providing meaningful value for the current scope.

The resulting structure keeps the codebase:

* Easy to understand
* Easy to modify
* Easy to extend
* Focused on reusable UI
* Suitable for future integration with APIs or application logic

---

## Future Improvements

Potential next steps include:

* Implementing Login and Signup pages
* Connecting the search and category filters to real course data
* Adding client-side routing
* Integrating API-driven course content
* Adding form validation and newsletter submission handling
* Improving accessibility with additional semantic and keyboard interactions
* Adding automated visual regression testing
* Adding unit/component tests for reusable UI components

---

## Author

**Utso Mondal**

[Portfolio](https://utsomondal.vercel.app/)
[GitHub](https://github.com/utsomondal)
[LinkedIn](https://www.linkedin.com/in/utsodev)

---

## Assessment Context

This project was developed as part of the **Doin Tech Limited Jr. Software Engineer (Frontend) assessment**, with the primary objective of demonstrating the ability to:

* Translate a Figma design into a working frontend
* Build reusable React components
* Maintain visual consistency through design tokens
* Organize and reuse static assets effectively
* Implement responsive layouts
* Write clean, structured, and maintainable frontend code
