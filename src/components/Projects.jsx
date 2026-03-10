import { ExternalLink, Github, Layers } from 'lucide-react'
import { useLang } from '../context/LangContext'

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950'

const projectsMeta = [
  {
    id: 1,
    tags: ['Python', 'FastAPI', 'LLM', 'RAG', 'Embeddings', 'Azure'],
    github: 'https://github.com/Thiagoqdev',
    live: null,
    accent: 'from-cyan-500/[0.07] via-transparent to-transparent',
    accentBorder: 'hover:border-cyan-500/30 dark:hover:border-cyan-500/25',
  },
  {
    id: 2,
    tags: ['Python', 'Azure', 'FastAPI', 'Docker', 'CI/CD'],
    github: 'https://github.com/Thiagoqdev',
    live: null,
    accent: 'from-emerald-500/[0.07] via-transparent to-transparent',
    accentBorder: 'hover:border-emerald-500/30 dark:hover:border-emerald-500/25',
  },
  {
    id: 3,
    tags: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'MongoDB'],
    github: 'https://github.com/Thiagoqdev',
    live: null,
    accent: 'from-violet-500/[0.07] via-transparent to-transparent',
    accentBorder: 'hover:border-violet-500/30 dark:hover:border-violet-500/25',
  },
  {
    id: 4,
    tags: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Swagger'],
    github: 'https://github.com/Thiagoqdev',
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

const cardBase = 'transition-[transform,border-color] duration-150 ease-out hover:-translate-y-1'

function ProjectCard({ project, meta, featured = false, featuredLabel }) {
  if (featured) {
    return (
      <div
        className={`group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br ${meta.accent} p-8 ${meta.accentBorder} ${cardBase} overflow-hidden`}
      >
        {/* Featured badge */}
        <div className="font-mono text-xs text-cyan-500 mb-5 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-cyan-500 inline-block animate-pulse" />
          {featuredLabel}
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
                  href={meta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className={`text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150 rounded ${focusRing}`}
                >
                  <Github size={18} />
                </a>
                {meta.live && (
                  <a
                    href={meta.live}
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

            <div className="flex flex-wrap gap-1.5">
              {meta.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br ${meta.accent} p-6 ${meta.accentBorder} ${cardBase} flex flex-col`}
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
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className={`text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150 rounded ${focusRing}`}
          >
            <Github size={15} />
          </a>
          {meta.live && (
            <a
              href={meta.live}
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

      <div className="flex flex-wrap gap-1.5">
        {meta.tags.map((tag) => <Tag key={tag} label={tag} />)}
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  const [featuredItem, ...restItems] = p.items
  const [featuredMeta, ...restMeta] = projectsMeta

  return (
    <section id="projects" className="relative py-28 bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="font-mono text-sm text-cyan-500 mb-3 flex items-center gap-2">
          <Layers size={13} />
          <span>{p.sectionLabel}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-balance">
            {p.heading}
          </h2>
          <a
            href="https://github.com/Thiagoqdev"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-sm text-zinc-500 dark:text-zinc-400 hover:text-cyan-500 transition-colors duration-150 flex items-center gap-1.5 group rounded ${focusRing}`}
          >
            <Github size={13} />
            {p.viewAll}
            <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
          </a>
        </div>

        <div className="mb-5">
          <ProjectCard project={featuredItem} meta={featuredMeta} featured featuredLabel={p.featured} />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {restItems.map((item, i) => (
            <ProjectCard key={item.name} project={item} meta={restMeta[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
