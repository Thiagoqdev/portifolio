import { useLang } from '../context/LangContext'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="py-8 bg-white dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <a href="#" className="font-mono text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 rounded">
          <span className="text-cyan-500">th</span>
          <span className="text-zinc-400 dark:text-zinc-600">.</span>
        </a>

        {/* Center */}
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600 text-center">
          © {year} Thiago Queiroz. {f.builtWith}{' '}
          <span className="text-zinc-500 dark:text-zinc-500">React</span> +{' '}
          <span className="text-zinc-500 dark:text-zinc-500">Tailwind CSS</span>.
        </p>

        {/* Status */}
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-600">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {f.status}
        </div>
      </div>
    </footer>
  )
}
