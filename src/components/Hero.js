import Link from "next/link";

export default function Hero({ product }) {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white">

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 md:py-20">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div>

                        <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                            🚗 Premium Car Accessories In Qatar
                        </span>

                        <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                            Upgrade Your Car
                            <br />
                            With Quality Accessories
                        </h1>

                        <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-xl">
                            Discover premium car accessories, car covers,
                            sunshades, cleaning tools and more with fast
                            delivery across Qatar.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-2 mt-1 md:mt-5">

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
                    <div className="hidden md:block">

                        {product && (

                            <div className="bg-white rounded-2xl border shadow-sm p-4 max-w-sm mx-auto">

                                <div className="flex items-center justify-between mb-3">

                                    <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                                        Best Seller
                                    </span>

                                    <span className="font-bold text-green-600">
                                        {product.price} QAR
                                    </span>

                                </div>

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-contain"
                                />

                                <h3 className="font-bold text-lg mt-4">
                                    {product.name}
                                </h3>

                                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="flex gap-2 mt-4">

                                    <Link
                                        href={`/product/${product.slug}`}
                                        className="flex-1 bg-black text-white text-center py-2 rounded-lg text-sm"
                                    >
                                        View
                                    </Link>

                                    <a
                                        href={`https://wa.me/97471083700?text=Hello, I want to order ${product.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-green-600 text-white text-center py-2 rounded-lg text-sm"
                                    >
                                        Order
                                    </a>

                                </div>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </section>
    );
}