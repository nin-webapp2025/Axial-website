import AboutPreview from "@/components/home/AboutPreview";
import CoreValues from "@/components/home/CoreValues";
import FinalCTA from "@/components/home/FinalCTA";
import HeroSection from "@/components/home/HeroSection";
import InvestmentTeaser from "@/components/home/InvestmentTeaser";
import ProjectsSlider from "@/components/home/ProjectsSlider";
import ServicesGrid from "@/components/home/ServicesGrid";
import axialContent from "@/data/axialContent";

export const metadata = {
  title: axialContent.siteName,
  description:
    axialContent.pages.find((p) => p.page === "home")?.sections.hero.description,
};

export default function HomePage() {
  const pageData = axialContent.pages.find((p) => p.page === "home");

  return (
    <>
      <HeroSection data={pageData.sections.hero} />
      <ServicesGrid data={pageData.sections.servicesOverview} />
      <AboutPreview data={pageData.sections.aboutPreview} />
      <CoreValues data={pageData.sections.coreValues} />
      <ProjectsSlider data={pageData.sections.featuredProjects} />
      <InvestmentTeaser data={pageData.sections.investmentTeaser} />
      <FinalCTA data={pageData.sections.finalCTA} />
    </>
  );
}
