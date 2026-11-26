import React from 'react'
import { motion } from 'framer-motion'
import { coreTools, profile, skillGroups } from '../config/data'
import {
  CornerArcDecoration,
  EASE,
  RevealHeading,
  RevealItem,
} from './MotionPrimitives'

interface SectionProps {
  id: string
}

const RADIUS = 36
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export const About: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-white/[0.06] py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <CornerArcDecoration />

      <div className="mx-auto max-w-5xl px-6">
        {/* About Me heading with orange-red arrow */}
        <RevealHeading
          id="about-heading"
          as="h2"
          trailingArrow
          className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          segments={[{ text: 'About Me' }]}
        />

        {/* Bio paragraphs */}
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-neutral-300 sm:text-lg">
          {profile.bio.map((para, idx) => (
            <RevealItem key={idx} delay={0.08 * (idx + 1)}>
              <p>{para}</p>
            </RevealItem>
          ))}
        </div>

        {/* Tech Tools with circular progress rings matching Image 4 */}
        <div className="mt-16 md:mt-20">
          <RevealHeading
            as="h3"
            trailingArrow
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
            segments={[{ text: 'Tech Tools' }]}
          />

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {coreTools.map((tool, idx) => {
              const offset = CIRCUMFERENCE * (1 - tool.level / 100)
              return (
                <RevealItem
                  key={tool.name}
                  delay={0.06 * idx}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <svg
                      className="h-full w-full -rotate-90"
                      viewBox="0 0 88 88"
                    >
                      <defs>
                        <linearGradient
                          id={`ringGrad-${idx}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#e5a038" />
                          <stop offset="60%" stopColor="#d9532f" />
                          <stop offset="100%" stopColor="#991b1b" />
                        </linearGradient>
                      </defs>
                      {/* Track */}
                      <circle
                        cx="44"
                        cy="44"
                        r={RADIUS}
                        fill="transparent"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="6"
                      />
                      {/* Animated progress arc */}
                      <motion.circle
                        cx="44"
                        cy="44"
                        r={RADIUS}
                        fill="transparent"
                        stroke={`url(#ringGrad-${idx})`}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        initial={{ strokeDashoffset: CIRCUMFERENCE }}
                        whileInView={{ strokeDashoffset: offset }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 1.1,
                          delay: 0.12 * idx,
                          ease: EASE,
                        }}
                      />
                    </svg>

                    {/* Clean dark inner circle */}
                    <div className="absolute h-[60px] w-[60px] rounded-full border border-white/10 bg-[#141414] transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <p className="mt-3 text-xs font-medium text-neutral-200 sm:text-sm">
                    {tool.name}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wider text-neutral-500">
                    {tool.category}
                  </p>
                </RevealItem>
              )
            })}
          </div>

          <RevealItem delay={0.2}>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-neutral-400">
              {profile.skillsFooterNote}
            </p>
          </RevealItem>

          {/* Full categorized stack pills */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, idx) => (
              <RevealItem
                key={group.label}
                delay={0.07 * idx}
                className="rounded-lg border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm"
              >
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d48b3b]">
                  {group.label}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-neutral-200 transition-colors hover:border-[#d9532f]/60 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
