"use client"

import { RiTakeawayFill, RiCalendarScheduleLine } from "@remixicon/react"
import { Utensils } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { InteractiveHoverButton } from "./ui/InteractiveHoverButton"

export default function OrderReserveSection() {
  return (
    <section className="w-full bg-[#f1e9da] py-8 px-4 md:px-6 border-y border-stone-300 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ---------------- Order Online ---------------- */}
          <div className="flex flex-col items-center text-center md:border-r md:border-black/10 md:pr-10 pb-8 md:pb-0 border-b border-black/10 md:border-b-0">

            <div className="mb-6 p-4 bg-white rounded-full shadow-lg">
              <RiTakeawayFill className="w-12 h-12 text-[#36231c]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#472a1e] mb-3 patua">
              Order Online
            </h2>

            <p className="text-lg text-amber-700 mb-4 max-w-xs">
              Get your favorites delivered fast to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Zomato */}
              <Link target="_blank" href="https://www.zomato.com/ncr/chords-coffee-the-music-store-caf%C3%A9-1-yusuf-sarai-new-delhi/order"
              >
                <InteractiveHoverButton
              baseBg="bg-[#85593f]"
              hoverBg="hover:bg-[#d94148]"
              imageBefore="/images/logo-zom.png"
              imageAfter="/images/logo-zom.png"
              imageAlt="Order on Zomato"
              
            /></Link>
              {/* Swiggy */}
              <Link target="_blank" href="https://www.swiggy.com/city/delhi/chords-and-coffee-south-extension-rest818938?source=sharing">
              <InteractiveHoverButton
              baseBg="bg-[#583622]"
              hoverBg="hover:bg-[#ff5200]"
              imageBefore="/images/logo-swiggy.png"
              imageAfter="/images/logo-swiggy.png"
              imageAlt="Order on swiggy"
              
            /></Link>
            </div>
          </div>

          {/* ---------------- Reserve Table ---------------- */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
              <RiCalendarScheduleLine className="w-12 h-12 text-amber-900" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-3 patua">
              Reserve Table
            </h2>

            <p className="text-lg text-amber-700 mb-4 max-w-xs">
              Book your perfect dining experience in advance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#book-table"
                className="px-5 py-1 bg-[#583622] hover:bg-[#8d5e43] text-white rounded-xl font-semibold inline-flex items-center justify-center transition-transform active:scale-95"
              >
                Reserve Now
              </Link>

              <Link href="https://www.zomato.com/ncr/chords-coffee-the-music-store-caf%C3%A9-1-yusuf-sarai-new-delhi"
              >
                <InteractiveHoverButton
              baseBg="bg-[#85593f]"
              hoverBg="hover:bg-[#d94148]"
              imageBefore="/images/logo-zom.png"
              imageAfter="/images/logo-zom.png"
              imageAlt="Order on Zomato"
              
            /></Link>
              {/* Swiggy */}
              <Link href="https://www.swiggy.com/restaurants/757487/dineout">
              <InteractiveHoverButton
              baseBg="bg-[#583622]"
              hoverBg="hover:bg-[#ff5200]"
              imageBefore="/images/logo-swiggy.png"
              imageAfter="/images/logo-swiggy.png"
              imageAlt="Order on Swiggy"
              
            /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
