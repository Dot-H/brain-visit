https://alx-b.com

# Alexandre BERNARD's website & blog

This website is based on Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages)
feature using Markdown files as the data source.

The blog posts are stored in `/content/posts` and the architecture of the blog
is explained in `/doc/posts.md`.

## How to use

```bash
yarn dev
```

## Technologies used

## Main

- NextJS v12

## Styling

- [Tailwind CSS v3](https://tailwindcss.com/blog/tailwindcss-v3)

## Seo

- [Vercel OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap#readme)

## Markdown rendering

- [`remark`](https://github.com/remarkjs/remark)
- [`remark-html`](https://github.com/remarkjs/remark-html)
- [`gray-matter`](https://github.com/jonschlinkert/gray-matter)

## Package manager

- [`yarn 3`](https://yarnpkg.com/getting-started/usage) with its [PnP feature](https://yarnpkg.com/features/pnp)
