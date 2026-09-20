import ProductsList from "./ProductsList";

export const metadata = {
  title: "All Products - Gari Qatar",
  description:
    "Browse car covers, sunshades, chargers, cleaning tools and more car accessories in Qatar. Order via WhatsApp with delivery across Qatar.",
};

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