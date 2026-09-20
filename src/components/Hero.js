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

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">

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

            <div
              className="
                flex
                gap-2
                mt-5
                overflow-x-auto
                no-scrollbar
              "
            >

              <div
                className="
                  shrink-0
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
                  shrink-0
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
                  shrink-0
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

            {/* Desktop Buttons */}

            <div className="hidden md:flex gap-4 mt-8">

              <Link
                href="/products"
                className="
                  bg-black
                  hover:bg-gray-800
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-medium
                  transition
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
                  hover:bg-gray-50
                  px-6
                  py-3
                  rounded-xl
                  font-medium
                  transition
                "
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* Desktop Product Card */}

          {/* Desktop Product Card */}

          <div className="hidden md:flex justify-center">

            {product && (

              <div
                className="
        bg-white
        rounded-[28px]
        overflow-hidden
        shadow-xl
        border
        border-gray-100
        max-w-md
        w-full
        hover:shadow-2xl
        transition
        duration-300
      "
              >

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
            w-full
            h-[380px]
            object-cover
            transition
            duration-500
            hover:scale-105
          "
                  />

                  {/* Best Seller */}

                  <span
                    className="
            absolute
            top-4
            left-4
            bg-orange-500
            text-white
            text-xs
            font-semibold
            px-3
            py-2
            rounded-full
            shadow-lg
          "
                  >
                    🔥 Best Seller
                  </span>

                  {/* Price */}

                  <span
                    className="
            absolute
            top-4
            right-4
            bg-white
            text-gray-900
            font-bold
            px-4
            py-2
            rounded-full
            shadow-lg
          "
                  >
                    {product.price} QAR
                  </span>

                </div>

                {/* Content */}

                <div className="p-6">

                  <h3
                    className="
            text-2xl
            font-bold
            text-gray-900
            line-clamp-2
            leading-snug
          "
                  >
                    {product.name}
                  </h3>

                  <div className="flex items-center mt-3">

                    <span className="text-sm text-gray-500">
                      Premium Quality
                    </span>

                  </div>

                  <div className="flex gap-3 mt-6">

                    <Link
                      href={`/product/${product.slug}`}
                      className="
              flex-1
              bg-black
              hover:bg-gray-800
              text-white
              text-center
              py-3
              rounded-xl
              font-medium
              transition
            "
                    >
                      View Product
                    </Link>

                    <a
                      href={`https://wa.me/97471083700?text=Hello, I want to order ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
              flex-1
              bg-green-600
              hover:bg-green-700
              text-white
              text-center
              py-3
              rounded-xl
              font-medium
              transition
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
