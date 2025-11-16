"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CareerSection() {
  const badges = [
    "HONEST",
    "FRIENDLY",
    "PASSIONATE",
    "ADAPTABLE",
    "CREATIVE",
  ];

  return (
    <section className="w-full bg-[#ede9df] py-20 flex flex-col items-center text-center relative overflow-hidden">
      {/* Decorative Icons (cafe-style) */}
      <Image
        src="/images/career/burger.svg"
        width={80}
        height={80}
        alt="coffee cup"
        className="w-20 absolute top-16 left-10 p-2 ml-36 opacity-90 pointer-events-none rotate-[20deg]"
        />
      <Image
        src="/images/career/cup.svg"
        width={80}
        height={80}
        alt="coffee beans"
        className="w-16 absolute top-1/2 left-4 opacity-80 pointer-events-none rotate-[-30deg] ml-36"
      />
      <Image
        src="/images/career/pizza.svg"
        width={80}
        height={80}
        alt="dessert"
        className="w-20 absolute bottom-40 right-10 opacity-90 pointer-events-none mr-36 "
      />
      <Image
        src="/images/career/coffee-cup.svg"
        alt="juice"
        width={84}
        height={84}
        className="w-16 absolute top-1/3 right-6 opacity-80 pointer-events-none rotate-[-20deg] mr-36"
      />

      {/* Title badge */}
      <div className="inline-flex items-center mb-6 px-8 py-2 border border-black rounded-full text-xl text-black font-sans z-20 bg-transparent">
        Career <span className="font-bold"> Opportunity</span> 
      </div>

      {/* Heading + badges overlay */}
      <div className="relative inline-block max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-[#39261F] leading-tight relative z-10">
          We &apos; re always looking for passionate, dedicated people to join our
          growing team.
        </h1>

        {/* Badges placed over the heading (absolute inset) */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {badges.map((label, i) => (
            <motion.div
              key={`overlay-${i}-${label}`}
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
              className="absolute bg-[#FCE5D8]/95 backdrop-blur-sm px-4 py-1 rounded-full border border-[#F3B8A6] text-[#C74A3B] text-sm font-medium shadow rotate-[-6deg]"
              style={{
                top: `${10 + (i * 12) % 60}%`,
                left: `${8 + (i * 18) % 72}%`,
              }}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional secondary floating badges (subtle, behind) */}
      <div className="relative w-full max-w-4xl -mt-6 mb-12 h-40 pointer-events-none z-10">
        {badges.map((label, i) => (
          <motion.div
            key={`float-${i}-${label}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: i * 0.18 }}
            className="absolute bg-[#FCE5D8]/90 px-4 py-1 rounded-full border border-[#F3B8A6] text-[#C74A3B] text-sm font-medium shadow rotate-[-8deg]"
            style={{
              top: `${15 + (i * 9) % 55}%`,
              left: `${6 + (i * 20) % 78}%`,
            }}
          >
            {label}
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        aria-label="Apply now"
        className="mt-6 px-8 py-3 rounded-full bg-[#C74A3B] text-white text-lg font-semibold hover:bg-[#b44135] transition z-20"
      >
        APPLY NOW
      </button>
    </section>
  );
}
