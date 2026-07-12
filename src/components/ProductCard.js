import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        border border-gray-100
        hover:border-orange-200
        hover:shadow-lg
        transition-all
        duration-300
        block
      "
    >
      {/* Image */}

      <div className="relative bg-gray-50">

        <img
          src={product.image}
          className="
            w-full
            h-36 md:h-52
            object-cover
            p-0
            group-hover:scale-105
            transition
            duration-300
          "
        />

        {product.category && (
          <span
            className="
              absolute
              top-2
              left-2
              bg-orange-500
              text-white
              text-[10px]
              md:text-xs
              px-2
              py-1
              rounded-full
            "
          >
            {product.category}
          </span>
        )}

      </div>

      {/* Content */}

      <div className="p-2 md:p-4">

        <h3
          className="
            font-medium
            text-sm
            md:text-base
            text-gray-800
            line-clamp-2
          "
        >
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">

          <span
            className="
              text-lg
              md:text-xl
              font-bold
              text-orange-600
            "
          >
            {product.price} QAR
          </span>

          <span
            className="
              text-xs
              text-gray-400
              group-hover:text-orange-500
              transition
            "
          >
            →
          </span>

        </div>

      </div>
    </Link>
  );
}