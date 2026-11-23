// All English text on the site. The Spanish version lives in es.ts and must have the same shape.

export const en = {
  meta: {
    name: "John O'Brien",
    description: 'Guitarist',
  },
  roles: ['Guitarist', 'Composer', 'Educator'],
  nav: {
    home: 'Home',
    about: 'About',
    music: 'Music',
    videos: 'Videos',
    teaching: 'Teaching',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
  },
  langSwitch: {
    label: 'ES',
    aria: 'Ver este sitio en español',
  },
  footer: {
    privacy: 'Privacy Policy',
  },
  about: {
    title: 'About',
    bio: [
      "John has been a professional musician for over 10 years. He holds a Bachelor's degree in Music from the University of Pittsburgh where he studied under legendary bebop guitarist Joe Negri and the late internationally-acclaimed pianist Geri Allen.",
      'While living in Pittsburgh, John founded the jazz/rock/fusion band “The Clock Reads” with whom he recorded 3 studio albums and 2 live albums. In addition to his busy performing schedule, John taught music and directed group programs at Sunburst School of Music where he held a position for over 5 years.',
      'John developed a relationship with John Page Classic Guitars whose collaboration led to him playing with artists such as the pioneering hip-hop group Sugar Hill Gang and Berklee College of Music Professor Tomo Fujita.',
    ],
  },
  music: {
    title: 'Music',
    discographyTitle: 'Discography',
    discographySub: 'with The Clock Reads',
    listenTitle: 'Listen',
    play: 'Play',
    loadNote: 'Loads the Spotify player',
  },
  videos: {
    title: 'Videos',
    intro: 'Solo guitar recordings.',
    seriesName: 'Solo Sessions',
    comingSoon: 'Coming soon',
    play: 'Play video',
    channel: 'More on YouTube',
  },
  teaching: {
    title: 'Teaching',
    body: [
      'I have been teaching guitar lessons for over ten years to students of all ages and skill levels. Lessons are tailored to each student based on their specific interests and goals, whether they are learning to play their first notes, already performing, or just looking to deepen their understanding of music.',
      'Under my guidance former students have been admitted to study at prestigious music universities such as the Berklee College of Music, USC Thornton School of Music, and Duquesne University.',
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'For performances, collaborations and press:',
    elsewhere: 'Elsewhere',
  },
  links: {
    title: "John O'Brien — Guitarist, Composer, Educator",
    description: 'Personalized guitar lessons in Montevideo and online.',
    book: 'Book a Free 20 Min Consultation',
  },
  notFound: {
    title: 'Not found',
    body: "This page doesn't exist.",
    back: 'Back to home',
  },
  photoNeeded: 'Photo needed',
}

export type Dictionary = typeof en
