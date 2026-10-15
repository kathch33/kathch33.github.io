# Blog configuration

Settings for the vendored Hugo blog skills in `.agents/skills/`. Voice and facts live in `AGENTS.md` and override anything below, including tone advice inside those skills.

## Blog

- **Domain:** kathch33.github.io
- **Name:** Katherine Cheng
- **Hugo theme:** none. Custom layouts in `layouts/`. Do not add a theme submodule.
- **Blog repo path:** this repository
- **Subscribe URL:** none

## Author

- **Name:** Katherine Cheng
- **GitHub username:** kathch33

## Content structure

- **Posts directory:** content/writing/
- **Talks directory:** none
- **Images directory:** static/images/ (katherine-cheng.png is the portrait). Logos are static/logos/. Do not use banner.jpg on the page.

## Publication settings

- **Publication time:** 09:00:00
- **Timezone:** America/New_York
- **Timezone offset:** -0500 standard, -0400 daylight. Prefer a full timestamp such as `2026-10-14T09:00:00-04:00`.
- **Deployment:** GitHub Actions workflow `.github/workflows/hugo.yaml` publishes to GitHub Pages from `master`. Drafts are omitted.

## Front matter defaults

- **type:** leave unset so the page stays in the `writing` section
- **draft:** true until Katherine says the essay is ready
- **weight:** unused

## Social handles

Do not invent handles or URLs. The home page contact form is FormSubmit. The endpoint placeholder is in hugo.yaml. See AGENTS.md.

## Topic areas

- Life sciences, human-led agentic AI, and the work of bridging science and business
- Scientists, hospital and university tech transfer, pharma, biotech, and investors
- Use only the confirmed biography in AGENTS.md and data/profile.yaml

## Hashtags

None confirmed. Do not invent them.
