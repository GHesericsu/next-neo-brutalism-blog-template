import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Neobrutalism palette
        'neo-pink': '#FF6B9D',
        'neo-cyan': '#7DF9FF',
        'neo-lime': '#BFFF00',
        'neo-yellow': '#FFE135',
        'neo-lavender': '#E6E6FA',
        'neo-orange': '#FF9F1C',
        'neo-purple': '#9B5DE5',
        'neo-bg': '#F8F8F8',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #000000',
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo-lg': '6px 6px 0px 0px #000000',
        'neo-hover': '2px 2px 0px 0px #000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
