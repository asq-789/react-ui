import React from 'react';
import { Cards } from '../Cards/Cards';

 const AnimeeProducts = [
    { name: 'Shrimp Chowmin', price: 700, img: '/animee1.jpeg' },
    { name: 'Veg fried rice', price: 1599, img: '/animee2.jpeg' },
  ];

const AnimeeDeals = ({ handleAddToCart }) => {
  return (
    <div className="container mt-5">
      <div className="heading-section">
        <h5 style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
          🔥 Animee Deals..
        </h5>
        <h6 style={{ fontSize: '1rem', color: '#666' }}>
          Most Ordered right now
        </h6>
      </div>
      <div className="row mt-4">
        {AnimeeProducts.map((prod, index) => (
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

export default AnimeeDeals;
