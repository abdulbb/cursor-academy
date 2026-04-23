---
name: learn
description: Guide a learner through the next Cursor Academy module. Use when the learner asks what to do next, wants a recommended lesson, wants to resume progress, or explicitly runs /learn.
---

# Cursor Academy Learn Orchestrator

Use this skill to drive the learner through the curriculum.

## Inputs

Read:

- `.cursor-academy/profile.md`
- `.cursor-academy/progress.md` if it exists
- `curriculum/tracks.md`

If the profile file does not exist yet, stop and guide the learner to run `/onboard`.

## Responsibilities

1. Determine the learner's active track from the profile.
2. Determine the next recommended module:
   - if there is no progress file, use the recommended first module from the profile
   - if there is a progress file, resume from the stored next module
3. Present a short summary of the recommended module.
4. Offer a structured `AskQuestion` choice:
   - Start recommended quest
   - Pick another module in the same track
   - Jump to role-specific deep dive
   - Review progress
5. When a module is chosen:
   - if `.cursor-academy/progress.md` does not exist, create it before handing off
   - set `Current track`, `Current module`, and `Recommended next module`
   - read the module `README.md`
   - teach the concept briefly
   - hand off to `/exercise` for the paired exercise file

## First-run behavior

When there is a profile file but no progress file yet:

1. Read the recommended first module from the profile.
2. Create `.cursor-academy/progress.md` immediately.
3. Set the current module to that first module.
4. Set the recommended next module to the next item in the same track if one exists.
5. Then continue normally.

## Progress file format

Maintain `.cursor-academy/progress.md` in this format:

```markdown
# Cursor Academy Progress

- Current track: <foundations|core|advanced>
- Current module: <path>
- Recommended next module: <path>

## Completed modules

- <path>
- <path>

## Notes

- <optional learner note>
```

## Teaching style

- Start with the why, then the exact Cursor feature, then the action.
- Keep summaries short unless the learner asks for depth.
- Always ground examples in the learner's selected playground app.
- End each module handoff with one clear next action.
- Prefer quest-like framing: concrete target, one feature at a time, immediate action.
