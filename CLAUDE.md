# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Install dependencies:**

```bash
bun install
```

**Development server:**

```bash
bun dev
# Starts development server on http://localhost:3000
```

**Build and production:**

```bash
bun build    # Build for production
bun start    # Start production server
bun lint     # Run ESLint
```

## Architecture Overview

This is a **Next.js 15** personal CV/portfolio application with the following key architecture:

### Internationalization (i18n)

- Uses `next-intl` for internationalization
- Supported locales: `en`, `es`, `it`, `pt`, `fr`, `de` (defined in `i18n/routing.ts`)
- Default locale: English (`en`)
- Content translations stored in `dictionaries/@{locale}.json` files
- Locale-based routing with `[locale]` dynamic segments

### App Router Structure

- **App Directory:** Uses Next.js 13+ App Router
- **Route Groups:**
  - `(home)` - Main portfolio pages
  - `(auth)` - Authentication pages (Clerk integration)
  - `(users)` - Protected dashboard area
- **Layout Hierarchy:** Root layout handles i18n and theme providers

### Authentication & Authorization

- **Clerk** integration for user management
- Protected routes: `/dashboard` and localized versions (`/:locale/dashboard`)
- Middleware combines Clerk auth with next-intl locale handling

### State Management

- **Zustand** for theme state management (`store/theme.ts`)
- Theme switching functionality integrated throughout the app

### Styling & UI

- **Tailwind CSS 4.x** with **daisyUI** component library for pre-built UI components
- **daisyUI** provides semantic component classes (btn, card, modal, etc.) and theme switching
- **PostCSS** configured with Tailwind
- **Prettier** with Tailwind plugin for class sorting
- Animated utilities via `tailwindcss-animated`

### Key Data Files

- **Personal Information:** `utils/devInfo.ts` - Contains developer profile data
- **Client Experience:** `utils/clients.ts` - Work experience and client information
- **Themes:** `utils/themes.ts` - Available theme configurations

### Component Architecture

- Components organized by feature in `app/[locale]/components/`
- Major sections: Hero, About, Experience, Skills, Writing, Company, etc.
- Reusable UI components like modals, cards, and navigation elements

### External Integrations

- **Clerk** for authentication with dark theme
- **Vercel Analytics** for tracking
- **Canvas Confetti** for interactive elements
- **React Icons** for iconography
- **UA Parser** for device detection

### Content Management

- All user-facing text stored in locale-specific JSON files
- Easy to modify personal information by updating `utils/devInfo.ts`
- Experience section configurable via `utils/clients.ts`

## Development Notes

- Uses **Bun** as package manager (lockfile: `bun.lockb`)
- TypeScript with strict mode enabled
- Path aliases configured: `@/*` maps to project root
- No test setup currently configured
- ESLint configured with Next.js rules
