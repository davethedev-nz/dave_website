# Component Examples - Design System in Action

This file shows practical examples of components built with our design system.

## Buttons

### Primary CTA Group
```astro
<div class="flex flex-wrap gap-4">
  <a 
    href="mailto:dave@davethedev.co.nz"
    class="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
    Email Me
  </a>
  
  <a 
    href="/cv.pdf"
    download
    class="px-8 py-4 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 border border-gray-700 transition-colors inline-flex items-center gap-2"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
    Download CV
  </a>
</div>
```

## Cards

### Service/Feature Card (Icon + Content)
```astro
---
// src/components/FeatureCard.astro
interface Props {
  icon: string;
  title: string;
  description: string;
}
const { icon, title, description } = Astro.props;
---

<div class="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
  <div class="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
    <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon}/>
    </svg>
  </div>
  <h3 class="text-xl font-bold text-white mb-3">{title}</h3>
  <p class="text-gray-400 leading-relaxed">{description}</p>
</div>
```

### Project Card (Interactive with Tags)
```astro
---
// src/components/ProjectCard.astro
interface Props {
  title: string;
  description: string;
  tech: string[];
  href: string;
  client?: string;
}
const { title, description, tech, href, client } = Astro.props;
---

<article class="group relative bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
  <div class="flex flex-col h-full">
    {client && (
      <p class="text-sm text-blue-400 font-medium mb-2">{client}</p>
    )}
    
    <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    
    <p class="text-gray-400 leading-relaxed mb-6">
      {description}
    </p>
    
    <div class="mt-auto">
      <div class="flex flex-wrap gap-2 mb-6">
        {tech.slice(0, 4).map((item) => (
          <span class="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700/50">
            {item}
          </span>
        ))}
        {tech.length > 4 && (
          <span class="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-400 rounded-full">
            +{tech.length - 4} more
          </span>
        )}
      </div>
      
      <a 
        href={href}
        class="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group/link"
      >
        Read more
        <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div>
  </div>
</article>
```

### Info Card (Highlighted)
```astro
<div class="bg-blue-600/10 border border-blue-500/30 rounded-xl p-8">
  <h3 class="text-2xl font-bold text-white mb-4">Availability</h3>
  <p class="text-gray-300 mb-6 leading-relaxed">
    <strong class="text-white">Currently available</strong> for contract work starting immediately.
  </p>
  
  <dl class="space-y-4 text-sm">
    <div>
      <dt class="text-gray-400 font-medium mb-1">Engagement Type</dt>
      <dd class="text-white">Contract (3–6 months)</dd>
    </div>
    <div>
      <dt class="text-gray-400 font-medium mb-1">Location</dt>
      <dd class="text-white">Remote or Hybrid</dd>
    </div>
  </dl>
</div>
```

## Section Layouts

### Standard Content Section
```astro
<section class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">
  <!-- Heading group with constrained width for description -->
  <div class="mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
      Section Title
    </h2>
    <p class="text-xl text-gray-400 max-w-2xl">
      This description has a max-width to prevent overly long lines
    </p>
  </div>
  
  <!-- Content grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Cards go here -->
  </div>
</section>
```

### Hero Section
```astro
<section class="max-w-6xl mx-auto px-6 pt-20 pb-24">
  <div class="max-w-4xl">
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
      Main Headline
      <span class="block text-blue-400 mt-2">
        Accent Subheadline
      </span>
    </h1>
    
    <p class="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
      Large introduction paragraph with generous line height
    </p>
    
    <div class="flex flex-wrap gap-4 mb-16">
      <!-- Primary CTAs -->
    </div>
    
    <!-- Tech strip / tags -->
    <div class="flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span class="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-md text-sm font-medium border border-gray-700/50">
          {tag}
        </span>
      ))}
    </div>
  </div>
</section>
```

### CTA Section (Centered)
```astro
<section class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
      Let's Work Together
    </h2>
    
    <p class="text-xl text-gray-300 mb-8 leading-relaxed">
      <strong class="text-white">Available for contract</strong> — Senior roles, 3–6 month engagements.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <!-- CTA buttons -->
    </div>
  </div>
</section>
```

### List Section (Tech Stack)
```astro
<section class="max-w-6xl mx-auto px-6 py-24 border-t border-gray-800">
  <div class="mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
      Tech Stack
    </h2>
    <p class="text-xl text-gray-400 max-w-2xl">
      Core technologies I use to build reliable systems
    </p>
  </div>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h3 class="text-lg font-semibold text-blue-400 mb-4">
        Backend
      </h3>
      <ul class="space-y-2">
        <li class="text-gray-300">Python</li>
        <li class="text-gray-300">FastAPI</li>
        <li class="text-gray-300">Django</li>
      </ul>
    </div>
    <!-- Repeat for other categories -->
  </div>
</section>
```

## Navigation

### Header with Sticky Blur Effect
```astro
<header class="border-b border-gray-800 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-50">
  <nav class="max-w-6xl mx-auto px-6 py-6">
    <div class="flex items-center justify-between">
      <a href="/" class="text-xl font-bold text-white hover:text-blue-400 transition-colors">
        Your Name
      </a>
      
      <ul class="flex gap-8 items-center">
        <li>
          <a href="/#work" class="text-gray-300 hover:text-white transition-colors font-medium">
            Work
          </a>
        </li>
        <li>
          <a href="/contact" class="text-gray-300 hover:text-white transition-colors font-medium">
            Contact
          </a>
        </li>
        <li>
          <a href="mailto:you@example.com" class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Get in Touch
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

### Footer
```astro
<footer class="border-t border-gray-800 bg-gray-950/50 mt-24">
  <div class="max-w-6xl mx-auto px-6 py-12">
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-gray-400 text-sm">
        © {new Date().getFullYear()} Your Name. Available for senior roles.
      </div>
      
      <div class="flex gap-6">
        <a href="https://linkedin.com" class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <!-- LinkedIn icon -->
          </svg>
        </a>
        <a href="https://github.com" class="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <!-- GitHub icon -->
          </svg>
        </a>
        <a href="mailto:you@example.com" class="text-gray-400 hover:text-white transition-colors" aria-label="Email">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <!-- Email icon -->
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
```

## Form Elements (if needed)

### Input Field
```astro
<div class="space-y-2">
  <label for="email" class="block text-sm font-medium text-gray-300">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    class="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
    placeholder="you@example.com"
  />
</div>
```

### Textarea
```astro
<div class="space-y-2">
  <label for="message" class="block text-sm font-medium text-gray-300">
    Message
  </label>
  <textarea
    id="message"
    rows="6"
    class="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors resize-none"
    placeholder="Tell me about your project..."
  ></textarea>
</div>
```

## Status Indicators

### Success Message
```astro
<div class="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
  <p class="text-green-400 font-medium">Success! Message sent.</p>
</div>
```

### Error Message
```astro
<div class="bg-red-600/10 border border-red-500/30 rounded-lg p-4">
  <p class="text-red-400 font-medium">Error: Please try again.</p>
</div>
```

### Info Banner
```astro
<div class="bg-blue-600/10 border border-blue-500/30 rounded-lg p-4">
  <p class="text-blue-400 font-medium">💡 Tip: Check out the design system docs</p>
</div>
```

## Breadcrumbs
```astro
<nav class="mb-8">
  <a href="/case-studies" class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
    Back to Case Studies
  </a>
</nav>
```

## Loading State
```astro
<div class="flex items-center justify-center py-12">
  <div class="w-8 h-8 border-4 border-gray-800 border-t-blue-400 rounded-full animate-spin"></div>
</div>
```
