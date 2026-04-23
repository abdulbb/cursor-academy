# Model Selection Guide

## Simple rule of thumb

- Use a fast model for narrow edits and small follow-ups.
- Use a stronger reasoning model for planning, debugging, and architecture decisions.
- Use large-context or Max mode when the task truly needs broad repo context.

## Recommended split

- Plan with a reasoning-heavy model.
- Build with a faster implementation-oriented model.
- Review with a strong model when the change is risky.

## When to spend more tokens

- complex debugging
- long plans with several moving parts
- repo-wide refactors
- comparing multiple approaches

## When not to

- tiny copy changes
- obvious one-file edits
- asking for a quick explanation of a single symbol
