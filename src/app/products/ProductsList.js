"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductsList({
  initialSearch,
  initialCategory,
}) {


  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function loadProducts() {

      const res =
        await fetch("/api/products");

      const data =
        await res.json();

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
      initialCategory === "All" ||
      item.category === initialCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto p-5">

      <h1 className="text-3xl font-bold mb-2">
        Products
      </h1>

      <p className="text-gray-500 mb-6">
        Found {filtered.length} products
      </p>

      <div className="grid md:grid-cols-4 gap-5">

        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}