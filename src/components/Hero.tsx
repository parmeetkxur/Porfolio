import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionId } from '../config/sections'
import { ActionButton, EASE } from './MotionPrimitives'

interface SectionProps {
  id: string
}

export const Hero: React.FC<SectionProps> = ({ id }) => {
  const { scrollY } = useScroll()
  const folderY = useTransform(scrollY, [0, 500], [0, 55])
  const folderRotate = useTransform(scrollY, [0, 500], [0, -2.5])

  const scrollTo = (target: SectionId) => {
    const el = document.getElementById(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id={id}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-20 pb-6 md:h-screen md:pt-24 md:pb-8"
    >
      {/* Subtle radial spotlight behind folder */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-[1380px] flex-1 flex-col justify-center px-6 md:px-10">
        {/* Top-left editorial identity block — anchored top-left on desktop so center stays free */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative z-20 mb-4 md:mb-0 lg:absolute lg:left-10 lg:top-4"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-neutral-400">
            ©2026
          </p>
          <h1 className="font-display mt-1.5 text-4xl font-bold uppercase leading-[0.9] tracking-[-0.03em] sm:text-5xl">
            <span className="block text-white">PARMEET</span>
            <span className="block text-neutral-400">KAUR</span>
          </h1>
          <p className="mt-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
            FULL-STACK DEVELOPER • OPEN-SOURCE CONTRIBUTOR
          </p>
        </motion.div>

        {/* Centerpiece: Portfolio Folder + Cradling Feminine Hand centered in viewport */}
        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            style={{ y: folderY, rotate: folderRotate }}
            className="relative z-10 flex w-full justify-center"
          >
            <motion.div
              initial={{ x: '48vw', y: '-14vh', rotate: 14, scale: 0.9, opacity: 0 }}
              animate={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 1.15,
                ease: EASE,
              }}
              className="relative w-full max-w-[640px] select-none lg:max-w-[760px] xl:max-w-[840px]"
            >
              <img
                src="/portfolio-hand.png"
                alt="Hand holding Parmeet Kaur's Portfolio folder"
                className="max-h-[72vh] w-full object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.85)]"
              />
            </motion.div>
          </motion.div>

          {/* Right-aligned Tagline + BOTHER ME button with generous spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.65, ease: EASE }}
            className="relative z-20 mt-6 flex w-full flex-col items-start gap-8 lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-auto lg:-translate-y-1/2"
          >
            <p className="max-w-[260px] font-display text-lg font-medium leading-relaxed text-neutral-200 sm:text-xl">
              Somewhere between bugs and breakthroughs 🐞
            </p>

            <ActionButton
              label="BOTHER ME"
              icon="→"
              variant="dark"
              onClick={() => scrollTo(SectionId.Contact)}
              className="min-w-[230px] border-white/25 bg-[#0b0b0b]"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Center: SCROLL indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.5, ease: EASE }}
        className="relative z-20 flex w-full justify-center px-6 text-xs tracking-[0.2em] text-neutral-400"
      >
        <button
          type="button"
          onClick={() => scrollTo(SectionId.About)}
          className="group flex items-center gap-2 text-neutral-400 transition-colors hover:text-white"
        >
          <span>SCROLL</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </button>
      </motion.div>
    </section>
  )
}
