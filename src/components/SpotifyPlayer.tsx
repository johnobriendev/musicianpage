'use client'

import { useState } from 'react'

type Props = {
  spotifyId: string
  title: string
  year: number
  playLabel: string
  loadNote: string
}

/** Shows a lightweight button until clicked, then loads Spotify's player — keeps the page fast. */
export default function SpotifyPlayer({ spotifyId, title, year, playLabel, loadNote }: Props) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        title={`${title} on Spotify`}
        src={`https://open.spotify.com/embed/album/${spotifyId}?utm_source=generator&autoplay=1`}
        width="100%"
        height="352"
        className="block rounded-xl border-0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group flex w-full items-center justify-between gap-4 border-t-2 border-ink py-4 text-left"
    >
      <span className="flex flex-col">
        <span className="font-display text-2xl leading-tight font-bold uppercase">{title}</span>
        <span className="text-sm text-kraft">
          {year} · {loadNote}
        </span>
      </span>
      <span className="font-display shrink-0 bg-cobalt px-4 py-2 text-sm font-bold tracking-wider text-sleeve uppercase transition-colors group-hover:bg-cobalt-deep">
        ▶ {playLabel}
      </span>
    </button>
  )
}
