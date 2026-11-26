import React from 'react'
import { contactLinks } from '../config/data'
import { SectionId } from '../config/sections'

export const Footer: React.FC = () => {
  const scrollTop = () => {
    const el = document.getElementById(SectionId.Home)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/[0.08] py-8 text-xs text-neutral-400">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6">
        <p>© 2026 Parmeet Kaur. Crafted with precision.</p>

        <div className="flex items-center gap-5">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={scrollTop}
            className="transition-colors hover:text-white"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
