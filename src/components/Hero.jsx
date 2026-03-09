import { useEffect, useState } from 'react'
import { ArrowRight, Github, Linkedin, Twitter, Terminal } from 'lucide-react'

const roles = [
  'Full-Stack Developer',
  'TypeScript Enthusiast',
  'Open Source Contributor',
  'UI Craftsman',
]

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950'

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 55)
    } else if (!isDeleting && displayed.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <span className="inline-flex items-center gap-1 font-mono text-base md:text-lg text-zinc-500 dark:text-zinc-400">
      <span className="text-cyan-500 mr-1 select-none">›</span>
      {displayed}
      <span className="inline-block w-px h-4 md:h-5 bg-cyan-500 ml-0.5 animate-cursor-blink" />
    </span>
  )
}

const socials = [
  { icon: Github,   href: 'https://github.com/thiagodev', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter,  href: '#', label: 'Twitter / X' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-200" />
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" />
      {/* Fade-out at bottom — explicitly requested atmospheric effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50 dark:to-zinc-950 pointer-events-none" />

      {/* Ambient orbs — static, not animated */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/4 dark:bg-indigo-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        {/* Terminal badge */}
        <div className="animate-fade-up delay-0 inline-flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-8 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm">
          <Terminal size={12} className="text-cyan-500" />
          <span>$ whoami</span>
          <span className="text-cyan-500">→</span>
          <span className="text-zinc-600 dark:text-zinc-400">thiago@dev</span>
        </div>

        {/* Headline — text-balance for optimal line breaks */}
        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-bold leading-none text-zinc-900 dark:text-zinc-50 mb-6 text-balance">
          I build things<br />
          <span className="text-gradient">for the web.</span>
        </h1>

        {/* Typewriter — no fixed height on text container */}
        <div className="animate-fade-up delay-200 mb-8 flex items-center">
          <Typewriter />
        </div>

        {/* Description — text-pretty for paragraph hyphenation */}
        <p className="animate-fade-up delay-300 max-w-xl text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 text-pretty">
          Hi, I'm <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Thiago</strong> — a software engineer
          obsessed with clean architecture, great UX, and code that scales. I turn complex problems into
          elegant, maintainable solutions.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-3 mb-14">
          <a
            href="#projects"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-sm rounded-xl transition-colors duration-150 hover:-translate-y-0.5 group ${focusRing}`}
          >
            View Projects
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-transform duration-150"
            />
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-3 text-zinc-700 dark:text-zinc-300 font-semibold text-sm rounded-xl border border-zinc-300 dark:border-zinc-700/70 hover:border-cyan-500/40 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/50 transition-colors duration-150 hover:-translate-y-0.5 ${focusRing}`}
          >
            Get in touch
          </a>
        </div>

        {/* Socials */}
        <div className="animate-fade-up delay-500 flex items-center gap-1">
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 mr-3">find me on</span>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`size-9 rounded-lg flex items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition-colors duration-150 ${focusRing}`}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-1000 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 dark:text-zinc-600 pointer-events-none">
        <span className="font-mono text-xs uppercase">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-300 dark:from-zinc-700 to-transparent" />
      </div>
    </section>
  )
}
