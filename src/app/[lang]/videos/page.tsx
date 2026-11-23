import type { Metadata } from 'next'
import PageTitle from '@/components/PageTitle'
import VideoTile from '@/components/VideoTile'
import { videos, youtubeChannel } from '@/content/videos'
import { alternates, getDictionary, resolveLang } from '@/i18n'

type Props = { params: Promise<{ lang: string }> }

const MIN_TILES = 3
const numerals = ['I', 'II', 'III']

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await resolveLang(params)
  return { title: getDictionary(lang).videos.title, alternates: alternates(lang, '/videos') }
}

export default async function Videos({ params }: Props) {
  const lang = await resolveLang(params)
  const t = getDictionary(lang)
  const placeholders = Math.max(0, MIN_TILES - videos.length)

  return (
    <>
      <PageTitle>{t.videos.title}</PageTitle>
      <p className="-mt-4 mb-10 text-lg text-kraft">{t.videos.intro}</p>

      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <VideoTile
            key={v.youtubeId}
            kind="video"
            youtubeId={v.youtubeId}
            title={v.title[lang]}
            year={v.year}
            playLabel={t.videos.play}
          />
        ))}
        {Array.from({ length: placeholders }, (_, i) => (
          <VideoTile
            key={`placeholder-${i}`}
            kind="placeholder"
            title={`${t.videos.seriesName} ${numerals[videos.length + i]}`}
            note={t.videos.comingSoon}
          />
        ))}
      </div>

      <a
        href={youtubeChannel}
        target="_blank"
        rel="noopener noreferrer"
        className="label mt-10 inline-block text-cobalt no-underline hover:text-cobalt-deep"
      >
        {t.videos.channel} →
      </a>
    </>
  )
}
