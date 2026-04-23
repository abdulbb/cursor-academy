# Cursor Academy

Learn Cursor by using Cursor.

`cursor-academy` is an interactive learning repository designed to be opened directly in Cursor. Instead of reading a static tutorial, learners use Cursor's own features to understand code, plan changes, practice edits, and build real workflows inside a guided repo.

## Who this is for

- people who have never used an IDE before
- developers who want practical AI-assisted workflows
- advanced users who want rules, skills, subagents, hooks, and automations
- designers, PMs, data scientists, QA, DevOps, support, and sales teams who need role-relevant examples

## What makes this repo different

- The teaching medium is Cursor itself.
- The repo adapts to the learner's level and role.
- The exercises are grounded in real sample apps, not abstract toy snippets.
- The curriculum is mapped to official Cursor Learn, Docs, and Workshop content.

## How the learning flow works

1. Open the repo in Cursor.
2. Start a chat and ask Cursor to guide you through the repo.
3. The project rule activates the Cursor Tutor persona.
4. The tutor runs `/onboard` to learn your level, role, stack, and goals.
5. The tutor chooses the most relevant playground app.
6. The tutor walks you through modules in `curriculum/`.
7. Progress is tracked locally in `.cursor-academy/`.

## Playground apps

The repo ships three role-matched playground apps with intentional flaws, missing features, and incomplete workflows so learners have something meaningful to practice on.

### `playground/taskflow/`

Project management API and dashboard for developer-oriented exercises.

- good for: developers, frontend, backend, full-stack, mobile
- themes: API routes, auth middleware, status enums, type-safe edits, tests

### `playground/pixelcraft/`

Product landing page and component system for design and go-to-market workflows.

- good for: designers, PMs, support, sales
- themes: content structure, UI polish, tokens, accessibility, messaging

### `playground/datalens/`

Analytics pipeline and dashboard for reliability and data-oriented workflows.

- good for: data science, QA, DevOps, infrastructure
- themes: ingestion, transforms, debugging, monitoring gaps, verification

## Curriculum structure

- `curriculum/foundations/`: onboarding, first chat, Tab, Ask mode, Agent mode
- `curriculum/core/`: context, Plan mode, Debug mode, rules, skills, and MCP
- `curriculum/advanced/`: subagents, cloud agents, models, hooks, automations, custom workflows
- `curriculum/roles/`: role-specific learning paths
- `curriculum/references/`: shortcuts, models, workshop index, and Learn mapping

The track map lives in `curriculum/tracks.md`.

## Project tutor surface

The guided experience is implemented with Cursor-native project files:

- `AGENTS.md`: repository-wide tutor behavior
- `.cursor/rules/cursor-tutor.mdc`: always-on educational persona
- `.cursor/rules/exercise-mode.mdc`: exercise-specific guardrails for playground files
- `.cursor/skills/onboard/`: onboarding flow
- `.cursor/skills/learn/`: module orchestration
- `.cursor/skills/exercise/`: hands-on exercise runner
- `.cursor/skills/hint/`: progressive hints
- `.cursor/skills/progress/`: recap and resume support

## Quick start

1. Clone this repository.
2. Open it in Cursor.
3. Start a new chat.
4. Ask: `Guide me through this repo`
5. If needed, explicitly run `/onboard`.
6. After onboarding, run `/learn` to begin or resume your track.

## Verifying the playground apps

Each playground app is its own small TypeScript project.

### TaskFlow

```bash
cd playground/taskflow
npm install
npm run typecheck
npm test
```

### PixelCraft

```bash
cd playground/pixelcraft
npm install
npm run typecheck
npm test
```

### DataLens

```bash
cd playground/datalens
npm install
npm run typecheck
npm test
```

## Local learner state

Learner-specific state is stored in `.cursor-academy/` and intentionally ignored by git so each learner gets a personal profile and progress file.

Expected files:

- `.cursor-academy/profile.md`
- `.cursor-academy/progress.md`

## Source material

This curriculum is built from official Cursor materials:

- Cursor Learn
- Cursor Docs
- Cursor Workshops and on-demand sessions

The references in `curriculum/references/` map those official sources into this repo's hands-on structure.

## Contributing

See `CONTRIBUTING.md` for contribution guidelines. Good contributions include:

- improving exercises without removing the teaching moment
- refreshing workshop and docs mappings
- expanding role-specific examples
- tightening the tutor prompts, rules, and skills
