# Dimitrije Savatić — Portfolio

A neumorphic, JSON-driven Angular portfolio for a junior web developer. Every
section (hero, about, skills, projects, experience, education, services,
contact) is a standalone Angular component that renders content loaded from
`src/assets/data/portfolio.json` — nothing is hardcoded in the templates.

## Requirements

- Node.js 18.19+ or 20.9+ (Angular 18 requirement)
- npm 9+

## Getting started

```bash
npm install
npm start        # ng serve — http://localhost:4200
```

Production build:

```bash
npm run build     # outputs to dist/portfolio
```

## Project structure

```
src/
  app/
    components/        one folder per section (navbar, hero, about, skills,
                        projects, experience, education, services, contact,
                        footer) + a shared IconComponent used everywhere
    directives/         RevealOnScrollDirective (scroll-in animation)
    models/              TypeScript interfaces matching portfolio.json
    services/
      portfolio.service.ts   loads + caches portfolio.json
      scroll-spy.service.ts  active-nav tracking + smooth scroll
  assets/
    data/portfolio.json  <-- all site content lives here
    images/projects/     project screenshots (see below)
    cv/                   your CV PDF (see below)
  styles.scss            neumorphic design tokens + shared utility classes
```

## Editing content

You never need to touch a component to update the site's content:

- **Add a project** — append an object to the `projects` array in
  `portfolio.json`. Leave `githubUrl` or `liveUrl` empty (`""`) to hide that
  button automatically.
- **Add a skill** — add the string to the relevant array under `skills`.
- **Add an experience / education entry** — append to `experience` or
  `education`; the timeline and list render however many entries exist.
- **Update services** — edit the `services` array; icons cycle through a
  fixed set automatically (`services.component.ts`) so you don't need to
  specify one per entry.

## Adding real assets

Two things in `portfolio.json` currently point at files that don't exist yet
in this project — replace them with your own:

1. **Project screenshots** — drop images into `src/assets/images/projects/`
   and update each project's `image` path. Until a real image is in place,
   the project card automatically falls back to a neumorphic placeholder
   with the project's initials, so the site still looks complete.
2. **CV** — add your PDF to `src/assets/cv/` and update `personal.cvUrl`.
   The "Download CV" button in the About section links straight to this
   path.

Also update `personal.email`, the `socials` URLs, and `personal.location` to
your real details.

## Design system

Colors, spacing, radii, and shadow values are defined once as CSS custom
properties in `src/styles.scss` (`:root`), plus reusable neumorphic surface
classes (`.neu-raised`, `.neu-pressed`, `.neu-flat`) and button/tag/form
utility classes shared by every component. Update the palette there to
restyle the whole site consistently.

## Notes

- The contact form validates client-side (Angular Reactive Forms) and shows
  a success state on submit, but isn't wired to a backend yet — connect
  `onSubmit()` in `contact.component.ts` to an email API or serverless
  function when you have one.
- Images use `loading="lazy"`; the intro animation on each section respects
  `prefers-reduced-motion`.
