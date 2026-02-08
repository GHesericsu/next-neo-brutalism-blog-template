import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 6)

  return (
    <div className="bg-neo-pink min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Hero Card */}
          <div className="neo-card bg-neo-lime p-8 md:col-span-1">
            <h1 className="text-5xl font-black mb-4 leading-tight">
              Neo Blog
            </h1>
            <p className="text-xl mb-6">
              A minimalistic, neobrutalism blog template for Next.js.
            </p>
            <Link href="/blog" className="neo-btn inline-block bg-white">
              Read the Blog →
            </Link>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-6">
            <div className="neo-card bg-neo-cyan p-6">
              <h2 className="text-xl font-bold mb-2">Built with</h2>
              <div className="flex flex-wrap gap-2">
                <span className="neo-tag">Next.js 14</span>
                <span className="neo-tag">Tailwind CSS</span>
                <span className="neo-tag">MDX</span>
                <span className="neo-tag">TypeScript</span>
              </div>
            </div>
            
            <div className="neo-card bg-neo-lavender p-6">
              <h2 className="text-xl font-bold mb-2">What is this?</h2>
              <p>
                A simple, fast, and modern blog template that is easy to 
                customize. Mainly meant to power blogs and personal websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="neo-card bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-black">Recent Blogposts</h2>
            <Link href="/blog" className="neo-tag hover:bg-neo-yellow transition-colors">
              Go to blog →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
