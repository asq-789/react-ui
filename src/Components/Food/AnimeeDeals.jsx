import React from 'react';
import { Animeecards } from '../Cards/Animeecards';

export const AnimeeProducts = [
  {
    name: '🍱 Animee Lovers Special',
    price: 700,
    img: '/animee1.jpeg',
    description: 'Special shrimp chowmin served in anime-style themed packaging.',
    badge: '🍱 Otaku Pick'
  },
  {
    name: '🎭 Mighty Deal Bento',
    price: 1599,
    img: '/animee2.jpeg',
    description: 'Colorful and aromatic veg fried rice from our Animee deals.',
    badge: '🎭 Cosplay Favorite'
  },
  {
    name: '🔥 Animee Combo Deal',
    price: 1599,
    img: '/animee3.jpeg',
    description: 'Another flavor twist on veg fried rice for anime lovers.',
    badge: '🔥 Top Combo'
  }
];

const AnimeeDeals = ({ handleAddToCart, handleToggleWishlist, wishlistItems }) => {
  return (
    <div className="container mt-5">
      <div className="heading-section">
        <h3 className="bold-heading" style={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#000' }}>
          <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍱</span>
          Animee Delights
        </h3>
        <h6>Crunchy, spicy, anime-style cravings await you!</h6>
      </div>

      <div className="row mt-4">
        {AnimeeProducts.map((prod, index) => (
         <Animeecards
  key={index}
  product={prod}
  handleAddToCart={handleAddToCart}
  handleToggleWishlist={handleToggleWishlist}
  wishlistItems={wishlistItems}
/>

        ))}
      </div>
    </div>
  );
};

export default AnimeeDeals;
