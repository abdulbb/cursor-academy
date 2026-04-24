# Cursor Academy

Learn Cursor by using Cursor.

`cursor-academy` is an interactive workshop repository designed to be opened directly in Cursor. Instead of reading a static tutorial, learners move through hands-on quests that use Cursor's own features to understand code, plan changes, practice edits, and build real workflows.

This repo is written for the modern Cursor experience, including **Cursor 3**, the **Agents Window**, local/cloud agent handoff, the integrated browser, and newer multi-agent workflows.

## Inspired by

This project is **inspired by** [dotdc/cursor-workshop](https://github.com/dotdc/cursor-workshop): a small, quest-style workshop where you learn Cursor by improving a real app (Tab, Ask, Plan, Agent) instead of only reading about features. Cursor Academy takes that same spirit—**open the repo, follow quests, edit code in place**—and extends it with a built-in tutor (rules and skills), role-matched playground apps, a deeper curriculum tied to official Learn/Docs/Workshops, and paths that include Cursor 3 workflows like the integrated browser and agent handoff.

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
- There is a fast quest path so new users can start immediately.

## Start Here

If you only do one thing after opening this repo in Cursor, do this:

1. Open a new chat.
2. Type: `Guide me through this repo`
3. If the tutor does not start onboarding, run `/onboard`
4. After onboarding, run `/learn`

That is the intended first-run flow.

If you are using **Cursor 3**, you can also open the new agent-first interface with:

- `Cmd+Shift+P` -> `Agents Window`

Then return to this repo's quests and modules from there.

## See the Cursor UI

If you want to see the interface before starting, run `/tour <feature>` such as `/tour ask`, `/tour plan`, or `/tour debug`, or open the matching `docs-tour/<feature>.html` page in Cursor's integrated browser. Use `docs-tour/index.html` as the hub only when you do not know which feature page you need yet, and keep the matching feature page open while you work.

## First 5 Minutes

Use this when you want the repo to feel more like a workshop than a doc set.

1. Open the repo in Cursor.
2. Open chat.
3. Run `/onboard`
4. Answer the questions about your level, role, and goals.
5. Open `QUESTS.md`
6. Start with Quest 1 or run `/learn`

## What happens when you open the repo

1. The project rule activates the Cursor Tutor persona.
2. The tutor uses `/onboard` to learn your level, role, stack, and goals.
3. The tutor chooses the most relevant playground app.
4. The tutor guides you through quests and modules in `curriculum/`.
5. Progress is tracked locally in `.cursor-academy/`.

## Workshop Quests

The fastest way to use this repo is through the quest list in `QUESTS.md`.

These quests are short, concrete, and tied to real files in the playground apps. Each quest has a clear target, one feature at a time, and an immediate next action—the same workshop rhythm as [cursor-workshop](https://github.com/dotdc/cursor-workshop), with extras for personalization and the full curriculum.

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
- `curriculum/advanced/`: subagents, Agents Window workflows, cloud handoff, models, hooks, automations, custom workflows
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

## Cursor 3 features covered here

This repo now explicitly accounts for:

- the **Agents Window** as the new unified agent-first surface
- **local and cloud handoff** for longer-running work
- the integrated **browser** for local web apps
- design-oriented UI iteration workflows for frontend, PM, and design learners
- multi-agent thinking, not just one chat at a time

## Quick start

1. Clone this repository.
2. Open it in Cursor.
3. Start a new chat.
4. Ask: `Guide me through this repo`
5. If needed, run `/onboard`
6. Then run `/learn`
7. Or open `QUESTS.md` and pick a quest manually

## If onboarding does not start automatically

- Run `/onboard`
- If you already completed onboarding, run `/learn`
- If you want a quick manual path, open `QUESTS.md` and start with Quest 1

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

