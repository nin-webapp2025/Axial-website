"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import axialContent from "@/data/axialContent";

const formatLabel = (page) =>
  page
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navPages = axialContent.pages.filter((page) => page.page !== "contact");
  const primaryCta = axialContent.pages.find((page) => page.page === "home")?.sections.finalCTA.cta;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020611]/75 backdrop-blur-2xl">
      <div className="site-container flex h-[76px] items-center justify-between gap-6">
        <Link className="group flex items-center gap-3" href="/" onClick={() => setIsOpen(false)}>
          <span className="relative grid h-9 w-9 place-items-center border border-[#cdaa57]/50 text-[13px] font-bold text-[#f2d48a]">
            A
            <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-[#cdaa57] transition-transform duration-500 group-hover:rotate-45" />
          </span>
          <span>
            <span className="block font-[var(--heading)] text-sm font-bold tracking-[0.04em] text-white md:text-base">{axialContent.siteName}</span>
            <span className="mt-0.5 block font-[var(--mono)] text-[8px] uppercase tracking-[0.28em] text-[#cdaa57]">{axialContent.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navPages.map((page) => {
            const active = pathname === page.slug;
            return (
              <Link key={page.page} className="relative py-2 font-[var(--mono)] text-[10px] uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white" href={page.slug}>
                {formatLabel(page.page)}
                {active && <motion.span className="absolute inset-x-0 -bottom-1 h-px bg-[#f2d48a]" layoutId="nav-active" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link className="button-gold hidden min-h-[42px] px-5 md:inline-flex" href="/contact">{primaryCta}</Link>
          <button aria-expanded={isOpen} aria-label="Toggle navigation" className="relative grid h-11 w-11 place-items-center border border-white/15 text-white lg:hidden" onClick={() => setIsOpen((open) => !open)} type="button">
            <span className="sr-only">Menu</span>
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav className="border-t border-white/10 bg-[#020611]/95 px-5 py-7 backdrop-blur-2xl lg:hidden" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: .45, ease: [0.16, 1, 0.3, 1] }}>
            <div className="grid gap-1">
              {axialContent.pages.map((page, index) => (
                <Link key={page.page} className="flex items-center justify-between border-b border-white/10 py-4 font-[var(--heading)] text-xl text-white" href={page.slug} onClick={() => setIsOpen(false)}>
                  {formatLabel(page.page)}
                  <span className="font-[var(--mono)] text-[9px] text-[#cdaa57]">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
