import { ExternalLink, Github, Star, GitFork, Layers } from 'lucide-react'

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950'

const projects = [
  {
    id: 1,
    name: 'Nexus',
    tagline: 'Real-time collaborative workspace',
    description:
      'Multiplayer document editing with CRDT-powered conflict resolution, live cursors, and shared state management. Built to handle thousands of concurrent users.',
    tags: ['TypeScript', 'React', 'WebSockets', 'Redis', 'PostgreSQL'],
    stars: 1247,
    forks: 183,
    featured: true,
    github: '#',
    live: '#',
    accent: 'from-cyan-500/[0.07] via-transparent to-transparent',
    accentBorder: 'hover:border-cyan-500/30 dark:hover:border-cyan-500/25',
  },
  {
    id: 2,
    name: 'Forge CLI',
    tagline: 'Developer productivity toolkit',
    description:
      'A batteries-included CLI that scaffolds projects, manages multi-environment configs, and automates repetitive dev workflows. 15+ built-in commands.',
    tags: ['Go', 'Cobra', 'Docker', 'Shell'],
    stars: 892,
    forks: 67,
    featured: false,
    github: '#',
    live: null,
    accent: 'from-emerald-500/[0.07] via-transparent to-transparent',
    accentBorder: 'hover:border-emerald-500/30 dark:hover:border-emerald-500/25',
  },
  {
    id: 3,
    name: 'Prism UI',
    tagline: 'Composable design system',
    description:
      'An accessible, zero-dependency component library with 60+ primitives, dark mode tokens, and auto-generated Figma documentation.',
    tags: ['React', 'TypeScript', 'Radix UI', 'Tailwind'],
    stars: 543,
    forks: 41,
    featured: false,
    github: '#',
    live: '#',
    accent: 'from-violet-500/[0.07] via-transparent to-transparent',
    accentBorder: 'hover:border-violet-500/30 dark:hover:border-violet-500/25',
  },
  {
    id: 4,
    name: 'ShardQL',
    tagline: 'Type-safe query builder',
    description:
      'A fully-typed database query builder for Node.js with automatic N+1 detection, query batching, and Prisma-like developer ergonomics.',
    tags: ['TypeScript', 'PostgreSQL', 'Node.js'],
    stars: 321,
    forks: 28,
    featured: false,
    github: '#',
    live: null,
    accent: 'from-amber-500/[0.07] via-transparent to-transparent',
    accentBorder: 'hover:border-amber-500/30 dark:hover:border-amber-500/25',
  },
]

function Tag({ label }) {
  return (
    <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/50">
      {label}
    </span>
  )
}

// Only compositor properties (transform) and border-color (SHOULD, not MUST, acceptable for interactive surfaces)
const cardBase = 'transition-[transform,border-color] duration-150 ease-out hover:-translate-y-1'

function ProjectCard({ project, featured = false }) {
  if (featured) {
    return (
      <div
        className={`group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br ${project.accent} p-8 ${project.accentBorder} ${cardBase} overflow-hidden`}
      >
        {/* Featured badge */}
        <div className="font-mono text-xs text-cyan-500 mb-5 flex items-center gap-2">
          {/* animate-pulse uses opacity — compositor safe */}
          <span className="size-1.5 rounded-full bg-cyan-500 inline-block animate-pulse" />
          featured project
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-150 text-balance">
                  {project.name}
                </h3>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
                  {project.tagline}
                </p>
              </div>
              <div className="flex items-center gap-2.5 flex-shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className={`text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150 rounded ${focusRing}`}
                >
                  <Github size={18} />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                    className={`text-zinc-400 dark:text-zinc-500 hover:text-cyan-500 transition-colors duration-150 rounded ${focusRing}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-2xl text-pretty">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((t) => <Tag key={t} label={t} />)}
            </div>

            <div className="flex items-center gap-4 font-mono text-xs text-zinc-400 dark:text-zinc-500 tabular-nums">
              <span className="flex items-center gap-1">
                <Star size={12} className="text-amber-500" />
                {project.stars.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={12} />
                {project.forks}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br ${project.accent} p-6 ${project.accentBorder} ${cardBase} flex flex-col`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-150 truncate text-balance">
            {project.name}
          </h3>
          <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 truncate">
            {project.tagline}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className={`text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150 rounded ${focusRing}`}
          >
            <Github size={15} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className={`text-zinc-400 dark:text-zinc-500 hover:text-cyan-500 transition-colors duration-150 rounded ${focusRing}`}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1 text-pretty">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((t) => <Tag key={t} label={t} />)}
      </div>

      <div className="flex items-center gap-4 font-mono text-xs text-zinc-400 dark:text-zinc-500 tabular-nums">
        <span className="flex items-center gap-1">
          <Star size={11} className="text-amber-500" />
          {project.stars.toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={11} />
          {project.forks}
        </span>
      </div>
    </div>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="relative py-28 bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="font-mono text-sm text-cyan-500 mb-3 flex items-center gap-2">
          <Layers size={13} />
          <span>// projects</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-balance">
            Selected work
          </h2>
          <a
            href="https://github.com/thiagodev"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-sm text-zinc-500 dark:text-zinc-400 hover:text-cyan-500 transition-colors duration-150 flex items-center gap-1.5 group rounded ${focusRing}`}
          >
            <Github size={13} />
            view all on GitHub
            <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
          </a>
        </div>

        <div className="mb-5">
          <ProjectCard project={featured} featured />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {rest.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
