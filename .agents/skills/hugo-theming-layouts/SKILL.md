---
name: hugo-theming-layouts
description: Change layout, CSS, or templates on Katherine Cheng's Hugo site. Use when editing layouts, partials, assets/css, fonts, or accessibility. Keep the custom layouts self-contained. Do not add a theme submodule.
---

# Hugo theming and layouts

Written for this repository. Not vendored.

## What this site uses

There is no Hugo theme and no `themes/` directory. Templates live in `layouts/`. CSS is `assets/css/main.css`, minified and fingerprinted from `layouts/partials/head.html`. Fonts are self-hosted in `static/fonts/` (Cormorant Garamond, Outfit, and IBM Plex Mono, SIL Open Font License). Font faces are in `static/fonts/faces.css`, linked from `layouts/partials/fonts.html` and left unminified, because Hugo's minifier corrupts `U+0000-00FF` inside `unicode-range`.

Do not add a theme as a git submodule, a Hugo module that must be fetched at build time from a third party, or a remote CSS framework. GitHub Pages builds with the official workflow's Hugo binary (not the extended build). Do not introduce Sass.

## Layout map

- `layouts/baseof.html` wraps every page except the 404.
- `layouts/404.html` is a full document because Hugo does not apply `baseof` to it. Keep its head, header, and footer in step with the other pages.
- `layouts/index.html` is the home profile. Copy comes from `hugo.Data.profile`.
- The home page has no experience timeline. Harvard Business School, Wharton, and Penn marks sit beside the about addition paragraph. They are not a resume row.
- `layouts/_default/single.html` is an essay.
- `layouts/_default/list.html` is the writing index.
- `/about/` and `/contact/` are aliases of the home page.

## Design constraints

Match the Kgence.ai reference: luxury, quiet, typographic. Fast. Accessible. Comfortable on a phone.

- Background `#f7f5f3`, ink `#121212`, body `#6b6b6b`, hairline `#dcd8d2`. Flat color only. No gradients, including the old circuit banner.
- Green `#4a6b45` for italic display words and mono eyebrows. Teal `#1f6f8b` for links and hover only. On the black contact band, small green text uses `#9dba94` so it stays AA.
- Display type is Cormorant Garamond. Body is Outfit at weight 300. Eyebrows and buttons are IBM Plex Mono.
- Square corners. No shadows. No card grid with gaps. Numbered help blocks share hairlines. Exception: the LinkedIn post cards in the insights column are white, rounded, and lightly shadowed. Katherine asked for that look. Do not round or shadow the rest of the page.
- Logos in `static/logos/` stay ink on the paper background. Do not recolor them to brand color. Size each mark with `display` in `data/profile.yaml`. The HBS file is the shield plus the words HARVARD, BUSINESS, and SCHOOL in a serif, as one unit. Do not ship the shield alone. Its display height is 46, matching the Penn mark. Wharton stays at 38. Do not make the HBS lockup taller again. The same three school marks sit beside the education paragraph.
- Prose measure about 68ch. Help blocks become one column under 900px.
- The only JavaScript is the contact form. No carousel. `scroll-behavior` is disabled under `prefers-reduced-motion`.
- Visible keyboard focus. A skip link. `lang` on the html element. Tap targets at least 44px for the header, buttons, and footer link.
- The portrait in `static/images/katherine-cheng.png` is supplied. Do not swap in a stock image. Do not put `banner.jpg` on the page.
- Headings stay in order. The home `h1` is the positioning line. Inner pages use the page title as `h1`.

## When changing templates

Preview with:

```sh
hugo server --buildDrafts --disableFastRender
```

Check home, writing, the `/about/` alias, and a missing URL for the 404. Narrow the window to 375px and confirm nothing scrolls sideways. Production build must omit the draft:

```sh
hugo build --gc --minify
```
