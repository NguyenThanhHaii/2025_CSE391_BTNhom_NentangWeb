// Import component hiển thị từng sản phẩm
import ProductCard from "./components/ProductCard";

// Import dữ liệu danh sách sản phẩm từ file data.js
import products from "./data/data.js";

// Định nghĩa component ProductList hiển thị danh sách các sản phẩm
function ProductList() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="max-w-6xl w-full">
        {" "}
        <div className="rounded-md px-4 py-6 shadow-md hover:shadow-lg transition-shadow bg-white">
          <h1 className="text-center text-3xl font-bold mb-4 text-gray-800 text-shadow-sm">
            Danh sách sản phẩm
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {products.map((product) => (
              // Render mỗi sản phẩm bằng component ProductCard và truyền prop `product`
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
