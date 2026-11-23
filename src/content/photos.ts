// Every photo on the site, by the spot it fills.
// To swap in a new photo: drop the file in /public, then set `src`, `width` and `height`.
// A slot with `src: null` renders a labeled placeholder showing what the shot should be.
// `mono: true` shows the photo in black and white; `false` keeps its natural color.

export type PhotoSlot = {
  src: string | null
  width: number
  height: number
  alt: string
  /** What to shoot, shown on the placeholder and in docs/shot-list.md */
  brief: string
  mono: boolean
  /** Which part of the photo to keep when cropped (CSS object-position) */
  focus?: string
}

export const photos = {
  // Replace with the new studio photo. The current one stays on the Music page below.
  hero: {
    src: '/johnguitarbig.jpg',
    width: 1075,
    height: 1070,
    alt: "John O'Brien playing electric guitar",
    brief: 'Main photo · playing, dark background · shoot wide 3:2 and tall 4:5',
    mono: true,
    focus: '35% 25%',
  },
  // The current homepage photo, kept here for good, cropped in on the hands and fretboard.
  music: {
    src: '/johnguitarbig.jpg',
    width: 1075,
    height: 1070,
    alt: "John O'Brien's hands on the guitar",
    brief: 'Live photo of John playing',
    mono: true,
    focus: '50% 62%',
  },
  about: {
    src: '/johnpro.jpg',
    width: 1080,
    height: 1061,
    alt: "Portrait of John O'Brien",
    brief: 'About portrait · medium shot · tall 4:5',
    mono: true,
    focus: '50% 30%',
  },
  teaching: {
    src: '/johnpat.jpg',
    width: 700,
    height: 471,
    alt: "John O'Brien playing guitar outdoors",
    brief: 'Teaching · explaining at a desk with the guitar · wide 3:2',
    mono: true,
    focus: '50% 30%',
  },
  headshot: {
    src: '/headshot.png',
    width: 1003,
    height: 1119,
    alt: "Headshot of John O'Brien",
    brief: 'Headshot · plain background, eye contact · square 1:1',
    mono: false,
    focus: '50% 30%',
  },
} satisfies Record<string, PhotoSlot>

export type PhotoName = keyof typeof photos
