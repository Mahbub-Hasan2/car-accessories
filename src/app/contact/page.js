export const metadata = {
  title: "Contact Us - Gari Qatar",
  description:
    "Contact Gari Qatar via WhatsApp, phone, or email for car accessory orders and support across Qatar.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">

      <div className="
        max-w-5xl
        mx-auto
        px-4
      ">


        {/* Header */}

        <div className="text-center mb-10">

          <h1 className="
            text-3xl
            md:text-4xl
            font-extrabold
            text-gray-900
          ">
            Contact Us
          </h1>


          <p className="
            mt-3
            text-gray-600
          ">
            Need help? Contact Gari Qatar anytime.
          </p>

        </div>





        {/* Contact Card */}

        <div className="
          max-w-md
          mx-auto
          bg-white
          rounded-3xl
          shadow-lg
          p-8
        ">


          <div className="
            space-y-5
          ">


            {/* WhatsApp */}

            <a

              href="https://wa.me/97471083700"

              target="_blank"

              className="
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                bg-green-50
                hover:bg-green-100
                transition
              "

            >

              <div className="
                text-3xl
              ">
                💬
              </div>


              <div>

                <p className="
                  text-sm
                  text-gray-500
                ">
                  WhatsApp
                </p>

                <p className="
                  font-bold
                  text-gray-900
                ">
                  +974 7108 3700
                </p>

              </div>


            </a>





            {/* Email */}

            <a

              href="mailto:qiftly1@gmail.com"

              className="
                flex
                items-center
                gap-4
                p-4
                rounded-2xl
                bg-orange-50
                hover:bg-orange-100
                transition
              "

            >

              <div className="
                text-3xl
              ">
                ✉️
              </div>


              <div>

                <p className="
                  text-sm
                  text-gray-500
                ">
                  Email
                </p>


                <p className="
                  font-bold
                  text-gray-900
                  break-all
                ">
                  qiftly1@gmail.com
                </p>


              </div>


            </a>



          </div>




          <a

            href="https://wa.me/97471083700"

            target="_blank"

            className="
              block
              text-center
              mt-8
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-3
              rounded-xl
              font-bold
              transition
            "

          >

            Chat With Us

          </a>


        </div>



      </div>


    </main>
  );
}