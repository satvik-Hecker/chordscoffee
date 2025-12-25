"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
];

const navItemsRight = [
  { label: "About Us", href: "#about" },
  { label: "News", href: "#news" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-6 px-4 animate-fade-in">
      <nav className="max-w-2xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center bg-primary rounded-full px-8 py-3 shadow-lg">
          {/* Left nav items */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-sm uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Center logo */}
          {/* <Image src="/logo.png" alt="Logo" width={6} height={6}></Image> */}

          {/* Right nav items */}
          <div className="flex items-center gap-8">
            {navItemsRight.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-sm uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between bg-primary rounded-full px-4 py-2 shadow-lg">
            {/* <CafeLogo /> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="mt-3 bg-primary rounded-2xl px-6 py-4 shadow-lg animate-slide-down">
              <div className="flex flex-col gap-4">
                {[...navItems, ...navItemsRight].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link text-sm uppercase text-center py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
