# Site adaptation

This skill was written for a different Hugo blog. On kathch33.github.io:

- Essays live in `content/writing/`, not `content/posts/`.
- There is no `content/talks/` directory and no PaperMod theme. Layouts are the custom templates in `layouts/`.
- Read `blog-config.md` and `AGENTS.md` first.
- Voice, banned words, and the rule against inventing facts are in `AGENTS.md`. They override this skill, including the upstream "no em dash" house style and any promotional tone.
- Do not publish numbers, client names, or prices.
- Keep example posts `draft: true` until Katherine says they are ready.
- Deployment is GitHub Actions to GitHub Pages. See the `hugo-deploy-github-pages` skill. Do not add a theme submodule.
