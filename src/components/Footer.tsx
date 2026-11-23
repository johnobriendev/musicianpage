import Link from 'next/link'
import { social } from '@/content/music'
import { localePath, type Lang } from '@/i18n/config'

export default function Footer({ lang, privacyLabel }: { lang: Lang; privacyLabel: string }) {
  return (
    <footer className="mt-16 flex flex-col gap-4 border-t-[3px] border-ink py-6 sm:flex-row sm:items-center sm:justify-between">
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {social.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label no-underline transition-colors hover:text-cobalt"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-kraft">
        <Link href={localePath(lang, '/privacy-policy')} className="underline-offset-4 hover:underline">
          {privacyLabel}
        </Link>
        <span>© {new Date().getFullYear()} John O&apos;Brien</span>
      </div>
    </footer>
  )
}
