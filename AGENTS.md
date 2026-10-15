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

No dashes in visible page copy. No em dash, no en dash, and no hyphen used as punctuation or as a list marker. Rewrite the sentence. A list uses a real bullet (•) or a proper `ul`. Hyphenated compound words are allowed only when no plain wording exists. Prefer a reword. The title "co-chair" is an allowed hyphenated exception. The unslop skill enforces this as rule 13.

Do not invent facts. If a detail is missing, leave a visible `[unconfirmed]` placeholder and an HTML comment that starts with `TODO:`.

The home page publishes the biography she confirmed on 2026-10-14. Those names, dates, and figures are safe to repeat. Do not add organizations, titles, years, headcounts, or dollar figures beyond that page. Unnamed parties stay unnamed: the influenza vaccine company, and the Chinese biotech on the HPV vaccine license.

Known, and safe to say:

- She founded Kgence.ai. She is based in Greater Boston. She is bilingual in English and Mandarin Chinese.
- Moderna, Business Development, August 2021 to April 2026. Individualized Neoantigen Therapy for oncology. She left to build.
- Boston Consulting Group, Project Leader in the Healthcare Practice, August 2014 to August 2021, and Summer Associate in 2013.
- Moderna Therapeutics, Business Development and Finance, summer 2017.
- The Penn Medicine gene therapy business plan is off the public site. Do not add it back to any page or data file.
- Pennsylvania SBDC, 2011 to 2013. Vertex Pharmaceuticals, 2012. The Wharton School, M&A research, 2011.
- HBS Healthcare Alumni Association, Co-Chair of the HBS Healthcare Alum Conference, 2021.
- Harvard Business School, MBA, 2016 to 2018. University of Pennsylvania, Vagelos Life Sciences and Management program, 2010 to 2014: B.A. Biology from the College and B.S. Economics, Finance, from Wharton.
- Publication with Dr. Andrew Lo, MIT, Journal of Investment Management, 2019. The title is on the home page.

How she can help, in `data/profile.yaml`: scientists; hospitals and universities; pharma, biotech, and investors; and life sciences teams buried in manual work. For that last group, people keep the judgment and the relationships, and agents take the repetitive searches, summaries, and updates. Each audience card names the problem, then "How I help" as one sentence that mirrors that problem. Not a product pitch. Do not invent how many teams, hours saved, or client names.

## Site structure

Hugo project with custom layouts in `layouts/`. No theme. No theme submodule.

- `/` Home. A short advisor page: positioning, portrait, about, a LinkedIn insights block, one proof band, selected work, how she can help, an intro call strip, and the contact form. Not a resume. No experience timeline, internships, skills list, or bullet-level history. No "how I work" section. Copy lives in `data/profile.yaml`. Speaking is `data/speaking.yaml`. Research is `data/press.yaml`. LinkedIn post previews are `data/linkedin_posts.yaml`. The meta description is front matter in `content/_index.md`. Logo files and their sources are `static/logos/` and `data/logo-sources.yaml`.
- `/about/` and `/contact/` alias to `/`.
- `/writing/` Essays. Posts are `content/writing/*.md`. One example post is `draft: true` and must stay a draft until Katherine replaces it and asks for it to be published. Production builds omit drafts, so the public writing page says nothing is published yet.

Design: flat warm off-white `#f7f5f3`, near-black ink `#121212`, hairline `#dcd8d2`. No gradients and no beige panels, except the fade at the bottom of the LinkedIn post column. Deep green `#4a6b45` for italic words and eyebrows. Teal `#1f6f8b` for links and hover only. Cormorant Garamond for display, Outfit for body, IBM Plex Mono for eyebrows and buttons. Square corners, no shadows. Generous whitespace. One full-bleed black band, for contact. The LinkedIn post cards in the insights column are the exception: white, rounded, a light border and shadow, because Katherine asked them to look like LinkedIn posts. Do not round or shadow the rest of the page. Styles are `assets/css/main.css` plus `static/fonts/faces.css` (font faces stay unminified; Hugo's minifier corrupts `unicode-range`). Fonts are SIL Open Font License files in `static/fonts/`. The only JavaScript is `assets/js/contact.js`. The portrait is `static/images/katherine-cheng.png`. `static/images/banner.jpg` is the old circuit image. Do not put it back on the page. It is a gradient.

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
- 2026-10-15: The gene therapy business plan case is off every page and every data file. Do not put AAV, the Defense Advanced Research Projects Agency, the Wilson Lab, or REGENXBIO back into selected work, the about paragraph, or any other rendered copy.
- 2026-10-15: Katherine reviewed the full biography page and asked for a general advisor page. Selected work is a few anonymized cases from real facts. No resume timeline, internships, skills list, or published metrics she did not ask to show. No gradients. Logo row is monochrome ink. Do not invent testimonials.
- 2026-10-15: Social proof is one quiet band. Cities are Boston, New York, Philadelphia, Shanghai, and Beijing. Speaking items live in `data/speaking.yaml`. Research lives in `data/press.yaml`. Do not add Chicago back. Do not add a Wharton healthcare alumni title or a vague network line. Do not invent other talks or papers.
- 2026-10-15: Two figures may appear in visible copy: more than 12 years in the about section, and more than 500 alumni leaders at the 2021 Harvard Business School Healthcare Alumni Conference. Omit every other count, tenure range, volume, and issue number. A year may also appear as a date in `data/speaking.yaml` or `data/press.yaml`. Do not publish a LinkedIn posting clock time.
- 2026-10-15: No dashes in visible page copy. No em dash, en dash, or hyphen used as punctuation or as a list marker. Rewrite the sentence. Lists use a bullet or a `ul`. Hyphenated compounds only when a plain reword does not exist. "Co-chair" is an allowed hyphenated title. Do not rewrite it to "one of the chairs."
- 2026-10-15: The hero title is "Bridging Science and Business, Translating Innovations into Market Impact." Italic green accent: "Market Impact." The dek is "I'll tell you what the other side is thinking." Do not restore "Find the people who need your science," "Good science gets stuck between the people who need each other," or "Kgence.ai helps good science find the people who need it. The analysis is automated, and the relationships stay human."
- 2026-10-15: The page is built so a ready visitor can write without scrolling back to the top. Primary button, everywhere it repeats: "Send me a note", linking to the contact form. It repeats after the proof band, selected work, and the audience section. Hero secondary button: "Follow on LinkedIn". The same profile, https://www.linkedin.com/in/kathxcheng/, is also an icon plus the word LinkedIn in the header, the footer, and beside the contact form. Inline SVG, monochrome, new tab, `rel="noopener"`. Beside that icon, a monochrome envelope scrolls to and focuses the contact form. Its accessible name is "Send Katherine a note." Do not use `mailto`. Do not put her email address in HTML, CSS, or JavaScript. Do not add other social links. Do not add testimonials, prices, or a promise of when she will reply. Under the form: "Katherine reads every note personally."
- 2026-10-15: LinkedIn block heading: "Insights." She posts regularly about bridging life sciences and business. Do not say twice a week, Tuesday, Thursday, or a clock time. A visitor may comment "snapshot" on a post, or send a note, to request a snapshot of their science, portfolio, or search area. Do not promise a turnaround or a price. Four post previews live in `data/linkedin_posts.yaml`. Each one is a LinkedIn-style card in the scrolling right column: white, rounded, her round portrait, the name Katherine Cheng, the headline "Founder, Kgence.ai | Bridging Science and Business", the date with a globe, the post text with "...see more", a LinkedIn icon, and a Like, Comment, Repost, Send row with no counts. The whole card opens the real post in a new tab. On a narrow screen the column stacks under the copy. Those post dates may appear. No reaction counts. No other people's names. Do not add posts she did not supply.
- 2026-10-15: There is no "How I work" section and no "chair" language on the page. "Co-chair" in the about addition and in `data/speaking.yaml` stays. Do not bring the section back.
- 2026-10-15: The home page has an intro call strip: "Book time with Katherine for an intro call." The button label is "Book an intro call." `params.introCallURL` in `hugo.yaml` is empty until Katherine supplies a booking link. While it is empty, the button scrolls to the contact form. When it is set, the button opens that URL. Do not put a Calendly or Google link on the page until she supplies it. Harvard Asia Business Conference and Penn HealthX stay in the proof band and the about paragraph. Do not bring back a "Book Katherine to speak" strip.
- 2026-10-15: Earlier home lines that still apply: Selected work is the problem, what was done, and why it mattered. Audience cards talk to one person. Name the urgent problem first, then "How I help" as one sentence that mirrors that problem. A fourth card is for life sciences teams buried in manual work. People keep the judgment and the relationships, and agents take the repetitive tasks. The about section is first person and executive: an opening "I'm a ___ who helps ___," the span of settings, named seats, a "Today" line, "My passion is bridging," and an "In addition" line. Use only verified facts. The Vertex internship may appear as one sentence there. Do not add a timeline, a skills list, deal sizes, team sizes, or P&L figures. Contact heading is "Send me a note."
- 2026-10-14: The contact form is on the home page. No email address in the built site. The FormSubmit alias still has to be pasted into `hugo.yaml` after she activates it.
- 2026-10-14: The portrait is cropped from her LinkedIn header screenshot. The banner is the green-to-teal circuit image. Both live in `static/images/`.
