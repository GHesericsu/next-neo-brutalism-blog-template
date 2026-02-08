import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'

export const metadata = {
  title: 'Blog | Neo Blog',
  description: 'All blog posts',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="bg-neo-pink min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="neo-card bg-white p-8">
          <h1 className="text-4xl font-black mb-8">All Posts</h1>
          
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No posts yet!</p>
              <p className="text-gray-500">
                Add your first post in the <code className="bg-neo-lavender px-2 py-1 border border-black">content/posts</code> directory.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
