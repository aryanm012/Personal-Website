# Aryan Mistry’s portfolio

A Next.js portfolio for software engineering, distributed systems, and applied AI work. The home page links to individual projects and experience entries.

## Run locally

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Update the site

- Edit project cards and pages in `data/projects.ts` and timeline entries and role pages in `data/experience.ts`. The `slug` fields determine the page URLs.
- Update contact links, education, and skills in `data/profile.ts`.
- Replace `public/resume.pdf` with an updated copy for public distribution.
- Edit the page sections in `components/` and the design in `app/globals.css`.

## Verify and deploy

```sh
npm run lint
npm run build
```

Import the GitHub repository into Vercel using the Next.js preset. Set `main` as the production branch for automatic redeploys.
