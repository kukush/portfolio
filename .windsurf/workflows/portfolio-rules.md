---
description: Portfolio project development rules and guidelines
---

# Portfolio Project Rules

This project is a minimal, senior-level React portfolio built with Vite.

## Strict Rules

### 1. Tech Stack
- React + Vite only
- No UI frameworks (no Tailwind, MUI, Bootstrap, Chakra, etc.)
- No animation libraries
- No unnecessary dependencies
- No routing unless explicitly requested

### 2. Architecture
- One-page layout only
- Fully config-driven
- All portfolio content must live inside src/config.js
- Components must render data dynamically from config.js
- No hardcoded content inside components

### 3. Design Philosophy
- Minimal
- Professional
- Content-first
- Clean typography
- Dark theme
- No visual noise
- No decorative animations
- No trendy effects

### 4. Styling
- Plain CSS only (src/index.css)
- System font stack
- Max-width centered layout (~900px)
- Clear spacing between sections
- Muted secondary text color
- Subtle accent color for links
- Tag-style skill badges

### 5. Code Quality
- Keep components small and readable
- No over-engineering
- No premature abstractions
- No unnecessary hooks or state
- No global state management
- No complex patterns

### 6. Deployment
- Must remain compatible with GitHub Pages
- vite.config.js must include correct base configuration
- Output must be static and production-ready

### 7. Senior Engineering Signal
- Prefer simplicity over cleverness
- Prefer clarity over abstraction
- Prefer fewer dependencies over convenience
- Avoid trendy but unnecessary patterns

## Development Guidelines

If suggesting changes:
- Do not introduce new libraries without strong justification
- Do not increase complexity
- Maintain minimal, clean structure

## File Structure Requirements

- `src/config.js` - All portfolio content
- `src/index.css` - All styling (plain CSS only)
- `vite.config.js` - Build configuration with GitHub Pages support
- `src/App.jsx` - Main application component
- `src/components/` - Reusable components (minimal)

## Workflow Steps

1. Always check `src/config.js` first when making content changes
2. Verify any new components follow the minimal, config-driven approach
3. Ensure styling stays in `src/index.css` with plain CSS
4. Test that changes remain compatible with GitHub Pages deployment
5. Keep dependencies minimal and justified
