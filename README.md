# KSBPS Technology Website

Static marketing website for KSBPS Technology, designed for deployment on Cloudflare Pages.

## Cloudflare Pages

Recommended Pages settings:

- Production branch: `main` or `master`
- Build command: leave empty
- Build output directory: `/`
- Framework preset: None / Static HTML

This repository also includes `wrangler.toml` with `pages_build_output_dir = "."` so Cloudflare can treat the repo root as the static site output.

## Pages

- `index.html`
- `services.html`
- `industries.html`
- `case-studies.html`
- `about.html`
- `contact.html`

The contact details are placeholders using `ksbpstechnology.com` email addresses and should be replaced with official company details before production launch.
