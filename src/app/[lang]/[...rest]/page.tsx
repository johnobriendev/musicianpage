import { notFound } from 'next/navigation'

// Any unknown address inside a language renders the styled 404 page.
export default function CatchAll() {
  notFound()
}
