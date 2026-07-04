import Link from "next/link";
import { Reveal } from "@/animations/Motion";

export default function FinalCTA({ data }) {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 text-[#061329] md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,94,168,.13),transparent_45%)]" />
      <div className="tech-grid absolute inset-0 opacity-[.06]" />
      <Reveal className="site-container relative text-center">
        <div className="mx-auto mb-8 h-14 w-px bg-gradient-to-b from-transparent to-[#cdaa57]" />
        <h2 className="mx-auto max-w-5xl font-[var(--heading)] text-[clamp(3rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.065em]">{data.title}</h2>
        <Link className="button-dark mt-10" href="/contact">{data.cta}</Link>
      </Reveal>
    </section>
  );
}
