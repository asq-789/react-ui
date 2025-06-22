import React from 'react';
import { Cards } from '../Cards/Cards';

export const rollProducts = [
  {
    name: '🌯 Chicken Roll',
    price: 450,
    img: '/r1.jpg',
    description: 'Juicy grilled chicken wrapped in soft paratha with tangy sauces.',
    badge: '🔥 Popular'
  },
  {
    name: '🥩 Beef Bihari Roll',
    price: 480,
    img: '/r2.jpg',
    description: 'Tender Bihari-style beef strips in a spicy marinade, wrapped fresh.',
    badge: '🌶️ Spicy Bihari'
  },
  {
    name: '🍗 Zinger Roll',
    price: 500,
    img: '/r3.jpg',
    description: 'Crispy zinger fillet with lettuce and mayo, rolled in a crispy wrap.',
    badge: '⭐ Bestseller'
  },
  {
    name: '🥛 Chicken Malai Roll',
    price: 470,
    img: '/r4.jpg',
    description: 'Creamy malai chicken grilled to perfection with herbs and wrapped warm.',
    badge: '🥛 Creamy Delight'
  },
  {
    name: '🥬 Vegetable Roll',
    price: 400,
    img: '/r5.jpg',
    description: 'A mix of spicy sautéed veggies and sauces rolled in a soft paratha.',
    badge: '🌱 Veg'
  },
  {
    name: '🧀 Cheese Chicken Roll',
    price: 520,
    img: '/r6.jpg',
    description: 'Melted cheese and chicken chunks combined in a delicious cheesy roll.',
    badge: '🧀 Cheesy'
  }
];

export const Rolls = ({ handleAddToCart, handleToggleWishlist, wishlistItems }) => {
  return (
    <div>
      <div className="container mt-5">
        <div className="heading-section">
          <h3
            style={{
              fontWeight: 'bold',
              fontSize: '1.8rem',
              color: '#000',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🌯</span>
            Flavor-Packed Rolls
          </h3>
          <h6>Wrapped to perfection, bursting with taste</h6>
        </div>

        <div className="row mt-4">
          {rollProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
              description={prod.description}
              badge={prod.badge}
              onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
