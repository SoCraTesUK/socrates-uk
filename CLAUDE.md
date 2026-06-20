# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Jekyll static site for the SoCraTes UK conference, served via GitHub Pages from the `gh-pages` branch. `CNAME` sets the custom domain. Pushing to `gh-pages` triggers an automatic GitHub Pages build/deploy — there is no separate deploy step.

## Commands

Run locally:
```
bundle install
bundle exec jekyll serve --trace --incremental
```
Visit http://localhost:4000/ — auto-refreshes on changes.

Docker alternative (no local Ruby toolchain):
```
docker run -it --rm --volume=$(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve --trace --incremental
```

Upgrade Jekyll: edit version in `Gemfile`, check the latest version [GitHub Pages supports](https://pages.github.com/versions.json), then `bundle update` and commit the updated `Gemfile.lock`.

No tests, no lint.

## Architecture

Two layouts in `_layouts/`:

- **`front-page.html`** — the home page (`index.md`). Built by stacking section partials from `_includes/` in order: header → introduction → what-happens → sponsors → location → tickets → social → partner-events. To change a home-page section, edit its `_includes/*.html` partial, not `index.md`.
- **`page.html`** — every other page. Each menu page is a root-level markdown file (e.g. `tickets.md`, `location.md`, `code_of_conduct.md`) with front matter `layout: page`. The navbar (`_includes/navbar.html`) links these.

**`_config.yml` holds the conference data**, not just Jekyll settings. `event_details` (year/date/location), `sponsors`, and `partner_events` are data lists consumed by the includes via Liquid loops. Update yearly event info, sponsor list, and the partner-event calendar here — not in HTML.

Markdown pages can embed other markdown with `{% include_relative file.md %}` (e.g. `tickets.md` pulls in `links.md`).

Static assets: `css/` (bootstrap + `custom/`), `js/` (bootstrap, jquery, plus `sponsorship.js` and `mersenne-twister.js`), `img/`.

Markdown engine is `kramdown` (set in `_config.yml`).
