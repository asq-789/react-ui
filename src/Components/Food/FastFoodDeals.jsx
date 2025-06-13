import React from 'react';
import { Cards } from '../Cards/Cards';

const Products = [
  { name: 'Beef Jalapeno Dynamite burger', price: 700, img: '/img.jpg' },
  { name: '3 Beef tender burgers', price: 1699, img: '/burger2.jpg' },
  { name: 'Burgers with Fries', price: 950, img: '/deal.jpg' },
  { name: 'Dragon Chicken with Rice and Noodles', price: 2699, img: '/chinesedeal.jpg' },
  { name: 'Khawsa with Chicken fried rice', price: 1599, img: '/cdeal2.jpg' },
  { name: 'Dragon Beef and Chicken', price: 1060, img: '/cdeal3.jpg' },
];

const FastFoodDeals = ({ handleAddToCart }) => {
  return (
    <div className="container mt-5">
      <div className="heading-section">
        <h5 style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
          🔥 Fast Food Deals..
        </h5>
        <h6 style={{ fontSize: '1rem', color: '#666' }}>
          Most Ordered right now
        </h6>
      </div>
      <div className="row mt-4">
        {Products.map((prod, index) => (
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

export default FastFoodDeals;
