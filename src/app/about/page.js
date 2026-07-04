import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import Divisions from "@/components/about/Divisions";
import Philosophy from "@/components/about/Philosophy";
import Timeline from "@/components/about/Timeline";
import axialContent from "@/data/axialContent";

export const metadata = {
  title: axialContent.pages.find((p) => p.page === "about")?.sections.hero.title,
  description:
    axialContent.pages.find((p) => p.page === "about")?.sections.hero.description,
};

export default function AboutPage() {
  const pageData = axialContent.pages.find((p) => p.page === "about");

  return (
    <>
      <AboutHero data={pageData.sections.hero} />
      <CompanyOverview data={pageData.sections.companyOverview} />
      <Divisions data={pageData.sections.divisions} />
      <Philosophy data={pageData.sections.philosophy} />
      <Timeline data={pageData.sections.timeline} />
    </>
  );
}
