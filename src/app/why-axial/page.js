import Differentiators from "@/components/whyAxial/Differentiators";
import TrustSection from "@/components/whyAxial/TrustSection";
import WhyHero from "@/components/whyAxial/WhyHero";
import axialContent from "@/data/axialContent";

export const metadata = {
  title:
    axialContent.pages.find((p) => p.page === "why-axial")?.sections.hero.title,
  description:
    axialContent.pages.find((p) => p.page === "why-axial")?.sections.hero.description,
};

export default function WhyAxialPage() {
  const pageData = axialContent.pages.find((p) => p.page === "why-axial");

  return (
    <>
      <WhyHero data={pageData.sections.hero} />
      <Differentiators data={pageData.sections.differentiators} />
      <TrustSection data={pageData.sections.trust} />
    </>
  );
}
