import HousingModels from "@/components/investment/HousingModels";
import InvestmentCTA from "@/components/investment/InvestmentCTA";
import InvestmentHero from "@/components/investment/InvestmentHero";
import InvestmentProcess from "@/components/investment/InvestmentProcess";
import RiskControl from "@/components/investment/RiskControl";
import axialContent from "@/data/axialContent";

export const metadata = {
  title:
    axialContent.pages.find((p) => p.page === "investment")?.sections.hero.title,
  description:
    axialContent.pages.find((p) => p.page === "investment")?.sections.hero.description,
};

export default function InvestmentPage() {
  const pageData = axialContent.pages.find((p) => p.page === "investment");

  return (
    <>
      <InvestmentHero data={pageData.sections.hero} />
      <InvestmentProcess data={pageData.sections.investmentModel} />
      <HousingModels data={pageData.sections.housingModels} />
      <RiskControl data={pageData.sections.riskControl} />
      <InvestmentCTA data={pageData.sections.cta} />
    </>
  );
}
