import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950'

export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about',      label: t.navbar.about },
    { href: '#experience', label: t.navbar.experience },
    { href: '#projects',   label: t.navbar.projects },
    { href: '#skills',     label: t.navbar.skills },
    { href: '#contact',    label: t.navbar.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? 'bg-white/80 dark:bg-zinc-950/85 backdrop-blur-2xl border-b border-zinc-200/80 dark:border-zinc-800/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <a
          href="#"
          className={`font-mono text-base font-semibold flex items-center gap-0.5 group ${focusRing} rounded`}
        >
          <span className="text-cyan-500 group-hover:text-cyan-400 transition-colors duration-150">th</span>
          <span className="text-zinc-400 dark:text-zinc-600">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative font-mono text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 px-3 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors duration-150 group ${focusRing}`}
              >
                <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150 mr-0.5">
                  //
                </span>{' '}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            className={`h-9 px-2.5 rounded-lg flex items-center justify-center font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition-colors duration-150 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/50 ${focusRing}`}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`size-9 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition-colors duration-150 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700/50 ${focusRing}`}
          >
            {theme === 'dark' ? <Sun size={15} strokeWidth={2} /> : <Moon size={15} strokeWidth={2} />}
          </button>

          {/* CTA */}
          <a
            href="mailto:thiagoq.dev@gmail.com"
            className={`hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 font-mono text-sm font-medium bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg transition-colors duration-150 hover:-translate-y-px ${focusRing}`}
          >
            {t.navbar.hire}
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={`md:hidden size-9 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-150 ${focusRing}`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — opacity-only transition on compositor properties */}
      <div
        aria-hidden={!menuOpen}
        className={`md:hidden absolute top-16 left-0 right-0 z-40 transition-opacity duration-150 ease-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/80 px-6 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 font-mono text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 py-2.5 px-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-150 ${focusRing}`}
            >
              <span className="text-cyan-500 text-xs">//</span>
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="mailto:thiagoq.dev@gmail.com"
              className={`flex items-center justify-center w-full py-2.5 font-mono text-sm font-medium bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg transition-colors duration-150 ${focusRing}`}
            >
              {t.navbar.hire}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
