import CompanyInfo from "@/components/contact/CompanyInfo";
import ContactCTA from "@/components/contact/ContactCTA";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import axialContent from "@/data/axialContent";

export const metadata = {
  title:
    axialContent.pages.find((p) => p.page === "contact")?.sections.hero.title,
  description:
    axialContent.pages.find((p) => p.page === "contact")?.sections.hero.description,
};

export default function ContactPage() {
  const pageData = axialContent.pages.find((p) => p.page === "contact");

  return (
    <>
      <ContactHero data={pageData.sections.hero} />
      <ContactForm data={pageData.sections.form} />
      <CompanyInfo data={pageData.sections.companyInfo} />
      <ContactCTA data={pageData.sections.cta} />
    </>
  );
}
