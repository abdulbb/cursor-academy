---
name: exercise
description: Run a Cursor Academy exercise for the currently selected module. Use when the learner starts a lesson task, asks for the hands-on step, or explicitly runs /exercise.
---

# Cursor Academy Exercise Runner

## Inputs

Read:

- `.cursor-academy/profile.md`
- `.cursor-academy/progress.md` if it exists
- the current module's `exercises.md`

## Workflow

1. Identify the learner's selected playground app from the profile.
2. Determine the current module:
   - if `.cursor-academy/progress.md` exists, use `Current module`
   - otherwise, use the recommended first module from the profile
3. Read the current module's `exercises.md`.
4. Present one exercise at a time.
5. For each exercise:
   - explain the goal
   - explain which Cursor feature the learner is practicing
   - point to the exact file or command to use
   - ask a short checkpoint question when useful
6. After the learner finishes:
   - suggest a verification command or manual check
   - summarize what they learned
   - update `.cursor-academy/progress.md`

## Guardrails

- Prefer one exercise at a time.
- Do not solve the task immediately unless the learner explicitly asks.
- Keep references grounded in the active playground app.
- If the module has app-specific variants, choose the variant that matches the learner profile.
- Prefer quest-style instructions: exact target file, exact feature to practice, exact verification step.
