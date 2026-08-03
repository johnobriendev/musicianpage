import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = { title: "Lessons | John O'Brien" }

export default function Lessons() {
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
          src="/johnpat.jpg"
          alt="John playing guitar"
          className="w-full h-auto lg:w-[42%]"
        />
        <p className="text-base leading-7 lg:flex-1 lg:text-lg lg:leading-8">
          I have been teaching guitar lessons for over ten years to students of all ages and skill
          levels. Lessons are tailored to each student based on their specific interests and goals
          whether they are learning to play their first notes, already performing, or just looking
          to deepen their understanding of music. Under my guidance former students have been
          admitted to study at prestigious music universities such as the Berklee College of Music,
          USC Thorton School of Music, and Duquesne University. I am currently offering online
          lessons over Zoom or Skype, package discounts are given to those who sign up for recurring
          lessons. Please contact me for further information about availability and pricing.
        </p>
      </main>

      <Footer />
    </div>
  )
}
