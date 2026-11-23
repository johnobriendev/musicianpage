import type { Metadata } from 'next'
import Photo from '@/components/Photo'
import PageTitle from '@/components/PageTitle'
import { alternates, getDictionary, resolveLang } from '@/i18n'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await resolveLang(params)
  return { title: getDictionary(lang).teaching.title, alternates: alternates(lang, '/teaching') }
}

export default async function Teaching({ params }: Props) {
  const lang = await resolveLang(params)
  const t = getDictionary(lang)

  return (
    <>
      <PageTitle>{t.teaching.title}</PageTitle>
      <div className="grid gap-10 md:grid-cols-[7fr_5fr] md:gap-14">
        <div className="flex max-w-[62ch] flex-col gap-5 text-lg leading-relaxed">
          {t.teaching.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Photo
          name="teaching"
          sizes="(min-width: 768px) 40vw, 100vw"
          placeholderLabel={t.photoNeeded}
          className="aspect-[3/2] self-start max-md:order-first"
        />
      </div>
    </>
  )
}
