import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PrivacyContent from './PrivacyContent'

export const metadata = { title: "Privacy Policy | John O'Brien" }

export default function PrivacyPolicy() {
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

      <main className="flex flex-1 flex-col mb-6">
        <PrivacyContent />
      </main>

      <Footer />
    </div>
  )
}
