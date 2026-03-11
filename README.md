# my-portfolio

Personal portfolio site built with React + TypeScript + Vite. Includes a section-based landing page, dark mode, and project detail pages rendered from Markdown files in `public/`.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router (`/` + `/project/:projectName`)
- React Markdown (`react-markdown` + `remark-gfm`)
- TanStack Query (provider set up in `src/App.tsx`)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev` - start dev server
- `npm run build` - typecheck + build for production
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Editing content

- Hero / contact links: `src/components/HeroSection.tsx`
- About / experience / tech stack / footer: `src/components/*Section.tsx`
- Project list + slugs: `src/data/projects.ts`

## Adding a project (Markdown-powered)

1. Add an entry in `src/data/projects.ts`:
   - `slug` becomes the URL: `/project/<slug>`
   - `readme` should point to a Markdown file under `public/`, e.g. `/projects/<slug>/<slug>.md`
2. Create the Markdown file at `public/projects/<slug>/<slug>.md`.
3. (Optional) Add screenshots under `public/projects/<slug>/Screenshots/` and reference them in Markdown like:

   ```md
   ![Screenshot](/projects/<slug>/Screenshots/example.png)
   ```

## Build & deploy

```bash
npm run build
```

Deploy the generated `dist/` folder to any static host (Netlify, Vercel static output, GitHub Pages, etc.).
