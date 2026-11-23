import { NextResponse, type NextRequest } from 'next/server'

// English is served at the root ("/about") and Spanish under "/es" ("/es/about").
// Internally every page lives under app/[lang], so root paths are rewritten to /en.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === '/es' || pathname.startsWith('/es/')) return NextResponse.next()

  // Keep one public address per page: /en/about -> /about
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.slice(3) || '/'
    return NextResponse.redirect(url, 308)
  }

  const url = req.nextUrl.clone()
  url.pathname = pathname === '/' ? '/en' : `/en${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip Next internals and anything that looks like a file (images, favicon, robots.txt...)
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
