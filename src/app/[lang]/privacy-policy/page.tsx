import type { Metadata } from 'next'
import { resolveLang } from '@/i18n'
import PrivacyContent from './PrivacyContent'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await resolveLang(params)
  // Same bilingual page in both languages; /privacy-policy is the address Meta ads use.
  return { title: 'Política de Privacidad / Privacy Policy', alternates: { canonical: '/privacy-policy' } }
}

export default async function PrivacyPolicy({ params }: Props) {
  await resolveLang(params)
  return <PrivacyContent />
}
