import React from "react";
import ProductCard from "./components/ProductCard";
import products from "./data.js";

function ProductList() {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-6">
      <div className="max-w-6xl w-full">
        <div className="rounded-md px-4 py-6 border border-gray-300 bg-white">
          <h1 className="text-center text-3xl font-bold mb-4 text-gray-800 text-shadow-sm">
            Danh sách sản phẩm
          </h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
