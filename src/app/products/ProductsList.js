"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductsList({
  initialSearch,
  initialCategory,
}) {

  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {

    async function loadProducts() {

      const res = await fetch("/api/products");

      const data = await res.json();

      setProducts(data);

    }

    loadProducts();

  }, []);

  const filtered = products.filter((item) => {

    const search =
      initialSearch?.toLowerCase() || "";

    const matchSearch =
      search === "" ||

      item.name
        ?.toLowerCase()
        .includes(search) ||

      item.keywords
        ?.toLowerCase()
        .includes(search);

    const matchCategory =
      !initialCategory ||
      initialCategory === "All" ||
      item.category === initialCategory;

    return matchSearch && matchCategory;

  });

  const visibleProducts =
    filtered.slice(0, visibleCount);

  return (

    <div className="max-w-7xl mx-auto px-2 md:px-5 py-5">

      <div className="mb-6">

        <h1 className="text-2xl md:text-4xl font-bold">
          Products
        </h1>

        <p className="text-gray-500 mt-2">
          Found {filtered.length} products
        </p>

      </div>

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-2
          md:gap-5
        "
      >

        {visibleProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

      {visibleCount < filtered.length && (

        <div className="flex justify-center mt-8">

          <button

            onClick={() =>
              setVisibleCount(
                prev => prev + 20
              )
            }

            className="
              bg-black
              text-white
              px-8
              py-3
              rounded-xl
              font-medium
              hover:bg-gray-800
              transition
            "
          >
            Load More Products
          </button>

        </div>

      )}

    </div>

  );

}