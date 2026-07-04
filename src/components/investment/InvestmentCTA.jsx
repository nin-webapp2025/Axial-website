import Link from "next/link";
import { Reveal } from "@/animations/Motion";

export default function InvestmentCTA({ data }) {
  return (
    <section className="section-shell section-dark border-t border-white/10">
      <Reveal className="site-container text-center">
        <h2 className="mx-auto max-w-5xl font-[var(--heading)] text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[.95] tracking-[-.06em] text-white">{data.title}</h2>
        <Link className="button-gold mt-10" href="/contact">{data.button}</Link>
      </Reveal>
    </section>
  );
}
