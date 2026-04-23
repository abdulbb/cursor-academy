# Exercises for Plan Mode Before You Build

## Quest: Plan the next feature before touching code

Goal: take one missing feature in your selected app and ask Cursor for a real implementation plan instead of jumping straight into edits.

### TaskFlow variant

- Read `playground/taskflow/src/routes/api.ts`
- Read `playground/taskflow/src/services/task-service.ts`
- Ask Cursor in Plan mode: "Plan a task search feature for TaskFlow. Include affected files, API shape, validation, and how to verify it."

### PixelCraft variant

- Read `playground/pixelcraft/templates/home.njk`
- Read `playground/pixelcraft/static/css/tokens.css`
- Ask Cursor in Plan mode: "Plan dark mode support for PixelCraft. Include affected files, token changes, UI verification, and rollout order."

### DataLens variant

- Read `playground/datalens/src/routes/api.ts`
- Read `playground/datalens/src/server.ts`
- Ask Cursor in Plan mode: "Plan a health endpoint for DataLens that shows pipeline freshness and basic service status."

## Verification

Check that the generated plan includes:

- exact file paths
- the user-facing outcome
- validation or test steps
- a sensible order of operations

## Reflection prompt

Ask the learner: "What did the plan make clearer before any code was changed?"
