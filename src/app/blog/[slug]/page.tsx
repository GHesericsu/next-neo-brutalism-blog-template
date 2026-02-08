import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | Neo Blog`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-neo-pink min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link 
          href="/blog" 
          className="neo-tag hover:bg-neo-cyan transition-colors inline-block mb-6"
        >
          ← Back to Blog
        </Link>

        {/* Post header */}
        <div className="neo-card bg-white p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <time className="text-gray-600">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="neo-tag bg-neo-lavender">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {post.description && (
            <p className="text-xl text-gray-700 border-l-4 border-black pl-4 bg-neo-yellow/30 py-2">
              {post.description}
            </p>
          )}
        </div>

        {/* Featured image */}
        {post.featuredImage && (
          <div className="neo-card bg-white p-2 mb-8 overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Post content */}
        <div className="neo-card bg-white p-8">
          <div className="prose-neo">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </div>
  )
}
