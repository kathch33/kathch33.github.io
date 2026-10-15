---
name: hugo-deploy-github-pages
description: Deploy Katherine Cheng's Hugo site to GitHub Pages. Use when editing .github/workflows/hugo.yaml, baseURL, the Pages source, or the build cache. Do not force-push master. Do not commit the public directory.
---

# Hugo deploy on GitHub Pages

Written for this repository. Not vendored.

## Workflow

`.github/workflows/hugo.yaml` is the official workflow published in the Hugo docs:

https://gohugo.io/host-and-deploy/host-on-github-pages/

Keep that file aligned with the docs. The only intentional local changes are:

- `on.push.branches` is `master`, because that is the default branch.
- `pull_request` runs the build. The deploy job runs only when `github.ref` is `refs/heads/master`.
- The Go setup step is omitted. This site has no `go.mod`. GitHub downloads every `uses` action during job setup, before `if` is evaluated, and a failed download of `actions/setup-go` failed the master deploy on 2026-10-15. Do not add that step back.
- `TZ` is `America/New_York`. That is an assumption recorded in `AGENTS.md`, not a confirmed preference.

Hugo in CI is `0.168.0` from `hugo_${HUGO_VERSION}_linux-amd64.tar.gz` (the standard build, not extended). Local preview should use the same version. `hugo.yaml` in the repo root sets the image cache to `:cacheDir/images`, which the docs ask for even when the site has no images.

The workflow builds on push to `master`, on pull requests, and on `workflow_dispatch`. It deploys only from `master`.

## Pages source

The site publishes only after GitHub Pages source is **GitHub Actions**, not "Deploy from a branch" (`master` / `/`).

Changing that source is a Pages setting, not a file in the repo. If the API call is allowed it is:

```sh
gh api --method PUT repos/kathch33/kathch33.github.io/pages -f build_type=workflow
```

If that returns a permissions error, Katherine has to switch it herself: Settings, Pages, Build and deployment, Source, GitHub Actions.

Do not work around a failed switch by committing `public/` to `master` or by force-pushing.

## Do not

- Force-push `master` unless Katherine explicitly asks.
- Commit `public/`, `resources/`, or `.hugo_build.lock`.
- Add a git submodule for a theme. The checkout step is ready for submodules, but this site does not use one.
- Point `baseURL` at a project subpath. This is a user site at `https://kathch33.github.io/`. The workflow still passes `--baseURL` from `actions/configure-pages`.
- Touch any repository other than `kathch33/kathch33.github.io`.

## Check before merging

```sh
hugo build --gc --minify
```

Confirm the draft essay is absent under `public/writing/` and that `public/index.html` contains the core idea.
