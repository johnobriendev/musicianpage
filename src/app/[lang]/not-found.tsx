import Link from 'next/link'

// not-found pages don't receive route params, so this one speaks both languages.
export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 py-16">
      <h1 className="font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.85] font-bold uppercase">
        404<span className="text-signal">.</span>
      </h1>
      <p className="text-lg">
        This page doesn&apos;t exist. <span lang="es">· Esta página no existe.</span>
      </p>
      <div className="flex gap-6">
        <Link href="/" className="label text-cobalt no-underline">
          Home →
        </Link>
        <Link href="/es" className="label text-cobalt no-underline" lang="es">
          Inicio →
        </Link>
      </div>
    </div>
  )
}
