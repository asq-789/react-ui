import React from 'react';
import { Cards } from '../Cards/Cards';

export const PopularProducts = [
  { 
    name: '🍤 Shrimp Chowmin', 
    price: 700, 
    img: '/chowmin.jpg',
    badge: '🌟 Bestseller'
  },
  { 
    name: '🥕 Vegetable Chowmin', 
    price: 1699, 
    img: '/noodles.jpg',
    badge: '🌱 Veg'
  },
  { 
    name: '🌶️ Mapo Tafu', 
    price: 2699, 
    img: '/tofu.jpg', 
    description: 'Spicy tofu and minced meat in chili sauce.',
    badge: '🔥 Spicy'
  },
  { 
    name: '🥦 Veg Fried Rice', 
    price: 1599, 
    img: '/veg.jpg',
    badge: '🌱 Veg'
  },
  { 
    name: '🍜 Mix Chowmin', 
    price: 1060, 
    img: '/prawnsnoodles.jpg',
    badge: '✨ Combo'
  },
  { 
    name: '🍝 Hakka Noodles', 
    price: 1060, 
    img: '/hakka.jpg'
  },
  { 
    name: '🥟 Chicken Momos', 
    price: 500, 
    img: '/momos.jpg',
    badge: '💥 New'
  },
  { 
    name: '🍅 Red Sauce Pasta', 
    price: 650, 
    img: '/pasta.jpg',
    badge: '🍅 Tangy'
  },
  { 
    name: '🧀 Alfredo Pasta', 
    price: 900, 
    img: '/alferado.jpg',
    badge: '🧀 Cheesy'
  }
];


const PopularItems = ({ handleAddToCart,handleToggleWishlist, wishlistItems }) => {
  return (
    <div className="container mt-5">
      <div className="heading-section">
        <h5 style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
          🍜 Popular Items..
        </h5>
        <h6 style={{ fontSize: '1rem', color: '#666' }}>
          Most Ordered Chinese foods are here
        </h6>
      </div>
      <div className="row mt-4">
        {PopularProducts.map((prod, index) => (
          <Cards
            key={index}
            name={prod.name}
            price={prod.price}
            img={prod.img}
            onAddToCart={() => handleAddToCart(prod)}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
