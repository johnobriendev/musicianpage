import type { Metadata } from 'next'
import Photo from '@/components/Photo'
import Wordmark from '@/components/Wordmark'
import { alternates, getDictionary, resolveLang } from '@/i18n'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await resolveLang(params)
  return { alternates: alternates(lang, '/') }
}

export default async function Home({ params }: Props) {
  const lang = await resolveLang(params)
  const t = getDictionary(lang)

  return (
    <section className="grid md:grid-cols-[1.15fr_1fr]">
      <div className="flex flex-col justify-between gap-10 py-10 md:py-14 md:pr-10">
        <Wordmark size="xl" as="h1" />
        <p className="font-display flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium tracking-[0.06em] uppercase md:text-xl">
          {t.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal" />}
              {role}
            </span>
          ))}
        </p>
      </div>
      <Photo
        name="hero"
        priority
        sizes="(min-width: 768px) 45vw, 100vw"
        placeholderLabel={t.photoNeeded}
        className="mt-6 aspect-[4/3] md:mt-10 md:aspect-auto md:min-h-[560px] max-md:order-first"
      />
    </section>
  )
}
