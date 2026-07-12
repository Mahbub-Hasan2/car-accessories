export default function AboutPage() {
  return (
    <main className="bg-gray-50">


      {/* Hero Section */}

      <section className="
        bg-gray-900
        text-white
        py-16
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-4
          text-center
        ">


          <h1 className="
            text-4xl
            md:text-5xl
            font-extrabold
          ">
            About Qiftly Auto
          </h1>


          <p className="
            mt-5
            max-w-3xl
            mx-auto
            text-gray-300
            text-lg
            leading-8
          ">
            Your trusted online destination for premium
            car accessories in Qatar. We help drivers
            protect, upgrade and personalize their vehicles
            with quality products at affordable prices.
          </p>


        </div>

      </section>






      {/* About Content */}

      <section className="
        max-w-7xl
        mx-auto
        px-4
        py-14
      ">


        <div className="
          grid
          md:grid-cols-2
          gap-10
          items-center
        ">



          <div>

            <h2 className="
              text-3xl
              font-bold
              text-gray-900
            ">
              Who We Are
            </h2>


            <p className="
              mt-5
              text-gray-600
              leading-8
            ">
              Qiftly Auto is a Qatar-based online car
              accessories store focused on making vehicle
              upgrades simple and convenient.
              We carefully select useful products that
              improve your driving experience, protect your
              car and add style to your vehicle.
            </p>


            <p className="
              mt-4
              text-gray-600
              leading-8
            ">
              From car protection products to interior and
              exterior accessories, our goal is to provide
              reliable products with easy ordering through
              our online platform and WhatsApp support.
            </p>


          </div>





          <div className="
            bg-white
            rounded-3xl
            shadow-lg
            p-8
          ">


            <h3 className="
              text-xl
              font-bold
              mb-5
            ">
              Our Mission
            </h3>


            <p className="
              text-gray-600
              leading-7
            ">
              Our mission is to provide Qatar drivers with
              affordable, practical and quality car
              accessories while delivering a smooth online
              shopping experience.
            </p>



            <div className="
              mt-6
              grid
              grid-cols-2
              gap-4
            ">


              <div className="
                bg-orange-50
                rounded-xl
                p-4
              ">

                <h4 className="
                  font-bold
                  text-orange-600
                ">
                  Quality
                </h4>

                <p className="
                  text-sm
                  text-gray-600
                  mt-1
                ">
                  Selected products
                </p>

              </div>





              <div className="
                bg-green-50
                rounded-xl
                p-4
              ">

                <h4 className="
                  font-bold
                  text-green-600
                ">
                  Qatar
                </h4>

                <p className="
                  text-sm
                  text-gray-600
                  mt-1
                ">
                  Local service
                </p>

              </div>


            </div>


          </div>


        </div>


      </section>








      {/* Why Choose Us */}

      <section className="
        bg-white
        py-14
      ">


        <div className="
          max-w-7xl
          mx-auto
          px-4
        ">


          <h2 className="
            text-3xl
            font-bold
            text-center
          ">
            Why Choose Qiftly Auto?
          </h2>




          <div className="
            mt-10
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">


            {[
              {
                icon:"🚗",
                title:"Car Focused",
                text:"Products specially selected for vehicle owners."
              },

              {
                icon:"🇶🇦",
                title:"Qatar Based",
                text:"Serving customers across Qatar."
              },

              {
                icon:"📦",
                title:"Easy Ordering",
                text:"Simple online and WhatsApp ordering."
              },

              {
                icon:"🤝",
                title:"Customer Support",
                text:"Friendly support before and after purchase."
              }

            ].map((item)=>(


              <div

                key={item.title}

                className="
                  bg-gray-50
                  rounded-2xl
                  p-6
                  text-center
                  hover:shadow-lg
                  transition
                "

              >

                <div className="
                  text-4xl
                ">
                  {item.icon}
                </div>


                <h3 className="
                  mt-4
                  font-bold
                  text-lg
                ">
                  {item.title}
                </h3>


                <p className="
                  mt-2
                  text-sm
                  text-gray-600
                ">
                  {item.text}
                </p>


              </div>


            ))}


          </div>


        </div>


      </section>







      {/* CTA */}

      <section className="
        max-w-7xl
        mx-auto
        px-4
        py-14
      ">


        <div className="
          bg-orange-500
          rounded-3xl
          p-8
          md:p-12
          text-center
          text-white
        ">


          <h2 className="
            text-3xl
            font-bold
          ">
            Upgrade Your Car Today 🚗
          </h2>


          <p className="
            mt-3
            text-orange-100
          ">
            Explore our latest car accessories and order
            easily through WhatsApp.
          </p>



          <a

            href="https://wa.me/97471083700"

            target="_blank"

            className="
              inline-block
              mt-6
              bg-white
              text-orange-600
              px-8
              py-3
              rounded-xl
              font-bold
              hover:bg-gray-100
            "

          >

            Contact Us on WhatsApp

          </a>


        </div>


      </section>




    </main>
  );
}