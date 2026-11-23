type Props = {
  size?: 'sm' | 'xl'
  as?: 'h1' | 'span'
}

/** "JOHN O'BRIEN" set in the display face — the site's name treatment. */
export default function Wordmark({ size = 'sm', as: Tag = 'span' }: Props) {
  if (size === 'xl') {
    return (
      <Tag className="font-display text-[clamp(4.5rem,15vw,11rem)] leading-[0.82] font-bold tracking-[-0.02em] uppercase">
        <span className="block">John</span>
        <span className="block text-cobalt">O&apos;Brien</span>
      </Tag>
    )
  }

  return (
    <Tag className="font-display text-2xl leading-none font-bold tracking-[-0.01em] uppercase">
      John <span className="text-cobalt">O&apos;Brien</span>
    </Tag>
  )
}
