---
name: hugo-content-authoring
description: Write and edit pages and essays for Katherine Cheng's Hugo site. Use when changing copy, adding a writing post, or touching front matter, drafts, audience lines, or contact placeholders. Follow AGENTS.md. Do not invent biographical facts.
---

# Hugo content authoring

Written for this repository. Not vendored.

## Read first

1. `AGENTS.md` for voice, banned words, and unconfirmed facts.
2. `blog-config.md` for paths and dates.
3. `data/audiences.yaml` before changing an audience line. The home cards and the about page both render that file.

The vendored `blog-writer`, `blog-editor`, `blog-keeper`, `blog-planner`, and `blog-marketer` skills are useful for essay workflow. Their `ADAPTATION.md` files say where they disagree with this site. This skill and `AGENTS.md` win.

## Workflow

Before commit, hand the draft to a separate unslop sub-agent that uses `.agents/skills/unslop/SKILL.md` (non-negotiable rule in `AGENTS.md`). Do not unslop it yourself.

## Where copy lives

| Page | File |
| --- | --- |
| Home hero | Front matter `idea`, `claim`, and `practice` in `content/_index.md` |
| Home about blurb | Body of `content/_index.md` |
| About | `content/about.md` |
| Audience lines | `data/audiences.yaml` |
| Writing index | `content/writing/_index.md` |
| Essays | `content/writing/<slug>.md` |
| Contact intro | `content/contact.md` body |
| Contact placeholders | `links` front matter in `content/contact.md` |

## Rules

- Plain, warm, honest. Name the seat, not the logo.
- Never use: disrupt, revolutionize, game-changer, unlock, leverage, synergy, delve, 10x, thought leader.
- No numbers, client names, or prices.
- Do not invent titles, years, degrees, schools, employers, URLs, or case studies.
- Unconfirmed details stay visible as `[unconfirmed]` and get an HTML comment: `<!-- TODO: what Katherine still needs to confirm -->`.
- Goldmark is configured with `unsafe: true` so those comments survive the build. Do not add raw HTML for anything else.
- New essays start as `draft: true`. Production `hugo build` hides them. Do not flip `draft` off unless Katherine asks.
- The example essay `content/writing/the-conversation-after-the-patent.md` is a shape, not her finished work. Replace it rather than polishing it into a fake memory.
- Contact stays a list of placeholders. No email form. No guessed LinkedIn or Substack URL.
- Internal links use root-relative paths such as `/about/`.

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
