# Shehzad Asadullah â€” Developer Portfolio

A personal portfolio website for Shehzad Asadullah, a front-end engineer. The site presents an introduction, an about page, a projects showcase, an articles/blog section with individual article pages, and a contact page. It is a client-side React single-page application with multi-page routing, SEO metadata per page, and optional Google Analytics tracking. Content is data-driven â€” profile details, projects, and articles live in editable data files. The project is based on the open-source `reactfolio` template.

## Tech Stack

- React 18 (Create React App / `react-scripts`)
- React Router DOM 6 for client-side routing
- Material UI 5 and Emotion, plus styled-components for styling
- Font Awesome (solid, regular, and brand icon sets) via `@fortawesome/react-fontawesome`
- `react-helmet` for per-page document head / SEO metadata
- `react-ga4` for Google Analytics 4 tracking
- `lodash` utility library
- `web-vitals` for performance metrics
- Testing Library (Jest DOM, React, user-event) for testing

## Features

- Multi-page routing: Home, About, Projects, Articles, individual Article view (`/article/:slug`), Contact, and a 404 page.
- Data-driven content: personal info and social links, a projects list, and articles are defined in `src/data/`.
- Per-page SEO via `react-helmet`, using titles, descriptions, and keyword sets from `src/data/seo.js`.
- Optional Google Analytics 4 integration, initialized only when a tracking ID is provided.
- Contact page with direct email (`mailto:`) and social links (GitHub, LinkedIn, Instagram).
- Reusable components (navbar, footer, logo, cards, socials) and scoped CSS per component/page.

## Project Structure

```
my-portfolio/
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ index.html
â”‚   â””â”€â”€ robots.txt
â”œâ”€â”€ package.json
â””â”€â”€ src/
    â”œâ”€â”€ index.js                # React entry point
    â”œâ”€â”€ App.js                  # Routes and Google Analytics initialization
    â”œâ”€â”€ pages/                  # homepage, about, projects, articles,
    â”‚   â”‚                       #   readArticle, contact, 404 (+ styles/)
    â”œâ”€â”€ components/
    â”‚   â”œâ”€â”€ common/             # navBar, footer, logo, card
    â”‚   â”œâ”€â”€ homepage/           # works, skills, article
    â”‚   â”œâ”€â”€ projects/           # allProjects, project
    â”‚   â”œâ”€â”€ articles/           # article
    â”‚   â””â”€â”€ about/              # socials
    â””â”€â”€ data/
        â”œâ”€â”€ user.js             # Profile, social links, and projects
        â”œâ”€â”€ articles.js         # Blog/article content
        â”œâ”€â”€ seo.js              # Per-page SEO metadata and keywords
        â””â”€â”€ tracking.js         # Google Analytics tracking ID
```

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
npm install
```

### Run in development

```bash
npm start
```

Runs the app at `http://localhost:3000` with hot reloading.

### Build for production

```bash
npm run build
```

Outputs an optimized production build to the `build/` directory.

## Available Scripts

- `npm start` â€” start the development server.
- `npm run build` â€” build the app for production.
- `npm test` â€” run the test runner.
- `npm run eject` â€” eject the Create React App configuration (one-way operation).

## Configuration

This project reads configuration from source data files rather than `.env` variables:

- `TRACKING_ID` in `src/data/tracking.js` â€” the Google Analytics 4 measurement ID. Analytics are enabled only when this value is non-empty; leave it as an empty string to disable tracking.
- `src/data/user.js`, `src/data/articles.js`, and `src/data/seo.js` â€” edit these to customize profile details, projects, articles, and SEO metadata.

---

Author: Shehzad Asadullah â€” https://github.com/shehzadasad

