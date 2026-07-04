import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/animations/Motion";
import imageAssets from "@/data/imageAssets";

export default function CompanyInfo({ data }) {
  return (
    <section className="section-shell section-dark">
      <div className="site-container grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative aspect-[5/4] overflow-hidden border border-white/10">
          <Image alt="" className="object-cover opacity-80" fill sizes="(min-width: 1024px) 50vw, 100vw" src={imageAssets.lagosAerial} />
          <div className="absolute inset-0 bg-[#061329]/30" />
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#cdaa57] shadow-[0_0_35px_#f2d48a]" />
        </Reveal>
        <div>
          <Reveal><div className="eyebrow text-gold">{data.title}</div><h2 className="section-heading mt-7 text-white">{data.title}</h2></Reveal>
          <Stagger className="mt-10 border-t border-white/10">
            {[data.email, data.phone, data.address].filter((item) => !item.startsWith("{{")).map((item, index) => (
              <StaggerItem key={item} className="grid grid-cols-[45px_1fr] gap-4 border-b border-white/10 py-6"><span className="font-[var(--mono)] text-[9px] text-[#cdaa57]">{String(index + 1).padStart(2, "0")}</span><p className="break-words text-sm leading-7 text-white/65">{item}</p></StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
