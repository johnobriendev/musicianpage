import type { Metadata } from 'next'
import { Archivo, Archivo_Narrow } from 'next/font/google'
import Script from 'next/script'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import { getDictionary, locales, resolveLang, siteUrl } from '@/i18n'
import '../globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-archivo',
  display: 'swap',
})

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-archivo-narrow',
  display: 'swap',
})

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const t = getDictionary(await resolveLang(params))
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t.meta.name, template: `%s | ${t.meta.name}` },
    description: t.meta.description,
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const lang = await resolveLang(params)
  const t = getDictionary(lang)

  return (
    <html lang={lang} className={`${archivo.variable} ${archivoNarrow.variable}`}>
      <body>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-[max(1.25rem,env(safe-area-inset-left,0px))] sm:px-8">
          <SiteHeader lang={lang} nav={t.nav} langSwitch={t.langSwitch} />
          <main className="flex-1">{children}</main>
          <Footer lang={lang} privacyLabel={t.footer.privacy} />
        </div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XL95ZVZF85" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XL95ZVZF85');
          `}
        </Script>
      </body>
    </html>
  )
}
