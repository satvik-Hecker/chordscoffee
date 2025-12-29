import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/app/lib/utils"

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  baseBg?: string
  hoverBg?: string
  dotBg?: string
  textColor?: string

  /* Image support */
  imageBefore?: string
  imageAfter?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number

  /* Controls */
  showArrow?: boolean
  showDot?: boolean
}

export function InteractiveHoverButton({
  children,
  className,
  baseBg = "bg-background",
  hoverBg = "group-hover:bg-primary",
  dotBg = "bg-primary",
  textColor = "text-foreground",

  imageBefore,
  imageAfter,
  imageAlt = "button image",
  imageWidth = 88,
  imageHeight = 40,

  showArrow = true,
  showDot = true,

  ...props
}: InteractiveHoverButtonProps) {
  const isImageButton = Boolean(imageBefore)

  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-3 font-semibold transition-colors duration-300",
        baseBg,
        hoverBg,
        textColor,
        className
      )}
      {...props}
    >
      {/* ---------- Initial State ---------- */}
      <div className="flex items-center gap-2 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-8">
        {/* Dot (text buttons only) */}
        {!isImageButton && showDot && (
          <div
            className={cn(
              "h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-[100]",
              dotBg
            )}
          />
        )}

        {/* Text OR Image */}
        {isImageButton ? (
          <Image
            src={imageBefore!}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        ) : (
          <span>{children}</span>
        )}
      </div>

      {/* ---------- Hover State ---------- */}
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
        {isImageButton ? (
          <Image
            src={imageAfter || imageBefore!}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        ) : (
          <>
            <span>{children}</span>
            {showArrow && <ArrowRight className="h-4 w-4" />}
          </>
        )}
      </div>
    </button>
  )
}
