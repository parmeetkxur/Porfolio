import React, { useState } from 'react'
import { contactLinks } from '../config/data'
import {
  ActionButton,
  CornerArcDecoration,
  RevealHeading,
  RevealItem,
} from './MotionPrimitives'

interface SectionProps {
  id: string
}

export const Contact: React.FC<SectionProps> = ({ id }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setError(null)

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${contactLinks.emailAddress}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `New Portfolio Message from ${name}`,
            _replyto: email,
            _template: 'table',
            _captcha: 'false',
          }),
        },
      )

      const data = await res.json().catch(() => null)
      if (!res.ok || data?.success === 'false' || data?.success === false) {
        throw new Error(data?.message || 'Request failed')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setError(
        `Could not send right now. Please email ${contactLinks.emailAddress} directly.`,
      )
    }
  }

  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-white/[0.06] py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <CornerArcDecoration />

      {/* Decorative curved loop line matching Image 3 */}
      <svg
        aria-hidden
        viewBox="0 0 1200 220"
        fill="none"
        className="pointer-events-none absolute bottom-4 left-0 w-full opacity-35"
      >
        <path
          d="M-20 170 C120 170, 210 130, 195 75 C180 25, 110 40, 118 95 C128 165, 320 190, 560 155 C820 115, 1010 55, 1220 20"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          {/* Left column matching Image 3 */}
          <div>
            <RevealHeading
              id="contact-heading"
              as="h2"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
              segments={[
                { text: "Let's Build" },
                { text: 'Something.', breakBefore: true },
              ]}
            />

            <RevealItem delay={0.08}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-300 sm:text-base">
                Looking for a software developer to bring your product or AI
                system to life? I&apos;d love to hear from you — whether it&apos;s
                full-stack engineering, computer vision, or open-source
                collaboration.
              </p>
            </RevealItem>

            <RevealItem delay={0.14} className="mt-6 text-neutral-400">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path d="M6 6L18 18" />
                <path d="M18 8V18H8" />
              </svg>
            </RevealItem>

            {/* Direct contact rows with white square icon badges matching Image 3 */}
            <div className="mt-7 space-y-4">
              <RevealItem delay={0.16}>
                <a
                  href={contactLinks.email}
                  className="group inline-flex items-center gap-4 text-sm text-neutral-200 transition-colors hover:text-white sm:text-base"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-white text-[#0b0b0b] transition-transform duration-200 group-hover:scale-105">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span className="break-all">{contactLinks.emailAddress}</span>
                </a>
              </RevealItem>

              <RevealItem delay={0.2}>
                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 text-sm text-neutral-200 transition-colors hover:text-white sm:text-base"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-white text-xs font-bold text-[#0b0b0b] transition-transform duration-200 group-hover:scale-105">
                    in
                  </span>
                  <span>{contactLinks.linkedinDisplay}</span>
                </a>
              </RevealItem>

              <RevealItem delay={0.28}>
                <a
                  href={contactLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 text-sm text-neutral-200 transition-colors hover:text-white sm:text-base"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-white text-[#0b0b0b] transition-transform duration-200 group-hover:scale-105">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                  </span>
                  <span>{contactLinks.githubDisplay}</span>
                </a>
              </RevealItem>
            </div>
          </div>

          {/* Right column: Working Email Message Form */}
          <RevealItem delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="border border-white/15 bg-white p-6 text-[#0b0b0b] shadow-[0_25px_70px_rgba(0,0,0,0.75)] sm:p-8"
            >
              <div className="border-b border-black/10 pb-4">
                <p className="font-display text-lg font-bold tracking-tight">
                  Parmeet Kaur<span className="ml-0.5 align-super text-xs">®</span>
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Send a Direct Message
                </p>
              </div>

              <div className="mt-5 space-y-4 text-xs">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block font-semibold uppercase tracking-[0.14em] text-neutral-600"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-black/15 bg-[#f4f4f4] px-3.5 py-2.5 text-xs text-[#0b0b0b] outline-none transition focus:border-black focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block font-semibold uppercase tracking-[0.14em] text-neutral-600"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-black/15 bg-[#f4f4f4] px-3.5 py-2.5 text-xs text-[#0b0b0b] outline-none transition focus:border-black focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block font-semibold uppercase tracking-[0.14em] text-neutral-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about your project, role, or collaboration."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none border border-black/15 bg-[#f4f4f4] px-3.5 py-2.5 text-xs text-[#0b0b0b] outline-none transition focus:border-black focus:bg-white"
                  />
                </div>

                <ActionButton
                  type="submit"
                  disabled={status === 'loading'}
                  label={status === 'loading' ? 'Sending…' : 'Send Message'}
                  icon="→"
                  variant="dark"
                  className="w-full"
                />

                {status === 'success' && (
                  <p className="text-xs font-medium text-emerald-700">
                    Message sent successfully! Parmeet will get back to you soon.
                  </p>
                )}
                {status === 'error' && error && (
                  <p className="text-xs font-medium text-red-600">{error}</p>
                )}
              </div>
            </form>
          </RevealItem>
        </div>
      </div>
    </section>
  )
}
