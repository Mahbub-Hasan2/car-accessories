import Papa from "papaparse";

import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard from "@/components/ProductCard";
import LatestProducts from "@/components/LatestProducts";

async function getProducts() {

  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/1rHypvbs4XquG6v97B4UTy1hEisWtCyy3TTWXBEiBl3M/export?format=csv&gid=0",
    {
      cache: "no-store",
    }
  );

  const csvText = await res.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data;
}

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