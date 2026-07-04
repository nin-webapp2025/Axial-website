import { Reveal, Stagger, StaggerItem } from "@/animations/Motion";

export default function RiskControl({ data }) {
  return (
    <section className="section-shell section-light">
      <div className="site-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <Reveal><div className="eyebrow text-[#1f5ea8]">{data.title}</div><h2 className="section-heading mt-7">{data.title}</h2></Reveal>
        <Stagger className="grid gap-px bg-[#0a2448]/12 sm:grid-cols-2">
          {data.items.map((item, index) => (
            <StaggerItem key={item}>
              <div className="min-h-48 bg-white/80 p-7"><div className="font-[var(--mono)] text-[9px] text-[#cdaa57]">{String(index + 1).padStart(2, "0")}</div><p className="mt-12 font-[var(--heading)] text-xl font-semibold leading-7 tracking-[-.02em] text-[#061329]">{item}</p></div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
