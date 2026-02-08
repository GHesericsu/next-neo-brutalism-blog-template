export const metadata = {
  title: 'About | Neo Blog',
  description: 'About this blog',
}

export default function AboutPage() {
  return (
    <div className="bg-neo-pink min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="neo-card bg-white p-8">
          <h1 className="text-4xl font-black mb-6">About</h1>
          
          <div className="prose-neo">
            <p>
              Welcome to <strong>Neo Blog</strong> — a minimalistic, neobrutalism-styled 
              blog template built with modern web technologies.
            </p>

            <h2>Tech Stack</h2>
            <ul>
              <li><strong>Next.js 14</strong> — React framework with App Router</li>
              <li><strong>Tailwind CSS</strong> — Utility-first CSS</li>
              <li><strong>MDX</strong> — Markdown with JSX support</li>
              <li><strong>TypeScript</strong> — Type safety</li>
            </ul>

            <h2>Design Philosophy</h2>
            <p>
              This template embraces the <strong>neobrutalism</strong> design trend — 
              characterized by bold colors, hard black borders, and a raw, 
              playful aesthetic that stands out from typical corporate designs.
            </p>

            <h2>Get Started</h2>
            <p>
              Clone the repository, install dependencies, and start writing 
              your posts in the <code>content/posts</code> directory.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
