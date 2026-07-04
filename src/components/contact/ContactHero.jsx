import PageHero from "@/components/layout/PageHero";
import imageAssets from "@/data/imageAssets";

export default function ContactHero({ data }) {
  return <PageHero data={data} image={imageAssets.lagosAerial} index="07" />;
}
