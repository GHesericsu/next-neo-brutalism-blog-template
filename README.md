# Neo Brutalism Blog Template

A bold, striking blog template built with **Next.js 14**, **Tailwind CSS**, and **MDX**. Features a distinctive neobrutalism design aesthetic with thick black borders, vibrant neon colors, and flat, playful layouts.

![Neo Brutalism Blog](./docs/preview.png)

## ✨ Features

- 🎨 **Bold Neobrutalism Design** — Thick borders, high contrast, vibrant colors
- ⚡ **Next.js 14** — App Router, Server Components, optimized for performance
- 📝 **MDX Support** — Rich content with React components in Markdown
- 🖼️ **Featured Images** — 1200×900 banner images for every post
- 🎨 **Color-Coded Posts** — Customizable accent colors per post
- 📱 **Fully Responsive** — Mobile-first design
- 🌙 **Dark Mode Ready** — Theme support built-in (coming soon)
- 🚀 **One-Click Deploy** — Ready for Vercel, Netlify, or any static host

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/GHesericsu/next-neo-brutalism-blog-template.git my-blog
cd my-blog
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Customize

- **Site Info:** Edit `src/app/layout.tsx` for title, description
- **Colors:** Customize in `tailwind.config.ts`
- **Content:** Add posts in `content/posts/`

## 📝 Creating Posts

### Post Structure

Posts live in `content/posts/` as `.mdx` files:

```
content/posts/
├── my-first-post.mdx
└── another-post.mdx
```

### Post Frontmatter

Every post requires frontmatter at the top:

```mdx
---
title: "Your Post Title"
date: "2026-02-08"
description: "A short description for SEO and cards"
tags: ["nextjs", "design", "tutorial"]
color: "neo-cyan"
featuredImage: "/images/my-post-banner.png"
---

# Your content here

Write your post content using Markdown and JSX!
```

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Post title | `"Getting Started"` |
| `date` | Publish date (YYYY-MM-DD) | `"2026-02-08"` |
| `description` | Short summary (160 chars max) | `"Learn how to..."` |
| `tags` | Array of topic tags | `["tutorial", "nextjs"]` |
| `color` | Card accent color | `"neo-cyan"` |
| `featuredImage` | Path to banner image | `"/images/post-banner.png"` |

### Available Colors

| Color Name | Hex | Preview |
|------------|-----|---------|
| `neo-pink` | `#FF6B9D` | Hot pink |
| `neo-cyan` | `#7DF9FF` | Electric cyan |
| `neo-lime` | `#BFFF00` | Lime green |
| `neo-yellow` | `#FFE135` | Bright yellow |
| `neo-lavender` | `#E6E6FA` | Soft lavender |
| `neo-orange` | `#FF9F1C` | Orange |
| `neo-purple` | `#9B5DE5` | Purple |

## 🖼️ Adding Images

### Image Specs

- **Dimensions:** 1200×900px (4:3 ratio)
- **Format:** PNG or JPG
- **Location:** `public/images/`
- **Naming:** `post-slug-banner.png`

### Quick Image Generation

**Option 1: AI Generation (Recommended)**

Use an AI image generator with this prompt template:

```
Bold neobrutalism graphic design, [YOUR COLOR] and black, 
geometric shapes with thick black borders, [YOUR TOPIC] theme, 
flat design, high contrast, modern web aesthetic, 1200x900
```

**Option 2: Manual Design**

1. Use Figma, Canva, or Photoshop
2. Create 1200×900 canvas
3. Apply neobrutalism style:
   - Flat colors (no gradients)
   - Thick black borders (4-6px)
   - High contrast
   - Geometric shapes
4. Export as PNG

**Option 3: Script (Automated)**

```bash
npm run generate-image "Your Post Title" neo-cyan
```

*(Script coming soon)*

### Adding to Post

1. Save image to `public/images/your-post-banner.png`
2. Add to frontmatter:
   ```yaml
   featuredImage: "/images/your-post-banner.png"
   ```

## 🎨 Customization

### Site Branding

Edit `src/app/layout.tsx`:

```tsx
export const metadata = {
  title: 'Your Blog Name',
  description: 'Your blog description',
}
```

### Colors

Edit `tailwind.config.ts` to add custom colors:

```ts
colors: {
  'neo-custom': '#YOUR_COLOR',
}
```

### Typography

Update `tailwind.config.ts`:

```ts
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GHesericsu/next-neo-brutalism-blog-template)

Or manually:

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=out
```

### Static Export

```bash
npm run build
npm run export
```

Output in `.next/` directory.

## 📁 Project Structure

```
next-neo-brutalism-blog-template/
├── content/
│   └── posts/           # Blog posts (.mdx files)
├── public/
│   └── images/          # Post banner images
├── src/
│   ├── app/
│   │   ├── blog/        # Blog pages
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Homepage
│   ├── components/      # React components
│   └── lib/
│       └── posts.ts     # Post loading utilities
├── tailwind.config.ts   # Tailwind configuration
└── package.json
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + `@tailwindcss/typography`
- **Content:** MDX (next-mdx-remote)
- **Language:** TypeScript
- **Deployment:** Vercel-ready (works anywhere)

## 📄 License

MIT License — use it for anything!

## 🙌 Credits

Template created by [Angie](https://angie-neo-blog.vercel.app) — an AI assistant who loves good design.

---

**Questions or issues?** Open an issue or PR on GitHub!
