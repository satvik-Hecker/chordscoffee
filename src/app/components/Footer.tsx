"use client"
import React from "react"
import Link from "next/link"
import { Instagram, Facebook, X, MapPin, Phone, Mail } from "lucide-react"

const Footer = () => {
  const address = 'G4/17, Bhanot House, Commercial Complex, Yusuf Sarai, New Delhi 110016';
  const encodedAddress = encodeURIComponent(address);
  return (
    <footer className="relative z-10 font-sans bg-[#36231c] backdrop-blur-sm border-t border-white/10 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          
          {/* Left Section: Logo and Social Links */}
          <div className="flex flex-col mb-8 md:mb-0">
            <h1 className="text-[#f1e9da]  tracking-wider text-4xl sm:text-5xl lg:text-6xl font-bold">
              Chords & Coffee
            </h1>
            <p className="text-xl sm:text-2xl font-sans text-[#f1e9da]/80 tracking-wider mt-1">The Music Store Café</p>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://www.instagram.com/chordscoffee/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/5 justify-center h-10 w-10 rounded-full border border-[#36231c] text-[#f1e9da] hover:bg-[#f1e9da] hover:text-[#36231c] transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/chordscoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/5 justify-center h-10 w-10 rounded-full border border-[#36231c] text-[#f1e9da] hover:bg-[#f1e9da] hover:text-[#36231c] transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/chordscoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white/5 justify-center h-10 w-10 rounded-full border border-[#36231c] text-[#f1e9da] hover:bg-[#f1e9da] hover:text-[#36231c] transition-all duration-300"
              >
                <X className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Right Section: Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 font-sans gap-8 md:gap-12 text-white/70">
            
            {/* Our Store Section */}
            <div id="our-store">
              <h2 className="text-xl mb-4 text-[#f1e9da]/80 font-semibold">Our Store</h2>
              <div className="flex flex-col gap-2">
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#events" className="hover:text-white transition-colors">
                  Events
                </Link>
                <Link href="#findus" className="hover:text-white transition-colors">
                  Find Us
                </Link>
                <Link href="#team" className="hover:text-white transition-colors">
                  Join our team
                </Link>
              </div>
            </div>

            {/* Quick Links Section */}
            <div id="quick-links">
              <h2 className="text-xl mb-4 text-[#f1e9da]/80 font-semibold">Quick Links</h2>
              <div className="flex flex-col gap-2">
                <Link href="#swiggy" className="hover:text-white transition-colors">
                  Order on Swiggy
                </Link>
                <Link href="#zomato" className="hover:text-white transition-colors">
                  Order on Zomato
                </Link>
                <Link href="#reserve" className="hover:text-white transition-colors">
                  Reserve a Table
                </Link>
              </div>
            </div>
            
            {/* Contact Section */}
            <div id="contact" className="col-span-2 sm:col-span-1">
              <h2 className="text-xl mb-4 text-[#f1e9da]/80 font-semibold">Contact</h2>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <Mail className="h-5 w-5 flex-shrink-0 mt-1" />
                  <Link href="mailto:chordscoffee.team@gmail.com" className="text-md hover:text-white transition-colors">
                    chordscoffee.team@gmail.com
                  </Link>
                </div>
                <div className="flex gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <Link href="tel:+919990666017" className="text-md hover:text-white transition-colors">+91-9990666017</Link>
                    <Link href="tel:+919871881666" className="text-md hover:text-white transition-colors">+91-9871881666</Link>
                  </div>
                </div>
                <div className="flex gap-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md hover:text-white transition-colors"
                  >
                    G4/17, Bhanot House, Commercial Complex, <br />
                    Yusuf Sarai, New Delhi 110016
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 pt-6 flex justify-center text-center">
          <span className="text-sm text-white/50">
            Copyright © 2025 Chords & Coffee. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
export default Footer;