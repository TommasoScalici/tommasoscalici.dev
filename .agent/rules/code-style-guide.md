# Project Code Style Guide & Standards

This document serves as the single source of truth for coding standards, patterns, and best practices for the **tommasoscalici.dev** repository.

## 1. Technology Stack

- **Framework**: [Astro 5.x](https://astro.build) (Static Site Generation/Islands Architecture)
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + CSS Variables
- **Linting/Formatting**: ESLint 9 (Flat Config), Prettier, Husky

## 2. Core Principles

- **Type Safety**: No `any`. Strict null checks enabled. Type assertions (`as`) should be avoided unless necessary for external libraries.
- **Semantic Components**: Use meaningful variable and component names.
- **Token-Driven Design**: Avoid hardcoded values (colors, shadows, spacing). Use project-defined styles and tokens.
- **Performance**: Use Astro for static content, React only for interactive islands (`client:*` directives).

## 3. TypeScript & Linting Rules

We enforce a strict ESLint configuration based on `typescript-eslint`'s strict and stylistic type-checked configs.

### Key Rules

- **No `any`**: Explicit `any` is forbidden. Use `unknown` or narrower types.
- **Floating Promises**: All promises must be handled.
    - _Correct_: `void runAnimation()` or `await runAnimation()`.
    - _Incorrect_: `runAnimation()` (without void/await).
- **Strict Conditionals**: Conditionals must ensure the type is not always truthy/falsy.
- **Imports**: Imports must be sorted automatically.
    - Run `npm run lint` or let your editor auto-fix to group imports (builtin -> external -> internal -> styles).

### Pattern: Async Effects & Cancellation

When running async logic inside `useEffect`, always handle cleanup to prevent state updates on unmounted components. The preferred pattern is using **`AbortController`** or a helper that handles cancellation, rather than mutable refs.

```tsx
// ✅ Correct Pattern (AbortController)
useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const run = async () => {
        try {
            await someAsyncWork({ signal });
            if (!signal.aborted) setState(newValue);
        } catch (error) {
            if ((error as Error).name !== 'AbortError') throw error;
        }
    };

    void run();

    return () => {
        controller.abort();
    };
}, []);
```

## 4. Styling Guidelines (Tailwind CSS)

### Design Tokens

**Never use hardcoded hex values** (e.g., `#1DB954`) in components. Use the semantic tokens defined in `tailwind.config.mjs`.

- **Brand Colors**:
    - `bg-spotify` / `text-spotify`
    - `text-facebook`, `text-youtube`, etc.
    - `bg-primary`, `bg-secondary` (Theme colors)
- **Backgrounds**:
    - `bg-background` (Deep black in dark mode)
    - `bg-surface` (Glassmorphism base)
- **Shadows**:
    - `shadow-primary-glow` (Cyan glow)
    - `shadow-secondary-glow` (Pink/Red glow)
    - `shadow-glass-light`

### CSS Variables

The theme is powered by CSS variables in `src/styles/global.css`.

- `[data-theme='light']`: Light mode overrides.
- Default is Dark Mode (Cyber-Noir).

### Animations

Use extended Tailwind animations:

- `animate-shake`: For attention-grabbing elements.
- `animate-spin-slow`: For rotating background effects.

## 5. React Component Structure

- **Definition**: Functional Components with explicit types.
- **Props**: Define a specific Interface for props.
- **Logic Extraction**: If a component exceeds ~150 lines or contains complex logic (e.g., deep linking, tracking), extract that logic into a custom hook in `src/hooks`.

```tsx
// Example
interface MyComponentProps {
    title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
    const { logic } = useMyLogic();
    return <div className="text-primary">{title}</div>;
};
```

## 6. Directory Structure

- `src/components`: UI components (React/Astro).
- `src/layouts`: Page layouts (e.g., `SpotifyLandingLayout.astro`).
- `src/pages`: Astro routes.
- `src/hooks`: Custom React hooks (`use...`).
- `src/data`: Static data, constants, and types.
- `src/styles`: Global CSS files.

## 7. Workflow

1.  **Work**: Make changes in `src`.
2.  **Verify**: Run `npm run lint` and `npm run build` locally.
3.  **Commit**: Husky will enforce linting and formatting on commit.
