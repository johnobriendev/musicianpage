'use client'

import { useState } from 'react'
import type { Lang } from '@/i18n/config'
import { privacyContent } from './content'

// Always opens in Spanish (the Meta ads link points here), with its own language buttons.
export default function PrivacyContent() {
  const [lang, setLang] = useState<Lang>('es')
  const t = privacyContent[lang]

  const button = (l: Lang, label: string) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`font-display border-2 border-ink px-3 py-1 text-sm font-bold tracking-wider uppercase transition-colors ${
        lang === l ? 'bg-ink text-sleeve' : 'hover:bg-ink hover:text-sleeve'
      }`}
    >
      {label}
    </button>
  )

  return (
    <article lang={lang} className="max-w-[68ch] py-10 md:py-14">
      <div className="mb-8 flex gap-3">
        {button('es', 'Español')}
        {button('en', 'English')}
      </div>
      <h1 className="font-display mb-2 text-[clamp(2.25rem,6vw,4rem)] leading-[0.95] font-bold uppercase">
        {t.title}
        <span aria-hidden="true" className="text-signal">.</span>
      </h1>
      <p className="mb-6 text-sm text-kraft">{t.updated}</p>
      <p className="mb-10 text-lg leading-relaxed">{t.intro}</p>
      <div className="flex flex-col gap-8">
        {t.sections.map((section, i) => (
          <section key={i} className="flex flex-col gap-2">
            {section.heading && <h2 className="font-display text-2xl font-bold uppercase">{section.heading}</h2>}
            {section.body && <p className="leading-relaxed">{section.body}</p>}
            {section.items && (
              <ul className="flex list-disc flex-col gap-1 pl-6 leading-relaxed">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  )
}
