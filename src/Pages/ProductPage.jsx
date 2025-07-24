import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  // You can replace this with real API or data fetching
  const products = [
    {
      id: "1",
      name: "Black Hoodie",
      price: "₹999",
      url: "https://via.placeholder.com/500x500?text=Black+Hoodie",
    },
    {
      id: "2",
      name: "White T-shirt",
      price: "₹599",
      url: "https://via.placeholder.com/500x500?text=White+Tshirt",
    },
  ];

  const product = products.find((item) => item.id === id);

  if (!product) return <div className="p-10 text-center">Product not found</div>;

  return (
    <div className="p-10 flex flex-col items-center">
      <img src={product.url} alt={product.name} className="max-w-[400px] w-full mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-lg text-gray-700 mb-4">{product.price}</p>
      <button className="bg-black text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
}

export default ProductPage;
