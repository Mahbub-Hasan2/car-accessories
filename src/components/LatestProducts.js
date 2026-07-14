"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function LatestProducts({
  products,
}) {

  const [visible, setVisible] =
    useState(10);

  const visibleProducts =
    products.slice(0, visible);

  return (
    <section className="max-w-7xl mx-auto px-2 md:px-5 py-2 md:py-10">

      <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-8">
        Latest Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-5">

        {visibleProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}

      </div>

      {visible < products.length && (

        <div className="text-center mt-6 md:mt-10">

          <button
            onClick={() =>
              setVisible(
                visible + 10
              )
            }
            className="
              bg-black
              text-white
              px-6
              py-3
              rounded-xl
              font-medium
              hover:bg-gray-800
              transition
            "
          >
            Load More
          </button>

        </div>

      )}

    </section>
  );
}