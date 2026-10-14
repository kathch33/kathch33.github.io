# AGENTS.md

Living notes for anyone (human or agent) editing Katherine Cheng's site. Update this file when a preference becomes clear. `agent.md` is a symlink to this file.

## Brand and voice

Katherine Cheng is the founder of Kgence.ai.

Core idea: "Good science gets stuck between the people who need each other."

Core claim: "I've sat in every chair where science becomes a deal. I'll tell you what the other side is thinking."

Kgence.ai helps good science find the people who need it. The analysis is automated, and the relationships stay human.

Voice: plain, warm, honest. Name the seat, not the logo. "When I was in pharma BD" is the pattern. Say a company name only when it is a confirmed fact, and only once, not as a stack of logos.

No bragging. No credential stacking. No numbers, client names, or prices.

Never use these words: disrupt, revolutionize, game-changer, unlock, leverage, synergy, delve, 10x, thought leader.

Do not invent facts. If a detail is missing, leave a visible `[unconfirmed]` placeholder and an HTML comment that starts with `TODO:`.

Known, and safe to say:

- She founded Kgence.ai.
- Her background spans bench biology, pharma business development, strategy, and finance.
- Pharma business development was at Moderna. Strategy was at BCG. Titles and years are not confirmed.
- The finance seat's organization, title, and years are not confirmed.
- She trained at the University of Pennsylvania, Harvard, and Wharton.
- She holds biology and finance degrees. Which degree came from which school is not confirmed.

Audiences, and the line for each (source of truth: `data/audiences.yaml`):

- Scientists: "The patent isn't the finish line. It's the start of a conversation nobody trained you for."
- Tech transfer offices at universities and hospitals: "You're judged on revenue but staffed for paperwork. The hidden gems were never your fault."
- Pharma external innovation and investors, including family offices: "The best assets rarely show up in a pitch deck. They're still waiting for someone to ask."

## Site structure

Hugo project with custom layouts in `layouts/`. No theme. No theme submodule.

- `/` Home. Hero, three audience cards, short about. Copy for the hero is front matter in `content/_index.md`.
- `/about/` Biography, then the three audience sections rendered from `data/audiences.yaml`.
- `/writing/` Essays. Posts are `content/writing/*.md`. One example post is `draft: true` and must stay a draft until Katherine replaces it and asks for it to be published. Production builds omit drafts, so the public writing page says nothing is published yet.
- `/contact/` Placeholder names for LinkedIn, Substack, and Kgence.ai. No email form. Do not guess URLs.

Design: calm, warm, unhurried. Lots of whitespace. Newsreader for headlines and quotes, Source Sans 3 for text. Paper background `#f3eee6`, ink `#241f1b`, clay links `#6f3728`. Styles are `assets/css/main.css` plus `static/fonts/faces.css` (font faces stay unminified; Hugo's minifier corrupts `unicode-range`). No JavaScript. Fonts are SIL Open Font License files in `static/fonts/`.

## How to run and build

Hugo 0.168.0, the version in `.github/workflows/hugo.yaml`. Extended Hugo is not required. This site does not use Sass.

```sh
hugo server
hugo server --buildDrafts --disableFastRender
hugo build --gc --minify
```

`hugo server` serves drafts only when you pass `--buildDrafts` (or `-D`). Do not commit the `public/` directory. GitHub Actions builds and deploys it.

New essay:

```sh
hugo new content/writing/my-note.md
```

The archetype leaves `draft: true`.

## Skills

Vendored from [mdelapenya/blog-skills](https://github.com/mdelapenya/blog-skills) (MIT, Manuel de la Peña). `SKILL.md` files are unmodified. Read `ADAPTATION.md` in each folder before using them. They assume `content/posts/` and a different theme. This site uses `content/writing/` and custom layouts.

- `.agents/skills/blog-writer/`
- `.agents/skills/blog-editor/`
- `.agents/skills/blog-keeper/`
- `.agents/skills/blog-planner/`
- `.agents/skills/blog-marketer/`

Written for this repo:

- `.agents/skills/hugo-content-authoring/`
- `.agents/skills/hugo-theming-layouts/`
- `.agents/skills/hugo-deploy-github-pages/`

`blog-config.md` is committed on purpose so those vendored skills can find this site's settings. Voice in this file wins over the vendored skills.

Found and not vendored:

- `therealbill/mynet` skill `hugo-content-authoring`. The Mynet Marketplace License forbids bundling the skill into a collection.
- `secondsky/claude-skills` plugin `hugo` (MIT) and the similar skill in `jackspace/ClaudeSkillz`. They steer toward PaperMod submodules, Tailwind, a headless CMS, and Cloudflare Workers.
- `hugo-fixit/skills`. Those skills document the FixIt theme, which this site does not use.
- `jianshuo/claude-skills` skill `wjs-publishing-hugo`. It is written for a different site.

## Deploy

`.github/workflows/hugo.yaml` is the official Hugo workflow from the Hugo docs, with the branch set to `master` and the time zone set to `America/New_York`.

GitHub Pages has to use source "GitHub Actions", not "Deploy from a branch" / `master` /. The workflow only runs on a push to `master` (or a manual run), so a pull request does not publish the site.

Do not force-push `master` unless Katherine explicitly asks.

## Preferences learned

- 2026-10-14: Katherine asked for a full history reset of this repo only. `master` is one root commit. Do not force-push again unless she explicitly asks.
- 2026-10-14: Build the public site with Hugo. Keep the design calm, warm, unhurried, sparse, and fast. Custom layouts, not a theme submodule.
- 2026-10-14: Deploy with the official Hugo GitHub Actions workflow. Pages should move from branch `master` to GitHub Actions.
- 2026-10-14: Do not invent biographical facts. Titles, years, and which degree came from which school stay as `[unconfirmed]` plus an HTML `TODO` comment.
- 2026-10-14: No email form. Contact is link placeholders only until she supplies URLs.
- 2026-10-14: No numbers, client names, or prices anywhere on the site.
- 2026-10-14: Assumption, not a confirmed preference: the Actions time zone is `America/New_York` because the old site commits used US Eastern. Change it if she wants another zone.
