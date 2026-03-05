# Launch Checklist

## ✅ Completed

- [x] Astro project scaffolded with TypeScript
- [x] Tailwind CSS integrated (v3, compatible with Node 18)
- [x] Content Collections configured for case studies
- [x] 3 example case studies written with measurable results
- [x] Homepage with all required sections
- [x] Case studies list page
- [x] Dynamic case study detail pages
- [x] Contact page
- [x] Global layout with header/nav + footer
- [x] Reusable components (CaseStudyCard, DeliverableCard)
- [x] Dark theme with professional styling
- [x] Semantic HTML throughout
- [x] SEO meta tags on all pages
- [x] OpenGraph tags for social sharing
- [x] Sitemap auto-generation
- [x] robots.txt configured
- [x] Development server running
- [x] Production build successful
- [x] All routes working
- [x] README.md updated
- [x] Copilot instructions created

## ⚠️ Before Launch - Customization Required

### Contact Information (High Priority)
- [ ] Replace `dave@example.com` with your real email (appears in 7 places)
- [ ] Update LinkedIn URL `/in/davemiller` → your profile
- [ ] Update GitHub URL `/davemiller` → your username
- [ ] Update name "Dave Miller" throughout if different

### Assets (High Priority)
- [ ] Replace `public/cv.pdf` with your actual resume/CV
- [ ] Create and add `public/og-image.jpg` (1200x630px for social media)
- [ ] Optionally customize `public/favicon.svg` with your brand

### Configuration (High Priority)
- [ ] Update `site:` in `astro.config.mjs` with your actual domain
- [ ] Update sitemap URL in `public/robots.txt` with your domain

### Content (Medium Priority)
- [ ] Review and customize the 3 example case studies
  - Serverless ETL Pipeline
  - Multi-Region DR
  - Microservices Migration
- [ ] Add more case studies if available
- [ ] Update tech stack lists to match your skills
- [ ] Customize "What I Deliver" cards
- [ ] Update availability statement (currently: "Available for contract, 3-6 months, London")

### Visual Customization (Optional)
- [ ] Adjust color scheme in Tailwind config if desired
- [ ] Add your photo/headshot to homepage
- [ ] Create custom illustrations or diagrams for case studies
- [ ] Add project screenshots to case study pages

## 📂 Files to Customize

### Required Updates
1. `src/layouts/BaseLayout.astro` - Update email, social links (lines 56, 82, 98, 118, 132)
2. `src/pages/index.astro` - Update email, LinkedIn (lines 40, 51, 193, 206)
3. `src/pages/contact.astro` - Update all contact info (lines 32, 47, 75, 114, 125, 137, 209)
4. `astro.config.mjs` - Update domain (line 7)
5. `public/robots.txt` - Update sitemap URL (line 3)

### Content Files
6. `src/content/case-studies/*.md` - Replace with your actual projects
7. `public/cv.pdf` - Replace with your resume
8. `public/og-image.jpg` - Add social media preview image

## 🚀 Deployment Steps

### Option 1: Netlify
```bash
# Build the site
npm run build

# Commit to Git
git init
git add .
git commit -m "Initial commit"
git push

# On Netlify
# 1. Connect your Git repository
# 2. Build command: npm run build
# 3. Publish directory: dist
```

### Option 2: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: AWS S3 + CloudFront
```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name/

# Configure CloudFront distribution pointing to S3
```

## 🧪 Testing Checklist

Before deploying to production:

- [ ] Test all navigation links
- [ ] Verify all case study pages load
- [ ] Check responsive design on mobile/tablet
- [ ] Test email links open mail client
- [ ] Verify external links open in new tabs
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test with screen reader for accessibility
- [ ] Validate HTML at validator.w3.org
- [ ] Check meta tags with opengraph.xyz or similar
- [ ] Test sitemap accessibility

## 📊 Performance Targets

Target Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 📝 Maintenance

### Adding New Case Studies
1. Create new `.md` file in `src/content/case-studies/`
2. Copy frontmatter structure from existing studies
3. Write content in Markdown
4. Set `featured: true` to show on homepage (max 3)
5. Rebuild: `npm run build`

### Updating Content
- Homepage: Edit `src/pages/index.astro`
- Contact Page: Edit `src/pages/contact.astro`
- Global Layout: Edit `src/layouts/BaseLayout.astro`
- Styles: Modify Tailwind classes or `tailwind.config.mjs`

## 🆘 Common Issues

**Build fails:**
- Run `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version (18.x should work)

**Styles not applying:**
- Verify Tailwind classes are in the content paths
- Check `tailwind.config.mjs` content array

**Case studies not showing:**
- Verify frontmatter format matches schema in `src/content/config.ts`
- Check dates are valid ISO format (YYYY-MM-DD)

**404 errors:**
- Ensure file names match URL structure
- Check Astro routing conventions

## 🎉 You're Ready!

Once you've completed the customization checklist, your portfolio is ready to attract senior-level contract opportunities!

**Next Steps:**
1. Update all placeholder content
2. Test thoroughly locally
3. Deploy to your hosting provider
4. Share with recruiters and your network
5. Monitor analytics and iterate

Good luck with your job search! 🚀
