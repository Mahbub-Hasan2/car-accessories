export default function ProductCard({ product }) {
  const message = `Hi, I want to order:

Product: ${product.name}
Price: ${product.price} QAR`;

  const whatsappUrl =
    `https://wa.me/97471083700?text=${encodeURIComponent(message)}`;

  return (
    <div className="border rounded-lg p-4">
      <h2 className="font-bold">{product.name}</h2>

      <p>{product.price} QAR</p>

      <a
        href={whatsappUrl}
        target="_blank"
        className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded"
      >
        Order on WhatsApp
      </a>
    </div>
  );
}