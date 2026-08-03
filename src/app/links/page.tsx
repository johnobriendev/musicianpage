import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const title = "John O'Brien — Guitarist, Composer, Educator"
const description = 'Personalized guitar lessons in Montevideo and online.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ['/headshot.png'],
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/headshot.png'],
  },
}

type LinkItem = {
  label: string
  href: string
  variant?: 'primary'
}

const links: LinkItem[] = [
  { label: 'Book a Lesson', href: process.env.BOOK_A_LESSON_URL || '#', variant: 'primary' },
  { label: 'ChordBuilder', href: 'https://chordbuilder.netlify.app/' },
  { label: 'You Can Learn Guitar', href: 'https://youcanlearnguitar.com/' },
]

export default function Links() {
  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 lg:p-10">
      <header className="flex items-start justify-between mb-6">
        <div>
          <Link href="/" className="no-underline text-inherit">
            <h1 className="text-3xl lg:text-5xl font-light">John O&apos;Brien</h1>
          </Link>
          <h2 className="text-sm lg:text-xl font-light mt-1">Guitarist • Composer • Educator</h2>
        </div>
        <Nav />
      </header>

      <main className="flex flex-1 flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-20 mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/headshot.png"
          alt="John O'Brien"
          className="h-40 w-40 shrink-0 rounded-full object-cover lg:h-64 lg:w-64"
        />

        <div className="flex w-full max-w-sm flex-col items-center lg:items-start">
          <p className="text-center text-base leading-7 lg:text-left lg:text-lg">{description}</p>

          <nav className="mt-8 flex w-full flex-col">
            <hr className="border-[pink] border-t-2" />
            {links.map((link) => (
              <div key={link.label} className="contents">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-4 text-center no-underline transition-transform duration-300 hover:scale-[1.02] lg:text-left ${
                    link.variant === 'primary'
                      ? 'text-2xl font-normal lg:text-3xl'
                      : 'text-xl font-light lg:text-2xl'
                  }`}
                >
                  {link.label}
                </a>
                <hr className="border-[pink] border-t-2" />
              </div>
            ))}
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  )
}
