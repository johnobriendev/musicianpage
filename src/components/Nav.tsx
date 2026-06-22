'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkCls =
  'no-underline text-[pink] bg-transparent text-2xl md:text-[0.9rem] md:ml-5 transition-transform md:hover:scale-105'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav className="relative flex items-start">
      <button
        className="md:hidden bg-transparent border-0 cursor-pointer text-[pink] text-[1.6rem] p-1.5 leading-none"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <i className={open ? 'fa-solid fa-xmark' : 'fas fa-bars'} />
      </button>

      <div
        className={`
          ${open ? 'flex' : 'hidden'} md:flex
          fixed md:static inset-0 md:inset-auto
          z-[200] md:z-auto
          flex-col md:flex-row
          bg-[#20263e] md:bg-transparent
          pt-14 px-6 md:p-0
          gap-6 md:gap-0
          items-start md:items-center
        `}
      >
        <Link href="/" className={linkCls}>Home</Link>
        <Link href="/about" className={linkCls}>About</Link>
        <Link href="/lessons" className={linkCls}>Lessons</Link>
        <Link href="/music" className={linkCls}>Media</Link>
        <Link href="/contact" className={linkCls}>Contact</Link>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[199] bg-transparent"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  )
}
