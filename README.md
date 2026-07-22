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

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                          |
| `npm run build`   | Production build into `build/`                      |
| `npm run preview` | Serve the production build locally                  |
| `npm run smoke`   | Render every route and report anything that errors  |

Pushing to `main` builds and deploys to GitHub Pages automatically
(`.github/workflows/main.yml`). The smoke test runs first, so a page that
crashes fails the build rather than shipping broken.

## Stack

- **React 18** with **React Router** (`HashRouter`, required by GitHub Pages)
- **Vite** for building
- **Bootstrap 5** plus a small SCSS layer in `src/styles/`
- No CSS-in-JS, no utility-class framework, no component library beyond
  `react-bootstrap`

## Project layout

```
src/
  styles/          Design system — start here for anything visual
    _tokens.scss     Colours, fonts, layout constants
    _theme.scss      Maps the tokens onto Bootstrap's variables
    _base.scss       Element defaults (headings, paragraphs, lists, links)
    _components.scss Site components (.iswc-*)
    main.scss        Entry point; controls import order
  data/            Content that changes often, kept out of the components
    navigation.js      The navbar menu
    sponsors.js        Sponsors by tier
    importantDates.js  Deadlines for the Important Dates page
    keynotes.js        Keynote speakers
    venue.js           Travel, transport and hotel details
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

## How styling works

Three rules cover almost everything:

1. **Write plain semantic HTML.** Paragraphs, lists and links are styled
   globally in `_base.scss`. A `<ul>` needs no classes — bullets, indentation
   and nesting are already handled.
2. **Reach for a Bootstrap utility** (`d-flex`, `mb-4`, `text-center`) for
   one-off layout.
3. **Add an `.iswc-*` component** in `_components.scss` when something is
   reusable or too specific for utilities. Never add page-level CSS files.

Colours, fonts and layout constants live in `_tokens.scss` and nowhere else.

## Common tasks

**Change a colour.** Edit `src/styles/_tokens.scss`. If JavaScript needs the
same value (the Important Dates categories do), mirror it in `src/theme.js`.

**Add or hide a menu entry.** Edit `src/data/navigation.js`. Routes live
separately in `src/App.jsx`, so you can remove something from the menu while
keeping its URL reachable.

**Add a news item.** Prepend to the `NEWS` array in
`src/components/about/News.jsx` and move the `latest: true` flag to it.

**Add or change an important date.** Edit `src/data/importantDates.js`. Add the
entry anywhere in the list — months, ordering, the "next deadline" highlight and
the dimming of past dates are all derived from the ISO date. Use `endDate` for
multi-day events.

**Add a keynote speaker.** Edit `src/data/keynotes.js`. Each entry carries name,
affiliation, portrait, an optional talk abstract, and a biography as an array of
paragraphs — split long biographies rather than leaving one block. The page
builds its speaker index from that list.

**Update venue or hotel details.** Edit `src/data/venue.js`. Fares, distances
and room counts all live there.

**Write a new content page.**

```jsx
import Page from "../general/Page";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";

export default function MyPage() {
  return (
    <Page>
      <Header>Page title</Header>
      <p>Paragraphs and lists are styled globally — no classes needed.</p>
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
column). Above eight rows they gain a search box; rows collapse into cards on
narrow screens. Table-heavy pages should use `<Page width="wide">`.

**List committee members.** Use `organization/CommitteeSection`, passing a map
of role to members. Set `hideImage` for name-only lists.

**Add an image.** Use `className="iswc-figure-img"` for a standalone diagram or
map, or `iswc-media-row` / `iswc-media-row__image` / `iswc-media-row__text` for
an image beside text. Don't set pixel sizes inline, and keep source images under
about 1600px wide.

## What changed in the 2026 refactor

The site was rebuilt from the 2025 codebase. The visual design is deliberately
close to what it replaced; the change is in how it is put together.

**Build.** Create React App, which is unmaintained, was replaced by Vite.
Routes are code-split, taking the initial JavaScript download from 1230 kB to
around 260 kB. Oversized images were downscaled — the assets folder was 97 MB,
including one 22 MB keynote photograph served to every visitor.

**Styling.** The site previously mixed Tailwind, Flowbite, two page-level
stylesheets and inline styles, with several conventions for the same thing —
nine different ways of writing a bulleted list, and two conflicting definitions
of a global `.custom-table` where whichever loaded last won site-wide. All of it
is now Bootstrap 5 plus the small SCSS layer described above, with every colour
and font defined once in `_tokens.scss`.

**Components.** Three near-identical table components became one `DataTable`
with thin presets. Four copies of the committee list became `CommitteeSection`.
Content that changes often — the menu, sponsors, deadlines, keynotes, venue
details — moved out of the components into `src/data/`.

**Fixes.** Scroll position now resets between routes; expandable rows and jump
links are keyboard accessible; tables reflow into cards on phones instead of
scrolling sideways; the skip link and in-page navigation no longer collide with
`HashRouter`'s use of the URL hash.

**Testing.** `npm run smoke` renders all 42 routes server-side and fails on any
that error. It runs in CI before deploying.

### Conventions worth keeping

- Every class name used in the source resolves to a real definition. Nothing
  enforces this automatically, so check it when adding markup — an undefined
  class renders at the browser default, which is how photographs briefly ended
  up at full size during the migration.
- Content that the chairs update should live in `src/data/`, not inline in JSX.
- No new page-level CSS files.
