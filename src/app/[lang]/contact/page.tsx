import type { Metadata } from 'next'
import Photo from '@/components/Photo'
import PageTitle from '@/components/PageTitle'
import { contactEmail, social } from '@/content/music'
import { alternates, getDictionary, resolveLang } from '@/i18n'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await resolveLang(params)
  return { title: getDictionary(lang).contact.title, alternates: alternates(lang, '/contact') }
}

export default async function Contact({ params }: Props) {
  const lang = await resolveLang(params)
  const t = getDictionary(lang)

  return (
    <>
      <PageTitle>{t.contact.title}</PageTitle>
      <div className="grid gap-10 md:grid-cols-[7fr_4fr] md:gap-14">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-lg">{t.contact.intro}</p>
            <a
              href={`mailto:${contactEmail}`}
              className="font-display text-[clamp(1.5rem,4.5vw,3rem)] leading-tight font-bold break-all text-cobalt underline decoration-[3px] underline-offset-[6px] hover:text-cobalt-deep"
            >
              {contactEmail}
            </a>
          </div>
          <section className="flex flex-col gap-3">
            <h2 className="label">{t.contact.elsewhere}</h2>
            <ul className="flex flex-col">
              {social.map((s) => (
                <li key={s.label} className="border-t-2 border-ink">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display flex justify-between py-3 text-2xl font-bold uppercase no-underline hover:text-cobalt"
                  >
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Photo
          name="headshot"
          sizes="(min-width: 768px) 30vw, 100vw"
          placeholderLabel={t.photoNeeded}
          className="aspect-square self-start max-md:order-first max-md:max-w-xs"
        />
      </div>
    </>
  )
}
