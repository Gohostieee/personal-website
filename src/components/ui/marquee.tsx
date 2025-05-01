export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-screen overflow-x-hidden border-b-2 border-t-2 border-border mb-8 bg-secondary-background text-foreground font-base">
      <div className="animate-marquee whitespace-nowrap py-2 sm:py-4">
        {items.map((item, index) => {
          return (
            <span key={`${index} ${item} 1`} className="mx-2 sm:mx-4 text-xl sm:text-4xl">
              {item}
            </span>
          )
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2 sm:py-4">
        {items.map((item, index) => {
          return (
            <span key={`${index} ${item} 2`} className="mx-2 sm:mx-4 text-xl sm:text-4xl ">
              {item}
            </span>
          )
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  )
}
