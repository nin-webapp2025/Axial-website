import { Reveal, Stagger, StaggerItem } from "@/animations/Motion";

export default function ServicesGrid({ data }) {
  return (
    <section className="section-shell section-light">
      <div className="site-container">
        <Reveal><div className="eyebrow text-[#1f5ea8]">{data.title}</div><h2 className="section-heading mt-7 max-w-3xl">{data.title}</h2></Reveal>
        <Stagger className="mt-16 border-t border-[#0a2448]/15">
          {data.items.map((item, index) => (
            <StaggerItem key={item}>
              <article className="group grid min-h-28 grid-cols-[54px_1fr_36px] items-center gap-4 border-b border-[#0a2448]/15 py-7 transition-colors duration-500 hover:bg-white/70 md:grid-cols-[100px_1fr_80px] md:px-6">
                <span className="font-[var(--mono)] text-[10px] text-[#1f5ea8]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-[var(--heading)] text-xl font-semibold tracking-[-.025em] text-[#061329] transition-transform duration-500 group-hover:translate-x-3 md:text-3xl">{item}</h3>
                <span className="grid h-9 w-9 place-items-center border border-[#0a2448]/20 text-[#061329] transition-all duration-500 group-hover:rotate-45 group-hover:border-[#cdaa57] group-hover:bg-[#cdaa57]">↗</span>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
