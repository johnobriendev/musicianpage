'use client'

import { useState } from 'react'

type Props =
  | { kind: 'video'; youtubeId: string; title: string; year?: number; playLabel: string }
  | { kind: 'placeholder'; title: string; note: string }

/** A 16:9 video slot. YouTube only loads after a click; placeholders mark videos still to come. */
export default function VideoTile(props: Props) {
  const [loaded, setLoaded] = useState(false)

  if (props.kind === 'placeholder') {
    return (
      <figure className="m-0 flex flex-col gap-2">
        <div className="flex aspect-video max-w-full items-center justify-center bg-ink p-4 text-center text-sleeve">
          <span className="font-display text-2xl font-bold uppercase">{props.title}</span>
        </div>
        <figcaption className="text-sm text-kraft">{props.note}</figcaption>
      </figure>
    )
  }

  const { youtubeId, title, year, playLabel } = props

  return (
    <figure className="m-0 flex flex-col gap-2">
      <div className="relative aspect-video max-w-full bg-ink">
        {loaded ? (
          <iframe
            title={title}
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`${playLabel}: ${title}`}
            className="group absolute inset-0 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />
            <span className="font-display absolute bottom-3 left-3 bg-cobalt px-3 py-1.5 text-sm font-bold tracking-wider text-sleeve uppercase">
              ▶ {playLabel}
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex justify-between gap-4">
        <span className="font-display text-lg font-bold uppercase">{title}</span>
        {year && <span className="text-sm text-kraft tabular-nums">{year}</span>}
      </figcaption>
    </figure>
  )
}
