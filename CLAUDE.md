# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal website for Luke Byrne (Build with Luke / @AI_LUKE). Plain HTML, CSS, and JS — no build step, no framework.

## Development

Serve locally with:
```
npx serve -p 4000 .
```

A launch config exists at `.claude/launch.json` for preview server (`my-website2` on port 4000).

No build, lint, or test commands — this is a static site.

## Architecture

- `index.html` — Landing page with hero, about, work, and contact sections
- `blog.html` — Blog listing page with cards linking to individual posts
- `blog/*.html` — Individual blog post pages (6 posts)
- `styles.css` — All styles in a single file; uses CSS custom properties for dark/light theming
- `script.js` — Intersection Observer for fade-in animations + theme toggle persistence via localStorage

## Design System

- **Fonts**: Instrument Serif (headings), DM Sans (body) — loaded from Google Fonts
- **Theming**: Dark mode default (`--bg:#1a1714`), light mode via `html.light` class. Toggle stored in `localStorage('theme')`
- **Accent color**: Coral (`--coral:#e8654a` dark, `--coral-dim` for hover)
- **Layout**: `.container` max-width 860px; blog posts narrower at 720px

## Key Patterns

- Navigation is duplicated per page (no shared components). Blog pages use relative paths (`../index.html`, `../styles.css`)
- Blog post articles use `.blog-post .fade` which overrides the default fade-in animation to show content immediately (avoids IntersectionObserver not firing above-the-fold)
- The nav logo is an `<a>` tag with class `nav-logo` linking back to `index.html`
- Each blog post has a `<meta name="description">` for SEO
- No m-dashes (—) in blog content — use commas or reword instead
