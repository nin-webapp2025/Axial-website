import { Reveal } from "@/animations/Motion";

export default function ProjectCategories({ data }) {
  return (
    <section className="border-b border-white/10 bg-[#020611] py-8">
      <Reveal className="site-container flex flex-wrap gap-3">
        {data.items.map((item) => (
          <span key={item} className="border border-white/15 px-4 py-3 font-[var(--mono)] text-[9px] uppercase tracking-[.14em] text-white/55 transition-colors hover:border-[#cdaa57] hover:text-[#f2d48a]">{item}</span>
        ))}
      </Reveal>
    </section>
  );
}
