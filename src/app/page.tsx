import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden p-6 sm:p-10 lg:p-[75px] flex flex-col justify-around">
      {/* Background image — desktop only */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/john2c.jpg"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute right-[200px] top-0 h-full w-auto z-0 opacity-20 bg-transparent"
      />

      {/* Name + subtitle */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-transparent">
        <Link
          href="/"
          className="no-underline text-inherit text-[3rem] sm:text-[4.5rem] lg:text-[7rem] font-light bg-transparent"
        >
          <h1 className="inline bg-transparent">John O&apos;Brien</h1>
        </Link>
        <h2 className="text-[1.4rem] sm:text-[2rem] lg:text-[3rem] font-light bg-transparent mt-1 sm:mt-0">
          Guitarist, Composer,<br className="sm:hidden" /> Educator
        </h2>
      </div>

      {/* Mobile photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/john2c.jpg"
        alt="John O'Brien"
        className="lg:hidden w-full h-auto opacity-40 my-4 bg-transparent"
      />

      {/* Nav links */}
      <div className="relative z-10 flex flex-col bg-transparent">
        <hr className="border-[pink] border-t-2 bg-[#20263e]" />
        <Link
          href="/about"
          className="block no-underline text-[pink] text-[2rem] sm:text-[3rem] lg:text-[6rem] font-light py-1 bg-transparent transition-transform duration-300 hover:scale-[1.02]"
        >
          About
        </Link>
        <hr className="border-[pink] border-t-2 bg-[#20263e]" />
        <Link
          href="/music"
          className="block no-underline text-[pink] text-[2rem] sm:text-[3rem] lg:text-[6rem] font-light py-1 bg-transparent transition-transform duration-300 hover:scale-[1.02]"
        >
          Media
        </Link>
        <hr className="border-[pink] border-t-2 bg-[#20263e]" />
        <Link
          href="/links"
          className="block no-underline text-[pink] text-[2rem] sm:text-[3rem] lg:text-[6rem] font-light py-1 bg-transparent transition-transform duration-300 hover:scale-[1.02]"
        >
          Links
        </Link>
        <hr className="border-[pink] border-t-2 bg-[#20263e]" />
      </div>

      {/* Social links */}
      <div className="relative z-10 flex justify-end gap-5 bg-transparent">
        <a
          href="https://www.instagram.com/johnobrienmusic/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[pink] text-lg lg:text-[1.3rem] no-underline bg-transparent transition-transform hover:scale-110"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/channel/UCCttnCgOwvd43Nqus_E3qmQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[pink] text-lg lg:text-[1.3rem] no-underline bg-transparent transition-transform hover:scale-110"
        >
          Youtube
        </a>
        <a
          href="https://open.spotify.com/artist/29YTYnDCg0GXNGv3pSgn7t"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[pink] text-lg lg:text-[1.3rem] no-underline bg-transparent transition-transform hover:scale-110"
        >
          Spotify
        </a>
      </div>
    </div>
  )
}
