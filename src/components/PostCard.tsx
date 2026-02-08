import Link from 'next/link'
import { Post } from '@/lib/posts'

const colorMap: Record<string, string> = {
  'neo-pink': 'bg-neo-pink',
  'neo-cyan': 'bg-neo-cyan',
  'neo-lime': 'bg-neo-lime',
  'neo-yellow': 'bg-neo-yellow',
  'neo-lavender': 'bg-neo-lavender',
  'neo-orange': 'bg-neo-orange',
  'neo-purple': 'bg-neo-purple',
}

export function PostCard({ post }: { post: Post }) {
  const bgColor = colorMap[post.color || 'neo-lavender'] || 'bg-neo-lavender'

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="neo-card p-6 h-full flex flex-col">
        {/* Color accent bar */}
        <div className={`${bgColor} h-24 -mx-6 -mt-6 mb-4 border-b-[3px] border-black flex items-center justify-center`}>
          <span className="text-4xl">📝</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        
        <time className="text-sm text-gray-600 mb-2">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
        
        <p className="text-gray-700 flex-1">{post.description}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="neo-tag text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}
