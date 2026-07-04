import PageHero from "@/components/layout/PageHero";
import imageAssets from "@/data/imageAssets";

export default function WhyHero({ data }) {
  return <PageHero data={data} image={imageAssets.architectureTower} index="06" />;
}
