import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/animations/Motion";
import imageAssets from "@/data/imageAssets";

export default function TrustSection({ data }) {
  return (
    <section className="section-shell section-dark">
      <div className="site-container grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal className="relative">
          <div className="relative aspect-[5/4] overflow-hidden"><Image alt="" className="object-cover" fill sizes="(min-width: 1024px) 50vw, 100vw" src={imageAssets.projectSubstation} /><div className="absolute inset-0 bg-gradient-to-t from-[#020611]/70 to-transparent" /><div className="tech-grid absolute inset-0 opacity-20" /></div>
          <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-[#cdaa57]/50" />
        </Reveal>
        <div>
          <Reveal><div className="eyebrow text-gold">{data.title}</div><h2 className="section-heading mt-7 text-white">{data.title}</h2></Reveal>
          <Stagger className="mt-10 border-t border-white/10">
            {data.items.map((item, index) => (
              <StaggerItem key={item} className="flex items-center gap-6 border-b border-white/10 py-6">
                <span className="font-[var(--mono)] text-[9px] text-[#cdaa57]">{String(index + 1).padStart(2, "0")}</span><p className="font-[var(--heading)] text-xl font-medium text-white/80">{item}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
