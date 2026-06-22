import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = { title: "Contact | John O'Brien" }

export default function Contact() {
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
          src="/johnlight.png"
          alt="John O'Brien"
          className="w-full h-auto lg:w-[42%]"
        />
        <p className="text-base leading-7 lg:flex-1 lg:text-lg lg:leading-8">
          Any questions can be sent to:{' '}
          <a
            href="mailto:johnrobrien.music@gmail.com"
            className="text-cyan-400 bg-transparent"
          >
            johnrobrien.music@gmail.com
          </a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
