export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
        ">


          {/* Brand */}

          <div>

            <h2 className="
              text-white
              text-2xl
              font-extrabold
              mb-4
            ">
              Qiftly Auto
            </h2>


            <p className="
              text-sm
              leading-6
            ">
              Premium car accessories in Qatar.
              Shop smart products to protect,
              upgrade and style your vehicle.
            </p>


            <div className="flex gap-3 mt-5">

              <a
                href="https://www.facebook.com/Qiftly/"
                className="
                w-10 h-10
                rounded-full
                bg-gray-800
                flex
                items-center
                justify-center
                hover:bg-orange-500
                transition
                "
              >
                f
              </a>


              <a
                href="https://www.facebook.com/Qiftly/"
                className="
                w-10 h-10
                rounded-full
                bg-gray-800
                flex
                items-center
                justify-center
                hover:bg-orange-500
                transition
                "
              >
                ◎
              </a>


              <a
                href="https://www.facebook.com/Qiftly/"
                className="
                w-10 h-10
                rounded-full
                bg-gray-800
                flex
                items-center
                justify-center
                hover:bg-orange-500
                transition
                "
              >
                ♪
              </a>


            </div>


          </div>





          {/* Quick Links */}

          <div>

            <h3 className="
              text-white
              font-bold
              text-lg
              mb-4
            ">
              Quick Links
            </h3>


            <ul className="space-y-3 text-sm">

              <li>
                <a href="/" className="hover:text-orange-400">
                  Home
                </a>
              </li>

              <li>
                <a href="/products" className="hover:text-orange-400">
                  All Products
                </a>
              </li>


              <li>
                <a href="/about" className="hover:text-orange-400">
                  About Us
                </a>
              </li>


              <li>
                <a href="/contact" className="hover:text-orange-400">
                  Contact
                </a>
              </li>


            </ul>


          </div>






          {/* Categories */}

          <div>

            <h3 className="
              text-white
              font-bold
              text-lg
              mb-4
            ">
              Categories
            </h3>


            <ul className="space-y-3 text-sm">


              <li>
                Car Accessories
              </li>

              <li>
                Car Interior
              </li>

              <li>
                Car Exterior
              </li>

              <li>
                Car Care Products
              </li>


            </ul>


          </div>







          {/* Contact */}

          <div>


            <h3 className="
              text-white
              font-bold
              text-lg
              mb-4
            ">
              Contact Us
            </h3>



            <ul className="
              space-y-4
              text-sm
            ">


              <li>
                📍 Doha, Qatar
              </li>


              <li>
                📞 +974 7108 3700
              </li>


              <li>
                ✉️ qiftly1@gmail.com
              </li>


              <li>

                <a
                  href="https://wa.me/97471083700"
                  target="_blank"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  bg-green-600
                  text-white
                  px-4
                  py-2
                  rounded-xl
                  hover:bg-green-700
                  "
                >
                  WhatsApp Order
                </a>

              </li>


            </ul>


          </div>



        </div>


      </div>





      {/* Bottom */}

      <div className="
        border-t
        border-gray-800
        py-5
      ">


        <div className="
          max-w-7xl
          mx-auto
          px-4
          flex
          flex-col
          sm:flex-row
          justify-between
          items-center
          gap-3
          text-sm
        ">


          <p>
            © {new Date().getFullYear()} Qiftly Auto.
            All rights reserved.
          </p>


          <div className="
            flex
            gap-5
          ">

            <a href="#" className="hover:text-orange-400">
              Privacy Policy
            </a>


            <a href="#" className="hover:text-orange-400">
              Terms
            </a>


          </div>


        </div>


      </div>



    </footer>
  );
}