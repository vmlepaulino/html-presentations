# From Cloud to Agents — Global Azure 2026 Slide Deck

A single-page Angular slide deck for the 30-minute session
**"From Cloud to Agents: Building AI-Centric Systems on Azure"**.

Light, Microsoft Build / Fluent UI–inspired theme. No PowerPoint needed.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:4200

Presenter script view:

- http://localhost:4200/presenter=true
- http://localhost:4200/?presenter=true

On two-column slides, the presenter view now shows matching left/right script cards so it is obvious which part of the talk each paragraph belongs to.

## Navigation

| Action            | Key / Gesture                       |
| ----------------- | ----------------------------------- |
| Next bullet/slide | `→`, `Space`, `PageDown`, or click  |
| Previous          | `←` or `PageUp`                     |
| First slide       | `Home`                              |
| Last slide        | `End`                               |

Click the on-screen `‹` / `›` buttons too.

## Project structure

```
src/
  app/
    app.component.ts                # shell
    components/
      slide-container/              # navigation + transitions
      slides/                       # one component per slide type
    data/
      slides.data.ts                # ALL slide content lives here
    models/
      slide.model.ts                # slide data types
    services/
      slide.service.ts              # navigation + reveal state
  styles.scss                       # global theme (CSS variables)
```

## How to add a slide

1. Open `src/app/data/slides.data.ts`.
2. Append a new object to the `SLIDES` array. Pick a `type`:
   - `title` · `section` · `bullets` · `two-column`
   - `architecture` · `quote` · `code` · `references`
3. Save. The slide auto-appears at the end.

Reorder slides by reordering array entries.

## How to edit content

All copy is in `slides.data.ts`. Each slide type has typed fields
(see `src/app/models/slide.model.ts`).

## How to change the theme

Open `src/styles.scss` and edit the CSS variables under `:root`.
Brand colours, neutrals, shadows, fonts, radii are all centralised.

## How to add a new slide type

1. Define new fields on `Slide` in `slide.model.ts`.
2. Create a component under `src/app/components/slides/`.
3. Register it in `slide-container.component.ts` (imports + `ngSwitchCase`).
4. Update `SlideService.maxStep()` if it supports bullet reveal.
