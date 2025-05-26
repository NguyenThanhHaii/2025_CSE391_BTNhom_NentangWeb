import React from "react";

function ProductCard(props) {
  return (
    <div className="px-4 py-3 w-full rounded-md bg-white mt-3 border border-gray-100 transition-all duration-300">
      <img
        src={props.product.image}
        alt={props.product.name}
        className="w-full w-50 object-cover rounded-md mb-2"
      />
      <h3
        className="text-lg font-medium text-gray-800"
        style={{ fontSize: "20px" }}
      >
        {props.product.name}
      </h3>
      <p className="text-gray-600" style={{ fontSize: "16px" }}>
        Giá: ${props.product.price}
      </p>
      <p className="text-gray-500 text-sm" style={{ fontSize: "14px" }}>
        {props.product.description}
      </p>
    </div>
  );
}

export default ProductCard;
