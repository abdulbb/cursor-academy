# Exercises for Subagents and Delegation

## Quest: Choose a real subagent target

Goal: identify one place in this repo where an explore subagent would be better than manual searching and explain why.

### Option A - Curriculum audit

- Target area: `curriculum/`
- Task: "Find all modules related to planning, debugging, and verification."
- Why subagent helps: the answer spans several directories and files.

### Option B - Tutor system audit

- Target area: `.cursor/`
- Task: "Explain how the tutor decides what a learner sees first."
- Why subagent helps: the answer spans rules, skills, and learner state files.

### Option C - Playground bug sweep

- Target area: `playground/`
- Task: "Find the most likely user-visible bugs across the three sample apps."
- Why subagent helps: the answer spans multiple apps and code paths.

## Verification

For the option you chose, list the boundaries a good subagent prompt should include:

- target directory or files
- exact question to answer
- what kind of output to return
- what to avoid exploring

## Reflection prompt

Ask the learner: "What makes a task broad enough to delegate but still bounded enough for a subagent to succeed?"
