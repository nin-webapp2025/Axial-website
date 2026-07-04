import Link from "next/link";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/animations/Motion";
import imageAssets from "@/data/imageAssets";

const images = [
  imageAssets.projectSubstation,
  "/images/project-residential.jpg",
  "/images/project-bridge.jpg",
  imageAssets.projectCommercial,
];

export default function ProjectsSlider({ data }) {
  return (
    <section className="section-shell section-light overflow-hidden">
      <div className="site-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="eyebrow text-[#1f5ea8]">{data.title}</div>
            <h2 className="section-heading mt-7">{data.title}</h2>
            <p className="body-lead mt-6 text-[#445067]">{data.description}</p>
          </Reveal>
          <Reveal delay={.12}><Link className="button-dark" href="/projects">{data.title}</Link></Reveal>
        </div>
        <Stagger className="mt-16 grid gap-5 md:grid-cols-2">
          {data.items.map((item, index) => (
            <StaggerItem key={item} className={index % 2 ? "md:translate-y-16" : ""}>
              <article className="group relative aspect-[5/4] overflow-hidden bg-[#061329]">
                <Image alt="" className="object-cover transition duration-1000 ease-out group-hover:scale-105" fill sizes="(min-width: 768px) 50vw, 100vw" src={images[index]} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020611] via-[#020611]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="mb-4 font-[var(--mono)] text-[10px] tracking-[.22em] text-[#f2d48a]">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="max-w-md font-[var(--heading)] text-2xl font-semibold leading-tight tracking-[-.03em] text-white md:text-3xl">{item}</h3>
                </div>
                <div className="absolute right-6 top-6 grid h-10 w-10 place-items-center border border-white/25 text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#cdaa57] group-hover:text-[#020611]">+</div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
