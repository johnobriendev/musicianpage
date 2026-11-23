// Solo guitar videos, newest first.
// To add one: copy the ID from the YouTube link (youtube.com/watch?v=THIS_PART) and add an entry.
// Until the list has 3 videos, the Videos page fills the gap with "Coming soon" placeholders.

export type Video = {
  youtubeId: string
  title: { en: string; es: string }
  year?: number
}

export const videos: Video[] = [
  {
    youtubeId: '60Nu8TVPJ2E',
    title: { en: 'Reflections (Thelonious Monk)', es: 'Reflections (Thelonious Monk)' },
  },
]

export const youtubeChannel = 'https://www.youtube.com/channel/UCCttnCgOwvd43Nqus_E3qmQ'
