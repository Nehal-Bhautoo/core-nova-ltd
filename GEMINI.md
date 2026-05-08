# CoreNova Technologies Ltd - Project Context

This project is the official website for CoreNova Technologies Ltd, a landing page designed to showcase engineering intelligent systems. It is built using modern web technologies with a focus on performance and visual appeal.

## Project Overview

- **Main Technologies:**
  - **Framework:** Next.js 16 (App Router)
  - **Library:** React 19
  - **Styling:** Tailwind CSS 4 (using `@tailwindcss/postcss`)
  - **Language:** TypeScript
- **Architecture:**
  - Follows the Next.js App Router structure.
  - **UI Components:** Modular components located in `app/components/`, organized via a barrel export in `app/components/index.ts`.
  - **Styles:** Global styles in `app/globals.css`, leveraging Tailwind's utility-first approach.
  - **Fonts:** Uses Geist and Geist Mono via `next/font`.

## Building and Running

The following commands are defined in `package.json`:

- **Development Server:**
  ```bash
  npm run dev
  ```
- **Production Build:**
  ```bash
  npm run build
  ```
- **Start Production Server:**
  ```bash
  npm run start
  ```
- **Linting:**
  ```bash
  npm run lint
  ```

## Development Conventions

- **Component Structure:**
  - All landing page sections are housed in `app/components/`.
  - Prefer functional components with explicit `React.FC` or standard function declarations.
  - Export components from their respective files and include them in `app/components/index.ts`.
- **Styling:**
  - Use Tailwind CSS 4 utility classes for all styling.
  - Maintain a dark/glassmorphism aesthetic consistent with existing components (e.g., `backdrop-blur`, `bg-black/40`, `border-white/10`).
- **Next.js 16 Specifics:**
  - **Important:** As noted in `AGENTS.md`, this version of Next.js may contain breaking changes or new APIs that differ from standard training data.
  - Refer to `node_modules/next/dist/docs/` for specific version-level documentation.
- **Type Safety:**
  - Strictly use TypeScript for all components and utility functions.
  - Metadata should be defined using the `Metadata` type from `next`.
