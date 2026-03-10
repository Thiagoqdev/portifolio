import { Briefcase, GraduationCap, History } from 'lucide-react'
import { useLang } from '../context/LangContext'

function Tag({ label }) {
  return (
    <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/50">
      {label}
    </span>
  )
}

function TimelineItem({ item, isLast, presentLabel }) {
  return (
    <div className="relative pl-8 sm:pl-12">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
      )}

      {/* Dot */}
      <div className="absolute left-0 sm:left-1 top-1.5 flex items-center justify-center">
        {item.current ? (
          <span className="relative flex size-5 sm:size-6 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-20" />
            <span className="relative inline-flex rounded-full size-3 bg-cyan-500" />
          </span>
        ) : (
          <span className="size-5 sm:size-6 flex items-center justify-center">
            <span className="size-3 rounded-full border-2 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950" />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        {/* Period badge */}
        <div className="mb-2">
          <span className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
            item.current
              ? 'text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/8'
              : 'text-zinc-400 dark:text-zinc-500 border-zinc-200 dark:border-zinc-800 bg-transparent'
          }`}>
            {item.current
              ? item.period.replace(/Atual|Present/, `● ${presentLabel}`)
              : item.period}
          </span>
        </div>

        {/* Role & company */}
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
          {item.role}
        </h3>
        <p className="font-mono text-sm text-zinc-500 dark:text-zinc-500 mt-0.5 mb-4">
          {item.company}
          <span className="text-zinc-300 dark:text-zinc-700 mx-2">·</span>
          {item.location}
        </p>

        {/* Bullets */}
        <ul className="space-y-1.5 mb-4">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <span className="text-cyan-500 mt-1.5 flex-shrink-0 text-[8px]">▸</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const { t } = useLang()
  const e = t.experience

  return (
    <section id="experience" className="relative py-28 bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="font-mono text-sm text-cyan-500 mb-3 flex items-center gap-2">
          <History size={13} />
          <span>{e.sectionLabel}</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-14 text-balance">
          {e.heading}
        </h2>

        <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
          {/* Left: timeline */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-600 mb-8">
              <Briefcase size={12} className="text-cyan-500" />
              <span className="uppercase tracking-widest">
                {t.navbar.experience}
              </span>
            </div>

            {e.items.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                isLast={i === e.items.length - 1}
                presentLabel={e.present}
              />
            ))}
          </div>

          {/* Right: education + certifications */}
          <div className="space-y-10">
            {/* Education */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
              {/* Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-red-400/80" />
                  <div className="size-2.5 rounded-full bg-yellow-400/80" />
                  <div className="size-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mx-auto flex items-center gap-1.5">
                  <GraduationCap size={11} />
                  {e.education.label}
                </span>
                <div className="size-2.5 opacity-0" />
              </div>

              <div className="p-5 bg-white dark:bg-zinc-900/50 space-y-4">
                {e.education.items.map((edu, i) => (
                  <div key={i} className={i > 0 ? 'pt-4 border-t border-zinc-100 dark:border-zinc-800' : ''}>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                      {edu.degree}
                    </p>
                    <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                        {edu.period}
                      </span>
                      <span className={`font-mono text-xs px-2 py-0.5 rounded-full border ${
                        edu.status === 'Em andamento' || edu.status === 'In progress'
                          ? 'text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/8'
                          : 'text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/8'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900/50">
              <div className="font-mono text-xs text-cyan-500 mb-4 flex items-center gap-1.5">
                <span>// {e.certifications}</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  { name: 'Santander Coders – Java Avançado', org: 'Ada Tech · 324h' },
                  { name: 'SQL & NoSQL Databases', org: 'Universidade Geek' },
                  { name: 'Front-end Formation', org: 'Oracle Next Education / Alura' },
                  { name: 'Full Stack Formation', org: 'RecodePro' },
                  { name: 'English B1 (Intermediate)', org: 'Escola de Idioma Cultura' },
                ].map((cert) => (
                  <li key={cert.name} className="flex items-start gap-2.5">
                    <span className="text-cyan-500 mt-1.5 flex-shrink-0 text-[8px]">▸</span>
                    <div>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-snug">
                        {cert.name}
                      </p>
                      <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600 mt-0.5">
                        {cert.org}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
