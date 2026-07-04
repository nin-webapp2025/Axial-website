"use client";

import { motion, Reveal } from "@/animations/Motion";

export default function CoreValues({ data }) {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#020611] py-16">
      <Reveal className="site-container mb-10"><div className="eyebrow text-gold">{data.title}</div></Reveal>
      <motion.div className="flex w-max gap-5" animate={{ x: [0, "-50%"] }} transition={{ duration: 30, ease: "linear", repeat: Infinity }}>
        {[...data.items, ...data.items].map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-5 whitespace-nowrap border-y border-white/10 px-8 py-6 font-[var(--heading)] text-2xl font-medium text-white/80 md:text-4xl">
            <span className="h-2 w-2 rotate-45 bg-[#cdaa57]" />{item}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
