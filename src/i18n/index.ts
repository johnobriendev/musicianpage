import { en } from './en'
import { es } from './es'
import { isLang, type Lang } from './config'
import { notFound } from 'next/navigation'

const dictionaries = { en, es }

export function getDictionary(lang: Lang) {
  return dictionaries[lang]
}

/** Resolve the [lang] route param, 404ing on anything that isn't a supported language. */
export async function resolveLang(params: Promise<{ lang: string }>): Promise<Lang> {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return lang
}

export * from './config'
export type { Dictionary } from './en'
