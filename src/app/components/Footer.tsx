"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

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
                        <p className="text-2xl text-[#f1e9da]/80">The Music Store Café</p>
                    </div>

                    
                    <div id="quick">
                        <h2 className="text-xl mb-4 font-mono text-[#f1e9da]/80 font-semibold">Our Store</h2>
                        <div className="flex flex-col gap-4">
                        <Link
                            href="#about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 font-mono text-lg hover:text-white transition-colors"
                            
                        >
                            About
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 font-mono text-lg hover:text-white transition-colors"
                            
                        >
                            Menu
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/satvik-tiwari-67099b293/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 font-mono text-lg hover:text-white transition-colors"
                            
                        >
                            Services
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

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <span className="text-sm text-white/70">
                        Made with <span className="text-red-400 mx-1">♥</span> by Satvik
                    </span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <span className="text-xs text-white/50">
                        Copyright © 2025 Curly Brackets. All rights reserved.
                    </span>
                </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer;