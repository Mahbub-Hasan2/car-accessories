import Papa from "papaparse";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";

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

export default async function ProductPage({
  params,
}) {
  const products = await getProducts();

  const { slug } = await params;

  const product = products.find(
    (item) =>
      item.slug?.trim() ===
      slug?.trim()
  );

  if (!product) {
    notFound();
  }

  const whatsappUrl =
    `https://wa.me/97471083700?text=${encodeURIComponent(
      `Hello, I want to order

Product: ${product.name}
Price: ${product.price} QAR`
    )}`;

  return (
    <div className="bg-white">

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">

        {/* Product Area */}

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">

          {/* Gallery */}

          <div>
            <ProductGallery
              image={product.image}
              gallery={product.gallery}
            />
          </div>

          {/* Info */}

          <div>

            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-orange-500">
              Best Seller
            </div>

            <h1
              className="
                mt-3
                text-xl
                md:text-3xl
                font-bold
                leading-tight
                text-gray-900
              "
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4">

              <div className="text-yellow-500">
                ★★★★★
              </div>

              <span className="text-sm text-gray-500">
                Premium Quality
              </span>

            </div>

            <div className="mt-6">

              <div className="flex items-end gap-3">

                <span className="text-4xl font-bold text-green-600">
                  {product.price} QAR
                </span>

                <span className="text-gray-400 line-through">
                  {Number(product.price) + 20} QAR
                </span>

              </div>

              <p className="text-sm text-gray-500 mt-2">
                Fast Delivery Across Qatar
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  text-center
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                WhatsApp Order
              </a>

              <a
                href="tel:+97471083700"
                className="
                  bg-gray-900
                  hover:bg-black
                  text-white
                  text-center
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Call Now
              </a>

            </div>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-3 mt-8">

              <div className="bg-gray-50 rounded-xl p-4">
                🚚 Fast Delivery
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                💎 Premium Quality
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                🛡 Warranty Support
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                💬 Easy WhatsApp Order
              </div>

            </div>

          </div>

        </div>

        {/* Description */}

        <div className="mt-16 max-w-4xl">

          <h2 className="text-2xl font-bold mb-6">
            Product Details
          </h2>

          <div
            className="
              prose
              prose-gray
              lg:prose-lg
              max-w-none
            "
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />

        </div>

      </div>

    </div>
  );
}