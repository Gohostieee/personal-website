import { cn } from "@/lib/utils"
// import Image from "next/image"

type Props = {
  imageUrl: string
  caption: React.ReactNode
  className?: string
  imageClass?: string
}

export default function ImageCard({ imageUrl, caption, className, imageClass }: Props) {
  return (
    <figure
      className={cn(
        "w-[250px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow",
        className,
      )}
    >
      <img className={`w-full ${imageClass}`} src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-main-foreground border-border p-4">
        {caption}
      </figcaption>
    </figure>
  )
}
