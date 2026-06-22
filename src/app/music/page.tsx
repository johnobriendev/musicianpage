import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = { title: "Music | John O'Brien" }

export default function Music() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 lg:p-10">
      <header className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl lg:text-5xl font-light">John O&apos;Brien</h1>
          <h2 className="text-sm lg:text-xl font-light mt-1">
            Guitarist, Composer,<br className="lg:hidden" /> Educator
          </h2>
        </div>
        <Nav />
      </header>

      <main className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1 mb-6">
        <div className="lg:w-1/2">
          <h3 className="text-2xl lg:text-4xl font-light mb-2">Discography</h3>
          <h4 className="text-base lg:text-xl font-light mb-5 opacity-80">with The Clock Reads</h4>
          <p className="text-base leading-8">The Clock Reads (2016)</p>
          <p className="text-base leading-8">Inner Peaks (2018)</p>
          <p className="text-base leading-8">Gnomon (2019)</p>
          <p className="text-base leading-8">Live at Zoetropolis (2019)</p>
          <p className="text-base leading-8">Live at Thunderbird Music Hall (2021)</p>
        </div>

        <div className="flex flex-col gap-4 lg:w-1/2">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/6JSmShFkD20G68MshK9tLP?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/4xpm9IcTxIa03Onxowpdvs?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/4GAbpLrbVFUC4KeTO0cp6l?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/6ElYdNLtPPoWD9mkQVBVsI?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
