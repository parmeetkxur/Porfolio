import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../config/data'
import {
  ActionButton,
  CornerArcDecoration,
  EASE,
  RevealHeading,
  RevealItem,
} from './MotionPrimitives'

interface SectionProps {
  id: string
}

export const Projects: React.FC<SectionProps> = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-white/[0.06] py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      <CornerArcDecoration />

      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RevealHeading
            id="projects-heading"
            as="h2"
            className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
            segments={[{ text: 'Featured' }, { text: 'Projects', muted: true }]}
          />

          {/* Project switcher tabs */}
          <RevealItem className="flex flex-wrap gap-2">
            {projects.map((proj, idx) => {
              const selected = idx === activeIndex
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-[4px] px-3.5 py-1.5 text-xs font-medium transition-all ${
                    selected
                      ? 'border border-white/40 bg-white/15 text-white shadow-sm'
                      : 'border border-white/10 bg-white/[0.03] text-neutral-400 hover:border-white/25 hover:text-white'
                  }`}
                >
                  0{idx + 1}. {proj.title}
                </button>
              )
            })}
          </RevealItem>
        </div>

        {/* White-framed Bento Showcase matching Image 2 */}
        <RevealItem delay={0.1} className="mt-10">
          <div className="bg-white p-2.5 shadow-[0_30px_90px_rgba(0,0,0,0.85)] sm:p-3.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: EASE }}
                className="grid gap-2.5 md:grid-cols-[1.15fr_0.85fr]"
              >
                {/* Left column: Hero visual + highlights */}
                <div className="flex flex-col gap-2.5">
                  <div
                    className="relative flex min-h-[220px] flex-col justify-between overflow-hidden p-6 text-white sm:p-7"
                    style={{
                      background: `linear-gradient(135deg, ${activeProject.accentColor} 0%, #111111 100%)`,
                    }}
                  >
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/75">
                      <span>{activeProject.date}</span>
                      <span>{activeProject.industry}</span>
                    </div>

                    <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                          {activeProject.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-white/85">
                          {activeProject.tagline}
                        </p>
                      </div>

                      <ActionButton
                        href={activeProject.link}
                        label={activeProject.linkLabel}
                        icon="↗"
                        variant="light"
                      />
                    </div>
                  </div>

                  {/* Summary + Bullet highlights */}
                  <div className="flex-1 bg-[#121212] p-5 text-neutral-200 sm:p-6">
                    <p className="text-sm leading-relaxed text-neutral-300">
                      {activeProject.summary}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs leading-relaxed text-neutral-300 sm:text-sm">
                      {activeProject.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9532f]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right column: Metrics bento + Tech stack + Color swatches matching Image 2 */}
                <div className="flex flex-col gap-2.5">
                  {/* Metrics tiles */}
                  <div className="grid grid-cols-1 gap-2.5 bg-[#161616] p-5 text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      Key Engineering Highlights
                    </p>
                    <div className="grid gap-3 pt-1">
                      {activeProject.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="flex items-center justify-between border-b border-white/10 pb-2.5 last:border-0 last:pb-0"
                        >
                          <span className="text-xs uppercase tracking-wider text-neutral-400">
                            {m.label}
                          </span>
                          <span className="font-display text-sm font-semibold text-white">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack card */}
                  <div className="flex-1 bg-[#f5f5f5] p-5 text-[#0b0b0b]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Technologies Used
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-black/15 bg-white px-2.5 py-1 text-xs font-medium text-[#0b0b0b]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Original SiteAudit UI screenshot or palette swatches */}
                  {activeProject.image ? (
                    <div className="overflow-hidden border border-black/10 bg-[#0b0b0b]">
                      <img
                        src={activeProject.image}
                        alt={`${activeProject.title} application UI`}
                        className="h-44 w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="grid h-14 grid-cols-3 gap-2">
                      {activeProject.palette.map((color) => (
                        <div
                          key={color}
                          style={{ backgroundColor: color }}
                          className="h-full w-full"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </RevealItem>

        {/* Bottom-left Domain tag matching Image 2 ("| INDUSTRY / Real Estate") */}
        <RevealItem delay={0.15} className="mt-6 flex items-center gap-3">
          <span className="h-7 w-[3px] bg-white" aria-hidden />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              DOMAIN
            </p>
            <p className="text-sm font-medium text-white">
              {activeProject.industry}
            </p>
          </div>
        </RevealItem>
      </div>
    </section>
  )
}
