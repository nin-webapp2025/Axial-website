import Image from "next/image";
import Link from "next/link";
import { ParallaxMedia, Reveal } from "@/animations/Motion";
import imageAssets from "@/data/imageAssets";

export default function AboutPreview({ data }) {
  return (
    <section className="section-shell section-dark overflow-hidden">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 border-l border-t border-[#cdaa57]/50" />
          <ParallaxMedia className="media-frame aspect-[4/5] md:aspect-[5/4] lg:aspect-[5/4]">
            <Image alt="" className="object-cover" fill sizes="(min-width: 1024px) 50vw, 100vw" src={imageAssets.constructionSite} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020611]/75 via-transparent to-transparent" />
            <div className="tech-grid absolute inset-0 opacity-15" />
          </ParallaxMedia>
          <div className="glass-panel absolute -bottom-7 right-[-10px] w-[72%] p-5 md:right-[-28px] md:p-7">
            <div className="eyebrow text-gold">{data.cta}</div>
          </div>
        </Reveal>
        <Reveal delay={.15}>
          <div className="eyebrow text-gold">{data.title}</div>
          <h2 className="section-heading mt-7 text-white">{data.title}</h2>
          <p className="body-lead mt-7 text-white/62">{data.description}</p>
          <Link className="button-gold mt-9" href="/about">{data.cta}</Link>
        </Reveal>
      </div>
    </section>
  );
}
