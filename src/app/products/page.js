import ProductCard from "@/components/ProductCard";
import Papa from "papaparse";

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
  });

  return parsed.data;
}


export default async function ProductsPage() {

  
  const products = await getProducts();

  return (
    <div className="container mx-auto py-10">

      <h1 className="text-3xl font-bold mb-8">
        All Products
      </h1>

      <div className="grid md:grid-cols-4 gap-5">

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </div>
  );
}