/** Large condensed page heading with the signal-orange full stop. */
export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-display pt-10 pb-8 text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.85] font-bold tracking-[-0.02em] uppercase md:pt-14 md:pb-12">
      {children}
      <span aria-hidden="true" className="text-signal">.</span>
    </h1>
  )
}
