import type { Dictionary } from './en'

// Spanish text. Drafted from the English — review the tone before launch.

export const es: Dictionary = {
  meta: {
    name: "John O'Brien",
    description: 'Guitarrista de jazz, compositor y docente.',
  },
  roles: ['Guitarrista', 'Compositor', 'Docente'],
  nav: {
    home: 'Inicio',
    about: 'Biografía',
    music: 'Música',
    videos: 'Videos',
    teaching: 'Docencia',
    contact: 'Contacto',
    menu: 'Menú',
    close: 'Cerrar',
  },
  langSwitch: {
    label: 'EN',
    aria: 'View this site in English',
  },
  footer: {
    privacy: 'Política de Privacidad',
  },
  about: {
    title: 'Biografía',
    bio: [
      'John es músico profesional desde hace más de 10 años. Es licenciado en Música por la Universidad de Pittsburgh, donde estudió con el legendario guitarrista de bebop Joe Negri y con la reconocida pianista internacional Geri Allen.',
      'Mientras vivía en Pittsburgh, John fundó la banda de jazz/rock/fusión “The Clock Reads”, con la que grabó 3 discos de estudio y 2 en vivo. Además de su intensa agenda de conciertos, John enseñó música y dirigió programas grupales en Sunburst School of Music durante más de 5 años.',
      'Su vínculo con John Page Classic Guitars lo llevó a tocar con artistas como el pionero grupo de hip-hop Sugar Hill Gang y Tomo Fujita, profesor del Berklee College of Music.',
    ],
  },
  music: {
    title: 'Música',
    discographyTitle: 'Discografía',
    discographySub: 'con The Clock Reads',
    listenTitle: 'Escuchar',
    play: 'Reproducir',
    loadNote: 'Carga el reproductor de Spotify',
  },
  videos: {
    title: 'Videos',
    intro: 'Grabaciones de guitarra solista.',
    seriesName: 'Sesiones solistas',
    comingSoon: 'Próximamente',
    play: 'Ver video',
    channel: 'Más en YouTube',
  },
  teaching: {
    title: 'Docencia',
    body: [
      'Doy clases de guitarra desde hace más de diez años a estudiantes de todas las edades y niveles. Cada clase se adapta a los intereses y objetivos de cada estudiante, ya sea que esté aprendiendo sus primeras notas, que ya toque en vivo o que quiera profundizar su comprensión de la música.',
      'Bajo mi guía, ex alumnos fueron admitidos en prestigiosas universidades de música como Berklee College of Music, USC Thornton School of Music y Duquesne University.',
    ],
  },
  contact: {
    title: 'Contacto',
    intro: 'Para conciertos, colaboraciones y prensa:',
    elsewhere: 'En redes',
  },
  links: {
    title: "John O'Brien — Guitarrista, Compositor, Docente",
    description: 'Clases de guitarra personalizadas en Montevideo y online.',
    book: 'Reservá una consulta gratuita de 20 min',
  },
  notFound: {
    title: 'No encontrado',
    body: 'Esta página no existe.',
    back: 'Volver al inicio',
  },
  photoNeeded: 'Falta foto',
}
