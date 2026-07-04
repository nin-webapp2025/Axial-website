import ProjectCategories from "@/components/projects/ProjectCategories";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectsHero from "@/components/projects/ProjectsHero";
import axialContent from "@/data/axialContent";

export const metadata = {
  title:
    axialContent.pages.find((p) => p.page === "projects")?.sections.hero.title,
  description:
    axialContent.pages.find((p) => p.page === "projects")?.sections.hero.description,
};

export default function ProjectsPage() {
  const pageData = axialContent.pages.find((p) => p.page === "projects");

  return (
    <>
      <ProjectsHero data={pageData.sections.hero} />
      <ProjectCategories data={pageData.sections.projectCategories} />
      <ProjectGrid data={pageData.sections.projectList} />
    </>
  );
}
