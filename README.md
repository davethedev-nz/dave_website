# Dave Miller - Portfolio Website

A professional portfolio site built with Astro, optimized for recruiter conversion and showcasing senior AWS/Python engineering expertise.

## 🎯 Purpose

This portfolio is designed to attract senior-level contract opportunities in AWS cloud architecture, serverless systems, and Python backend development. It demonstrates:

- Production-ready code quality
- Clean, modern UI/UX design
- Strong technical communication through case studies
- SEO optimization for discoverability

## 🚀 Tech Stack

- **Framework**: Astro 5.x (static-first)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS (dark theme)
- **Content**: Content Collections (Markdown)
- **SEO**: Sitemap, robots.txt, OpenGraph tags

## 📁 Project Structure

```text
/
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CaseStudyCard.astro
│   │   └── DeliverableCard.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── case-studies/
│   │       ├── serverless-data-pipeline.md
│   │       ├── multi-region-dr.md
│   │       └── microservices-migration.md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── contact.astro
│       └── case-studies/
│           ├── index.astro
│           └── [slug].astro
├── .github/
│   └── copilot-instructions.md
└── package.json
```

## 🧞 Commands

| Command | Action |
| :------------------------ | :----------------------------------------------- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro check` | Run TypeScript type checking |

## 📝 Content Management

### Adding Case Studies

1. Create a new `.md` file in `src/content/case-studies/`
2. Use this frontmatter structure:

```yaml
---
title: "Project Title"
description: "One-line description"
client: "Client Name"
role: "Your Role"
tech: ["Tech1", "Tech2", "Tech3"]
date: 2025-01-15
featured: true
---
```

3. Write the case study content in Markdown
4. Featured case studies automatically appear on the homepage

## 🎨 Design Principles

- **Dark theme** with high contrast (gray-950 background)
- **Generous whitespace** for premium feel
- **Strong typography** hierarchy
- **Subtle animations** on hover states
- **Mobile-first** responsive design
- **Accessibility** compliant (semantic HTML, ARIA labels)

## � SEO Features

- Semantic HTML structure
- Meta tags (title, description)
- OpenGraph tags for social sharing
- Auto-generated sitemap
- robots.txt configuration
- Canonical URLs

## 📦 Deployment

Build the static site:

```bash
npm run build
```

Deploy the `dist/` folder to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages

## 📄 License

Private portfolio project - All rights reserved.
