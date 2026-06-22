import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = { title: "About | John O'Brien" }

export default function About() {
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

      <main className="flex flex-col lg:flex-row gap-6 lg:gap-12 flex-1 lg:items-center mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/johnguitarbig.jpg"
          alt="John with guitar"
          className="w-full h-auto lg:w-[42%] opacity-60"
        />
        <p className="text-base leading-7 lg:flex-1 lg:text-lg lg:leading-8">
          John has been a professional musician for over 10 years. He holds a Bachelor&apos;s degree
          in Music from the University of Pittsburgh where he studied under legendary bebop guitarist
          Joe Negri and the late internationally-acclaimed pianist Geri Allen. While living in
          Pittsburgh, John founded the jazz/rock/fusion band &ldquo;The Clock Reads&rdquo; with whom
          he recorded 3 studio albums and 2 live albums. In addition to his busy performing schedule,
          John taught music and directed group programs at Sunburst School of Music where he held a
          position for over 5 years. John developed a relationship with John Page Classic Guitars
          whose collaboration led to him playing with artists such as the pioneering hip-hop group
          Sugar Hill Gang and Berklee College of Music Professor Tomo Fujita.
        </p>
      </main>

      <Footer />
    </div>
  )
}
