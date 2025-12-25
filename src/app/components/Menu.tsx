"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import { MENU_ITEMS } from "../lib/menuData";

export default function MenuSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % MENU_ITEMS.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + MENU_ITEMS.length) % MENU_ITEMS.length);
  };

  const activeItem = MENU_ITEMS[currentIndex];

  // Helper to get items relative to current index for the arc
  const getRelativeItem = (offset: number) => {
    return MENU_ITEMS[(currentIndex + offset + MENU_ITEMS.length) % MENU_ITEMS.length];
  };

  return (
    <section className="min-h-screen w-full bg-[#f1e9da] flex flex-col md:flex-row overflow-hidden font-sans relative">
      
      {/* SEMICIRCULAR BACKGROUND SHAPE */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#583622] rounded-b-[100%] z-0 pointer-events-none"></div>

      {/* LEFT CONTENT */}
      <div className="w-full md:w-[45%] p-8 md:p-16 flex flex-col justify-center relative z-20 order-2 md:order-1">
        
        {/* Header Links */}
        <div className="absolute top-8 left-8 md:left-16 flex space-x-8 text-sm font-medium text-gray-500">
          <span className="text-black cursor-pointer">Breakfast</span>
          <span className="cursor-pointer hover:text-black transition">Lunch</span>
          <span className="cursor-pointer hover:text-black transition">Dinner</span>
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-16 md:mt-0"
          >
            <h3 className="text-[#FF9F0D] text-3xl md:text-4xl font-bold mb-4">
              {activeItem.price}
            </h3>
            <h1 className="text-4xl md:text-6xl font-serif text-[#2c1810] leading-tight mb-6">
              {activeItem.title}
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              {activeItem.description}
            </p>
            <button className="bg-[#FF9F0D] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#e88f0b] transition-colors flex items-center gap-2 w-fit">
              Add to Card
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT VISUALS (Carousel) */}
      <div className="w-full md:w-[55%] relative flex items-center justify-center order-1 md:order-2 h-[50vh] md:h-screen overflow-hidden">
        
        {/* Top Right Icon */}
        <div className="absolute top-8 right-8 z-30">
          <ShoppingBag className="w-6 h-6 text-[#2c1810]" />
        </div>

        {/* ARC ITEMS (Background) */}
        {/* We position items along an arc. 
            -1 is left, +1 is right, 0 is center (hidden behind main).
            We'll show +1, +2, +3 to form the arc.
        */}
        <div className="absolute top-[10%] w-full h-full flex justify-center pointer-events-none z-10">
           {/* Item +1 (Right) */}
           <motion.div 
             className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
             animate={{ top: "20%", right: "15%", scale: 0.8 }}
             transition={{ duration: 0.5 }}
           >
             <Image src={getRelativeItem(1).image} alt="" fill className="object-cover" />
           </motion.div>

           {/* Item +2 (Top Right) */}
           <motion.div 
             className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg"
             animate={{ top: "5%", right: "35%", scale: 0.6 }}
             transition={{ duration: 0.5 }}
           >
             <Image src={getRelativeItem(2).image} alt="" fill className="object-cover" />
           </motion.div>

           {/* Item -1 (Left - for symmetry/transition) */}
           <motion.div 
             className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
             animate={{ top: "20%", left: "15%", scale: 0.8 }}
             transition={{ duration: 0.5 }}
           >
             <Image src={getRelativeItem(-1).image} alt="" fill className="object-cover" />
           </motion.div>

           {/* Item -2 (Top Left) */}
           <motion.div 
             className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg"
             animate={{ top: "5%", left: "35%", scale: 0.6 }}
             transition={{ duration: 0.5 }}
           >
             <Image src={getRelativeItem(-2).image} alt="" fill className="object-cover" />
           </motion.div>
        </div>

        {/* MAIN ACTIVE ITEM */}
        <div className="relative z-20 mt-20 md:mt-40">
           <AnimatePresence mode="popLayout">
             <motion.div
               key={activeItem.id}
               initial={{ scale: 0.8, opacity: 0, rotate: 20 }}
               animate={{ scale: 1, opacity: 1, rotate: 0 }}
               exit={{ scale: 0.8, opacity: 0, rotate: -20 }}
               transition={{ type: "spring", stiffness: 200, damping: 20 }}
               className="w-64 h-64 md:w-[450px] md:h-[450px] rounded-full shadow-2xl border-8 border-white relative overflow-hidden"
             >
               <Image 
                 src={activeItem.image} 
                 alt={activeItem.title} 
                 fill 
                 className="object-cover"
                 priority
               />
             </motion.div>
           </AnimatePresence>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="absolute bottom-8 md:bottom-auto md:top-1/2 w-full px-8 md:px-24 flex justify-between z-30 pointer-events-none">
           <button 
             onClick={prevItem}
             className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2c1810] hover:bg-gray-50 transition pointer-events-auto"
           >
             <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
           </button>
           <button 
             onClick={nextItem}
             className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2c1810] hover:bg-gray-50 transition pointer-events-auto"
           >
             <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
           </button>
        </div>

        {/* Dashed Arc Line (Decorative) */}
        <div className="absolute top-[25%] w-[80%] h-[80%] border-t-2 border-dashed border-[#2c1810]/20 rounded-full pointer-events-none"></div>

      </div>
    </section>
  );
}
