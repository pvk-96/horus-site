# HORUS OS Website

Official website for HORUS OS — an independent Arch-based Linux distribution in development.

Built with Astro, featuring geometric animations, custom cursor, and a scroll-progressive roadmap.

## Technology Stack

- **Framework:** Astro 5.0 (static site generation)
- **Styling:** CSS with design tokens
- **Animation:** Anime.js and vanilla JavaScript
- **Typography:** Noto Sans (UI), JetBrains Mono (code/metadata)
- **Deployment:** GitHub Pages
- **Domain:** https://horus.pvk96.in

## Development

### Prerequisites

- Node.js 26.10.0 or later
- npm 12.0.2 or later

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Type check
npm run astro check

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
h-website/
├── branding/              # Canonical brand assets
│   ├── colors.md
│   ├── branding.yml
│   ├── fonts/
│   ├── logo/
│   ├── symbol/
│   └── wallpapers/
├── public/
│   ├── fonts/             # Variable font files for web
│   ├── images/            # Optimized images and favicon
│   └── favicon.svg
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/           # Content collections
│   │   └── notes/
│   │       └── developer-note.md
│   ├── data/              # Structured data
│   │   └── milestones.ts
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro
│   │   ├── project.astro
│   │   ├── roadmap.astro
│   │   ├── developer-note.astro
│   │   └── contact.astro
│   ├── scripts/           # Client-side interactions
│   │   ├── hero-animation.ts
│   │   ├── ambient-background.ts
│   │   ├── precision-cursor.ts
│   │   └── roadmap-progress.ts
│   └── styles/            # Global styles
│       ├── tokens.css
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Management

### Editing the Developer's Note

The Developer's Note is rendered from Markdown:

```bash
src/content/notes/developer-note.md
```

Edit this file directly. Changes will be reflected after rebuilding the site.

### Updating Roadmap Milestones

Milestones are defined in:

```bash
src/data/milestones.ts
```

Update milestone status (`'complete' | 'in-progress' | 'planned'`) based on actual verified work.

### Adding Historical Timeline Events

Project history is tracked in the same file:

```bash
src/data/milestones.ts
```

Add new `HistoryEvent` objects to the `history` array.

## Configuration

### Formspree Contact Form

The contact form requires a Formspree endpoint. To configure:

1. Create a Formspree account and get your form endpoint
2. Edit `src/pages/contact.astro`
3. Set the `data-formspree-endpoint` attribute:

```astro
<form class="contact-form" id="contact-form" data-formspree-endpoint="https://formspree.io/f/YOUR_FORM_ID">
```

The form will remain disabled until an endpoint is configured.

### Custom Domain

The site is configured for deployment at `horus.pvk96.in`. To change the domain:

1. Update `astro.config.mjs`:
   ```js
   site: 'https://your-domain.com'
   ```

2. Update the `CNAME` file in the `public/` directory (create if needed)

3. Configure DNS:
   - For apex domain: A records pointing to GitHub Pages IPs
   - For subdomain: CNAME record pointing to `yourusername.github.io`

## Deployment

### GitHub Pages Setup

1. **Create GitHub repository:**
   ```bash
   gh repo create h-website --public --source=. --remote=origin
   ```

2. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Custom domain: `horus.pvk96.in` (if using)

3. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

The GitHub Actions workflow will automatically build and deploy on push to `main`.

### Manual Deployment

Build the site locally and deploy the `dist/` directory to any static hosting:

```bash
npm run build
# Upload dist/ contents to your hosting provider
```

## Design System

### Color Tokens

Defined in `src/styles/tokens.css`. Primary brand colors:

- **Obsidian:** `#0B1018` (primary background)
- **Primary Gold:** `#D4AF37` (accent)
- **Dark Gold:** `#A67C00` (secondary accent)
- **Text Primary:** `#F8FAFC`
- **Text Secondary:** `#C8CDD4`

### Typography

- **UI Font:** Noto Sans Variable (100-900 weight range)
- **Code Font:** JetBrains Mono Variable (100-800 weight range)

Variable fonts are loaded from `public/fonts/` and declared in `src/styles/global.css`.

### Responsive Breakpoints

```css
/* Mobile-first approach */
@media (min-width: 640px)  { /* Small tablets */ }
@media (min-width: 768px)  { /* Tablets and up */ }
@media (min-width: 1024px) { /* Desktop */ }
```

## Accessibility

The site implements:

- Semantic HTML structure
- ARIA labels and roles where appropriate
- Keyboard navigation support
- Focus indicators
- Reduced motion support (`prefers-reduced-motion`)
- Screen reader-friendly content
- Sufficient color contrast (WCAG AA)

Test accessibility:

```bash
# Manual keyboard navigation test
# Manual screen reader test (NVDA, JAWS, VoiceOver)
```

## Browser Testing

Install Playwright for automated browser testing:

```bash
npx playwright install
```

Tests are planned but not yet implemented in this initial release.

## Performance

- Static site generation (no runtime JavaScript required for content)
- Optimized font loading with `font-display: swap`
- Minimal JavaScript for interactions
- CSS-based animations with GPU acceleration
- Lazy-loaded animations (reduced motion support)

## License

### HORUS OS Branding

Original branding assets in `branding/` are created specifically for this project.

### Fonts

- **Noto Sans:** SIL Open Font License 1.1 (see `branding/licenses/Notosans-OFL.txt`)
- **JetBrains Mono:** SIL Open Font License 1.1 (see `branding/licenses/jetbrains-mono-OFL.txt`)

### Website Code

Website implementation code is part of the HORUS OS project.

## Contributing

The project is currently developed independently. As development progresses, contribution guidelines will be documented.

For questions or feedback, visit the [contact page](https://horus.pvk96.in/contact/).

## Links

- **Website:** https://horus.pvk96.in
- **GitHub:** https://github.com/pvk-96
- **Email:** praneethvarmakopperla@gmail.com
