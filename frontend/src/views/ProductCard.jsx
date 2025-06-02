import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out overflow-hidden">
            <img
                src={`http://localhost:8080/api/products/${product.id}/image`}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-indigo-600 font-bold text-lg">
                    {product.price?.toLocaleString()}₫
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
