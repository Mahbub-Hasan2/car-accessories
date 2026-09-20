import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import getProducts from "@/lib/getProducts";

// Set NEXT_PUBLIC_SITE_URL in your Vercel project settings once the real
// domain is live. Falls back to the old vercel.app URL until then.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://qiftlyauto.vercel.app";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((item) => item.slug?.trim() === slug?.trim());

  if (!product) {
    return { title: "Product Not Found - Gari Qatar" };
  }

  // Strip HTML tags from the rich-text description for a clean meta description.
  const plainDescription = (product.description || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  return {
    title: `${product.name} - Gari Qatar`,
    description: plainDescription || `${product.name} available at Gari Qatar. Order via WhatsApp with delivery across Qatar.`,
    openGraph: {
      title: product.name,
      description: plainDescription,
      images: product.image ? [product.image] : [],
      url: `${SITE_URL}/product/${product.slug}`,
    },
  };
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

  const isFeatured = product.featured === "yes";

  const productUrl =
    `${SITE_URL}/product/${product.slug}`;

  const whatsappUrl =
    `https://wa.me/97471083700?text=${encodeURIComponent(
      `Hi, I want to order:

📦 ${product.name}
💰 ${product.price} QAR

🔗 ${productUrl}`
    )}`;

  return (
    <div className="bg-white">

      <div className="max-w-7xl mx-auto px-2 md:px-4 py-6 md:py-10">

        {/* Product Area */}

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-14">

          {/* Gallery */}

          <div>
            <ProductGallery
              image={product.image}
              gallery={product.gallery}
            />
          </div>

          {/* Info */}

          <div>

            {isFeatured && (
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-orange-500">
                Featured Product
              </div>
            )}

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

            <div className="mt-6">

              <div className="flex items-end gap-3">

                <span className="text-4xl font-bold text-green-600">
                  {product.price} QAR
                </span>

              </div>

              <p className="text-sm text-gray-500 mt-2">
                Delivery Available Across Qatar
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
