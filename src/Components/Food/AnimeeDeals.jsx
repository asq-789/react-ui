import React from 'react';
import { Animeecards } from '../Cards/Animeecards';

const AnimeeProducts = [
  {
    name: 'Animee Lovers',
    price: 700,
    img: '/animee1.jpeg',
    description: 'Special shrimp chowmin served in anime-style themed packaging.'
  },
  {
    name: 'Mighty Deal',
    price: 1599,
    img: '/animee2.jpeg',
    description: 'Colorful and aromatic veg fried rice from our Animee deals.'
  },
  {
    name: 'Animee Combo Deal',
    price: 1599,
    img: '/animee3.jpeg',
    description: 'Another flavor twist on veg fried rice for anime lovers.'
  },
];

const AnimeeDeals = ({ handleAddToCart }) => {
  return (
    <div>
      {/* Animee Deals */}
      <div className="container mt-5">
        <div className="heading-section">
          <h3
            className="bold-heading"
            style={{
              fontWeight: 'bold',
              fontSize: '1.8rem',
              color: '#000',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍱</span>
            Animee Delights
          </h3>
          <h6>Crunchy, spicy, anime-style cravings await you!</h6>
        </div>

        <div className="row mt-4">
          {AnimeeProducts.map((prod, index) => (
            <Animeecards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
              description={prod.description}
              onAddToCart={() => handleAddToCart(prod)}
              customClass="animee-card"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeeDeals;
