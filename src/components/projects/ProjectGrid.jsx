import Image from "next/image";
import { Stagger, StaggerItem } from "@/animations/Motion";
import imageAssets from "@/data/imageAssets";

const images = [imageAssets.projectSubstation, "/images/project-bridge.jpg", "/images/project-residential.jpg", imageAssets.projectCommercial];

export default function ProjectGrid({ data }) {
  return (
    <section className="section-shell section-light">
      <Stagger className="site-container grid gap-6 lg:grid-cols-2">
        {data.items.map((item, index) => (
          <StaggerItem key={item.name}>
            <article className="group overflow-hidden bg-[#061329]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image alt="" className="object-cover transition-transform duration-1000 group-hover:scale-105" fill sizes="(min-width: 1024px) 50vw, 100vw" src={images[index]} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020611]/60 to-transparent" />
              </div>
              <div className="flex min-h-40 items-end justify-between gap-5 p-7 md:p-9">
                <div><div className="font-[var(--mono)] text-[9px] uppercase tracking-[.2em] text-[#cdaa57]">{item.category}</div><h2 className="mt-4 font-[var(--heading)] text-2xl font-semibold tracking-[-.03em] text-white md:text-3xl">{item.name}</h2></div>
                <div className="grid h-11 w-11 shrink-0 place-items-center border border-white/20 text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#cdaa57] group-hover:text-[#020611]">+</div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
