import Link from "next/link";

export default function Hero({ product }) {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white">

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 md:py-10">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div>

                        <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                            🚗 Premium Car Accessories In Qatar
                        </span>

                        <h1 className="mt-2 md:mt-4 text-md md:text-5xl font-bold leading-tight">
                            Upgrade Your Car
                            <br className="hidden md:block" />
                            With Quality Accessories
                        </h1>

                        <p className="mt-2 md:mt-4 text-gray-600 text-sm md:text-lg max-w-xl">
                            Discover premium car accessories, car covers,
                            sunshades, cleaning tools and more with fast
                            delivery across Qatar.
                        </p>

                        <div className="flex flex-wrap gap-1 md:gap-2 mt-1 md:mt-5">

                            <div className="bg-white md:border rounded-lg md:px-3 py-2 text-sm">
                                ✓ Fast Delivery
                            </div>

                            <div className="bg-white md:border rounded-lg md:px-3 py-2 text-sm">
                                ✓ Cash On Delivery
                            </div>

                            <div className="bg-white md:border rounded-lg md:px-3 py-2 text-sm">
                                ✓ Premium Quality
                            </div>

                        </div>

                        <div className=" flex gap-2 md:gap-4 md:mt-6">

                            <Link
                                href="/products"
                                className="hidden md:block bg-black text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base"
                            >
                                Shop Now
                            </Link>

                            {/* Desktop WhatsApp Button */}

                            <a
                                href="https://wa.me/97471083700"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex border px-6 py-3 rounded-lg text-base"
                            >
                                WhatsApp
                            </a>

                        </div>

                    </div>

                    {/* Right Side Featured Product */}
                    <div className="hidden md:flex justify-center">

  {product && (

    <div
      className="
        relative
        bg-white
        rounded-3xl
        shadow-2xl
        overflow-hidden
        max-w-xs
        w-full
      "
    >

      {/* Product Image */}

      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            object-cover
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badge */}

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
            text-green-600
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

      <div className="p-5">

        <h3
          className="
            text-xl
            font-bold
            text-gray-900
            line-clamp-2
          "
        >
          {product.name}
        </h3>

        {/* <p className="mt-2 text-gray-500 text-sm">
          Premium Quality Car Accessory
        </p> */}

        <div className="flex items-center gap-1 mt-3 text-yellow-500">
          ★★★★★
          <span className="text-gray-400 text-sm ml-2">
            Top Rated Product
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3">

          <Link
            href={`/product/${product.slug}`}
            className="
              bg-black
              hover:bg-gray-800
              text-white
              text-center
              py-2
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
              bg-green-600
              hover:bg-green-700
              text-white
              text-center
              py-2
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