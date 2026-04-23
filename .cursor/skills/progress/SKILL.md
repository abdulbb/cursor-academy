---
name: progress
description: Review or restore Cursor Academy learning progress. Use when the learner asks what they have completed, wants to resume, wants a recap, or explicitly runs /progress.
---

# Cursor Academy Progress Review

## Inputs

Read:

- `.cursor-academy/profile.md`
- `.cursor-academy/progress.md`
- `curriculum/tracks.md`

## Responsibilities

- Summarize the learner's current track, active module, and completed modules.
- Recommend the next best module.
- Offer an `AskQuestion` choice:
  - Resume current module
  - Start recommended next module
  - Switch to a role deep dive
  - Review references first

## Output shape

Use this structure:

1. One-paragraph summary of where the learner is.
2. Completed modules list.
3. Recommended next step.
4. Optional role-specific suggestion.

If the progress file is missing, explain that onboarding exists and recommend `/onboard`.
