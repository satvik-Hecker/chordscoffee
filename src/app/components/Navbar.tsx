"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Opportunities", href: "/opportunity" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4 font-mono">
      <div className="bg-[#36231c] backdrop-blur-xl rounded-3xl border border-[#f1e9da] shadow-2xl">
        <div className="flex justify-between items-center h-16 px-12">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-24 font-semibold">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-cream-light hover:text-[#f1e9da]/90 transition-colors text-lg tracking-wide uppercase"
              >
                {item.name}
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
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center bg-[#36231c] border-none rounded-full p-3  shadow-lg h-24 w-22 ">
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
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-cream-light hover:text-gold transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="default"
              className="bg-gradient-to-r from-gold/80 via-amber-400/80 to-gold/80 text-cream-light hover:shadow-glow transition-shadow rounded-full px-6 py-2"
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
          <div className="md:hidden mt-4 bg-[#36231c]/90 backdrop-blur-lg rounded-2xl border border-coffee-medium/20 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-cream-light hover:text-gold transition-colors font-medium text-center rounded-xl hover:bg-coffee-medium/20"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
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
