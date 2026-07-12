import Papa from "papaparse";
import { notFound } from "next/navigation";

async function getProducts() {

  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/1rHypvbs4XquG6v97B4UTy1hEisWtCyy3TTWXBEiBl3M/export?format=csv&gid=0",
    {
      cache: "no-store",
    }
  );

  const csvText = await res.text();

  const parsed = Papa.parse(
    csvText,
    {
      header: true,
      skipEmptyLines: true,
    }
  );

  return parsed.data;
}

export default async function ProductPage({
  params,
}) {

  const products =
    await getProducts();

  const { slug } =
    await params;

  const product =
    products.find(
      (item) =>
        item.slug?.trim() ===
        slug?.trim()
    );

  if (!product) {
    notFound();
  }

  const whatsappUrl =
    `https://wa.me/97471083700?text=${encodeURIComponent(
      `Hello, I want to order ${product.name}`
    )}`;

  return (
    <div className="max-w-7xl mx-auto p-5">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl text-green-600 mt-3">
            {product.price} QAR
          </p>

          <p className="mt-5">
            {product.description}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Order on WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}