"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CareerSection() {
  const badges = ["HONEST", "FRIENDLY", "PASSIONATE", "ADAPTABLE", "CREATIVE"];

  const badges1 = ["DEPENDABLE", "RESPONSIBLE", "DEDICATED", "UPBEAT"];

  const rotations = badges.map(() => {
    const deg = Math.floor(Math.random() * 10) + 6;
    return Math.random() > 0.5 ? deg : -deg;
  });

  return (
    <section className="w-full bg-[#ede9df] py-4 flex flex-col items-center text-center relative overflow-hidden">

      {/* Decorative Icons (cafe-style) */}
      <Image
        src="/images/career/burger.svg"
        width={80}
        height={80}
        alt="coffee cup"
        className="
          absolute 
          w-10 sm:w-14 md:w-20 
          top-8 sm:top-12 md:top-16 
          left-4 sm:left-20 md:left-36 
          p-2 opacity-90 pointer-events-none rotate-[20deg]"
      />

      <Image
        src="/images/career/cup.svg"
        width={80}
        height={80}
        alt="coffee beans"
        className="
          absolute 
          w-10 sm:w-14 md:w-16
          top-1/3 sm:top-1/2 
          left-2 sm:left-8 md:left-4 
          opacity-80 pointer-events-none rotate-[-30deg] md:ml-36"
      />

      <Image
        src="/images/career/pizza.svg"
        width={80}
        height={80}
        alt="dessert"
        className="
          absolute 
          w-10 sm:w-14 md:w-20
          bottom-20 sm:bottom-32 md:bottom-40 
          right-2 sm:right-8 md:right-10 
          opacity-90 pointer-events-none md:mr-36"
      />

      <Image
        src="/images/career/coffee-cup.svg"
        width={84}
        height={84}
        alt="juice"
        className="
          absolute 
          w-10 sm:w-14 md:w-16
          top-1/4 sm:top-1/3 
          right-4 sm:right-10 md:right-6 
          opacity-80 pointer-events-none rotate-[-20deg] md:mr-36"
      />

      <Image
        src="/images/career/cupcake.svg"
        width={84}
        height={84}
        alt="cupcake"
        className="
          absolute 
          w-10 sm:w-14 md:w-16
          top-1/2 sm:top-2/3 
          left-1/4 sm:left-1/3 
          opacity-80 pointer-events-none rotate-[-20deg] md:mr-36"
      />

      <Image
        src="/images/career/food.svg"
        width={84}
        height={84}
        alt="food"
        className="
          absolute 
          w-10 sm:w-14 md:w-16
          top-4 sm:top-3 
          left-1/2 sm:left-2/3 
          opacity-80 pointer-events-none rotate-[30deg] md:mr-36"
      />

      {/* Title badge */}
      <div className="inline-flex items-center mb-6 px-6 py-[6px] border-2 border-[#39261F] rounded-full text-xl text-[#39261F] font-sans z-20 bg-transparent">
        Career <span className="font-bold">&nbsp;Opportunity</span>
      </div>

      {/* Heading + overlay badges */}
      <div className="relative inline-block max-w-4xl px-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-serif text-[#39261F] leading-tight relative z-10">
          We&apos;re always looking for passionate, dedicated people to join our
          growing team.
        </h1>

        <div className="absolute inset-0 z-30 pointer-events-none">
          {badges.map((label, i) => (
            <motion.div
              key={`overlay-${i}-${label}`}
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
              className="absolute bg-[#FCE5D8]/95 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full font-sans border border-[#F3B8A6] text-[#C74A3B] text-xs sm:text-sm font-medium shadow"
              style={{
                top: `${10 + (i * 20) % 80}%`,
                left: `${8 + (i * 32) % 72}%`,
                rotate: `${rotations[i]}deg`,
              }}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating badges behind the text */}
      <div className="relative w-full max-w-4xl -mt-6 mb-12 h-32 sm:h-40 pointer-events-none z-0">
        {badges1.map((label, i) => (
          <motion.div
            key={`float-${i}-${label}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: i * 0.18 }}
            className="absolute bg-[#FCE5D8]/95 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full font-sans border border-[#F3B8A6] text-[#C74A3B] text-xs sm:text-sm font-medium shadow"
            style={{
              top: `${(i * 24) % 55}%`,
              left: `${16 + (i * 20) % 78}%`,
              rotate: `${rotations[i]}deg`,
            }}
          >
            {label}
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSfN6Q8r6cBCCJ_AcgjVplEcqoIGNUjiVtyUmAueC6S_6dxxAQ/viewform"
        target="_blank"
        aria-label="Apply now"
        className="mt-4 px-6 sm:px-8 py-3 rounded-full bg-[#C74A3B] text-white font-sans border-2 border-[#97382e] text-base sm:text-lg font-bold hover:bg-[#b44135] transition z-20"
      >
        APPLY NOW
      </Link>
    </section>
  );
}
