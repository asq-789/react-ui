import React from 'react';
import { Cards } from '../Cards/Cards';

const Products = [
  {
    name: '🌶️ Beef Jalapeno Dynamite Burger',
    price: 700,
    img: '/img.jpg',
    description: 'A fiery beef patty loaded with jalapeños, cheese, and spicy dynamite sauce for a bold bite.',
    badge: '🔥 Spicy'
  },
  {
    name: '🍔 3 Beef Tender Burgers',
    price: 1699,
    img: '/burger2.jpg',
    description: 'A triple treat of juicy, tender beef burgers stacked with fresh veggies and classic sauces.',
    badge: '⭐ Bestseller'
  },
  {
    name: '🍟 Burgers with Fries',
    price: 950,
    img: '/deal.jpg',
    description: 'Classic beef burgers paired perfectly with golden crispy fries — the ultimate combo.',
    badge: '🍽️ Combo'
  },
  {
    name: '🐉 Dragon Chicken with Rice and Noodles',
    price: 2699,
    img: '/chinesedeal.jpg',
    description: 'A spicy and savory Chinese-style dragon chicken dish served with fried rice and stir-fried noodles.',
    badge: '🌶️ Spicy'
  },
  {
    name: '🍜 Khawsa with Chicken Fried Rice',
    price: 1599,
    img: '/cdeal2.jpg',
    description: 'A comforting Burmese Khawsa bowl served alongside flavorful chicken fried rice.',
    badge: '🍲 Chef’s Choice'
  },
  {
    name: '🥩 Dragon Beef and Chicken',
    price: 1060,
    img: '/cdeal3.jpg',
    description: 'A sizzling hot plate of tender beef and chicken tossed in signature dragon sauce.',
    badge: '🔥 Sizzling'
  },
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
                              description={prod.description}
            onAddToCart={() => handleAddToCart(prod)}
          />
        ))}
      </div>
    </div>
  );
};

export default FastFoodDeals;
