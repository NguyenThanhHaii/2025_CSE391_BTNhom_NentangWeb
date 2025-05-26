// Component ProductCard dùng để hiển thị thông tin của một sản phẩm
// props.product chứa các thông tin: name, image, price, description
function ProductCard(props) {
  return (
    <div className="px-4 py-3 w-full rounded-md bg-white mt-3 hover:shadow-lg border border-gray-100 transition-all duration-300">
      {/* Ảnh sản phẩm */}
      <img
        src={props.product.image} // Đường dẫn ảnh
        alt={props.product.name} // Text thay thế khi ảnh không tải được
        className="w-full object-cover rounded-md mb-2"
      />

      {/* Tên sản phẩm */}
      <h3
        className="text-lg font-medium text-gray-800"
        style={{ fontSize: "20px" }}
      >
        {props.product.name}
      </h3>

      {/* Giá sản phẩm */}
      <p className="text-gray-600" style={{ fontSize: "16px" }}>
        Giá: ${props.product.price}
      </p>

      {/* Mô tả sản phẩm */}
      <p className="text-gray-500 text-sm" style={{ fontSize: "14px" }}>
        {props.product.description}
      </p>
    </div>
  );
}

export default ProductCard;
