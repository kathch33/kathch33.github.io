# Katherine Cheng

Personal site, built with [Hugo](https://gohugo.io/) and published to GitHub Pages.

The public page is https://kathch33.github.io/. Voice, structure, and editing rules live in [AGENTS.md](AGENTS.md).

## Preview

Install Hugo 0.168.0 (the version pinned in `.github/workflows/hugo.yaml`), then:

```sh
hugo server
```

Draft essays stay off the public build. To see them locally:

```sh
hugo server --buildDrafts
```

## Deploy

Pushes to `master` run `.github/workflows/hugo.yaml`, which is the official Hugo workflow for GitHub Pages. In the repository settings, Pages has to use **GitHub Actions** as the source, not the `master` branch.

Do not commit the `public/` directory.

## Contact form

The form does not contain an email address. `params.contactFormEndpoint` in `hugo.yaml` is a FormSubmit placeholder until Katherine pastes the alias. The steps are in [AGENTS.md](AGENTS.md).
