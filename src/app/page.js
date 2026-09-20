import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard from "@/components/ProductCard";
import LatestProducts from "@/components/LatestProducts";
import getProducts from "@/lib/getProducts";

export default async function Home() {

  const products =
    await getProducts();

  const featuredProducts =
    products.filter(
      (item) =>
        item.featured === "yes"
    );

  const randomFeaturedProducts =
    [...featuredProducts]
      .sort(
        () => Math.random() - 0.5
      )
      .slice(0, 10);

  const randomProducts =
    [...products].sort(
      () => Math.random() - 0.5
    );

  return (
    <>
      <Hero
        product={
          featuredProducts[0] || []
        }
      />

      <FeaturedProducts
        products={
          randomFeaturedProducts
        }
      />

      <LatestProducts
        products={randomProducts}
      />
    </>
  );
}