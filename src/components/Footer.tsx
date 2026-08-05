import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex flex-col items-center md:items-end gap-2 py-5 mt-auto bg-transparent">
      <div className="flex justify-center md:justify-end items-center gap-1">
        <a
          href="https://www.instagram.com/johnobrienmusic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram text-[28px] md:text-[32px] bg-transparent px-3 py-2 rounded-lg transition-transform hover:scale-110 cursor-pointer" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCCttnCgOwvd43Nqus_E3qmQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-youtube text-[28px] md:text-[32px] bg-transparent px-3 py-2 rounded-lg transition-transform hover:scale-110 cursor-pointer" />
        </a>
        <a
          href="https://open.spotify.com/artist/29YTYnDCg0GXNGv3pSgn7t"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-spotify text-[28px] md:text-[32px] bg-transparent px-3 py-2 rounded-lg transition-transform hover:scale-110 cursor-pointer" />
        </a>
      </div>
      <Link href="/privacy-policy" className="text-xs opacity-60 no-underline hover:opacity-100">
        Privacy Policy / Política de Privacidad
      </Link>
    </div>
  )
}
