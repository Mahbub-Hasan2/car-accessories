"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }

    loadProducts();
  }, []);

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        products.map((item) => item.category)
      ),
    ];
  }, [products]);

  const suggestions = useMemo(() => {

    if (!query.trim()) return [];

    const keywords = products.flatMap(
      (item) =>
        item.keywords
          ?.split(",")
          .map((k) => k.trim())
          .filter(Boolean)
    );

    return [...new Set(keywords)]
      .filter((keyword) =>
        keyword
          .toLowerCase()
          .includes(
            query.toLowerCase()
          )
      )
      .slice(0, 10);

  }, [query, products]);

  function handleSearch(e) {

    e.preventDefault();

    const params = new URLSearchParams();

    if (query.trim()) {
      params.set("search", query);
    }

    if (category !== "All") {
      params.set("category", category);
    }

    router.push(`/products?${params}`);
    setQuery("");
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-7xl mx-auto px-4">

        <div className="h-16 flex items-center gap-4">

          <Link
            href="/"
            className="font-bold text-xl"
          >
            Qiftly Auto
          </Link>

          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 gap-2 relative"
          >

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="border rounded-lg px-3"
            >
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                >
                  {cat}
                </option>
              ))}
            </select>

            <div className="relative flex-1">

              <input
                value={query}
                onChange={(e) =>
                  setQuery(e.target.value)
                }
                placeholder="Search products..."
                className="w-full border rounded-lg px-4 py-2"
              />

              {suggestions.length > 0 && (

                <div className="absolute top-full left-0 right-0 bg-white border rounded-xl shadow-lg mt-1 z-50">

                  {suggestions.map((keyword) => (

                    <button
                      key={keyword}
                      type="button"
                      onClick={() => {

                        router.push(
                          `/products?search=${encodeURIComponent(
                            keyword
                          )}`
                        );

                        setQuery("");
                      }}
                      className="block w-full text-left p-3 hover:bg-gray-100"
                    >
                      🔍 {keyword}
                    </button>

                  ))}

                </div>

              )}

            </div>

            <button
              type="submit"
              className="bg-black text-white px-5 rounded-lg"
            >
              Search
            </button>

          </form>

          <Link
            href="/products"
            className="hidden lg:block"
          >
            Products
          </Link>

          <a
            href="https://wa.me/97471083700"
            target="_blank"
            className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            WhatsApp
          </a>

          <button
            className="lg:hidden"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
          >
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}