# Contributing to Cursor Academy

## What to contribute

Good contributions to this repository usually improve one of four things:

- the learning flow
- the realism of the playground apps
- the clarity of the tutor rules and skills
- the mapping back to official Cursor material

## Guidelines

- Keep exercises small and focused.
- Preserve intentional flaws unless the exercise or curriculum is updated to replace them.
- Prefer concrete, role-relevant examples over abstract explanation.
- Keep rule files concise and specific.
- Keep skill descriptions discoverable and action-oriented.
- When expanding curriculum content, tie it back to Cursor Learn, Docs, or Workshops.

## Playground app changes

If you update a playground app:

1. Verify the app still contains useful learning targets.
2. Run `npm run typecheck` and `npm test` in that app.
3. Update the corresponding module or exercise if the learning target moved.

## Curriculum changes

If you update `curriculum/`:

1. Keep the module outcome clear.
2. Mention the Cursor feature being practiced.
3. Include a verification step.
4. Prefer role-aware examples when possible.

## Tutor system changes

If you update `.cursor/rules/` or `.cursor/skills/`:

1. Keep rule files short.
2. Keep skill files under control and easy to scan.
3. Make sure the tutor still points learners to a next action.
4. Avoid turning the tutor into a long-winded narrator.
