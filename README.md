# balsain

Public site for balsain, a product studio focused on cybersecurity, AI agents, and decentralised systems. The current product is [Almena ID](https://github.com/almena-id).

Single-page static site, English only. Copy lives in `src/i18n/messages.ts`.

## Stack

- [Astro](https://astro.build) 7
- [pnpm](https://pnpm.io)
- Node.js 22.12 or newer
- [Vercel Analytics](https://vercel.com/docs/analytics) on the home page

## Setup

```sh
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:4321`.

| Command | Action |
| :------ | :----- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build the static site to `dist/` |
| `pnpm preview` | Serve the production build locally |

The same commands are available through [Task](https://taskfile.dev): `task dev`, `task build`, `task preview`, `task clean`.

## Layout

```text
src/
├── components/   Home and logo
├── i18n/         Page copy
├── layouts/      Document shell
└── pages/        Routes
public/           Favicons
```

Contact: info@balsain.io
