---
trigger: always_on
---

# Project Code Style Guide & Standards

This document serves as the single source of truth for coding standards, patterns, and best practices for the **tommasoscalici.dev** repository.

## 1. Technology Stack

- **Framework**: [Astro 6.x](https://astro.build) (Static Site Generation / Content Layer)
- **Language**: [TypeScript](https://www.typescriptlang.org) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (CSS-First Architecture)
- **Localization**: Native Astro i18n (English/Italian)
- **Content Validation**: [Zod](https://zod.dev) for strictly typed content schemas
- **Linting/Formatting**: ESLint 10 (Flat Config), Prettier, Husky

## 2. Core Principles

- **Type Safety**: No `any`. Strict null checks enabled. Use Zod for all data validation.
- **Performance First**: Strictly zero-JS by default. Interactive elements use Vanilla TypeScript or native Web Components.
- **Semantic Components**: Use meaningful variable and component names. Follow Astro best practices for layout and components.
- **Token-Driven Design**: Never use hardcoded values (colors, shadows, spacing). Use project-defined styles and Tailwind tokens.
- **i18n by Design**: All content and UI strings must support both English (`/`) and Italian (`/it`).

## 3. Architecture & Data Patterns

### Content Schemas (Zod)

All managed content in `src/content/` must have a corresponding schema in `src/content/config.ts`.

- Use `safeString` and `safeUrl` helpers for validation.
- Handle multilingual fields using the `multilingualString` schema (supports both direct string and `{en, it}` records).

### Internationalization (i18n)

- UI strings are managed in `src/i18n/ui.ts`.
- Static routes use Astro's `getStaticPaths` with `lang` parameter or separate directories.
- Persistent language preferences are handled via `localStorage` in `Layout.astro`.

## 4. TypeScript & Linting Rules

### Key Rules

- **No `any`**: Explicit `any` is forbidden. Use `unknown` or narrower types.
- **Floating Promises**: All promises must be handled (`void` or `await`).
- **Strict Conditionals**: Conditionals must ensure the type is not always truthy/falsy.
- **Imports**: Imports must be sorted automatically (builtin -> external -> internal -> styles).

## 5. Styling Guidelines (Tailwind CSS)

### Design Tokens

**Never use hardcoded hex values** in components. Use the semantic tokens defined in the `@theme` block within `src/styles/global.css`.

- **Brand Colors**: `bg-spotify`, `text-facebook`, `bg-primary` (Neon Cyan), `bg-secondary` (Electric Red).
- **Backgrounds**: `bg-background` (Deep Black), `bg-surface` (Glassmorphism base).
- **Shadows**: `shadow-primary-glow`, `shadow-secondary-glow`.

### CSS Variables

The theme is powered by CSS variables in `src/styles/global.css`.

- `[data-theme='light']`: Light mode overrides.
- Default is Dark Mode (Cyber-Noir).

## 6. Directory Structure

- `src/assets`: Images, icons, and fonts.
- `src/components`: UI components (.astro).
- `src/content`: Data-driven content (Bio, Music, Projects, Legal).
- `src/data`: Global constants, JSON-LD schemas, and utility types.
- `src/i18n`: Localization dictionaries and logic.
- `src/layouts`: Page structure templates.
- `src/lib`: Shared business logic and utilities.
- `src/pages`: Routing and page entries.
- `src/styles`: Tailwind layers and global variables.

## 7. Workflow

1.  **Work**: Make changes in `src`.
2.  **Verify**: Run `npm run check` (Astro/TS) and `npm run lint`.
3.  **Commit**: Husky will enforce linting and formatting on commit.
