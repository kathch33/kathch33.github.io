# AGENTS.md

Living notes for anyone (human or agent) editing Katherine Cheng's site. Update this file when a preference becomes clear. `agent.md` is a symlink to this file.

## Unslop is non-negotiable

Every piece of content that goes onto the website must pass through a dedicated sub-agent whose only job is unslopping it with `.agents/skills/unslop/SKILL.md` before it is committed. That includes posts, pages, bios, headlines, descriptions, data files with copy, and front matter text.

The authoring agent must not unslop its own draft. It hands the draft to a separate unslop sub-agent, applies that sub-agent's output, and keeps facts, names, numbers, and Katherine's voice intact.

If the tool being used has no sub-agents, run the unslop pass as a separate, isolated step and say so in the pull request.

## Brand and voice

Katherine Cheng is the founder of Kgence.ai.

Positioning: bridging science and business in life sciences, with human-led agentic AI.

Kgence.ai is hers. On this site it appears only as "Founder, Kgence.ai". Do not turn the page into a product pitch, and do not link a guessed URL.

Voice: a spare advisor. Confident, few words, outcome-focused. Plain and honest. No hype and no cliches. Name the seat when a case needs it. Say a company name only when it is a confirmed fact. Do not publish a fee.

Never use these words: disrupt, revolutionize, game-changer, unlock, leverage, synergy, delve, 10x, thought leader.

No dashes in visible page copy. No em dash, no en dash, and no hyphen used as punctuation or as a list marker. Rewrite the sentence. A list uses a real bullet (•) or a proper `ul`. Hyphenated compound words are allowed only when no plain wording exists. Prefer a reword. The unslop skill enforces this as rule 13.

Do not invent facts. If a detail is missing, leave a visible `[unconfirmed]` placeholder and an HTML comment that starts with `TODO:`.

The home page publishes the biography she confirmed on 2026-10-14. Those names, dates, and figures are safe to repeat. Do not add organizations, titles, years, headcounts, or dollar figures beyond that page. Unnamed parties stay unnamed: the influenza vaccine company, and the Chinese biotech on the HPV vaccine license.

Known, and safe to say:

- She founded Kgence.ai. She is based in Greater Boston. She is bilingual in English and Mandarin Chinese.
- Moderna, Business Development, August 2021 to April 2026. Individualized Neoantigen Therapy for oncology. She left to build.
- Boston Consulting Group, Project Leader in the Healthcare Practice, August 2014 to August 2021, and Summer Associate in 2013.
- Moderna Therapeutics, Business Development and Finance, summer 2017.
- Penn Medicine, Gene Therapy Program, Dr. Jim Wilson Lab, 2013 to 2014. The program is now REGENXBIO.
- Pennsylvania SBDC, 2011 to 2013. Vertex Pharmaceuticals, 2012. The Wharton School, M&A research, 2011.
- HBS Healthcare Alumni Association, Co-Chair of the HBS Healthcare Alum Conference, 2021.
- Harvard Business School, MBA, 2016 to 2018. University of Pennsylvania, Vagelos Life Sciences and Management program, 2010 to 2014: B.A. Biology from the College and B.S. Economics, Finance, from Wharton.
- Publication with Dr. Andrew Lo, MIT, Journal of Investment Management, 2019. The title is on the home page.

How she can help, in `data/profile.yaml`: scientists; hospitals and universities; pharma, biotech, and investors; and life sciences teams buried in manual work. For that last group she helps set up AI agents for the repetitive work. People keep the judgment and the relationships. One line and two or three outcomes each, tied to work she has actually done. Not a product pitch. Do not invent how many teams, hours saved, or client names.

## Site structure

Hugo project with custom layouts in `layouts/`. No theme. No theme submodule.

- `/` Home. A short advisor page: positioning, portrait, one proof band, selected work, how she can help, and the contact form. Not a resume. No experience timeline, internships, skills list, or bullet-level history. Copy lives in `data/profile.yaml`. Speaking is `data/speaking.yaml`. Research is `data/press.yaml`. The meta description is front matter in `content/_index.md`. Logo files and their sources are `static/logos/` and `data/logo-sources.yaml`.
- `/about/` and `/contact/` alias to `/`.
- `/writing/` Essays. Posts are `content/writing/*.md`. One example post is `draft: true` and must stay a draft until Katherine replaces it and asks for it to be published. Production builds omit drafts, so the public writing page says nothing is published yet.

Design: flat warm off-white `#f7f5f3`, near-black ink `#121212`, hairline `#dcd8d2`. No gradients and no beige panels. Deep green `#4a6b45` for italic words and eyebrows. Teal `#1f6f8b` for links and hover only. Cormorant Garamond for display, Outfit for body, IBM Plex Mono for eyebrows and buttons. Square corners, no shadows. Generous whitespace. One full-bleed black band, for contact. Styles are `assets/css/main.css` plus `static/fonts/faces.css` (font faces stay unminified; Hugo's minifier corrupts `unicode-range`). Fonts are SIL Open Font License files in `static/fonts/`. The only JavaScript is `assets/js/contact.js`. The portrait is `static/images/katherine-cheng.png`. `static/images/banner.jpg` is the old circuit image. Do not put it back on the page. It is a gradient.

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

Vendored from [mdelapenya/blog-skills](https://github.com/mdelapenya/blog-skills) (MIT, Manuel de la Peña). `SKILL.md` files are unmodified except one line in the blog-writer and blog-editor instruction workflows that points at the unslop rule above. Read `ADAPTATION.md` in each folder before using them. They assume `content/posts/` and a different theme. This site uses `content/writing/` and custom layouts.

- `.agents/skills/blog-writer/`
- `.agents/skills/blog-editor/`
- `.agents/skills/blog-keeper/`
- `.agents/skills/blog-planner/`
- `.agents/skills/blog-marketer/`

Vendored from [cursor/plugins](https://github.com/cursor/plugins) plugin `pstack` (MIT, Copyright (c) 2026 Lauren Tan). `SKILL.md` matches upstream except rule 13, which now bans dashes in visible copy. Read `SOURCE.md` in the folder.

- `.agents/skills/unslop/`

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

## Contact form

Submissions go to Katherine through FormSubmit. The address must not appear in page templates, JavaScript, content files, `hugo.yaml` values, or the built HTML.

`params.contactFormEndpoint` in `hugo.yaml` is the AJAX URL. It is a placeholder until she pastes the alias:

`https://formsubmit.co/ajax/REPLACE_WITH_FORMSUBMIT_ALIAS`

On 2026-10-14 a browser-style POST to `https://formsubmit.co/ajax/kcheng@kgence.ai` was accepted. FormSubmit replied that it sent an activation email. Plain `curl` was blocked by Cloudflare before that.

To finish:

1. Open the FormSubmit message and click Activate Form.
2. The message after that contains a random-string alias.
3. Replace the placeholder so the config value is `https://formsubmit.co/ajax/` plus that alias.

If the email never arrives, submit once from a local machine to `https://formsubmit.co/kcheng@kgence.ai` and do not commit that request. Then do the three steps above.

The form sends `_subject` `New question from kathch33.github.io`, `_template` `table`, `_captcha` `false`, and a `_honey` honeypot. Captcha is off so the thank-you can stay on this page. The honeypot is the spam check. `_replyto` is the visitor's email.

## Preferences learned

- 2026-10-14: Katherine asked for a full history reset of this repo only. `master` is one root commit. Do not force-push again unless she explicitly asks.
- 2026-10-14: Build the public site with Hugo. Keep the design calm, warm, unhurried, sparse, and fast. Custom layouts, not a theme submodule.
- 2026-10-14: Deploy with the official Hugo GitHub Actions workflow. Pages should move from branch `master` to GitHub Actions.
- 2026-10-14: Do not invent biographical facts. Titles, years, and which degree came from which school stay as `[unconfirmed]` plus an HTML `TODO` comment.
- 2026-10-14: No email form. Contact is link placeholders only until she supplies URLs.
- 2026-10-14: No numbers, client names, or prices anywhere on the site.
- 2026-10-14: Assumption, not a confirmed preference: the Actions time zone is `America/New_York` because the old site commits used US Eastern. Change it if she wants another zone.
- 2026-10-14: Site copy is unslopped by a separate sub-agent using `.agents/skills/unslop/SKILL.md` before commit. The authoring agent does not unslop its own draft.
- 2026-10-14: The public page is an editorial profile in the Kgence visual system, not the earlier paper-and-clay layout and not a LinkedIn clone.
- 2026-10-15: Katherine reviewed the full biography page and asked for a general advisor page. Selected work is a few anonymized cases from real facts. No resume timeline, internships, skills list, or published metrics she did not ask to show. No gradients. Logo row is monochrome ink. Do not invent testimonials.
- 2026-10-15: Social proof is one quiet band. Cities are Boston, New York, Chicago, and Philadelphia. Speaking items live in `data/speaking.yaml`. Research lives in `data/press.yaml`. The 2021 conference line may say more than 500 alumni leaders. Do not add a Wharton healthcare alumni title or a vague network line. Do not invent other talks or papers.
- 2026-10-15: No dashes in visible page copy. No em dash, en dash, or hyphen used as punctuation or as a list marker. Rewrite the sentence. Lists use a bullet or a `ul`. Hyphenated compounds only when a plain reword does not exist.
- 2026-10-15: Home copy uses Katherine's lines. Hero: "Good science gets stuck between the people who need each other." Sub: "I've sat in every chair where science becomes a deal. I'll tell you what the other side is thinking." The quiet Kgence.ai line may sit under the hero. Selected work is the problem, what was done, and why it mattered. Audience cards talk to one person. Name the urgent problem first, then "How I help" with two or three short outcomes. A fourth card is for life sciences teams buried in manual work. She helps them set up AI agents for the repetitive tasks. People keep the judgment and the relationships. The about section is first person and executive: an opening "I'm a ___ who helps ___," the span of settings, named seats, a "Today" line, "My passion is bridging," and an "In addition" line. Use only verified facts. The Vertex internship may appear as one sentence there. Do not add a timeline, a skills list, deal sizes, team sizes, or P&L figures. Contact heading is "Send me a note."
- 2026-10-14: The contact form is on the home page. No email address in the built site. The FormSubmit alias still has to be pasted into `hugo.yaml` after she activates it.
- 2026-10-14: The portrait is cropped from her LinkedIn header screenshot. The banner is the green-to-teal circuit image. Both live in `static/images/`.
