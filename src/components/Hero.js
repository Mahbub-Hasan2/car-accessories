import Link from "next/link";

export default function Hero({ product }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">

      {/* Mobile Background Image */}

      <div
        className="
          md:hidden
          absolute
          inset-0
          opacity-[0.08]
          bg-center
          bg-cover
        "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/193997/pexels-photo-193997.jpeg?_gl=1*1yj2cse*_ga*MTQ5Njc0MzUyMS4xNzg0MDEyOTYz*_ga_8JE65Q40S6*czE3ODQwMTI5NjIkbzEkZzEkdDE3ODQwMTMyMTQkajI3JGwwJGgw')",
        }}
      />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}

          <div>

            <span
              className="
                inline-flex
                items-center
                bg-green-100
                text-green-700
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
                text-2xl
                sm:text-3xl
                md:text-5xl
                font-bold
                leading-tight
                text-gray-900
              "
            >
              Upgrade Your Car
              <br className="hidden md:block" />
              With Quality Accessories
            </h1>

            <p
              className="
                mt-3
                text-gray-600
                text-sm
                md:text-lg
                max-w-xl
              "
            >
              Discover premium car accessories,
              sunshades, car covers, cleaning tools
              and more with fast delivery across Qatar.
            </p>

            {/* Features */}

            <div className="flex flex-wrap gap-2 mt-4">

              <div className="bg-white/80 backdrop-blur px-3 py-2 rounded-full text-xs md:text-sm shadow-sm">
                ✓ Fast Delivery
              </div>

              <div className="bg-white/80 backdrop-blur px-3 py-2 rounded-full text-xs md:text-sm shadow-sm">
                ✓ Cash On Delivery
              </div>

              <div className="bg-white/80 backdrop-blur px-3 py-2 rounded-full text-xs md:text-sm shadow-sm">
                ✓ Premium Quality
              </div>

            </div>

            {/* Mobile CTA */}

            <div className="md:hidden mt-5">

              <Link
                href="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  bg-black
                  text-white
                  py-3
                  rounded-xl
                  font-medium
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
                "
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* Desktop Product Card */}

          <div className="hidden md:flex justify-center">

            {/* তোমার বর্তমান Product Card এখানেই থাকবে */}

          </div>

        </div>

      </div>

    </section>
  );
                }
