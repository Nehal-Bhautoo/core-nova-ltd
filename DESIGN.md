---
name: CoreNova Technologies
description: Browser-adaptive green engineering interface
colors:
  light-background: "#f5f8f3"
  light-foreground: "#18291d"
  light-surface: "#ffffff"
  light-muted: "#526457"
  light-accent: "#24633d"
  light-line: "#193e2526"
  light-secondary-text: "#344d3d"
  light-subtle-text: "#58695c"
  light-nav-text: "#455c4b"
  light-surface-raised: "#eaf1e8"
  light-surface-subtle: "#edf3eb"
  light-surface-hover: "#e3eee2"
  light-surface-inset: "#f9fbf7"
  light-header-background: "#f5f8f3ee"
  light-on-accent: "#ffffff"
  light-accent-hover: "#194c2f"
  light-accent-soft: "#245f3d0a"
  light-accent-line: "#245f3d40"
  light-accent-line-strong: "#245f3d66"
  light-line-strong: "#193e2540"
  light-code-background: "#dce9dc"
  light-code-text: "#234e34"
  light-visual-grid: "#1c543b0d"
  light-visual-tag-background: "#eaf3eced"
  light-orbital-front: "#2b7450"
  light-orbital-back: "#6b9a80"
  light-orbital-glow: "#27784f"
  light-orbital-stroke: "#2d7150"
  light-orbital-stroke-muted: "#6c9b83"
  light-orbital-boundary: "#34754e"
  light-orbital-core: "#285e42"
  light-orbital-node: "#2c704a"
  light-orbital-wire: "#416f54"
  light-cove-accent: "#17664c"
  light-cove-line: "#17664c40"
  light-cove-line-strong: "#17664c66"
  dark-background: "#101411"
  dark-foreground: "#f0f1e9"
  dark-surface: "#161c17"
  dark-muted: "#a0aaa3"
  dark-accent: "#c0efc9"
  dark-line: "#ffffff14"
  dark-secondary-text: "#c6d0c7"
  dark-subtle-text: "#94a59a"
  dark-nav-text: "#b4bdb6"
  dark-surface-raised: "#18201b"
  dark-surface-subtle: "#141a16"
  dark-surface-hover: "#1c261f"
  dark-surface-inset: "#111713"
  dark-header-background: "#101411ee"
  dark-on-accent: "#17261b"
  dark-accent-hover: "#d6f8db"
  dark-accent-soft: "#c0efc908"
  dark-accent-line: "#c0efc92b"
  dark-accent-line-strong: "#b8e9c54d"
  dark-line-strong: "#ffffff22"
  dark-code-background: "#ffffff08"
  dark-code-text: "#d7e5db"
  dark-visual-grid: "#8bd5a808"
  dark-visual-tag-background: "#172019e8"
  dark-orbital-front: "#a5ebca"
  dark-orbital-back: "#376c58"
  dark-orbital-glow: "#6fddb0"
  dark-orbital-stroke: "#b9f8d6"
  dark-orbital-stroke-muted: "#69bd99"
  dark-orbital-boundary: "#8fdbb3"
  dark-orbital-core: "#d2ffe4"
  dark-orbital-node: "#bbfbd7"
  dark-orbital-wire: "#8bbba0"
  dark-cove-accent: "#8be1c4"
  dark-cove-line: "#8be1c438"
  dark-cove-line-strong: "#8be1c45c"
  contact-background: "#c0efc9"
  contact-foreground: "#1d3324"
  contact-button: "#1c3323"
  contact-button-text: "#e5f6e6"
  contact-button-hover: "#2d4b36"
typography:
  headline:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "clamp(30px, 3vw, 42px)"
    fontWeight: 450
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "19px"
    fontWeight: 500
  body:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.8
  label:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
  meta:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.75rem"
rounded:
  button: "5px"
  card: "6px"
  panel: "8px"
  project-link: "4px"
spacing:
  card-gap: "14px"
  section-desktop: "112px"
  section-tablet: "80px"
  section-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{colors.light-accent}"
    textColor: "{colors.light-on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "15px 23px"
  button-primary-dark:
    backgroundColor: "{colors.dark-accent}"
    textColor: "{colors.dark-on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "15px 23px"
  button-contact:
    backgroundColor: "{colors.contact-button}"
    textColor: "{colors.contact-button-text}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "15px 23px"
  service-card:
    backgroundColor: "{colors.light-surface}"
    textColor: "{colors.light-foreground}"
    rounded: "{rounded.card}"
    padding: "26px 23px 20px"
  project-panel:
    backgroundColor: "{colors.light-surface-raised}"
    textColor: "{colors.light-foreground}"
    rounded: "{rounded.panel}"
    padding: "7px"
    width: "300px"
---

# Design System: CoreNova Technologies

## Overview

**Creative North Star: "CoreNova’s green engineering interface"**

This descriptive label records the existing interface rather than proposing a new visual identity. Green accents, quiet surfaces, fine borders, and generous spacing organize software services and project information. The approved extension adds a light palette alongside the established dark palette.

The website follows the browser/system preference automatically. Light values are the CSS default; a dark media query overrides the same semantic properties, including while the page remains open. This is a CSS preference system with no manual theme switch or saved theme state.

**Key Characteristics:**
- Automatic browser preference with consistent semantic roles.
- Green actions, restrained borders, and spacious responsive sections.
- Shared navigation with page-specific Cove presentation.

## Colors

The frontmatter records exact implemented values, with `light-` and `dark-` prefixes because the portable schema has no theme-mode object. These are snapshots of identically named CSS custom properties without the scheme prefix; `app/globals.css` remains the implementation authority. Component frontmatter shows the default light variant unless explicitly suffixed; live sidecar snippets inherit active CSS properties.

### Primary

Deep green in light mode and mint in dark mode identify actions, links, focus, and selected navigation through `accent`, `on-accent`, and `accent-hover`. `accent-soft`, `accent-line`, and `accent-line-strong` support restrained fills and boundaries. Orbital artwork uses the shared `orbital-*` roles for its geometry and `visual-*` roles for its grid, tags, and glow; changing scheme changes the SVG styling, not the artwork's structure.

Cove uses the `cove-accent`, `cove-line`, and `cove-line-strong` family. These are globally defined for automatic scheme changes but currently consumed by the scoped Cove module, not replacements for the company-wide accent. Cove page layout stays in `app/cove/page.module.css`; Projects styling stays in `app/components/project-dropdown.module.css`.

### Neutral

`background` and `foreground` establish page contrast. `surface`, `surface-raised`, `surface-subtle`, `surface-hover`, and `surface-inset` separate cards, dropdowns, section bands, hover states, and diagrams. `muted`, `secondary-text`, `subtle-text`, and `nav-text` preserve text hierarchy. `line` and `line-strong` separate content; `header-background` is translucent. Inline source commands use `code-background` and `code-text`.

**The Browser Preference Rule.** Consume semantic CSS properties so surfaces and text respond together to `prefers-color-scheme`; maintain matching `color-scheme` and scheme-specific browser `theme-color` metadata.

**The Fixed Artifact Rule.** Keep the actual Cove screenshot and deliberate mint contact panel in their original colors; do not invert imagery or apply a page-wide color filter.

The `contact-*` frontmatter values document the fixed contact panel and its dark button, which deliberately remain consistent across schemes. The actual screenshot is product evidence with fictional demo accounts and messages, not a theme token source.

## Typography

Geist is the shared content face, loaded in `app/layout.tsx`; Geist Mono supports technical metadata. The frontmatter captures observed headline, title, body, label, and metadata roles. Body line-height varies with context, commonly from 1.8 to 1.9. Shared section headings scale responsively; narrow mobile headings resolve to 30px. Projects descriptions use the metadata size with the content face rather than monospace.

Existing homepage display text uses a responsive 40–63px clamp at weight 450; Cove display uses a 46–78px clamp, resolving to 49px at its narrow mobile breakpoint. These are page-specific treatments, not a new global type scale. The existing Georgia italic display accent is legacy implementation and is not canonized here as a rule for new surfaces. Existing eyebrows are likewise not a new reusable prescription.

## Layout

The shared centered container caps at 1280px, with total horizontal gutters of 112px on wide screens, 64px below 1100px, 48px below 800px, and 40px below 560px. Shared section spacing follows the frontmatter's desktop/tablet/mobile values. The homepage services grid starts with four columns and reduces on smaller screens. Header navigation switches to the mobile disclosure at 800px, with header heights of 86px, 76px, and 72px across desktop/tablet/narrow mobile.

Cove keeps its separate scoped spacing: sections use 95px, 70px, and 55px at the desktop, 800px, and 560px ranges. Its feature rows and three-step setup become a single column on narrow mobile. Its additional 1000px breakpoint adjusts column gaps. Do not promote these page-specific dimensions into shared tokens.

## Elevation & Depth

Depth comes mainly from tonal surfaces and thin borders. Primary buttons add a diffuse shadow and a small lift on hover; service cards lift without a shadow. The solution diagram and small orbital labels use soft panel shadows. The sticky header uses a translucent background and 20px backdrop blur. Shadow colors resolve through semantic CSS properties and are recorded as complete recipes in the sidecar rather than unsupported frontmatter groups.

Existing 0.2-second control transitions and 0.25-second card transitions support state changes. Decorative hero entry and orbital drift remain source-defined; `prefers-reduced-motion: reduce` disables animation, transitions, and smooth scrolling. Scheme changes do not depend on animation.

## Shapes

Controls and surfaces use modest rounded corners: button, service card, and panel values appear in frontmatter. The Projects links use the smaller project-link radius. Cove's screenshot frame uses a page-specific 12px radius, reduced to 7px on narrow mobile. Circular markers and orbital geometry belong to their respective components, not every surface.

## Components

### Buttons

Primary buttons use active `accent` and `on-accent` properties, a matching border, a minimum height of 52px, and the frontmatter padding. Hover uses `accent-hover`, a two-pixel upward movement, and the semantic button shadow. Small header buttons use a 44px minimum height. Shared links/buttons have a two-pixel accent focus outline with six-pixel offset. Contact buttons deliberately use the fixed contact palette.

### Cards / Containers

Service cards use the active surface, foreground, muted body text, thin line border, and the card padding/radius in frontmatter. They have a 330px desktop minimum height. Hover uses `surface-hover`, `accent-line-strong`, and a five-pixel lift. The solution diagram uses an inset surface; Cove features are bordered rows rather than service-card replicas.

### Navigation

The sticky shared Header preserves the existing brand and contact action. Projects uses native `details`/`summary` with a rotating SVG chevron; desktop overlays a 300px panel, while mobile expands inline. Both menus read `app/data/projects.ts`. Hover/open/current states use the accent; project links carry `aria-current="page"`. Keyboard access, focus return on Escape, outside-pointer dismissal, and closing on navigation remain part of the component contract. Native disclosure semantics are preserved instead of claiming application-menu keyboard behavior.

### Text links and disclosure questions

Text links keep a minimum 44px interaction height and pair with inline SVG arrows. Cove questions use native disclosure elements, thin separators, readable multiline answers, and a Cove-accent focus outline. No text-input primitive exists on these pages, so this document does not invent one.

**The Shared Roles Rule.** Extend shared tokens in `app/globals.css` for cross-page behavior; keep page composition and component-specific styling in their existing CSS modules.

## Do's and Don'ts

### Do:
- **Do** reuse semantic color properties for both browser schemes.
- **Do** preserve keyboard focus, current-page indication, and reduced-motion support.
- **Do** keep the Projects lists driven by the shared project array.
- **Do** retain the Cove screenshot's fictional-demo caption.

### Don't:
- **Don't** apply global image inversion or page-wide color filters.
- **Don't** recolor the fixed mint contact panel when the browser scheme changes.
- **Don't** turn Cove-specific spacing or accent roles into defaults for unrelated pages.
