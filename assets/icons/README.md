# 🎨 Icon Generation Guide

This folder contains PWA icons for the Advanced Java Code Vault application.

## Required Icon Sizes

The PWA requires icons in the following sizes:
- 72×72px
- 96×96px
- 128×128px
- 144×144px
- 152×152px
- 192×192px (maskable)
- 384×384px
- 512×512px (maskable)

## How to Generate Icons

### Option 1: Online Tool (Easiest)
Use [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator):
1. Upload a square logo (1024×1024px recommended)
2. Download all sizes
3. Place files in this directory

### Option 2: Using ImageMagick (CLI)

```bash
# Install ImageMagick first
# Then run these commands:

convert logo.png -resize 72x72 icon-72.png
convert logo.png -resize 96x96 icon-96.png
convert logo.png -resize 128x128 icon-128.png
convert logo.png -resize 144x144 icon-144.png
convert logo.png -resize 152x152 icon-152.png
convert logo.png -resize 192x192 icon-192.png
convert logo.png -resize 384x384 icon-384.png
convert logo.png -resize 512x512 icon-512.png
```

### Option 3: Using Node.js Script

```bash
npm install sharp
node generate-icons.js
```

## Design Guidelines

### Logo Concept
Since this is a **Java Code Vault**, consider:
- ☕ Coffee cup (Java logo inspiration)
- 📦 Vault/lock icon combined with code symbol
- 💎 Diamond/gem (representing valuable code)
- 📚 Book with code snippets

### Color Scheme
Match the app's glassmorphism theme:
- Primary: `#4361ee` (Electric blue)
- Secondary: `#f72585` (Hot pink)
- Background: Dark gradient
- Use transparency for modern look

### Icon Requirements
- **Format**: PNG (24-bit with alpha)
- **Shape**: Square (1:1 ratio)
- **Safe Area**: Keep important elements in center 80%
- **Maskable**: For 192px and 512px, use solid background
- **Contrast**: Ensure visibility on various backgrounds

## Placeholder Icons

Until you create custom icons, you can use:
1. **Favicon Generator**: https://favicon.io/
2. **Simple colored squares** with ☕ emoji
3. **Gradient backgrounds** with "JV" text

## Verification

After adding icons, verify:
```bash
# Check file sizes
ls -lh

# Validate with Lighthouse PWA audit
# Open DevTools → Lighthouse → PWA
```

## Files to Create

```
assets/icons/
├── icon-72.png
├── icon-96.png
├── icon-128.png
├── icon-144.png
├── icon-152.png
├── icon-192.png  ← Maskable (solid background)
├── icon-384.png
├── icon-512.png  ← Maskable (solid background)
└── favicon.ico   (optional, for browser tab)
```

---

**Note**: Update `manifest.json` if you change icon filenames!