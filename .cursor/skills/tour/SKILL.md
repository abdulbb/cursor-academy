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
- `/tour ask`
- `/tour plan`
- `/tour debug`

## Goal

Open the exact local `docs-tour/<feature>.html` page in Cursor's integrated browser,
not a long scroll-heavy index.

## Feature pages

Supported feature targets:

- `welcome`
- `models`
- `first-chat`
- `tab`
- `ask`
- `agent`
- `context`
- `plan`
- `debug`
- `rules`
- `skills`
- `mcp`
- `subagents`
- `agents-window`
- `cloud-agents`
- `model-selection`
- `hooks`
- `automations`
- `workflows`

Accept close variants when it is obvious:

- `ask-mode` -> `ask`
- `agent-mode` -> `agent`
- `plan-mode` -> `plan`
- `debug-mode` -> `debug`

## Workflow

1. If the learner provided a feature target after `/tour`, normalize it to one of the
   supported page names above.
2. If no feature target is given, read `.cursor-academy/progress.md` if it exists and
   map the current module to a page:
   - `curriculum/foundations/01-welcome/README.md` -> `welcome.html`
   - `curriculum/foundations/02-how-ai-models-work/README.md` -> `models.html`
   - `curriculum/foundations/03-first-ai-chat/README.md` -> `first-chat.html`
   - `curriculum/foundations/04-tab-completion/README.md` -> `tab.html`
   - `curriculum/foundations/05-ask-mode/README.md` -> `ask.html`
   - `curriculum/foundations/06-agent-mode/README.md` -> `agent.html`
   - `curriculum/core/07-context-and-mentions/README.md` -> `context.html`
   - `curriculum/core/08-plan-mode/README.md` -> `plan.html`
   - `curriculum/core/09-debug-mode/README.md` -> `debug.html`
   - `curriculum/core/10-rules/README.md` -> `rules.html`
   - `curriculum/core/11-skills-and-commands/README.md` -> `skills.html`
   - `curriculum/core/12-mcp-integrations/README.md` -> `mcp.html`
   - `curriculum/advanced/13-subagents/README.md` -> `subagents.html`
   - `curriculum/advanced/14-cloud-agents/README.md` -> `agents-window.html`
   - `curriculum/advanced/15-model-selection/README.md` -> `model-selection.html`
   - `curriculum/advanced/16-hooks-lifecycle/README.md` -> `hooks.html`
   - `curriculum/advanced/17-automations/README.md` -> `automations.html`
   - `curriculum/advanced/18-custom-workflows/README.md` -> `workflows.html`
3. If nothing matches, fall back to `docs-tour/index.html`.
4. Build a `file://` URI to the selected page in `docs-tour/`.
5. Before calling any MCP tool, inspect the `cursor-app-control` tool schema if it is
   available in the local MCP descriptors.
6. Use the `cursor-app-control` MCP server's `open_resource` tool to open the `file://`
   URI in the integrated browser.
7. If browser opening is unavailable, tell the learner exactly what to open manually:
   - `docs-tour/<feature>.html`
   - or `docs-tour/index.html` as the hub fallback

## Teaching notes

- Keep the explanation short. The point is to get the learner looking at one feature quickly.
- Prefer the exact feature page over the hub.
- After opening the page, tell the learner what single UI element to notice first.
- If they are brand new, explain the shortcut or menu path in plain language.
