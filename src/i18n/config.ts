export const locales = ['en', 'es'] as const
export type Lang = (typeof locales)[number]
export const defaultLang: Lang = 'en'

export const siteUrl = 'https://johnobrienguitar.com'

export function isLang(value: string): value is Lang {
  return (locales as readonly string[]).includes(value)
}

/** Strip any /en or /es prefix, returning the language-neutral path ("/", "/about", ...). */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, '')
  return stripped === '' ? '/' : stripped
}

/** Build a link for a language. English lives at the root, Spanish under /es. */
export function localePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}

/** hreflang alternates for a page, used in each page's metadata. */
export function alternates(lang: Lang, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      en: localePath('en', path),
      es: localePath('es', path),
      'x-default': localePath('en', path),
    },
  }
}
