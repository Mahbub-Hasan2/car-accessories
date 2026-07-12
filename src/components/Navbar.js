"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();
  const mobileSearchRef = useRef(null);
  const desktopSearchRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {

    async function loadProducts() {

      const res = await fetch("/api/products");
      const data = await res.json();

      setProducts(data);

    }

    loadProducts();

  }, []);



  // Outside click hide mobile search
  useEffect(() => {

    function handleClick(e) {

      // mobile search hide
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target)
      ) {
        setMobileSearchOpen(false);
      }


      // desktop suggestion hide
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }

    }


    document.addEventListener(
      "mousedown",
      handleClick
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClick
      );

    };


  }, []);




  const categories = useMemo(() => {

    return [
      "All",
      ...new Set(
        products
          .map(item => item.category)
          .filter(Boolean)
      )
    ];

  }, [products]);





  const suggestions = useMemo(() => {


    if (!query.trim()) return [];



    const keywords = products.flatMap(item => [

      item.title,
      item.name,

      ...(item.keywords
        ?.split(",")
        .map(k => k.trim())
        || [])

    ]);



    return [
      ...new Set(
        keywords.filter(Boolean)
      )
    ]
      .filter(item =>
        item
          .toLowerCase()
          .includes(
            query.toLowerCase()
          )
      )
      .slice(0, 8);



  }, [query, products]);







  function handleSearch(e) {

    e.preventDefault();


    const params = new URLSearchParams();


    if (query.trim()) {

      params.set(
        "search",
        query
      );

    }



    if (category !== "All") {

      params.set(
        "category",
        category
      );

    }



    router.push(
      `/products?${params.toString()}`
    );


    setQuery("");

    setMobileSearchOpen(false);

  }






  return (

    <header className="
sticky top-0 z-50
bg-white/95
backdrop-blur
border-b
shadow-sm
">


      <div className="
max-w-7xl mx-auto px-4
">



        <div className="
h-16 flex items-center justify-between gap-4
">


          {/* Logo */}

          <Link

            href="/"

            className="
font-extrabold
text-xl
shrink-0
mr-auto
"

          >

            Qiftly Auto

          </Link>





          {/* Desktop Search */}

          <form
            ref={desktopSearchRef}
            onSubmit={handleSearch}

            className="
hidden md:flex
flex-1
max-w-3xl
h-11
rounded-full
bg-gray-100
border
relative
"

          >


            <select

              value={category}

              onChange={
                e => setCategory(e.target.value)
              }

              className="
px-4
bg-transparent
outline-none
text-sm
font-medium
"

            >


              {
                categories.map(cat => (

                  <option

                    key={cat}

                    value={cat}

                  >

                    {cat}

                  </option>


                ))
              }


            </select>



            <div className="
w-px bg-gray-300 my-2
"/>




            <div className="
relative
flex-1
z-50
">


              <input

                value={query}

                onFocus={() => setShowSuggestions(true)}

                onChange={
                  e => {
                    setQuery(e.target.value);
                    setShowSuggestions(true);
                  }
                }

                placeholder="
Search car accessories...
"

                className="
w-full
h-full
bg-transparent
px-4
outline-none
"

              />



              {
                showSuggestions && suggestions.length > 0 && (

                  <div

                    className="
absolute
top-full
left-0
right-0
mt-2
bg-white
border
rounded-xl
shadow-xl
overflow-hidden
z-[100]
"

                  >


                    {
                      suggestions.map(item => (


                        <button

                          key={item}

                          type="button"

                          onClick={() => {

                            router.push(
                              `/products?search=${encodeURIComponent(item)}`
                            );

                            setQuery("");
                            setShowSuggestions(false);

                          }}

                          className="
w-full
text-left
px-4
py-3
hover:bg-gray-100
text-sm
"

                        >

                          🔍 {item}

                        </button>


                      ))

                    }


                  </div>


                )
              }


            </div>




            <button

              className="
px-6
bg-orange-500
text-white
font-semibold
hover:bg-orange-600
rounded-r-full
cursor-pointer
"

            >

              Search

            </button>



          </form>






          {/* Menu */}

          <nav className="
hidden lg:flex
gap-6
text-sm
font-medium
">


            <Link href="/">
              Home
            </Link>

            <Link href="/products">
              Products
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/contact">
              Contact
            </Link>


          </nav>





          <a

            href="https://wa.me/97471083700"

            target="_blank"

            className="
hidden md:block
bg-green-600
text-white
px-5
py-2.5
rounded-xl
"

          >

            WhatsApp

          </a>





          {/* Mobile Search Icon */}
<div className="
flex
items-center
gap-4
md:hidden
">
          <button

            className="
md:hidden
text-xl
"

            onClick={() =>
              setMobileSearchOpen(true)
            }

          >

            🔍

          </button>





          <button

            className="
lg:hidden
text-2xl
"

            onClick={() =>
              setMobileOpen(!mobileOpen)
            }

          >

            {
              mobileOpen ? "✕" : "☰"
            }

          </button>


</div>
        </div>







        {/* Mobile Search */}

        {

          mobileSearchOpen && (

            <div

              ref={mobileSearchRef}

              className="
md:hidden
pb-3
"

            >


              <form

                onSubmit={handleSearch}

                className="
flex
h-12
rounded-xl
overflow-hidden
border
bg-gray-100
"

              >


                <input

                  autoFocus

                  value={query}

                  onChange={
                    e => setQuery(e.target.value)
                  }

                  placeholder="
Search products...
"

                  className="
flex-1
px-4
bg-transparent
outline-none
"

                />


                <button

                  className="
px-5
bg-orange-500
text-white
"

                >

                  🔍

                </button>


              </form>




              {
                suggestions.length > 0 && (

                  <div

                    className="
bg-white
border
rounded-xl
shadow-xl
mt-2
overflow-hidden
"

                  >

                    {
                      suggestions.map(item => (

                        <button

                          key={item}

                          type="button"

                          onClick={() => {

                            router.push(
                              `/products?search=${encodeURIComponent(item)}`
                            );

                            setQuery("");

                            setMobileSearchOpen(false);

                          }}

                          className="
w-full
text-left
px-4
py-3
hover:bg-gray-100
"

                        >

                          🔍 {item}

                        </button>


                      ))

                    }

                  </div>

                )

              }


            </div>

          )

        }





      </div>





      {/* Mobile Menu */}

      {

        mobileOpen && (

          <div className="
lg:hidden
border-t
bg-white
">

            <div className="
px-4 py-5 space-y-4
">


              <Link href="/" className="block">
                Home
              </Link>


              <Link href="/products" className="block">
                Products
              </Link>


              <Link href="/about" className="block">
                About
              </Link>


              <Link href="/contact" className="block">
                Contact
              </Link>



              <select

                value={category}

                onChange={
                  e => setCategory(e.target.value)
                }

                className="
w-full
border
rounded-xl
p-3
"

              >

                {
                  categories.map(cat => (

                    <option

                      key={cat}

                      value={cat}

                    >

                      {cat}

                    </option>

                  ))
                }

              </select>



              <a

                href="https://wa.me/97471083700"

                target="_blank"

                className="
block
text-center
bg-green-600
text-white
py-3
rounded-xl
"

              >

                WhatsApp Order

              </a>


            </div>

          </div>

        )

      }



    </header>


  );

}