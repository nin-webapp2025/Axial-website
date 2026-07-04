import { Stagger, StaggerItem } from "@/animations/Motion";

export default function Differentiators({ data }) {
  return (
    <section className="section-shell section-light">
      <Stagger className="site-container grid gap-px bg-[#0a2448]/12 md:grid-cols-2 xl:grid-cols-3">
        {data.items.map((item, index) => (
          <StaggerItem key={item}>
            <article className="group relative min-h-64 overflow-hidden bg-white/85 p-7 transition-colors duration-500 hover:bg-[#061329] md:p-9">
              <div className="font-[var(--mono)] text-[9px] text-[#cdaa57]">{String(index + 1).padStart(2, "0")}</div>
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#1f5ea8]/10 transition-transform duration-700 group-hover:scale-[2.4] group-hover:border-white/10" />
              <div className="mt-24 h-px w-10 bg-[#cdaa57] transition-all duration-500 group-hover:w-20" />
              <p className="mt-5 font-[var(--heading)] text-xl font-semibold leading-8 tracking-[-.025em] text-[#061329] transition-colors group-hover:text-white">{item}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
