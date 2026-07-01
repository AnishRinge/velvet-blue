"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow absolute bottom-[-25%] left-1/2 h-[70vw] max-h-[900px] w-[70vw] max-w-[900px] -translate-x-1/2 rounded-full bg-blue/[0.08] blur-[110px]" />
        <div className="absolute inset-x-0 bottom-[28%] h-px bg-gradient-to-r from-transparent via-blue/20 to-transparent" />
      </div>

       <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="overflow-hidden pb-4">
          <motion.h1 className="font-display text-[clamp(4rem,12vw,11rem)] leading-[0.72] tracking-[-0.055em] text-white" initial={{ y: "110%", filter: "blur(16px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            Velvet Blue
          </motion.h1>
        </div>
        <motion.div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 md:items-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.8 }}>
          <p className="max-w-md text-lg font-light leading-relaxed text-white/60 md:text-xl">
            Songs about the things we all feel<br className="hidden sm:block" /> but rarely say.
          </p>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button href="#latest">Latest Release</Button>
          <Button href="#discography" variant="secondary">
            Discography
          </Button>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
