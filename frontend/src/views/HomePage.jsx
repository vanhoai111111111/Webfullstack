import React, { useEffect, useState } from 'react';
import { fetchAllProducts, getProductImageUrl } from '../controllers/ProductController';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const sliderImages = [
    '/images/slide1.png',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
];
const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAllProducts().then(setProducts).catch(console.error);
    }, []);

    return (
        <div style={{ padding: '30px' }}>
            <h1 style={{ textAlign: 'center' }}>Trang chủ</h1>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
                loop={true}
                style={{ borderRadius: '12px', overflow: 'hidden' }}
            >
                {sliderImages.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        <div style={{ padding: '30px' }}>
            <h1 style={{ textAlign: 'center' }}>Danh sách sản phẩm</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
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
        </div>
    );
};

export default HomePage;
