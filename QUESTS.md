# Cursor Academy Quests

This file is the fastest way to start.

If you just opened the repo in Cursor and want a simple workshop-style path, do this:

1. Run `/onboard`
2. Open the playground app that matches your role
3. Start with Quest 1
4. Ask Cursor to help you complete the quest

If you are using **Cursor 3**, you can also open:

- `Cmd+Shift+P` -> `Agents Window`

and use that interface alongside these quests.

## Choose your playground

- Developers / Frontend / Backend / Full-stack / Mobile -> `playground/taskflow/`
- Designers / PMs / Support / Sales -> `playground/pixelcraft/`
- Data Science / QA / DevOps / Infrastructure -> `playground/datalens/`

## Quest 1 - Meet Your Playground

Goal: figure out what app you are working on and where it starts.

- TaskFlow: open `playground/taskflow/src/server.ts`
- PixelCraft: open `playground/pixelcraft/src/server.ts`
- DataLens: open `playground/datalens/src/server.ts`

Ask Cursor in Ask mode: "What does this app do, and which file should I read next?"

## Quest 2 - Your First Useful Question

Goal: ask one concrete question about the codebase.

- TaskFlow: ask about `playground/taskflow/src/routes/api.ts`
- PixelCraft: ask about `playground/pixelcraft/templates/home.njk`
- DataLens: ask about `playground/datalens/src/pipeline/load.ts`

Ask: "Explain this file in plain language and tell me the most important thing to notice."

## Quest 3 - Tab Completion Fix

Goal: make one tiny change using Cursor Tab.

- TaskFlow: fix the status typo in `playground/taskflow/src/models/task.ts`
- PixelCraft: inspect spacing tokens in `playground/pixelcraft/static/css/tokens.css`
- DataLens: inspect timestamp parsing in `playground/datalens/src/pipeline/transform.ts`

Use Tab suggestions to make or explore a tiny change, then verify it.

## Quest 4 - Ask Mode Detective

Goal: find one intentional flaw without editing anything.

- TaskFlow: inspect `playground/taskflow/src/middleware/auth.ts`
- PixelCraft: inspect `playground/pixelcraft/src/routes/forms.ts`
- DataLens: inspect `playground/datalens/src/pipeline/aggregate.ts`

Ask Cursor: "What is wrong here, and what would the user see because of it?"

## Quest 5 - Plan Before Build

Goal: use Plan mode instead of jumping straight into edits.

- TaskFlow: plan a search endpoint for tasks
- PixelCraft: plan dark mode support
- DataLens: plan a health endpoint for the pipeline

Ask Cursor in Plan mode to produce a short implementation plan with affected files and verification steps.

## Quest 6 - Agent First Fix

Goal: let Agent mode make one small, reviewable improvement.

- TaskFlow: improve dashboard copy in `playground/taskflow/templates/index.njk`
- PixelCraft: improve CTA copy in `playground/pixelcraft/templates/home.njk`
- DataLens: improve dashboard labels in `playground/datalens/templates/index.njk`

Review the diff before accepting it.

## Quest 7 - Rules and Skills

Goal: inspect how this repo teaches from inside Cursor.

Open:

- `.cursor/rules/cursor-tutor.mdc`
- `.cursor/skills/onboard/SKILL.md`
- `.cursor/skills/learn/SKILL.md`

Ask Cursor: "How does this repo turn Cursor into the teacher?"

## Quest 8 - Agents Window and Handoff

Goal: understand how Cursor 3 changes the way you work with agents.

- Open the **Agents Window**
- Ask Cursor: "Which tasks in this repo are better for local iteration, and which are better for cloud handoff?"
- Use one real example from your selected playground app

Good examples:

- TaskFlow: larger API feature or regression sweep
- PixelCraft: UI iteration plus screenshot or browser verification
- DataLens: longer-running debugging or monitoring-oriented investigation

## Quest 9 - Browser or Design Workflow

Goal: use Cursor's integrated browser or design-oriented workflow on a real UI.

- Best target: `playground/pixelcraft/`
- Open the local app in Cursor's browser
- Inspect the rendered UI
- Ask Cursor to suggest one improvement to spacing, hierarchy, or CTA clarity

If you are using Cursor 3, this pairs especially well with the Agents Window and the integrated browser workflow.

## Quest 10 - Debug a Real Bug

Goal: trace a bug from symptom to fix.

- TaskFlow: task status updates
- PixelCraft: contact form submission flow
- DataLens: reopened ticket count

Use Ask or Debug mode to explain the bug before changing anything.

## Quest 11 - Role Deep Dive

Open the matching file in `curriculum/roles/` and follow that path:

- `curriculum/roles/designers.md`
- `curriculum/roles/product-managers.md`
- `curriculum/roles/data-scientists.md`
- `curriculum/roles/qa-engineers.md`
- `curriculum/roles/devops-sre.md`
- `curriculum/roles/support-sales.md`

## Quest 12 - Build Your Own Workflow

When you have completed a few quests, ask Cursor:

`Based on what I’ve done so far, what Cursor workflow should I adopt for my real work?`

That is the bridge from workshop mode to real usage.
