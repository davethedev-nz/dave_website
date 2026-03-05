# Design System - Premium Dark Theme Engineering Portfolio

## Color Palette

### Semantic Color Variables
```javascript
// In tailwind.config.mjs - extend colors if needed
colors: {
  // Background layers
  'bg-base': '#0a0a0a',      // gray-950 - Main background
  'bg-surface': '#18181b',   // gray-900 - Cards, elevated surfaces
  'bg-elevated': '#27272a',  // gray-800 - Hover states, inputs
  
  // Text hierarchy
  'text-primary': '#f9fafb',   // gray-50 - Headings, important text
  'text-secondary': '#d1d5db', // gray-300 - Body text
  'text-muted': '#9ca3af',     // gray-400 - Secondary info
  'text-dim': '#6b7280',       // gray-500 - Disabled, metadata
  
  // Accent & Actions
  'accent-primary': '#3b82f6',   // blue-600 - CTAs, links
  'accent-hover': '#2563eb',     // blue-700 - Hover states
  'accent-light': '#60a5fa',     // blue-400 - Highlights, icons
  
  // Borders & Dividers
  'border-subtle': '#27272a',    // gray-800 - Subtle dividers
  'border-default': '#3f3f46',   // gray-700 - Default borders
  'border-focus': '#60a5fa',     // blue-400 - Focus rings
}
```

### Actual Tailwind Classes Used
```
Backgrounds:
- bg-gray-950     → Main page background
- bg-gray-900     → Cards, surfaces
- bg-gray-800     → Buttons (secondary), hover states
- bg-blue-600     → Primary buttons, CTAs
- bg-blue-600/10  → Icon backgrounds (10% opacity)

Text:
- text-white      → H1, H2, H3, important text
- text-gray-100   → Body text (high contrast)
- text-gray-300   → Secondary body text
- text-gray-400   → Muted text, metadata
- text-gray-500   → Disabled states
- text-blue-400   → Links, accents, highlights

Borders:
- border-gray-800 → Main borders, dividers
- border-gray-700 → Secondary borders, button outlines
- border-blue-500 → Hover states on cards
```

---

## Typography Scale

### Headings
```astro
<!-- H1 - Hero headlines -->
<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
  Your Headline
</h1>

<!-- H2 - Section titles -->
<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
  Section Title
</h2>

<!-- H3 - Subsection titles -->
<h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
  Subsection
</h3>

<!-- H4 - Card titles -->
<h4 class="text-xl font-bold text-white mb-2">
  Card Title
</h4>

<!-- H5 - Small headings -->
<h5 class="text-lg font-semibold text-blue-400 mb-4">
  Small Heading
</h5>
```

### Body Text
```astro
<!-- Large body (intros) -->
<p class="text-xl md:text-2xl text-gray-300 leading-relaxed">
  Introduction text with generous spacing
</p>

<!-- Regular body -->
<p class="text-base text-gray-300 leading-relaxed">
  Standard paragraph text
</p>

<!-- Secondary text -->
<p class="text-base text-gray-400">
  Secondary information, less emphasis
</p>

<!-- Small text (metadata) -->
<p class="text-sm text-gray-400">
  Metadata, captions, timestamps
</p>

<!-- Extra small (labels) -->
<span class="text-xs font-medium text-gray-400 uppercase tracking-wide">
  Label Text
</span>
```

---

## Spacing & Layout

### Container Widths
```astro
<!-- Main content container (most sections) -->
<section class="max-w-6xl mx-auto px-6">
  <!-- 1152px max width, 24px horizontal padding -->
</section>

<!-- Narrow content (reading, forms) -->
<div class="max-w-3xl mx-auto">
  <!-- 768px max width for optimal reading -->
</div>

<!-- Wide content (full bleed) -->
<div class="max-w-7xl mx-auto px-6">
  <!-- 1280px for wider layouts -->
</div>
```

### Section Spacing
```astro
<!-- Standard vertical section spacing -->
<section class="py-24">
  <!-- 96px (6rem) top & bottom -->
</section>

<!-- Compact section spacing -->
<section class="py-16">
  <!-- 64px (4rem) top & bottom -->
</section>

<!-- Hero section (extra padding) -->
<section class="pt-20 pb-24">
  <!-- 80px top, 96px bottom -->
</section>

<!-- Section dividers -->
<section class="border-t border-gray-800">
  <!-- Subtle top border for visual separation -->
</section>
```

### Element Spacing
```astro
<!-- Heading to content -->
<div class="mb-16">
  <h2 class="mb-4">Title</h2>
  <p class="mb-6">Paragraph</p>
</div>

<!-- Grid gaps -->
<div class="grid md:grid-cols-3 gap-8">
  <!-- 32px between grid items -->
</div>

<!-- Flex gaps -->
<div class="flex flex-wrap gap-4">
  <!-- 16px between flex items -->
</div>

<!-- Stack spacing -->
<div class="space-y-6">
  <!-- 24px vertical rhythm -->
</div>
```

---

## Button Styles

### Primary Button (CTA)
```astro
<a 
  href="#"
  class="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
>
  Primary Action
</a>

<!-- Compact primary -->
<button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
  Compact CTA
</button>

<!-- Small primary -->
<button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
  Small Button
</button>
```

### Secondary Button (Ghost)
```astro
<a 
  href="#"
  class="px-8 py-4 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 border border-gray-700 transition-colors inline-flex items-center gap-2"
>
  Secondary Action
</a>

<!-- Compact secondary -->
<button class="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 border border-gray-700 transition-colors">
  Secondary
</button>
```

### Link Button (Inline)
```astro
<a 
  href="#"
  class="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group"
>
  Link Text
  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform">
    <!-- Arrow icon -->
  </svg>
</a>
```

### Button with Icon
```astro
<button class="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <!-- Icon path -->
  </svg>
  Button Text
</button>
```

---

## Card Styles

### Standard Card (Surface)
```astro
<div class="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
  <h3 class="text-xl font-bold text-white mb-3">Card Title</h3>
  <p class="text-gray-400 leading-relaxed">Card description text.</p>
</div>
```

### Interactive Card (Hover lift)
```astro
<article class="group relative bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
  <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
    Interactive Card
  </h3>
  <p class="text-gray-400 leading-relaxed">Hover for effect</p>
</article>
```

### Icon Card (Service/Feature)
```astro
<div class="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
  <div class="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
    <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <!-- Icon -->
    </svg>
  </div>
  <h3 class="text-xl font-bold text-white mb-3">Feature Title</h3>
  <p class="text-gray-400 leading-relaxed">Feature description.</p>
</div>
```

### Highlighted Card (Featured)
```astro
<div class="bg-blue-600/10 border border-blue-500/30 rounded-xl p-8">
  <h3 class="text-xl font-bold text-white mb-3">Featured Item</h3>
  <p class="text-gray-300 leading-relaxed">Special attention content.</p>
</div>
```

### Tag/Chip Component
```astro
<!-- Tech tag -->
<span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700/50">
  Technology
</span>

<!-- Compact tag -->
<span class="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-md text-sm font-medium border border-gray-700">
  Category
</span>

<!-- Count badge -->
<span class="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-400 rounded-full">
  +5 more
</span>
```

---

## BaseLayout Recommendations

### Full Layout Structure
```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
---

<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <!-- Meta tags -->
  </head>
  
  <body class="bg-gray-950 text-gray-100 antialiased">
    <div class="min-h-screen flex flex-col">
      
      <!-- Sticky Header -->
      <header class="border-b border-gray-800 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-50">
        <nav class="max-w-6xl mx-auto px-6 py-6">
          <!-- Nav content with max-w-6xl constraint -->
        </nav>
      </header>
      
      <!-- Main Content -->
      <main class="flex-grow">
        <slot />
        <!-- Each section inside manages its own max-w-6xl -->
      </main>
      
      <!-- Footer -->
      <footer class="border-t border-gray-800 bg-gray-950/50 mt-24">
        <div class="max-w-6xl mx-auto px-6 py-12">
          <!-- Footer content -->
        </div>
      </footer>
      
    </div>
  </body>
</html>
```

### Page Section Pattern
```astro
<!-- Typical page section structure -->
<section class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">
  <!-- Section heading group -->
  <div class="mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
      Section Title
    </h2>
    <p class="text-xl text-gray-400 max-w-2xl">
      Section description with max-width constraint
    </p>
  </div>
  
  <!-- Section content -->
  <div class="grid md:grid-cols-3 gap-8">
    <!-- Cards or content -->
  </div>
</section>
```

---

## Component Patterns

### Hero Section
```astro
<section class="max-w-6xl mx-auto px-6 pt-20 pb-24">
  <div class="max-w-4xl">
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
      Headline
      <span class="block text-blue-400 mt-2">Subheadline</span>
    </h1>
    <p class="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
      Hero description
    </p>
    <div class="flex flex-wrap gap-4">
      <!-- CTA buttons -->
    </div>
  </div>
</section>
```

### Grid Section
```astro
<section class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">
  <div class="mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Title</h2>
    <p class="text-xl text-gray-400 max-w-2xl">Description</p>
  </div>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Card components -->
  </div>
</section>
```

### List Section
```astro
<section class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">
  <div class="mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Tech Stack</h2>
  </div>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h3 class="text-lg font-semibold text-blue-400 mb-4">Category</h3>
      <ul class="space-y-2">
        <li class="text-gray-300">Item</li>
      </ul>
    </div>
  </div>
</section>
```

---

## Utility Patterns

### Focus States
```astro
<!-- Focus ring for interactive elements -->
<button class="focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-950">
  Accessible Button
</button>
```

### Transitions
```astro
<!-- Standard transition -->
class="transition-colors duration-200"

<!-- Multi-property transition -->
class="transition-all duration-300"

<!-- Hover lift effect -->
class="hover:-translate-y-1 transition-transform duration-300"
```

### Responsive Breakpoints
```
sm:  640px  → Mobile landscape
md:  768px  → Tablet portrait
lg:  1024px → Tablet landscape / Small desktop
xl:  1280px → Desktop
2xl: 1536px → Large desktop
```

### Common Responsive Patterns
```astro
<!-- Responsive text sizing -->
class="text-base md:text-lg lg:text-xl"

<!-- Responsive grid -->
class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"

<!-- Responsive padding -->
class="px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24"

<!-- Responsive flex direction -->
class="flex flex-col md:flex-row gap-4"
```

---

## Design Principles

### Spacing Rhythm
- Use multiples of 4: 4px (1), 8px (2), 12px (3), 16px (4), 24px (6), 32px (8), 48px (12), 64px (16), 96px (24)
- Section spacing: py-24 (96px) for breathing room
- Content spacing: mb-16 (64px) between major groups
- Element spacing: gap-8 (32px) for grids, gap-4 (16px) for flex

### Typography Hierarchy
- H1: 5xl-7xl (48-72px) for hero statements
- H2: 4xl-5xl (36-48px) for section titles
- H3: 2xl-3xl (24-30px) for subsections
- Body: xl-2xl (20-24px) for intros, base (16px) for content

### Color Usage
- Always text-white for headings (max contrast)
- text-gray-300 for body (readable, not harsh)
- text-gray-400 for secondary info
- text-blue-400 for accents and links
- bg-gray-900 for all cards/surfaces
- border-gray-800 for subtle dividers

### Interaction
- hover:bg-*-700 for darkening on hover
- hover:text-blue-300 for link hovers
- transition-colors for smooth state changes
- group and group-hover for card interactions
- Focus rings for accessibility

---

## Quick Reference

### Copy-Paste Snippets

**Section Container:**
```astro
<section class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">
```

**Section Heading:**
```astro
<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Title</h2>
<p class="text-xl text-gray-400 max-w-2xl">Description</p>
```

**Primary Button:**
```astro
<a href="#" class="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
```

**Standard Card:**
```astro
<div class="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
```

**Interactive Link:**
```astro
<a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">Link</a>
```

**Grid Layout:**
```astro
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```
