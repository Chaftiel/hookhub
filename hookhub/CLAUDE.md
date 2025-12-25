# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 16 application built with:
- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Runtime**: React 19.2.3
- **Fonts**: Geist Sans and Geist Mono (via next/font)

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Structure

This project follows Next.js 16 App Router conventions:

- `app/` - App Router directory containing pages and layouts
  - `layout.tsx` - Root layout with font configuration and global styles
  - `page.tsx` - Home page component
  - `globals.css` - Tailwind CSS imports and theme configuration
- `public/` - Static assets (SVG icons)
- `.next/` - Build output (generated, not in source control)

## TypeScript Configuration

- Path alias: `@/*` maps to project root
- Target: ES2017
- Strict mode enabled
- JSX runtime: react-jsx (automatic JSX transform)

## Styling

The project uses Tailwind CSS v4 with:
- CSS variables for theming (`--background`, `--foreground`)
- Automatic dark mode via `prefers-color-scheme`
- Custom theme tokens defined in `globals.css` using `@theme inline`
- Geist font families available as CSS variables

## ESLint Configuration

Uses Next.js recommended ESLint configs:
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
