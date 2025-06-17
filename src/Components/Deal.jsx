import React from 'react';
import { Burgerdeal } from './Cards/Burgerdeal';

const burgerdealProducts = [
  {
    id: 1,
    name: '🍔 Hunger Deal',
    price: 700,
    img: '/burgerdeal.png',
    description: '1 Burger + Coldrink.',
  },
  {
    id: 2,
    name: '🔥 Mega Zinger Feast',
    price: 1699,
    img: '/burgerdeal2.png',
    description: '3 Zinger + 1 Pizza Slice + Coldrink.',
  },
  {
    id: 3,
    name: '🌶️ Spicy Cheese Zinger Combo',
    price: 2699,
    img: '/deal1.jpg',
    description: 'Spicy Red Chillies Zinger + Fries + Coldrink.',
  },
  {
    id: 4,
    name: '👑 Royal Meat Box',
    price: 1599,
    img: '/deal3.jpg',
    description: '2 Zinger + 2 Beef Burgers + Crispy Fries + 3 Dips.',
  },
  {
    id: 5,
    name: '🌶️ Jalapeño Blast Pack',
    price: 1060,
    img: '/deal.jpg',
    description: '2 Jalapeño Zingers + Fries + Dips.',
  },
  {
    id: 6,
    name: '🥩 Beef & Veggie Trio',
    price: 1060,
    img: '/burger2.jpg',
    description: '2 Veg and Beef Burgers + 1 Jalapeño Burger.',
  },
];

export const Deal = ({ handleAddToCart }) => {
  return (
    <div className="container mt-5">
      <div className="heading-section">
        <h3
          style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍔🍟</span>
          Combo Deals of the Day
        </h3>
        <h6 style={{ fontSize: '1rem', color: '#666', marginTop: '4px' }}>
          Big bites, bigger savings — grab your favorite burger combos now!
        </h6>
      </div>

      <div className="row mt-4">
        {burgerdealProducts.map((prod) => (
          <Burgerdeal
            key={prod.id}
            name={prod.name}
            price={prod.price}
            img={prod.img}
            description={prod.description}
            onAddToCart={() => handleAddToCart(prod)}
          />
        ))}
      </div>
    </div>
  );
};
