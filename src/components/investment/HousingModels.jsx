import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/animations/Motion";
import imageAssets from "@/data/imageAssets";

const images = ["/images/project-residential.jpg", imageAssets.architectureTower, "/images/infrastructure-premium.jpg"];

export default function HousingModels({ data }) {
  return (
    <section className="section-shell section-dark">
      <div className="site-container">
        <Reveal><div className="eyebrow text-gold">{data.title}</div><h2 className="section-heading mt-7 text-white">{data.title}</h2></Reveal>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {data.items.map((item, index) => (
            <StaggerItem key={item}>
              <article className="group overflow-hidden border border-white/10 bg-white/[.035]">
                <div className="relative aspect-[4/3] overflow-hidden"><Image alt="" className="object-cover opacity-70 transition duration-1000 group-hover:scale-105 group-hover:opacity-100" fill sizes="(min-width: 768px) 33vw, 100vw" src={images[index]} /><div className="absolute inset-0 bg-gradient-to-t from-[#020611] to-transparent" /></div>
                <div className="p-7"><div className="font-[var(--mono)] text-[9px] text-[#cdaa57]">{String(index + 1).padStart(2, "0")}</div><h3 className="mt-5 font-[var(--heading)] text-2xl font-semibold tracking-[-.03em] text-white">{item}</h3></div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
