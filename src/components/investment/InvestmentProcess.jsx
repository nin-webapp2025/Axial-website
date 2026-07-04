import { Reveal, Stagger, StaggerItem } from "@/animations/Motion";

export default function InvestmentProcess({ data }) {
  return (
    <section className="section-shell section-light">
      <div className="site-container">
        <Reveal><div className="eyebrow text-[#1f5ea8]">{data.title}</div><h2 className="section-heading mt-7">{data.title}</h2></Reveal>
        <Stagger className="relative mt-16 grid gap-0 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#0a2448]/15 md:block" />
          {data.steps.map((step, index) => (
            <StaggerItem key={step} className="relative border-l border-[#0a2448]/15 pb-8 pl-6 md:border-0 md:px-3 md:pb-0">
              <div className="relative z-10 grid h-14 w-14 place-items-center border border-[#cdaa57] bg-[#f7f9fc] font-[var(--mono)] text-[10px] text-[#7b5a1b]">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="mt-7 max-w-[12rem] font-[var(--heading)] text-lg font-semibold leading-7 tracking-[-.02em] text-[#061329]">{step}</h3>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
