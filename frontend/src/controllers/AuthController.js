// Controller xử lý logic gọi API

const API_BASE_URL = "http://localhost:8080/api/auth";

export const login = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error("Đăng nhập thất bại!");
    }

    return await response.json();
};

export const signup = async (user) => {
    const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error("Đăng ký thất bại!");
    }

    return await response.json();
};
