import React, { useEffect, useState } from "react";
import { fetchProducts } from "../controllers/ProductController";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">
                Sản phẩm nổi bật
            </h2>
            {products.length === 0 ? (
                <div className="text-center text-gray-500">Không có sản phẩm nào.</div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
