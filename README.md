# ISWC 2026 Website

See you in Bari! 25 – 29 October 2026, International Semantic Web Conference.

**Live site:** https://iswc2026.semanticweb.org/

![](./src/assets/logos/logo_banner.png)

## Getting started

Requires Node 18 or newer.

```bash
npm install
npm run dev      # local dev server on http://localhost:3000
```

| Command          | What it does                                                  |
| ---------------- | ------------------------------------------------------------- |
| `npm run dev`    | Dev server with hot reload                                     |
| `npm run build`  | Production build into `build/`                                 |
| `npm run preview`| Serve the production build locally                             |
| `npm run smoke`  | Render every route and report anything that errors             |

Pushing to `main` builds and deploys to GitHub Pages automatically
(`.github/workflows/main.yml`). The smoke test runs first, so a page that
crashes will fail the build rather than ship broken.

## Stack

- **React 18** with **React Router** (`HashRouter`, required by GitHub Pages)
- **Vite** for building
- **Bootstrap 5** + custom SCSS for styling
- No CSS-in-JS, no Tailwind, no component library beyond `react-bootstrap`

## Project layout

```
src/
  styles/          Design system — start here for anything visual
    _tokens.scss     Colours, fonts, layout constants
    _theme.scss      Maps the tokens onto Bootstrap's variables
    _base.scss       Element defaults (headings, lists, links)
    _components.scss Site components (.iswc-*)
    _compat.scss     Temporary shim — see "Ongoing migration" below
    main.scss        Entry point; controls import order
  data/
    navigation.js  The navbar menu
    sponsors.js    Sponsors by tier
  components/
    general/       Shared building blocks used by every page
    about/         Homepage
    calls/         Call for papers pages
    program/       Programme pages (+ data/ for paper and workshop lists)
    guidelines/    Author guidelines
    attending/     Registration, venue, visa, conduct
    sponsorship/   Sponsor-facing pages
    organization/  Committee listings
```

## Common tasks

**Change a colour.** Edit `src/styles/_tokens.scss`. If JavaScript needs the
same value (the Important Dates timeline does), mirror it in `src/theme.js`.

**Add or hide a menu entry.** Edit `src/data/navigation.js`. Routes live
separately in `src/App.jsx`, so you can remove something from the menu while
keeping its URL reachable.

**Add a news item.** Prepend to the `NEWS` array in
`src/components/about/News.jsx` and move the `latest: true` flag to it.

**Write a new content page.**

```jsx
import Page from "../general/Page";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";

export default function MyPage() {
  return (
    <Page>
      <Header>Page title</Header>
      <p>Plain paragraphs and lists are styled globally — no classes needed.</p>
      <UnderlineHeader>A section</UnderlineHeader>
      <ul>
        <li>Bullets already look right.</li>
      </ul>
    </Page>
  );
}
```

Then register it in `src/App.jsx` and add it to `src/data/navigation.js`.

**Show a table of papers or workshops.** Use `general/DataTable`, or one of the
presets around it: `PaperTable` (title + authors + abstract),
`DescriptiveTable` (title + organisers + links), `TutorialTable` (adds a format
column). Rows collapse into cards on narrow screens automatically.

**Add an image.** Keep source images under about 1600px wide. Large photos were
a real problem here — the assets folder was 97 MB before being downscaled.

## Ongoing migration

The site was rebuilt on Bootstrap; the shared components and homepage are fully
converted. Individual content pages still carry Tailwind class names from the
previous codebase, and `src/styles/_compat.scss` reimplements just those classes
so the pages keep rendering correctly.

When you touch a page, convert it: replace the leftover utility classes with
Bootstrap equivalents or plain semantic HTML, then delete anything from
`_compat.scss` that is no longer referenced. That file should shrink to nothing
over time. Nothing should ever be added to it.

Two page-level stylesheets also remain, `components/attending/attending.css` and
`components/sponsorship/sponsorship.css`. They both define a global
`.custom-table`, with different rules, so whichever loads last wins across the
whole site — worth folding into `_components.scss` when those pages are touched.
