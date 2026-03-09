import { Mail, Github, Linkedin, Twitter, ArrowRight, MessageSquare } from 'lucide-react'

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950'

const socials = [
  { icon: Github,   href: 'https://github.com/thiagodev', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter,  href: '#', label: 'Twitter / X' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      {/* Static ambient background — not animated */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="font-mono text-sm text-cyan-500 mb-3 flex items-center gap-2">
          <MessageSquare size={13} />
          <span>// contact</span>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-5 text-balance">
            Let's build something{' '}
            <span className="text-gradient">together.</span>
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-lg text-pretty">
            I'm currently open to new opportunities — freelance projects, full-time roles, or
            interesting technical collaborations. If you have something worth building, let's talk.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <a
              href="mailto:thiago@example.com"
              className={`inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-sm rounded-xl transition-colors duration-150 hover:-translate-y-0.5 group ${focusRing}`}
            >
              <Mail size={16} />
              Say hello
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform duration-150"
              />
            </a>

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`size-12 rounded-xl flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors duration-150 ${focusRing}`}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Availability status */}
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-zinc-500 dark:text-zinc-500 px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm">
            {/* animate-ping uses opacity — compositor safe */}
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
            </span>
            Available for new projects — response time &lt; 24h
          </div>
        </div>
      </div>
    </section>
  )
}
