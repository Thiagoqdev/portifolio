import { useEffect, useRef, useState } from 'react'
import { Cpu } from 'lucide-react'
import { useLang } from '../context/LangContext'

const categoryData = [
  {
    color: 'text-cyan-500 dark:text-cyan-400',
    items: [
      { name: 'Python',    level: 95 },
      { name: 'LLM / RAG', level: 90 },
      { name: 'FastAPI',   level: 90 },
      { name: 'Langchain', level: 80 },
    ],
  },
  {
    color: 'text-violet-500 dark:text-violet-400',
    items: [
      { name: 'React',        level: 80 },
      { name: 'Next.js',      level: 80 },
      { name: 'React Native', level: 75 },
      { name: 'TypeScript',   level: 80 },
    ],
  },
  {
    color: 'text-emerald-500 dark:text-emerald-400',
    items: [
      { name: 'Java / Spring', level: 80 },
      { name: 'Node.js',       level: 80 },
      { name: 'PostgreSQL',    level: 90 },
      { name: 'MongoDB',       level: 80 },
    ],
  },
  {
    color: 'text-amber-500 dark:text-amber-400',
    items: [
      { name: 'Azure',  level: 90 },
      { name: 'AWS',    level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD',  level: 80 },
    ],
  },
]

const extra = [
  'Embeddings', 'NLP', 'Django', 'REST APIs', 'MySQL',
  'NoSQL', 'Scrum', 'Agile', 'Clean Architecture', 'Swagger',
  'Tailwind CSS', 'JavaScript', 'SQL', 'Automated Testing',
]

function SkillBar({ name, level, bgColor, visible }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-sm text-zinc-700 dark:text-zinc-300">{name}</span>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 tabular-nums">{level}%</span>
      </div>
      <div className="h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full w-full rounded-full transition-transform duration-500 ease-out origin-left ${bgColor}`}
          style={{ transform: visible ? `scaleX(${level / 100})` : 'scaleX(0)' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const { t } = useLang()
  const s = t.skills

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const categories = categoryData.map((cat, i) => ({
    ...cat,
    name: s.categories[i].name,
  }))

  return (
    <section id="skills" className="relative py-28 bg-white dark:bg-zinc-900/30" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="font-mono text-sm text-cyan-500 mb-3 flex items-center gap-2">
          <Cpu size={13} />
          <span>{s.sectionLabel}</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 text-balance">
          {s.heading}
        </h2>

        {/* Terminal window */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden mb-10 shadow-lg dark:shadow-black/30">
          {/* Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-red-400/80" />
              <div className="size-2.5 rounded-full bg-yellow-400/80" />
              <div className="size-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mx-auto">
              {s.filename}
            </span>
            <div className="size-2.5 opacity-0" aria-hidden="true" />
          </div>

          {/* Skill grid */}
          <div className="p-8 bg-zinc-50 dark:bg-zinc-950 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {categories.map((cat) => {
              const bgColor = cat.color.replace(/text-/g, 'bg-')
              return (
                <div key={cat.name}>
                  <div className={`font-mono text-xs uppercase mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800 ${cat.color}`}>
                    {cat.name}
                  </div>
                  <div className="space-y-4">
                    {cat.items.map((item) => (
                      <SkillBar
                        key={item.name}
                        name={item.name}
                        level={item.level}
                        bgColor={bgColor}
                        visible={visible}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Extra tags */}
        <div>
          <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-3">
            {s.also}
          </div>
          <div className="flex flex-wrap gap-2">
            {extra.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/60 text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700/50 hover:border-cyan-500/30 hover:text-zinc-800 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-150 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
