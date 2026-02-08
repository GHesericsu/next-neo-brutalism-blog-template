# Quick Start Guide

Get your neobrutalism blog running in 5 minutes.

## 1. Install

```bash
git clone https://github.com/yourusername/next-neo-brutalism-blog-template.git my-blog
cd my-blog
npm install
```

## 2. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 3. Create Your First Post

### Step 1: Create the file

```bash
touch content/posts/my-first-post.mdx
```

### Step 2: Add frontmatter and content

```mdx
---
title: "My First Post"
date: "2026-02-08"
description: "This is my very first blog post!"
tags: ["intro", "personal"]
color: "neo-pink"
featuredImage: "/images/my-first-post-banner.png"
---

# Hello World!

This is my first post using the Neo Brutalism Blog Template.

## Why I Love This Template

- Bold design
- Easy to customize
- Fast and modern

Check out my [about page](/about) to learn more!
```

### Step 3: Add the featured image

**Option A: Generate with AI**

1. Go to an AI image generator (Midjourney, DALL-E, Gemini)
2. Use this prompt:
   ```
   Bold neobrutalism graphic design, hot pink and black, 
   geometric shapes with thick black borders, "Hello World" theme, 
   flat design, high contrast, modern web aesthetic, 1200x900
   ```
3. Download and save to `public/images/my-first-post-banner.png`

**Option B: Use a placeholder**

```bash
# Download a placeholder (1200x900)
curl https://placehold.co/1200x900/FF6B9D/000000/png -o public/images/my-first-post-banner.png
```

### Step 4: See it live

Refresh [http://localhost:3000/blog](http://localhost:3000/blog) — your post is there!

## 4. Customize the Site

### Update site info

Edit `src/app/layout.tsx`:

```tsx
export const metadata = {
  title: 'My Awesome Blog',  // ← Change this
  description: 'Thoughts on design, code, and life',  // ← And this
}
```

### Change colors

Edit `tailwind.config.ts`:

```ts
colors: {
  'neo-pink': '#YOUR_COLOR',
  // Add more colors...
}
```

## 5. Deploy

### Vercel (easiest)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=.next
```

---

**That's it!** You now have a fully functional neobrutalism blog.

Next: Read the full [README.md](./README.md) for advanced customization.
