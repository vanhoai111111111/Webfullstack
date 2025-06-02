import React, { useEffect, useState } from 'react';
import { fetchAllProducts, getProductImageUrl } from '../controllers/ProductController';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAllProducts().then(setProducts).catch(console.error);
    }, []);

    return (
        <div style={{ padding: '30px' }}>
            <h1 style={{ textAlign: 'center' }}>Danh sách sản phẩm</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px'
            }}>
                {products.map(p => (
                    <div key={p.id} style={{
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        padding: '15px',
                        textAlign: 'center',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}>
                        <img src={getProductImageUrl(p.id)} alt={p.name} style={{
                            width: '100%',
                            height: '180px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                        }} />
                        <h2>{p.name}</h2>
                        <p>{p.description}</p>
                        <strong style={{ color: '#2c3e50' }}>
                            {p.price ? `${p.price.toLocaleString()}₫` : "Chưa có giá"}
                        </strong>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
