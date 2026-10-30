# Portfolio AGI

Portfolio de Jon Aginako. Next.js (export estático) + next-intl (es / en / eus) + Tailwind.

## Desarrollo

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run build   # genera la carpeta out/
```

## Despliegue en Cloudflare Pages

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npx next build`
- Build output directory: `out`
- Variable de entorno (opcional): `NODE_VERSION=22`

`public/_redirects` redirige `/` a `/es` (el idioma por defecto). Solo lo aplica Cloudflare;
en local, entra directamente en `/es`, `/en` o `/eus`.
