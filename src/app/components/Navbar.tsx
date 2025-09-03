"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Split navigation items so the logo remains centered with equal groups on both sides
  const leftNavItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "/menu" },
  ];

  const rightNavItems = [
    { name: "Gallery", href: "/gallery" },
    { name: "Opportunities", href: "/opportunity" },
  ];

  return (
    // The main container is centered horizontally using the flex properties.
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 font-mono">
      <div className="bg-[#36231c] backdrop-blur-xl rounded-full border border-[#f1e9da] shadow-2xl">
        <div className="relative flex items-center h-16 px-6 md:px-8 lg:px-10 ">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex w-1/2 items-center justify-around gap-x-6 lg:gap-x-8 xl:gap-x-10 font-semibold md:pr-12 lg:pr-20">
            {leftNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-cream-light hover:text-[#f1e9da]/90 transition-colors text-sm md:text-base lg:text-lg tracking-wide uppercase transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                <span>{item.name}</span>
                <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Mobile Logo - Left */}
          <div className="md:hidden flex items-center">
            <Image
              src="/logo.png"
              alt="Chords & Coffee Logo"
              width={36}
              height={36}
              className="rounded-full"
              priority
            />
          </div>

          {/* Central Logo - Desktop */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex items-center justify-center bg-[#36231c] border-none rounded-full p-2 md:p-3 shadow-lg h-20 md:h-24 w-20 md:w-24">
              <Image
                src="/logo.png"
                alt="Chords & Coffee Logo"
                width={70}
                height={70}
                className="
                    rounded-full 
                    shadow-[0_0_4px_rgba(241,233,218,0.6),0_10px_20px_rgba(101,67,33,0.4)] 
                    hover:scale-105 
                    transition-transform 
                    duration-500
                "
                priority
              />
            </div>
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden md:flex w-1/2 items-center justify-around gap-x-6 lg:gap-x-10 xl:gap-x-12 md:pl-12 lg:pl-20 ">
            {rightNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-cream-light hover:text-gold transition-colors font-medium text-sm md:text-base lg:text-lg tracking-wide uppercase transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                <span>{item.name}</span>
                <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <Button
              variant="default"
              className="bg-gradient-to-r from-gold/80 via-amber-400/80 to-gold/80 text-cream-light hover:shadow-glow transition-shadow rounded-full px-3 md:px-4 lg:px-5 py-2 text-sm md:text-base whitespace-nowrap mr-2 md:mr-4 lg:mr-6 "
            >
              Order Online
            </Button>
          </div>

          {/* Mobile menu button - Right */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream-light"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-[#36231c]/95 backdrop-blur-lg rounded-2xl border border-coffee-medium/20 shadow-lg">
            <div className="px-3 py-3 divide-y divide-white/10">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-2 py-3 text-cream-light hover:text-gold transition-colors font-medium text-base text-center rounded-xl active:scale-[0.98]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3">
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-gold/80 via-amber-400/80 to-gold/80 text-cream-light rounded-full"
                >
                  Order Online
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;