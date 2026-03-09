import { MapPin, Coffee, Code2, Zap, Cpu } from 'lucide-react'

const facts = [
  { icon: MapPin,  text: 'São Paulo, Brazil' },
  { icon: Coffee,  text: 'Coffee-powered dev' },
  { icon: Code2,   text: '5+ years experience' },
  { icon: Zap,     text: 'Open to opportunities' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-white dark:bg-zinc-900/30">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="font-mono text-sm text-cyan-500 mb-3 flex items-center gap-2">
          <Cpu size={13} />
          <span>// about</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">
          {/* Left: copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-7 text-balance">
              Crafting software that{' '}
              <span className="text-gradient">actually works.</span>
            </h2>

            <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p className="text-pretty">
                I'm a full-stack developer with a passion for building things that are both technically
                solid and delightful to use. I've been writing production code for{' '}
                <span className="text-zinc-800 dark:text-zinc-200 font-medium">5+ years</span>, working across
                the entire stack — from database design and API architecture to responsive, accessible UIs.
              </p>
              <p className="text-pretty">
                My sweet spot is{' '}
                <span className="font-mono text-sm px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  TypeScript + React
                </span>{' '}
                on the frontend and{' '}
                <span className="font-mono text-sm px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  Node.js / Go
                </span>{' '}
                on the backend, though I'll reach for whatever tool best fits the job.
              </p>
              <p className="text-pretty">
                When not coding, I'm exploring system design, contributing to open source, or thinking about
                the intersection of developer tooling and great user experience.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {facts.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 text-sm text-zinc-500 dark:text-zinc-500 font-mono"
                >
                  <Icon size={13} className="text-cyan-500 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: JSON terminal card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-black/40">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-400/80" />
                  <div className="size-3 rounded-full bg-yellow-400/80" />
                  <div className="size-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mx-auto">
                  profile.json
                </span>
                {/* Balance the flexbox centering */}
                <div className="size-3 opacity-0" aria-hidden="true" />
              </div>

              {/* Code body */}
              <div className="p-6 bg-zinc-50 dark:bg-zinc-950 font-mono text-sm leading-loose text-zinc-400 dark:text-zinc-500">
                <div className="text-zinc-500 dark:text-zinc-400">{'{'}</div>

                <div className="ml-4">
                  <div><span className="text-emerald-600 dark:text-emerald-400">"name"</span><span className="text-zinc-400">: </span><span className="text-amber-600 dark:text-amber-300">"Thiago"</span><span className="text-zinc-400">,</span></div>
                  <div><span className="text-emerald-600 dark:text-emerald-400">"role"</span><span className="text-zinc-400">: </span><span className="text-amber-600 dark:text-amber-300">"Full-Stack Dev"</span><span className="text-zinc-400">,</span></div>
                  <div><span className="text-emerald-600 dark:text-emerald-400">"location"</span><span className="text-zinc-400">: </span><span className="text-amber-600 dark:text-amber-300">"São Paulo, BR"</span><span className="text-zinc-400">,</span></div>
                  <div><span className="text-emerald-600 dark:text-emerald-400">"stack"</span><span className="text-zinc-400">: [</span></div>
                  <div className="ml-4">
                    <div><span className="text-amber-600 dark:text-amber-300">"TypeScript"</span><span className="text-zinc-400">,</span></div>
                    <div><span className="text-amber-600 dark:text-amber-300">"React"</span><span className="text-zinc-400">,</span></div>
                    <div><span className="text-amber-600 dark:text-amber-300">"Go"</span><span className="text-zinc-400">,</span></div>
                    <div><span className="text-amber-600 dark:text-amber-300">"PostgreSQL"</span></div>
                  </div>
                  <div><span className="text-zinc-400">],</span></div>
                  <div><span className="text-emerald-600 dark:text-emerald-400">"available"</span><span className="text-zinc-400">: </span><span className="text-sky-500 dark:text-sky-400">true</span></div>
                </div>

                <div className="text-zinc-500 dark:text-zinc-400">{'}'}</div>

                {/* Prompt */}
                <div className="mt-4 flex items-center gap-2 text-zinc-400 dark:text-zinc-600">
                  <span className="text-cyan-500">$</span>
                  <span className="text-xs">node profile.js</span>
                  <span className="inline-block w-px h-3 bg-zinc-400 dark:bg-zinc-600 animate-cursor-blink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
