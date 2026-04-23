---
name: onboard
description: Run the Cursor Academy onboarding flow. Use when a learner opens this repository for the first time, asks to get started, wants a personalized path, or needs their role, level, goals, and playground app selected.
---

# Cursor Academy Onboarding

Use this skill to set up a learner profile for this repository.

## Workflow

1. Ask the learner's **skill level** with `AskQuestion`:
   - Never used an IDE
   - Used IDEs, new to AI coding
   - Experienced with AI coding tools
2. Ask the learner's **primary role**:
   - Developer
   - Designer
   - Product Manager
   - Data Scientist
   - QA Engineer
   - DevOps / Infrastructure
   - Support / Sales
   - Other
3. Ask the learner's **tech stack focus**:
   - Frontend
   - Backend
   - Full-stack
   - Mobile
   - Data / ML
   - Infrastructure
4. Ask the learner's **goals** with multi-select:
   - Learn Cursor basics
   - Speed up daily work
   - Master advanced features
   - Set up Cursor for my team
   - Build custom workflows

## Playground mapping

Map the learner to a playground app:

- Developer, Frontend, Backend, Full-stack, Mobile -> `taskflow`
- Designer, Product Manager, Support / Sales -> `pixelcraft`
- Data Scientist, QA Engineer, DevOps / Infrastructure, Data / ML, Infrastructure -> `datalens`
- Other -> choose the closest fit based on the stack answer

## Output

Write `.cursor-academy/profile.md` in this format:

```markdown
# Learner Profile

- Skill level: <value>
- Role: <value>
- Stack focus: <value>
- Goals:
  - <goal 1>
  - <goal 2>
- Selected playground: <taskflow|pixelcraft|datalens>
- Recommended starting track: <foundations|core|advanced>
- Recommended first module: <path>
```

## Track selection

- `Never used an IDE` -> `foundations`
- `Used IDEs, new to AI coding` -> `core`
- `Experienced with AI coding tools` -> `advanced`

Recommend the first module accordingly:

- `curriculum/foundations/01-welcome/README.md`
- `curriculum/core/07-context-and-mentions/README.md`
- `curriculum/advanced/13-subagents/README.md`

## Closeout

After writing the profile:

- Briefly explain why the selected playground fits the learner.
- Recommend the next command: `/learn`
- Mention that progress will be stored in `.cursor-academy/progress.md`
