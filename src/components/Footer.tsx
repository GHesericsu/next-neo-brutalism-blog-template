export function Footer() {
  return (
    <footer className="bg-white border-t-[3px] border-black mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <p className="font-medium">
          Built with 💚 using Next.js & Tailwind
        </p>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="neo-tag hover:bg-neo-lavender transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="neo-tag hover:bg-neo-cyan transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
