import Link from "next/link";

export default function Hero({ product }) {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Mobile Background */}

      <div className="md:hidden absolute inset-0">

        <img
          src="https://images.pexels.com/photos/193997/pexels-photo-193997.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}

          <div className="relative z-10">

            <span
              className="
                inline-flex
                items-center
                bg-green-500
                text-white
                px-3
                py-1
                rounded-full
                text-xs
                md:text-sm
                font-medium
              "
            >
              🚗 Premium Car Accessories In Qatar
            </span>

            <h1
              className="
                mt-3
                text-3xl
                md:text-5xl
                font-bold
                leading-tight
                text-white
                md:text-gray-900
              "
            >
              Upgrade Your Car
              <br className="hidden md:block" />
              With Quality Accessories
            </h1>

            <p
              className="
                mt-4
                text-sm
                md:text-lg
                max-w-xl
                text-gray-200
                md:text-gray-600
              "
            >
              Discover premium car accessories,
              sunshades, car covers, cleaning tools
              and more with fast delivery across Qatar.
            </p>

            {/* Features */}

            <div className="flex flex-wrap gap-2 mt-5">

              <div
                className="
                  bg-white/15
                  backdrop-blur-md
                  border
                  border-white/20
                  text-white
                  px-3
                  py-2
                  rounded-full
                  text-xs
                  md:bg-white
                  md:text-black
                  md:border-gray-200
                "
              >
                ✓ Fast Delivery
              </div>

              <div
                className="
                  bg-white/15
                  backdrop-blur-md
                  border
                  border-white/20
                  text-white
                  px-3
                  py-2
                  rounded-full
                  text-xs
                  md:bg-white
                  md:text-black
                  md:border-gray-200
                "
              >
                ✓ Cash On Delivery
              </div>

              <div
                className="
                  bg-white/15
                  backdrop-blur-md
                  border
                  border-white/20
                  text-white
                  px-3
                  py-2
                  rounded-full
                  text-xs
                  md:bg-white
                  md:text-black
                  md:border-gray-200
                "
              >
                ✓ Premium Quality
              </div>

            </div>

            {/* Mobile Button */}

            <div className="md:hidden mt-6">

              <Link
                href="/products"
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  bg-green-600
                  text-white
                  py-3
                  rounded-xl
                  font-medium
                  shadow-lg
                "
              >
                Browse Products
              </Link>

            </div>

            {/* Desktop Buttons */}

            <div className="hidden md:flex gap-4 mt-6">

              <Link
                href="/products"
                className="
                  bg-black
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-medium
                  hover:bg-gray-800
                "
              >
                Shop Now
              </Link>

              <a
                href="https://wa.me/97471083700"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  border
                  px-6
                  py-3
                  rounded-xl
                  font-medium
                  hover:bg-gray-50
                "
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* Desktop Product Card */}

          <div className="hidden md:flex justify-center">

            {product && (

              <div
                className="
                  relative
                  bg-white
                  rounded-3xl
                  shadow-2xl
                  overflow-hidden
                  max-w-sm
                  w-full
                "
              >

                <div className="relative">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-[320px]
                      object-cover
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      bg-red-500
                      text-white
                      text-xs
                      font-semibold
                      px-3
                      py-1.5
                      rounded-full
                    "
                  >
                    🔥 Best Seller
                  </span>

                  <span
                    className="
                      absolute
                      top-4
                      right-4
                      bg-white
                      text-green-600
                      font-bold
                      px-4
                      py-2
                      rounded-full
                    "
                  >
                    {product.price} QAR
                  </span>

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-bold line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-3 text-yellow-500">
                    ★★★★★
                    <span className="text-gray-400 text-sm ml-2">
                      Top Rated Product
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-5">

                    <Link
                      href={`/product/${product.slug}`}
                      className="
                        bg-black
                        text-white
                        text-center
                        py-3
                        rounded-xl
                        font-medium
                      "
                    >
                      View Product
                    </Link>

                    <a
                      href={`https://wa.me/97471083700?text=Hello, I want to order ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        bg-green-600
                        text-white
                        text-center
                        py-3
                        rounded-xl
                        font-medium
                      "
                    >
                      Order Now
                    </a>

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
                  }
