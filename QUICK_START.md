# Quick Start Guide

## Your Portfolio is Ready! 🎉

All files are set up with **Dave Chapman** and **dave@davethedev.co.nz**.

## Files Created

### Design Documentation
- ✅ **DESIGN_SYSTEM.md** - Complete design system with all Tailwind classes
- ✅ **COMPONENT_EXAMPLES.md** - Copy-paste component snippets
- ✅ **PROJECT_SUMMARY.md** - Full project overview
- ✅ **LAUNCH_CHECKLIST.md** - Pre-deployment checklist

### Site Structure
- ✅ All pages built (home, case studies, contact)
- ✅ 3 example case studies with real metrics
- ✅ SEO configured (sitemap, robots.txt, meta tags)
- ✅ Responsive dark theme

## Quick Commands

```bash
# Development
npm run dev          # http://localhost:4321

# Production
npm run build        # Build to /dist
npm run preview      # Preview production build

# Type checking
npm run astro check  # Validate TypeScript
```

## Design System at a Glance

### Colors
```
Backgrounds:  bg-gray-950 (page), bg-gray-900 (cards), bg-gray-800 (hover)
Text:         text-white (headings), text-gray-300 (body), text-gray-400 (muted)
Accents:      bg-blue-600 (CTAs), text-blue-400 (links)
Borders:      border-gray-800 (subtle), border-gray-700 (default)
```

### Typography
```astro
<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
<h3 class="text-2xl font-bold text-white mb-3">
<p class="text-xl text-gray-300 leading-relaxed">
```

### Spacing
```astro
<section class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">
  <div class="mb-16">...</div>
  <div class="grid md:grid-cols-3 gap-8">...</div>
</section>
```

### Buttons
```astro
<!-- Primary -->
<a class="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors">

<!-- Secondary -->
<a class="px-8 py-4 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 border border-gray-700 transition-colors">
```

### Cards
```astro
<div class="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
```

## Common Tasks

### Add a New Case Study
1. Create `src/content/case-studies/my-project.md`
2. Add frontmatter:
```yaml
---
title: "Project Title"
description: "One-line summary"
client: "Client Name"
role: "Your Role"
tech: ["AWS", "Python", "Lambda"]
date: 2026-03-06
featured: true
---
```
3. Write content in Markdown
4. Rebuild: `npm run build`

### Update Contact Info
Files to edit:
- `src/layouts/BaseLayout.astro` (header, footer)
- `src/pages/index.astro` (homepage CTAs)
- `src/pages/contact.astro` (contact page)

### Customize Colors
Edit `tailwind.config.mjs` to add custom colors (optional - current palette is production-ready)

### Add a New Page
1. Create `src/pages/your-page.astro`
2. Import BaseLayout
3. Add to navigation in `src/layouts/BaseLayout.astro`

## Next Steps

1. ✅ **Development server is running** at http://localhost:4321
2. 📝 **Customize case studies** with your actual projects
3. 🎨 **Review design system** in DESIGN_SYSTEM.md
4. 📋 **Check LAUNCH_CHECKLIST.md** before deploying
5. 🚀 **Deploy** to Netlify, Vercel, or AWS

## Deployment

### Netlify (Recommended)
```bash
# Build command: npm run build
# Publish directory: dist
# Just connect your Git repo!
```

### Vercel
```bash
npm i -g vercel
vercel
```

### AWS S3 + CloudFront
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name/
```

## Support Files

- **DESIGN_SYSTEM.md** → Full design system documentation
- **COMPONENT_EXAMPLES.md** → Ready-to-use component snippets
- **PROJECT_SUMMARY.md** → Complete project overview
- **LAUNCH_CHECKLIST.md** → Pre-deployment checklist
- **README.md** → Project documentation

## Tips

- All design is in Tailwind utility classes - no custom CSS needed
- Every section uses `max-w-6xl mx-auto px-6` for consistency
- Buttons use `transition-colors` for smooth interactions
- Cards use `hover:border-blue-500/30` for subtle hover effects
- Typography scales responsively with `md:` and `lg:` breakpoints

## Questions?

Check the documentation files above - they have everything you need!

**Your portfolio is production-ready!** 🚀
