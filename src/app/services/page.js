import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";
import axialContent from "@/data/axialContent";

export const metadata = {
  title:
    axialContent.pages.find((p) => p.page === "services")?.sections.hero.title,
  description:
    axialContent.pages.find((p) => p.page === "services")?.sections.hero.description,
};

export default function ServicesPage() {
  const pageData = axialContent.pages.find((p) => p.page === "services");

  return (
    <>
      <ServicesHero data={pageData.sections.hero} />
      <ServicesGrid data={pageData.sections.servicesList} />
    </>
  );
}
