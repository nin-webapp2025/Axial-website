import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/animations/Motion";

export default function InvestmentTeaser({ data }) {
  return (
    <section className="section-shell section-dark">
      <div className="site-container">
        <div className="relative grid min-h-[520px] items-end overflow-hidden border border-white/10 lg:grid-cols-2 lg:items-center">
          <div className="absolute inset-0 lg:relative lg:h-full lg:min-h-[520px]">
            <Image alt="" className="object-cover opacity-45 lg:opacity-100" fill sizes="(min-width: 1024px) 50vw, 100vw" src="/images/infrastructure-premium.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020611] via-[#020611]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#020611]" />
          </div>
          <Reveal className="relative z-10 p-7 md:p-14">
            <div className="eyebrow text-gold">{data.title}</div>
            <h2 className="section-heading mt-7 text-white">{data.title}</h2>
            <p className="body-lead mt-7 text-white/62">{data.description}</p>
            <Link className="button-gold mt-9" href="/investment">{data.cta}</Link>
          </Reveal>
          <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-[#cdaa57]/35">
            <span className="absolute right-5 top-5 h-2 w-2 bg-[#cdaa57] shadow-[0_0_22px_#cdaa57]" />
          </div>
        </div>
      </div>
    </section>
  );
}
