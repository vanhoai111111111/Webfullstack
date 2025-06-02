import axios from "axios";
import Product from "../models/ProductModel";

const BASE_URL = "http://localhost:8080/api/products";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data.map(
            (p) =>
                new Product(
                    p.id,
                    p.name,
                    p.price,
                    p.description,
                    p.category,
                    p.byteImg
                )
        );
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        return [];
    }
};

// ✅ thêm hàm getProductImageUrl
export const getProductImageUrl = (productId) => {
    return `${BASE_URL}/${productId}/image`;
};

// ✅ alias cho fetchAllProducts nếu bạn dùng tên này
export const fetchAllProducts = fetchProducts;
