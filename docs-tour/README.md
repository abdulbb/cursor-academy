# Cursor UI Tour

This folder contains small static companion pages for Cursor Academy.

Open the exact `docs-tour/<feature>.html` page in Cursor's integrated browser when a
learner needs to see the interface instead of only reading about it. Use
`docs-tour/index.html` as the hub only when you are not sure which feature page to open.

What it does:

- embeds official Cursor docs images and videos by URL
- maps each visual to a Cursor Academy module and feature page
- gives a short "where to click" line for the relevant feature

Why it exists:

- GitHub markdown renders remote images well, but remote MP4 playback is less
  reliable there
- beginners often need a visual bridge before the text in the curriculum makes
  sense

Media note:

- Media is not mirrored into this repository
- Files are loaded directly from `cursor.com/docs-static/...`
- Attribution and the full URL index live in `curriculum/references/ui-tour.md`
