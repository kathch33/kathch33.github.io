---
name: hugo-content-authoring
description: Write and edit pages and essays for Katherine Cheng's Hugo site. Use when changing copy, adding a writing post, or touching front matter, drafts, audience lines, or contact placeholders. Follow AGENTS.md. Do not invent biographical facts.
---

# Hugo content authoring

Written for this repository. Not vendored.

## Read first

1. `AGENTS.md` for voice, banned words, and unconfirmed facts.
2. `blog-config.md` for paths and dates.
3. `data/profile.yaml` before changing home page copy. The home template renders that file.

The vendored `blog-writer`, `blog-editor`, `blog-keeper`, `blog-planner`, and `blog-marketer` skills are useful for essay workflow. Their `ADAPTATION.md` files say where they disagree with this site. This skill and `AGENTS.md` win.

## Workflow

Before commit, hand the draft to a separate unslop sub-agent that uses `.agents/skills/unslop/SKILL.md` (non-negotiable rule in `AGENTS.md`). Do not unslop it yourself.

## Where copy lives

| Page | File |
| --- | --- |
| Home profile | `data/profile.yaml` |
| Home meta description | Front matter `description` in `content/_index.md` |
| Writing index | `content/writing/_index.md` |
| Essays | `content/writing/<slug>.md` |
| Contact form labels | `contact` in `data/profile.yaml` |
| Speaking and leadership | `data/speaking.yaml` |
| Writing and research | `data/press.yaml` |
| Contact endpoint | `params.contactFormEndpoint` in `hugo.yaml` |

## Rules

- Plain, warm, honest. Name the seat, not the logo.
- Never use: disrupt, revolutionize, game-changer, unlock, leverage, synergy, delve, 10x, thought leader.
- No dashes in visible page copy. No em dash, en dash, or hyphen as punctuation or as a list marker. Rewrite the sentence. Lists use a bullet or a `ul`. Hyphenated compounds only when a plain reword does not exist.
- The home page is a short advisor page, not her resume. Selected work stays at a few cases drawn from confirmed facts. Do not add the timeline, internships, or a skills list back.
- Do not name the influenza vaccine company or the biotech on the human papillomavirus license. Do not invent metrics, clients, quotes, or testimonials. Do not publish counts, tenure lengths, headcounts, volumes, or issue numbers. A year may appear only as a date in `data/speaking.yaml` or `data/press.yaml`. Do not add a Wharton healthcare alumni line. Add a talk in `data/speaking.yaml` or a paper in `data/press.yaml` only after the page is verified.
- Do not invent titles, years, degrees, schools, employers, URLs, or case studies.
- Unconfirmed details stay visible as `[unconfirmed]` and get an HTML comment: `<!-- TODO: what Katherine still needs to confirm -->`.
- Goldmark is configured with `unsafe: true` so those comments survive the build. Do not add raw HTML for anything else.
- New essays start as `draft: true`. Production `hugo build` hides them. Do not flip `draft` off unless Katherine asks.
- The example essay `content/writing/the-conversation-after-the-patent.md` is a shape, not her finished work. Replace it rather than polishing it into a fake memory.
- The contact form is the fields in `data/profile.yaml`. Do not put an email address in content, templates, or the endpoint value. See AGENTS.md.
- Internal links use root-relative paths such as `/writing/`.

## Front matter for an essay

```yaml
---
title: The conversation after the patent
date: 2026-10-14T09:00:00-04:00
draft: true
description: One sentence. No hype.
---
```

`description` is the meta description and the writing-list summary. Keep it to one calm sentence.

## Check

```sh
hugo server --buildDrafts --disableFastRender
```

Read the page out loud. If a sentence could sit on a generic company site, rewrite it.
