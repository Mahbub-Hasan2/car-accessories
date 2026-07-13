import Papa from "papaparse";

import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard from "@/components/ProductCard";

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

  const products = await getProducts();


const featuredProduct = products.find(
  (item) => item.featured === "yes"
);

  return (
    <>
      <Hero product={featuredProduct} />

      <FeaturedProducts
        products={products}
      />

      <section className="max-w-7xl mx-auto px-2 md:px-5 py-2 md:py-10">

        <h2 className=" text-xl md:text-3xl font-bold mb-2 md:mb-8">
          Latest Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5">

          {products
            .slice(0, 8)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

        </div>

      </section>
    </>
  );
}