import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white border-b-[3px] border-black">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black hover:text-neo-purple transition-colors">
          Neo Blog
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className="neo-tag hover:bg-neo-cyan transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/blog" 
            className="neo-tag hover:bg-neo-lime transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/about" 
            className="neo-tag hover:bg-neo-yellow transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
