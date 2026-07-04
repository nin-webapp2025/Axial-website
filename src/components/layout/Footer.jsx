import Link from "next/link";
import axialContent from "@/data/axialContent";

const formatLabel = (page) =>
  page
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export default function Footer() {
  const home = axialContent.pages.find((page) => page.page === "home");
  const contact = axialContent.pages.find((page) => page.page === "contact");

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#01040c]">
      <div className="tech-grid absolute inset-0 opacity-[.08]" />
      <div className="site-container relative py-16 md:py-20">
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.4fr_.7fr_.9fr]">
          <div>
            <div className="eyebrow text-gold">{axialContent.tagline}</div>
            <div className="mt-7 max-w-2xl font-[var(--heading)] text-4xl font-semibold leading-[1.05] tracking-[-.04em] text-white md:text-6xl">{home.sections.finalCTA.title}</div>
          </div>
          <div>
            <div className="mb-6 font-[var(--mono)] text-[10px] uppercase tracking-[.22em] text-white/35">{axialContent.siteName}</div>
            <div className="grid gap-3">
              {axialContent.pages.map((page) => <Link key={page.page} className="w-fit text-sm text-white/65 transition-colors hover:text-[#f2d48a]" href={page.slug}>{formatLabel(page.page)}</Link>)}
            </div>
          </div>
          <div>
            <div className="mb-6 font-[var(--mono)] text-[10px] uppercase tracking-[.22em] text-white/35">{contact.sections.companyInfo.title}</div>
            <div className="space-y-3 text-sm leading-7 text-white/65">
              {[contact.sections.companyInfo.email, contact.sections.companyInfo.phone, contact.sections.companyInfo.address]
                .filter((item) => !item.startsWith("{{"))
                .map((item) => <p key={item}>{item}</p>)}
            </div>
            <Link className="button-gold mt-8" href="/contact">{contact.sections.cta.button}</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 font-[var(--mono)] text-[9px] uppercase tracking-[.18em] text-white/30 md:flex-row md:items-center md:justify-between">
          <span>{axialContent.siteName}</span>
          <span>{axialContent.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
