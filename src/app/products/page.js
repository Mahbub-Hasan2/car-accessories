import ProductsList from "./ProductsList";

export default async function ProductsPage({
  searchParams,
}) {

  const params = await searchParams;

  return (
    <ProductsList
      initialSearch={
        params.search || ""
      }
      initialCategory={
        params.category || "All"
      }
    />
  );
}