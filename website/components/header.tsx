"use client";

import Image from "next/image";

import { Poppins } from "next/font/google";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import { useState } from "react";

const poppins500 = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Header() {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="text-white body-font fixed w-[calc(100%_-_400px)] ml-[200px] mt-[80px] z-50"
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center relative">
          <a className="flex font-medium items-center mb-4 md:mb-0 absolute left-0">
            <Image src={"/solana-logo.png"} alt="logo" width={50} height={50} />
            <span className="ml-3 text-xl">
              Solana <span className={`${poppins700.className}`}>Watch</span>
            </span>
          </a>
          <nav
            className={`${poppins500.className} flex flex-wrap items-center text-base gap-5 justify-center text-white`}
          >
            <a className="">Home</a>
            <a className="">Shop</a>
            <a className="">Community</a>
            <a href="/whitepaper.pdf" target="_blank" className="">Whitepaper</a>
          </nav>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
