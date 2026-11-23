'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Wordmark from './Wordmark'
import { localePath, stripLang, type Lang } from '@/i18n/config'
import type { Dictionary } from '@/i18n/en'

type Props = {
  lang: Lang
  nav: Dictionary['nav']
  langSwitch: Dictionary['langSwitch']
}

const pages = ['/about', '/music', '/videos', '/teaching', '/contact'] as const
const navKey = {
  '/about': 'about',
  '/music': 'music',
  '/videos': 'videos',
  '/teaching': 'teaching',
  '/contact': 'contact',
} as const

export default function SiteHeader({ lang, nav, langSwitch }: Props) {
  const [open, setOpen] = useState(false)
  const path = stripLang(usePathname())
  const isHome = path === '/'
  const otherLang: Lang = lang === 'en' ? 'es' : 'en'

  useEffect(() => setOpen(false), [path])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const switchLink = (
    <Link
      href={localePath(otherLang, path)}
      hrefLang={otherLang}
      lang={otherLang}
      aria-label={langSwitch.aria}
      className="font-display border-2 border-current px-2 py-0.5 text-sm font-bold tracking-wider no-underline transition-colors hover:bg-ink hover:text-sleeve"
    >
      {langSwitch.label}
    </Link>
  )

  return (
    <header className="flex items-center justify-between gap-6 border-b-[3px] border-ink py-5">
      {isHome ? (
        <span aria-hidden="true" />
      ) : (
        <Link href={localePath(lang, '/')} className="no-underline">
          <Wordmark />
        </Link>
      )}

      {/* Desktop */}
      <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
        {pages.map((p) => (
          <Link
            key={p}
            href={localePath(lang, p)}
            aria-current={path === p ? 'page' : undefined}
            className={`font-display text-[0.95rem] font-bold tracking-[0.05em] uppercase no-underline transition-colors hover:text-cobalt ${
              path === p ? 'text-cobalt' : ''
            }`}
          >
            {nav[navKey[p]]}
          </Link>
        ))}
        {switchLink}
      </nav>

      {/* Mobile */}
      <div className="flex items-center gap-4 md:hidden">
        {switchLink}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="font-display text-sm font-bold tracking-wider uppercase"
        >
          {nav.menu}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-cobalt px-5 pt-[calc(env(safe-area-inset-top,0px)+1.25rem)] pb-10 text-sleeve md:hidden"
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-display text-sm font-bold tracking-wider uppercase"
            >
              {nav.close}
            </button>
          </div>
          <nav className="mt-10 flex flex-col" aria-label="Main">
            {(['/', ...pages] as const).map((p) => (
              <Link
                key={p}
                href={localePath(lang, p)}
                aria-current={path === p ? 'page' : undefined}
                className={`font-display border-b-2 border-sleeve/30 py-2 text-5xl leading-none font-bold uppercase no-underline ${
                  path === p ? 'text-ink' : ''
                }`}
              >
                {p === '/' ? nav.home : nav[navKey[p]]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
