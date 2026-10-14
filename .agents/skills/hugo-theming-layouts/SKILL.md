---
name: hugo-theming-layouts
description: Change layout, CSS, or templates on Katherine Cheng's Hugo site. Use when editing layouts, partials, assets/css, fonts, or accessibility. Keep the custom layouts self-contained. Do not add a theme submodule.
---

# Hugo theming and layouts

Written for this repository. Not vendored.

## What this site uses

There is no Hugo theme and no `themes/` directory. Templates live in `layouts/`. CSS is `assets/css/main.css`, minified and fingerprinted from `layouts/partials/head.html`. Fonts are self-hosted in `static/fonts/` (Newsreader and Source Sans 3, SIL Open Font License). Font faces are in `static/fonts/faces.css`, linked from `layouts/partials/fonts.html` and left unminified, because Hugo's minifier corrupts `U+0000-00FF` inside `unicode-range`.

Do not add a theme as a git submodule, a Hugo module that must be fetched at build time from a third party, or a remote CSS framework. GitHub Pages builds with the official workflow's Hugo binary (not the extended build). Do not introduce Sass.

## Layout map

- `layouts/baseof.html` wraps every page except the 404.
- `layouts/404.html` is a full document because Hugo does not apply `baseof` to it. Keep its head, header, and footer in step with the other pages.
- `layouts/index.html` is the home page.
- `layouts/_default/single.html` is About and essays. About also renders `partials/audience-sections.html`.
- `layouts/_default/list.html` is the writing index.
- `layouts/_default/contact.html` is selected with `layout: contact` in front matter.
- `layouts/partials/audience-cards.html` is the home cards. Both card and about copy come from `data/audiences.yaml`.

## Design constraints

Calm, warm, unhurried. Lots of whitespace. Refined type. Fast. Accessible. Comfortable on a phone.

- Paper `#f3eee6`, raised panels `#faf7f2`, ink `#241f1b`, soft ink `#5e564e`, clay `#6f3728`.
- Clay on paper is about 8:1. Do not lighten the clay for decoration.
- One column of text, measure about 38rem. Audience cards become one column under 860px.
- No JavaScript. No carousel, no motion beyond `scroll-behavior`, which is disabled under `prefers-reduced-motion`.
- Visible keyboard focus. A skip link. `lang` on the html element. Tap targets at least 44px in the nav.
- Link names say where they go. "For scientists", not "Learn more".
- Do not add a portrait, logo mark, or stock image. None has been supplied.
- Headings stay in order. The home `h1` is the core idea. Inner pages use the page title as `h1`.

## When changing templates

Preview with:

```sh
hugo server --buildDrafts --disableFastRender
```

Check home, about, writing, contact, a draft essay, and a missing URL for the 404. Narrow the window to 375px and confirm nothing scrolls sideways. Production build must omit the draft:

```sh
hugo build --gc --minify
```
