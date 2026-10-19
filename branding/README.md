# HORUS OS Branding

## Overview

This directory contains the canonical branding assets and design specifications for **HORUS OS**.

Every visual component of the operating system should derive its appearance from the assets and guidelines contained here.

The contents of this directory are considered the **single source of truth** for the project's visual identity.

If an asset must be generated (icons, boot logos, resized images, splash screens, etc.), it should always be generated from the files in this directory rather than recreated manually.

---

# Design Philosophy

HORUS OS aims to present a professional and timeless user experience.

The visual identity is built around the following principles:

- Elegant
- Minimal
- Premium
- Developer-focused
- Timeless
- Functional
- Consistent

The inspiration comes from the Egyptian god **Horus**, but only through geometry, symmetry, and color—not through literal historical imagery.

Avoid designs that resemble:

- pyramids
- deserts
- pharaohs
- museums
- fantasy games
- cyberpunk themes
- glowing eyes
- excessive gold ornamentation

Instead, the operating system should resemble a premium workstation suitable for developers and professionals.

---

# Color System

The official color palette is defined in:

```
colors.md
```

No component should introduce additional primary colors without updating this document.

All themes (KDE, GRUB, Plymouth, SDDM, Calamares, Konsole, Kate, etc.) should derive their colors from this file.

---

# Branding Configuration

```
branding.yml
```

This file provides a machine-readable description of the branding.

Automation tools should read this file rather than attempting to parse Markdown.

It defines:

- distribution metadata
- wallpapers
- fonts
- colors
- cursor theme
- sound theme
- branding assets

---

# Logos

The logo directory contains the official HORUS OS logo.

```
master-logo.svg
```

This file is the master source.

Do not edit exported PNG versions directly.

Whenever a raster image is required, regenerate it from the SVG.

---

# Symbol

```
symbol.svg
```

The falcon symbol is the primary icon of HORUS OS.

It should be used for:

- Fastfetch
- Application icon
- Default user avatar
- About dialogs
- Installer branding
- Documentation
- Website
- Social media

Do not redraw or recreate the symbol.

Always use this SVG as the source.

---

# Wallpapers

```
master-wallpaper.png
```

Primary desktop wallpaper.

Used for:

- KDE desktop
- Lock screen
- SDDM background

```
grub-wallpaper.png
```

Boot wallpaper.

Derived from the primary wallpaper.

Should preserve the same visual identity while providing better contrast for boot text.

---

# Fonts

UI Font

```
Noto Sans
```

Terminal Font

```
JetBrains Mono
```

No additional fonts should be introduced unless there is a compelling reason.

---

# Cursor Theme

Default cursor:

```
Bibata Modern Classic
```

Bundled locally to ensure reproducible builds.

---

# Asset Generation Rules

Generated assets should never become the primary source.

Always regenerate assets from the originals.

Examples include:

- PNG exports
- Favicons
- Installer graphics
- Fastfetch logos
- Plymouth logos
- GRUB logos
- Icons
- Splash images

The SVG files remain the canonical source.

---

# Consistency Rules

The same branding should be preserved throughout the entire operating system.

Firmware
↓

GRUB
↓

Plymouth
↓

Calamares
↓

SDDM
↓

KDE Plasma
↓

Applications

Every stage should feel like part of one operating system.

Avoid introducing unrelated colors, fonts, or visual styles.

---

# Automation

OpenCode and build scripts should use this directory as the authoritative branding source.

Generated files should be placed inside the build tree.

The original branding assets contained here should never be modified automatically.

---

# Licensing

Fonts retain their original licenses.

Cursor theme retains its original license.

HORUS OS branding assets are original works created specifically for this project unless otherwise noted.

---

# Future Assets

Future additions may include:

- Plymouth animation
- Calamares slideshow
- Website graphics
- Release artwork
- Social media assets
- Documentation graphics

All future assets should follow the same design language established by this directory.

---

# Philosophy

Design should never exist merely to impress.

Every visual element should communicate clarity, professionalism, and consistency.

The operating system should feel refined rather than decorative.

Luxury through restraint.

That is the guiding principle behind HORUS OS.