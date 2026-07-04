import { Reveal, Stagger, StaggerItem } from "@/animations/Motion";

export default function Divisions({ data }) {
  return (
    <section className="section-shell section-dark">
      <div className="site-container">
        <Reveal><div className="eyebrow text-gold">{data.title}</div><h2 className="section-heading mt-7 text-white">{data.title}</h2></Reveal>
        <Stagger className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
          {data.items.map((item, index) => (
            <StaggerItem key={item}>
              <article className="group min-h-72 bg-[#061329] p-7 transition-colors duration-500 hover:bg-[#0a2448] md:p-9">
                <div className="font-[var(--mono)] text-[10px] tracking-[.2em] text-[#cdaa57]">{String(index + 1).padStart(2, "0")}</div>
                <div className="my-12 h-px w-10 bg-[#cdaa57] transition-all duration-500 group-hover:w-24" />
                <p className="font-[var(--heading)] text-xl font-medium leading-8 text-white">{item}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
