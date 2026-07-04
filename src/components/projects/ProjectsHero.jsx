import PageHero from "@/components/layout/PageHero";
import imageAssets from "@/data/imageAssets";

export default function ProjectsHero({ data }) {
  return <PageHero data={data} image={imageAssets.projectCommercial} index="04" />;
}
