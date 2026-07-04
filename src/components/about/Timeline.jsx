import { Reveal, Stagger, StaggerItem } from "@/animations/Motion";

export default function Timeline({ data }) {
  return (
    <section className="section-shell section-dark">
      <div className="site-container">
        <Reveal><div className="eyebrow text-gold">{data.title}</div><h2 className="section-heading mt-7 text-white">{data.title}</h2></Reveal>
        <Stagger className="relative mt-16">
          <div className="absolute bottom-0 left-[17px] top-0 w-px bg-gradient-to-b from-[#cdaa57] to-transparent md:left-[31px]" />
          {data.items.map((item, index) => (
            <StaggerItem key={item} className="relative grid grid-cols-[36px_1fr] gap-5 pb-10 md:grid-cols-[64px_1fr] md:gap-9">
              <div className="relative z-10 grid h-9 w-9 place-items-center border border-[#cdaa57] bg-[#020611] font-[var(--mono)] text-[9px] text-[#f2d48a] md:h-16 md:w-16">{String(index + 1).padStart(2, "0")}</div>
              <div className="border-b border-white/10 pb-10 font-[var(--heading)] text-xl font-medium leading-8 text-white/80 md:text-3xl">{item}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
