"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, premiumEase } from "@/animations/Motion";
import imageAssets from "@/data/imageAssets";

export default function HeroSection({ data }) {
  return (
    <section className="grain relative flex min-h-[700px] items-end overflow-hidden bg-[#020611] pt-[76px] lg:min-h-[680px]">
      <motion.div className="absolute inset-0" initial={{ opacity: 0, scale: 1.12 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: premiumEase }}>
        <Image alt="" className="object-cover object-center md:object-right" fill priority sizes="100vw" src={imageAssets.heroConstruction} />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,17,.98)_0%,rgba(2,6,17,.9)_43%,rgba(2,6,17,.2)_100%),linear-gradient(0deg,#020611_0%,transparent_55%)]" />
      <div className="tech-grid absolute inset-0 opacity-20" />
      <motion.div className="absolute inset-y-0 left-[58%] hidden w-px bg-gradient-to-b from-transparent via-[#f2d48a]/60 to-transparent md:block" animate={{ opacity: [.15, .8, .15] }} transition={{ duration: 3.5, repeat: Infinity }} />
      <motion.div className="absolute right-[8%] top-[20%] hidden h-64 w-64 rounded-full border border-white/15 lg:block" animate={{ rotate: 360 }} transition={{ duration: 35, ease: "linear", repeat: Infinity }}>
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#f2d48a] shadow-[0_0_30px_#f2d48a]" />
      </motion.div>

      <div className="site-container relative z-10 pb-12 pt-24 md:pb-14 md:pt-28">
        <div className="max-w-[780px]">
          <motion.div className="eyebrow text-gold" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75, delay: .2, ease: premiumEase }}>{data.tagline}</motion.div>
          <motion.h1 className="mt-6 font-[var(--heading)] text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[.84] tracking-[-.07em] text-white" initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: .25, ease: premiumEase }}>{data.title}</motion.h1>
          <motion.p className="mt-8 max-w-2xl text-base leading-8 text-white/68 md:text-lg" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .5, ease: premiumEase }}>{data.description}</motion.p>
          <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .68, ease: premiumEase }}>
            <Link className="button-gold" href="/projects">{data.primaryCTA}</Link>
            <Link className="button-ghost" href="/contact">{data.secondaryCTA}</Link>
          </motion.div>
        </div>
        <motion.div className="mt-10 flex items-center gap-4 font-[var(--mono)] text-[9px] uppercase tracking-[.25em] text-white/35" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
          <span className="h-px w-16 bg-white/20" />
          <span>{data.tagline}</span>
        </motion.div>
      </div>
    </section>
  );
}
