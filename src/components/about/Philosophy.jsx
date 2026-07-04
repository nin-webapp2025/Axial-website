import { Reveal } from "@/animations/Motion";

export default function Philosophy({ data }) {
  return (
    <section className="section-shell section-light">
      <div className="site-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
        <Reveal><div className="eyebrow text-[#1f5ea8]">{data.title}</div><h2 className="section-heading mt-7">{data.title}</h2></Reveal>
        <Reveal delay={.12}>
          <p className="border-l border-[#cdaa57] pl-7 font-[var(--heading)] text-2xl font-medium leading-[1.45] tracking-[-.025em] text-[#243248] md:pl-12 md:text-4xl">{data.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
