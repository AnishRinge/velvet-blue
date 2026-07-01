"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Close, Menu } from "@/components/icons";

const links = [
  { href: "/#latest", label: "Latest" },
  { href: "/#discography", label: "Music" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-3 flex h-16 max-w-[1400px] items-center justify-between border border-white/10 bg-ink/75 px-5 backdrop-blur-xl md:mt-5 md:h-[68px] md:px-7" aria-label="Main navigation">
        <Link href="/" className="relative z-50 font-display text-xl tracking-tight text-white" aria-label="Velvet Blue home">
          Velvet Blue<span className="text-blue">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <button className="relative z-50 grid h-11 w-11 place-items-center text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-12 pt-28 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-blue/10 blur-[110px]" />
            <div className="relative space-y-1">
              {links.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }}>
                  <Link href={link.href} className="flex items-center justify-between border-b border-white/10 py-5 font-display text-5xl text-white">
                    {link.label}<span className="font-sans text-xs text-white/30">0{index + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
