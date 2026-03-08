import Carousel from "@/common/components/carousel-header";
import { getHeroImages } from "@/common/service/hero";

export default async function CaroulselLayout() {
  const imagesFromDb = await getHeroImages();

  const imageUrls = imagesFromDb.map((img) => img.url);

  return (
    <Carousel
      images={imageUrls.length > 0 ? imageUrls : ["/placeholder-hero.jpg"]}
    />
  );
}
