import Image from 'next/image'
import { photos, type PhotoName } from '@/content/photos'

type Props = {
  name: PhotoName
  /** Sizing/aspect classes for the frame, e.g. "aspect-[4/5]" or "h-full" */
  className?: string
  sizes?: string
  priority?: boolean
  placeholderLabel: string
}

/** A photo slot. Shows the photo if one is set in content/photos.ts, otherwise a labeled placeholder. */
export default function Photo({ name, className = '', sizes = '100vw', priority, placeholderLabel }: Props) {
  const photo = photos[name]

  if (!photo.src) {
    return (
      <div
        className={`relative flex flex-col justify-between gap-4 bg-cobalt p-5 text-sleeve ${className}`}
        role="img"
        aria-label={photo.alt}
      >
        <span className="label">{placeholderLabel}</span>
        <span className="font-display text-lg leading-tight font-medium uppercase opacity-90">
          {photo.brief}
        </span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${photo.mono ? 'mono' : ''} ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: photo.focus ?? '50% 50%' }}
      />
    </div>
  )
}
