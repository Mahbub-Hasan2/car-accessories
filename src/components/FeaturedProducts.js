import ProductCard from "./ProductCard";

export default function FeaturedProducts({
  products,
}) {

  const featuredProducts =
    products.filter(
      (item) =>
        item.featured === "yes"
    );

  return (
    <section className="max-w-7xl mx-auto  px-2 md:px-5 py-2 md:py-10">

      <div className="flex justify-between items-center mb-4 md:mb-8">

        <h2 className=" text-xl md:text-3xl font-bold">
          Featured Products
        </h2>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">

        {featuredProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}

      </div>

    </section>
  );
}