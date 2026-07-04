import { Stagger, StaggerItem } from "@/animations/Motion";

export default function ServicesGrid({ data }) {
  return (
    <section className="section-shell section-light">
      <Stagger className="site-container grid gap-px overflow-hidden border border-[#0a2448]/12 bg-[#0a2448]/12 md:grid-cols-2">
        {data.items.map((item) => (
          <StaggerItem key={item.title}>
            <article className="group relative min-h-80 overflow-hidden bg-white/85 p-7 transition-colors duration-500 hover:bg-[#061329] md:p-10">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#1f5ea8]/10 transition-all duration-700 group-hover:scale-[2.3] group-hover:border-white/10" />
              <div className="mb-20 h-px w-12 bg-[#cdaa57] transition-all duration-500 group-hover:w-28" />
              <h2 className="relative max-w-sm font-[var(--heading)] text-2xl font-semibold leading-tight tracking-[-.035em] text-[#061329] transition-colors group-hover:text-white md:text-3xl">{item.title}</h2>
              <p className="relative mt-5 max-w-md text-sm leading-7 text-[#5a6475] transition-colors group-hover:text-white/60 md:text-base">{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
