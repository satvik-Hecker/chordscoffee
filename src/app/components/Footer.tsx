"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Instagram, Facebook, X } from "lucide-react"

const Footer=()=>{
    return (
        <footer className="relative z-10 bg-[#36231c] backdrop-blur-sm border-t border-white/10 text-white py-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer */}
                <div className="flex justify-around  items-center mb-8">
                    <div className="flex flex-col ">
                        <h1 className="text-[#f1e9da] tracking-wider leading-16 text-6xl font-bold ">
                       Chords & Coffee
                        </h1>
                        <p className="text-2xl text-[#f1e9da]/80 tracking-wider">The Music Store Café</p>
                        <div className="mt-4 flex  gap-4">
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
                            href="https://www.facebook.com/chordscoffee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-white/5 justify-center h-10 w-10 rounded-full border border-[#36231c] text-[#f1e9da] hover:bg-[#f1e9da] hover:text-[#36231c] transition-all duration-300"
                            >
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-[#f1e9da]" 
                            enableBackground="new 0 0 72 72" 
                            viewBox="0 0 72 72" 
                            id="twitter-x"
                        >
                            <switch>
                            <g>
                                <path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
                                        h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z" 
                                    fill="currentColor"> {/* Use currentColor for Tailwind to manage fill */}
                                </path>
                            </g>
                            </switch>
                        </svg>
                        </Link>
                    </div>                        
                    </div>

                    
                    <div id="quick" className="font-sans">
                        <h2 className="text-xl mb-4  text-[#f1e9da]/80 font-semibold">Our Store</h2>
                        <div className="flex flex-col gap-4">
                        <Link
                            href="#about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 text-lg hover:text-white transition-colors"
                            
                        >
                            About Us
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70  text-lg hover:text-white transition-colors"
                            
                        >
                            Events
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 text-lg hover:text-white transition-colors"
                            
                        >
                            Find Us
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 text-lg hover:text-white transition-colors"
                            
                        >
                            Join our team
                        </Link>
                    </div>
                    </div>
                    <div id="order">
                        <h2 className="text-xl mb-4 font-mono text-[#f1e9da]/80 font-semibold">Quick Links</h2>
                        <div className="flex flex-col gap-4">
                        <Link
                            href="#about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 font-mono text-lg hover:text-white transition-colors"
                            
                        >
                            Order on Swiggy
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 font-mono text-lg hover:text-white transition-colors"
                            
                        >
                            Order on Zomato
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 font-mono text-lg hover:text-white transition-colors"
                            
                        >
                            Reserve a Table
                        </Link>
                    </div>
                
                </div>
                    <div id="f-menu">
                        <h2 className="text-xl mb-4 font-sans text-[#f1e9da]/80 font-semibold">Menu</h2>
                        <div className="flex flex-col font-sans gap-4">
                        <Link
                            href="#about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70  text-lg hover:text-white transition-colors"
                            
                        >
                            Paninis & Plates
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70  text-lg hover:text-white transition-colors"
                            
                        >
                            Sides & Snacks
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70  text-lg hover:text-white transition-colors"
                            
                        >
                            Waffles & Sweets
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70  text-lg hover:text-white transition-colors"
                            
                        >
                            Beverages
                        </Link>
                    </div>
                
                </div>
                    <div id="follow">
                        <h2 className="text-xl mb-4 font-mono text-[#f1e9da]/80 font-semibold">Follow Us</h2>
                        <div className="flex  gap-4">
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
                    </div>
                
                </div>
            </div>

           <div className="border-t border-white/10 pt-4 flex justify-center">
            <span className="text-sm text-white/50 font-sans">
                Copyright © 2025 Chords & Coffee. All rights reserved.
            </span>
            </div>
            </div>
        </footer>
    )
}
export default Footer;