import type { Metadata } from 'next'
import Photo from '@/components/Photo'
import { alternates, getDictionary, resolveLang } from '@/i18n'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await resolveLang(params)
  const { title, description } = getDictionary(lang).links
  return {
    title: { absolute: title },
    description,
    alternates: alternates(lang, '/links'),
    openGraph: { title, description, images: ['/headshot.png'], type: 'profile' },
    twitter: { card: 'summary', title, description, images: ['/headshot.png'] },
  }
}

export default async function Links({ params }: Props) {
  const lang = await resolveLang(params)
  const t = getDictionary(lang)

  const links = [
    { label: t.links.book, href: process.env.BOOK_A_LESSON_URL || '#', primary: true },
    { label: 'ChordBuilder', href: 'https://chordbuilder.netlify.app/' },
    { label: 'You Can Learn Guitar', href: 'https://youcanlearnguitar.com/' },
  ]

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-8 py-12">
      <Photo
        name="headshot"
        sizes="160px"
        placeholderLabel={t.photoNeeded}
        className="h-40 w-40 rounded-full"
      />
      <p className="text-center text-lg">{t.links.description}</p>
      <ul className="flex w-full flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-display block border-[3px] px-5 py-4 text-center text-xl font-bold uppercase no-underline transition-colors ${
                link.primary
                  ? 'border-cobalt bg-cobalt text-sleeve hover:border-cobalt-deep hover:bg-cobalt-deep'
                  : 'border-ink hover:bg-ink hover:text-sleeve'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
