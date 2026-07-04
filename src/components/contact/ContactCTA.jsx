import Link from "next/link";
import { Reveal } from "@/animations/Motion";

export default function ContactCTA({ data }) {
  return (
    <section className="section-shell section-light">
      <Reveal className="site-container text-center">
        <h2 className="mx-auto max-w-5xl font-[var(--heading)] text-[clamp(2.8rem,6vw,6.4rem)] font-semibold leading-[.94] tracking-[-.06em] text-[#061329]">{data.title}</h2>
        <Link className="button-dark mt-10" href="/contact">{data.button}</Link>
      </Reveal>
    </section>
  );
}
