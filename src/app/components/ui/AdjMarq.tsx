import { Marquee } from "./Marquee"
import { Coffee, HandHeart, Armchair, Leaf, Zap, Globe, CupSoda } from "lucide-react"

const bakeryFeatures = [
  { text: "Amazing Flavor", icon: <Coffee className="h-5 w-5" /> },
  { text: "Friendly Baristas", icon: <HandHeart className="h-5 w-5" /> },
  { text: "Cozy Space", icon: <Armchair className="h-5 w-5" /> },
  { text: "Local Roasts", icon: <Leaf className="h-5 w-5" /> },
  { text: "Fast Service", icon: <Zap className="h-5 w-5" /> },
  { text: "Handcrafted Drinks", icon: <CupSoda className="h-5 w-5" /> },
  { text: "Global Beans", icon: <Globe className="h-5 w-5" /> },
]

// Single component for the items
const FeatureItem = ({ text, icon }: { text: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-3 px-2">
    {/* Icons matching text color */}
    <span className="text-[#36231c]">{icon}</span>
    {/* Simple Sans Typography */}
    <span className="text-base font-normal font-sans text-[#36231c] whitespace-nowrap">
      {text}
    </span>
  </div>
)

export function BakeryMarqueeDemo() {
  return (
    /* Background set to #f1e9da, removed border-y opacity for a cleaner look */
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#f1e9da]  border-y border-[#36231c]/10">
      
      {/* Marquee with no pause on hover and custom duration */}
      <Marquee pauseOnHover={false} className="[--duration:40s] [--gap:4rem]">
        {bakeryFeatures.map((item, idx) => (
          <FeatureItem key={idx} {...item} />
        ))}
      </Marquee>

      
    </div>
  )
}