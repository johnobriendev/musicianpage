import type { Metadata } from 'next'
import Photo from '@/components/Photo'
import PageTitle from '@/components/PageTitle'
import { alternates, getDictionary, resolveLang } from '@/i18n'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await resolveLang(params)
  return { title: getDictionary(lang).about.title, alternates: alternates(lang, '/about') }
}

export default async function About({ params }: Props) {
  const lang = await resolveLang(params)
  const t = getDictionary(lang)

  return (
    <>
      <PageTitle>{t.about.title}</PageTitle>
      <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:gap-14">
        <Photo
          name="about"
          sizes="(min-width: 768px) 40vw, 100vw"
          placeholderLabel={t.photoNeeded}
          className="aspect-[4/5] self-start"
        />
        <div className="flex max-w-[62ch] flex-col gap-5 text-lg leading-relaxed">
          {t.about.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </>
  )
}
