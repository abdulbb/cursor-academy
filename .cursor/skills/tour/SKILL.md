---
name: tour
description: Open the Cursor Academy UI tour when a learner wants to see what Cursor looks like, where to click, or explicitly runs /tour.
---

# Cursor Academy UI Tour

Use this skill when the learner says things like:

- "show me the UI"
- "what does Cursor look like?"
- "where do I click?"
- `/tour`

## Goal

Open the local `docs-tour/index.html` page in Cursor's integrated browser, ideally
deep-linked to the current lesson.

## Workflow

1. Read `.cursor-academy/progress.md` if it exists.
2. If the learner is currently in a module, map that module to the matching tour anchor:
   - `curriculum/foundations/01-welcome/README.md` -> `#welcome`
   - `curriculum/foundations/02-how-ai-models-work/README.md` -> `#models`
   - `curriculum/foundations/03-first-ai-chat/README.md` -> `#first-chat`
   - `curriculum/foundations/04-tab-completion/README.md` -> `#tab`
   - `curriculum/foundations/05-ask-mode/README.md` -> `#ask-mode`
   - `curriculum/foundations/06-agent-mode/README.md` -> `#agent-mode`
   - `curriculum/core/07-context-and-mentions/README.md` -> `#context`
   - `curriculum/core/08-plan-mode/README.md` -> `#plan-mode`
   - `curriculum/core/09-debug-mode/README.md` -> `#debug-mode`
   - `curriculum/core/10-rules/README.md` -> `#rules`
   - `curriculum/core/11-skills-and-commands/README.md` -> `#skills`
   - `curriculum/core/12-mcp-integrations/README.md` -> `#mcp`
   - `curriculum/advanced/13-subagents/README.md` -> `#subagents`
   - `curriculum/advanced/14-cloud-agents/README.md` -> `#agents-window`
   - `curriculum/advanced/15-model-selection/README.md` -> `#model-selection`
   - `curriculum/advanced/16-hooks-lifecycle/README.md` -> `#hooks`
   - `curriculum/advanced/17-automations/README.md` -> `#automations`
   - `curriculum/advanced/18-custom-workflows/README.md` -> `#workflows`
3. Build a `file://` URI to `docs-tour/index.html`, appending the anchor when one is available.
4. Before calling any MCP tool, inspect the `cursor-app-control` tool schema if it is available in the local MCP descriptors.
5. Use the `cursor-app-control` MCP server's `open_resource` tool to open the `file://` URI in the integrated browser.
6. If browser opening is unavailable, tell the learner exactly what to open manually:
   - `docs-tour/index.html`
   - or `docs-tour/index.html#<anchor>`

## Teaching notes

- Keep the explanation short. The point is to get the learner looking at the UI quickly.
- After opening the tour, tell them what single element to notice first.
- If they are brand new, explain the shortcut or menu path in plain language.
