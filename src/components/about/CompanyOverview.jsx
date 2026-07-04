import Image from "next/image";
import { Reveal } from "@/animations/Motion";
import imageAssets from "@/data/imageAssets";

export default function CompanyOverview({ data }) {
  return (
    <section className="section-shell section-light">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="eyebrow text-[#1f5ea8]">{data.title}</div>
          <h2 className="section-heading mt-7">{data.title}</h2>
          <p className="body-lead mt-7 text-[#445067]">{data.description}</p>
        </Reveal>
        <Reveal className="relative" delay={.12}>
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image alt="" className="object-cover" fill sizes="(min-width: 1024px) 55vw, 100vw" src={imageAssets.architectureTower} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061329]/55 to-transparent" />
          </div>
          <div className="tech-grid absolute -bottom-6 -left-6 h-36 w-36 border border-[#0a2448]/15" />
        </Reveal>
      </div>
    </section>
  );
}
