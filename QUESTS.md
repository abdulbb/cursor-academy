# Cursor Academy Quests

This file is the fastest way to start.

Most quests in this repo are meant to end with Cursor actually planning, building, or refining something for you, not just explaining what already exists.

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

## Quest 6 - Agent First Fix (small)

Goal: let Agent mode make one small, reviewable improvement.

- TaskFlow: improve dashboard copy in `playground/taskflow/templates/index.njk`
- PixelCraft: improve CTA copy in `playground/pixelcraft/templates/home.njk`
- DataLens: improve dashboard labels in `playground/datalens/templates/index.njk`

Review the diff before accepting it.

## Build Quests

This section is where the repo shifts from "understand the code" to "tell Cursor to build something on the fly."

Each build quest gives you:

- a concrete feature to ship
- the best mode to use
- a ready-to-paste prompt
- the files Cursor should touch
- the files Cursor should not touch
- a specific verification step

### Build Quest A - Ship task search in TaskFlow

Goal: add a real search capability instead of just reading existing routes.

- App: `playground/taskflow/`
- Mode: Plan, then Agent
- Touch: `playground/taskflow/src/routes/api.ts`, `playground/taskflow/src/services/task-service.ts`, `playground/taskflow/tests/`
- Do not touch: `playground/taskflow/templates/`, `playground/taskflow/static/`

Prompt to paste:

`Add a GET /tasks/search endpoint to TaskFlow that filters tasks by title substring and optional status. Touch only \`playground/taskflow/src/routes/api.ts\`, \`playground/taskflow/src/services/task-service.ts\`, and a new or existing file in \`playground/taskflow/tests/\`. Do not change templates or static assets. Add regression coverage for a matching search and a no-match search. Verify with \`npm run typecheck && npm test\`.`

Verification:

- Run `cd playground/taskflow && npm run typecheck && npm test`

### Build Quest B - Ship dark mode in PixelCraft

Goal: let Cursor build a real frontend feature, not just critique the UI.

- App: `playground/pixelcraft/`
- Mode: Agent, with Cursor 3 integrated browser if available
- Touch: `playground/pixelcraft/static/css/tokens.css`, `playground/pixelcraft/static/css/styles.css`, `playground/pixelcraft/templates/layout.njk`
- Do not touch: `playground/pixelcraft/src/routes/`, `playground/pixelcraft/src/content/`

Prompt to paste:

`Add dark mode to PixelCraft using the existing CSS custom properties. Touch only \`playground/pixelcraft/static/css/tokens.css\`, \`playground/pixelcraft/static/css/styles.css\`, and \`playground/pixelcraft/templates/layout.njk\`. Do not change route handlers or site content. Add a simple manual toggle in the header and keep contrast readable in both themes. Verify visually in Cursor's integrated browser after the code changes.`

Verification:

- Open the running page in Cursor's browser
- Toggle dark mode
- Confirm both themes are readable

### Build Quest C - Ship a health endpoint in DataLens

Goal: use Cursor to build an operational feature in a data-oriented app.

- App: `playground/datalens/`
- Mode: Plan, then Agent
- Touch: `playground/datalens/src/routes/api.ts`, `playground/datalens/src/server.ts`, `playground/datalens/tests/`
- Do not touch: `playground/datalens/templates/`, `playground/datalens/data/`

Prompt to paste:

`Add a GET /health endpoint to DataLens that returns overall status, ticket count, and last ingestion time. Touch only \`playground/datalens/src/routes/api.ts\`, \`playground/datalens/src/server.ts\`, and tests under \`playground/datalens/tests/\`. Do not change templates or seed data. Add one test that verifies the endpoint returns 200 and includes those fields. Verify with \`npm run typecheck && npm test\`.`

Verification:

- Run `cd playground/datalens && npm run typecheck && npm test`

### Build Quest D - Cursor 3 browser polish in PixelCraft

Goal: use the integrated browser as part of the build loop, not just chat.

- App: `playground/pixelcraft/`
- Mode: Agents Window plus integrated browser
- Touch: `playground/pixelcraft/templates/home.njk`, `playground/pixelcraft/static/css/styles.css`
- Do not touch: `playground/pixelcraft/src/routes/`, `playground/pixelcraft/src/content/`, `playground/pixelcraft/static/js/pricing.js`

Prompt to paste:

`Using Cursor's integrated browser on the PixelCraft homepage, suggest three small visual improvements to the hero and pricing section. Then apply the single highest-impact change. Touch only \`playground/pixelcraft/templates/home.njk\` and \`playground/pixelcraft/static/css/styles.css\`. Do not change route code, content data, or pricing logic. Verify the result visually in the integrated browser and explain why the chosen change had the biggest impact.`

Verification:

- Compare before and after in the browser
- Confirm the change improves hierarchy or clarity

### Build Quest E - Cursor 3 design-oriented iteration

Goal: practice a design-forward prompt that still produces code, not just commentary.

- App: `playground/pixelcraft/`
- Mode: Agents Window plus integrated browser
- Touch: `playground/pixelcraft/templates/home.njk`, `playground/pixelcraft/static/js/pricing.js`
- Do not touch: `playground/pixelcraft/src/routes/`, `playground/pixelcraft/src/content/`, `playground/pixelcraft/static/css/tokens.css`

Prompt to paste:

`Improve the pricing section in PixelCraft for a first-time visitor. Reorder the visual emphasis so Studio feels like the recommended option and make the monthly versus annual toggle clearer. Touch only \`playground/pixelcraft/templates/home.njk\` and \`playground/pixelcraft/static/js/pricing.js\`. Do not change pricing data, routes, or global tokens. Verify visually in the integrated browser and self-check that the updated hierarchy matches the rest of the page.`

Verification:

- Open the pricing area in Cursor's browser
- Confirm the recommended tier is visually clearer
- Confirm the billing toggle is easier to understand

### Build Quest F - Agent-driven regression test sweep

Goal: tell Cursor to find a real gap and build the test-first workflow around it.

- App: `playground/taskflow/` or `playground/datalens/`
- Mode: Agent
- Touch: the selected app's `tests/` folder and the smallest possible source file needed for the fix
- Do not touch: unrelated app folders, templates, or static assets unless the bug truly requires it

Prompt to paste:

`Look at the existing tests in this app and write one additional failing regression test for a real bug you can spot. Touch the app's \`tests/\` folder first, and only touch the smallest possible source file needed for the fix after the test fails for the expected reason. Do not edit unrelated templates, static assets, or the other playground apps. Verify by showing a red-to-green flow and then run \`npm run typecheck && npm test\`.`

Verification:

- Confirm the new test fails first
- Confirm the smallest fix makes it pass
- Run the full app test command

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
