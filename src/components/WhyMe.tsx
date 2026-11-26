import React from 'react'
import {
  certificates,
  education,
  openSourceContributions,
  whyMePillars,
} from '../config/data'
import {
  CornerArcDecoration,
  RevealHeading,
  RevealItem,
} from './MotionPrimitives'

interface SectionProps {
  id: string
}

export const WhyMe: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-white/[0.06] py-20 md:py-28"
      aria-labelledby="whyme-heading"
    >
      <CornerArcDecoration />

      <div className="mx-auto max-w-5xl px-6">
        {/* Why Me heading matching Image 5 */}
        <RevealHeading
          id="whyme-heading"
          as="h2"
          trailingArrow
          className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          segments={[{ text: 'Why Me' }]}
        />

        {/* 3 Warm Amber Pillars matching Image 5 */}
        <div className="mt-12 space-y-10">
          {whyMePillars.map((pillar, idx) => (
            <RevealItem key={pillar.title} delay={0.08 * idx} className="max-w-3xl">
              <h3 className="font-display text-xl font-medium text-[#d48b3b] sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-2 text-base font-medium text-neutral-100">
                {pillar.headline}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-300 sm:text-base">
                {pillar.description}
              </p>
            </RevealItem>
          ))}
        </div>

        {/* Open-Source & Community Experience */}
        <div className="mt-16">
          <RevealItem>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Open-Source &amp; Community Experience
            </h3>
          </RevealItem>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {openSourceContributions.map((item, idx) => (
              <RevealItem
                key={item.repo}
                delay={0.08 * idx}
                className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#121212]/90 p-5 transition-colors hover:border-white/25"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-wider text-[#d48b3b]">
                    <span>{item.stars}</span>
                    <span className="text-neutral-500">{item.date}</span>
                  </div>
                  <h4 className="font-display mt-2 text-lg font-semibold text-white">
                    {item.repo}
                  </h4>
                  <p className="text-xs text-neutral-400">{item.role}</p>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-300 sm:text-sm">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/[0.05] px-2 py-0.5 text-[11px] text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </RevealItem>
            ))}
          </div>
        </div>

        {/* Education & Certificates (LPU ONLY appears in Education, NO CGPA anywhere) */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <RevealItem className="rounded-lg border border-white/10 bg-[#121212]/80 p-6">
            <h3 className="font-display text-xl font-medium text-[#d48b3b]">
              Education
            </h3>
            <div className="mt-5 space-y-5">
              {education.map((edu) => (
                <div
                  key={`${edu.institution}-${edu.degree}`}
                  className="border-l-2 border-white/15 pl-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold text-white">{edu.institution}</h4>
                    <span className="text-xs text-neutral-400">{edu.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-neutral-300">{edu.degree}</p>
                  <div className="mt-1 flex items-center gap-3 text-xs text-neutral-500">
                    <span>{edu.location}</span>
                    {edu.detail && (
                      <span className="rounded bg-white/10 px-2 py-0.5 text-neutral-200">
                        {edu.detail}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealItem>

          <RevealItem delay={0.1} className="rounded-lg border border-white/10 bg-[#121212]/80 p-6">
            <h3 className="font-display text-xl font-medium text-[#d48b3b]">
              Certificates &amp; Honours
            </h3>
            <div className="mt-5 space-y-4">
              <div className="rounded border border-[#d9532f]/30 bg-[#d9532f]/10 p-3.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#f38b6d]">
                  Achievement · September 2026
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Smart India Hackathon (SIH) — Internal Hackathon Winner
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                  Won with a 6-member team out of 1000+ participating teams; selected among top 50 shortlisted teams.
                </p>
              </div>

              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start justify-between gap-3 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium text-neutral-100">
                      {cert.title}
                    </p>
                    <p className="text-xs text-neutral-400">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 text-xs text-neutral-500">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </RevealItem>
        </div>
      </div>
    </section>
  )
}
