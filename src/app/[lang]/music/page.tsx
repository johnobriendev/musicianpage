import type { Metadata } from 'next'
import Photo from '@/components/Photo'
import PageTitle from '@/components/PageTitle'
import SpotifyPlayer from '@/components/SpotifyPlayer'
import { discography, spotifyAlbums } from '@/content/music'
import { alternates, getDictionary, resolveLang } from '@/i18n'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await resolveLang(params)
  return { title: getDictionary(lang).music.title, alternates: alternates(lang, '/music') }
}

export default async function Music({ params }: Props) {
  const lang = await resolveLang(params)
  const t = getDictionary(lang)

  return (
    <>
      <PageTitle>{t.music.title}</PageTitle>
      <div className="grid gap-14 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="label">{t.music.discographyTitle}</h2>
            <p className="text-sm text-kraft">{t.music.discographySub}</p>
          </div>
          <ol className="flex flex-col">
            {discography.map((album) => (
              <li key={album.title} className="flex items-baseline justify-between gap-4 border-t-2 border-ink py-3">
                <span className="font-display text-2xl leading-tight font-bold uppercase">{album.title}</span>
                <span className="text-kraft tabular-nums">{album.year}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="label">{t.music.listenTitle}</h2>
          <div className="flex flex-col gap-2">
            {spotifyAlbums.map((album) => (
              <SpotifyPlayer
                key={album.spotifyId}
                spotifyId={album.spotifyId}
                title={album.title}
                year={album.year}
                playLabel={t.music.play}
                loadNote={t.music.loadNote}
              />
            ))}
          </div>
        </section>
      </div>

      <Photo
        name="music"
        sizes="100vw"
        placeholderLabel={t.photoNeeded}
        className="mt-16 aspect-[3/2] md:aspect-[3/1]"
      />
    </>
  )
}
