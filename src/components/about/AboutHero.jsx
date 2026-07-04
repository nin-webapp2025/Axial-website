import PageHero from "@/components/layout/PageHero";
import imageAssets from "@/data/imageAssets";

export default function AboutHero({ data }) {
  return <PageHero data={data} image={imageAssets.constructionSite} index="02" />;
}
