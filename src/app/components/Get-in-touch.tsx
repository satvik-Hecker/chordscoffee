"use client"
import { MailIcon, Phone, Home } from "lucide-react"

export default function Contact() {
  return (
    <section className="bg-[#ede9df] font-sans">
      {/* Contact Methods Grid */}
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Email (mailto) */}
          <a
            href="mailto:chordscoffee.team@gmail.com"
            aria-label="Email chordscoffee.team@gmail.com"
            className="group flex flex-col items-center justify-center text-center bg-[#85593f] py-12 sm:py-14 px-4 space-y-3 no-underline
                       focus:outline-none focus:ring-4 focus:ring-[#ede9df]/30 rounded-none
                       motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out
                       hover:motion-safe:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              {/* icon container - fixed size so text never shifts */}
              <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6">
                <MailIcon className="w-6 h-6 text-[#ede9df]" />
              </span>

              {/* label + value */}
              <div className="flex flex-col items-center sm:items-start">
                <p className="font-medium text-lg text-[#ede9df] break-words">
                  chordscoffee.team@gmail.com
                </p>
              </div>
            </div>

            {/* Description below */}
            <p className="text-base text-[#ede9df]/90 leading-relaxed max-w-xs">
              Mail us your worries away — we&apos;re all ears (and coffee).
            </p>
          </a>

          {/* Phone (tel) */}
          <a
            href="tel:+919990666017"
            aria-label="Call +91 9990666017"
            className="group flex flex-col items-center justify-center text-center bg-[#583622] py-12 sm:py-14 px-4 space-y-3 no-underline
                       focus:outline-none focus:ring-4 focus:ring-[#ede9df]/30 rounded-none
                       motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out
                       hover:motion-safe:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6">
                <Phone className="w-6 h-6 text-[#ede9df]" />
              </span>

              <div className="flex flex-col items-center sm:items-start">
                <p className="font-medium text-lg text-[#ede9df]">+91-9990666017</p>
                <p className="font-medium text-lg text-[#ede9df]">+91-9871881666</p>
              </div>
            </div>

            {/* Description below */}
            <p className="text-base text-[#ede9df]/90 leading-relaxed max-w-xs">
              Ring for coffee, rhythm, or a good chat.
            </p>
          </a>

          {/* Address (maps) */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Yusuf+Sarai+New+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Yusuf Sarai, New Delhi on Google Maps"
            className="group flex flex-col items-center justify-center text-center bg-[#382012] py-12 sm:py-14 px-4 space-y-3 no-underline
                       focus:outline-none focus:ring-4 focus:ring-[#ede9df]/30 rounded-none
                       motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out
                       hover:motion-safe:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6">
                <Home className="w-6 h-6 text-[#ede9df]" />
              </span>

              <div className="flex flex-col items-center sm:items-start">
                <p className="font-medium text-lg text-[#ede9df]">Yusuf Sarai, New Delhi</p>
              </div>
            </div>

            {/* Description below */}
            <p className="text-base text-[#ede9df]/90 leading-relaxed max-w-xs">
              Visit our cozy café in the heart of the city.
            </p>
          </a>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-0 w-full overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.3976028513275!2d77.208442!3d28.557821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a6df73b53b%3A0xb181a0ac116c1ce9!2sChords%20and%20Coffee%20-%20The%20Music%20Store%20Caf%C3%A9!5e0!3m2!1sen!2sus!4v1762749750858!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Chords and Coffee Location"
          className="h-[300px] sm:h-[400px] md:h-[500px]"
        ></iframe>
      </div>
    </section>
  )
}
