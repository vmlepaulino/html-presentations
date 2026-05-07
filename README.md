# From Cloud to Agents - Global Azure 2026

A single-page Angular presentation app for the talk **"From Cloud to Agents: Building AI-Centric Systems on Azure"**.

This project is intentionally web-native. It is not a PowerPoint export. The slides are rendered in Angular, the content is data-driven, and the presenter view is built into the same app.

## What This Presentation Covers

The deck walks through the platform story behind modern AI systems on Azure:

- cloud and sovereignty tradeoffs
- agentic runtime concepts
- Microsoft Foundry and the agent ecosystem
- project-as-code and CI/CD for agents
- Azure Local for hybrid and edge workloads
- real-time AI avatars
- Microsoft Fabric and Fabric IQ
- a closing summary that connects the whole stack

The narration is written like a staff engineer explaining the technical meaning of each layer to a team, not like a personal conference recap.

## Run Locally

```bash
npm install
npm start -- --port 8080
```

Open:

- Audience view: `http://localhost:8080/`
- Presenter view: `http://localhost:8080/presenter=true`
- Presenter view alias: `http://localhost:8080/?presenter=true`

The audience window shows the slides only. The presenter window shows the slides plus speaker notes and navigation controls.

## How The Presentation Is Built

### Content-first structure

The deck is driven by TypeScript data, not hard-coded markup:

- `src/app/data/slides.data.ts` contains the visible slide content.
- `src/app/data/presenter-scripts.data.ts` contains the presenter narration.
- `src/app/models/slide.model.ts` defines the slide types.

This makes it easy to update content without rewriting the UI.

### Slide rendering

Each slide type has its own Angular component under `src/app/components/slides/`:

- `title`
- `section`
- `bullets`
- `two-column`
- `architecture`
- `quote`
- `code`
- `references`

`src/app/components/slide-container/slide-container.component.ts` chooses the correct slide component with `ngSwitch` and keeps the audience and presenter views in sync.

### Reveal and navigation state

`src/app/services/slide.service.ts` owns:

- the current slide index
- the reveal step for bullet-driven slides
- next / previous navigation
- slide-to-slide progress

This is what lets the deck reveal content step by step without leaking that complexity into every slide component.

### Presenter mode

Presenter mode is controlled by the route:

- `presenter=true` in the path or query string opens the presenter layout.
- The presenter window shows the speaker notes and the navigation buttons.
- The audience window stays clean and does not show controls.

The app also mirrors state through `localStorage`, so when the presenter advances a slide, the audience window follows automatically.

### Layout conventions

The deck uses a few specific layout patterns that are worth reusing:

- Two-column slides reveal by box, so left and right sections stay aligned with the visible content.
- Architecture slides show a short intro and then a layer-by-layer explanation.
- Presenter notes are shaped to match the visible structure of the slide, so the script stays anchored to the UI.

### Visual system

Global styling lives in `src/styles.scss` and component styles handle the local layout details.

The design uses:

- CSS variables for colors, spacing, and typography
- a light Azure-inspired theme
- responsive layouts that still work on smaller screens
- clean presenter cards and note panels

## Why This Architecture Works For HTML Presentations

This approach is useful when you want slides that are:

- easy to edit
- easy to host
- easy to version control
- easy to present from two windows
- easy to reuse for other talks
- easy to extend with new slide types

The biggest advantage is separation of concerns:

- content lives in data files
- rendering lives in reusable Angular components
- navigation lives in one service
- presenter logic stays separate from audience logic

That keeps the deck maintainable even as the content grows.

## Reusing This UI For Your Own Presentation

If you want to build a new talk with this same UI, the fastest path is:

1. Replace the slide content in `src/app/data/slides.data.ts`.
2. Replace the presenter narration in `src/app/data/presenter-scripts.data.ts`.
3. Keep the slide types and rendering components if the structure still fits.
4. Adjust `src/styles.scss` if you want a new theme.
5. Add a new slide component only when you need a new layout pattern.

If you keep the same data model, you can swap the entire talk without rewriting the app.

## Prompt Pack For Creating A Similar Deck

The prompts below are written as reusable templates. They are not the exact prompts used here, but they capture the kind of prompts that would produce this architecture and style.

### 1. Build the Angular presentation architecture

```text
Design a single-page Angular presentation app for a technical talk.
Use a data-driven slide model, reusable slide components, and a presenter mode.
The audience view should show only slides.
The presenter view should show slides plus speaker notes and navigation controls.
Keep the content in TypeScript data files so the talk can be swapped without rewriting the UI.
```

### 2. Create the content model

```text
Define a TypeScript slide schema for a presentation app.
Support title slides, section slides, bullet slides, two-column slides, architecture slides, code slides, quote slides, and references.
Make the model expressive enough to hold presenter notes, left/right notes for two-column slides, and layered data for architecture slides.
```

### 3. Write presenter notes in a staff-engineering voice

```text
Rewrite the presenter notes so they sound like a staff engineer explaining the technical significance to a team.
Avoid personal conference commentary.
Focus on what each slide means, why it matters, what tradeoffs it introduces, and how the team should think about it in production.
```

### 4. Write two-column slide narration

```text
For each two-column slide, write presenter notes that mirror the visual layout.
The left paragraph should explain the left box.
The right paragraph should explain the right box.
Keep the narration technical and make the relationship between the two sides explicit.
```

### 5. Write architecture-slide narration

```text
For each architecture slide, write a short intro paragraph that explains the full stack.
Then write one explanation per layer in the same order as the slide.
Each explanation should say what the layer is, what role it plays in the system, and why it matters to the audience.
```

### 6. Make the deck easy to present from two windows

```text
Implement a presenter mode that opens from a presenter=true route.
The presenter window should control the slide state.
The audience window should mirror the same state without showing navigation UI.
Synchronize both windows with shared state so a presenter can advance the talk from one screen while the audience screen stays clean.
```

### 7. Make the visual system reusable

```text
Create a presentation UI with a strong but simple visual system.
Use CSS variables for the theme.
Keep the slide layouts responsive.
Make the presenter notes readable and aligned with the slide structure.
Avoid hard-coding content into the components.
```

### 8. Generate a full deck from a topic list

```text
Create a technical presentation deck about [TOPIC].
Break the talk into sections:
- context and problem framing
- architecture and system design
- implementation details
- operational concerns
- closing summary

For each slide, provide visible content and presenter notes.
Keep the tone technical, practical, and suitable for a staff engineer addressing a team.
```

## Suggested Workflow For New Talks

1. Draft the topic outline.
2. Write the slide content in `slides.data.ts`.
3. Write the presenter notes in `presenter-scripts.data.ts`.
4. Reuse the existing slide components where possible.
5. Only add new slide types when the structure truly needs it.
6. Review the deck in both audience and presenter mode.

## File Map

```text
src/
  app/
    components/
      slide-container/     presenter mode, navigation, routing, sync
      slides/              reusable rendering for each slide type
    data/
      slides.data.ts       visible slide content
      presenter-scripts.data.ts
    models/
      slide.model.ts       shared slide types
    services/
      slide.service.ts     slide index and reveal state
  styles.scss              global theme and presenter layout helpers
```

## Notes

- The deck was designed to stay easy to edit by changing data, not templates.
- The slide UI can be reused for other talks by replacing the content files.
- The architecture is intentionally simple so the presentation can evolve without becoming hard to maintain.
