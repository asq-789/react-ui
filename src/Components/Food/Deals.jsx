import React, { useState } from 'react';
import { Burgerdeal } from '../Cards/burgerdeal'; // this is your card component
import { Cards } from '../Cards/Cards';

const DessertsProducts = [
  { name: 'Chocolate Lava Cakes', price: 700, img: '/burgerdeal.png', description: 'Warm chocolate cake with a molten center, served fresh.' },
  { name: 'Mango Mousse', price: 1699, img: '/burgerdeal.png', description: 'Creamy mango mousse with a tropical fruity finish.' },
  { name: 'Strawberry Cheesecake', price: 2699, img: '/deal1.jpg', description: 'Classic New York-style cheesecake topped with strawberries.' },
  { name: 'Baklava', price: 1599, img: '/deal3.jpg', description: 'Rich Middle Eastern pastry made with layers of filo and nuts.' },
  { name: 'Gulab Jamun', price: 1060, img: '/deal.jpg', description: 'Soft milk-solid dumplings soaked in rose-flavored syrup.' },
  { name: 'Tiramisu ', price: 1060, img: '/burger2.jpg', description: 'Italian layered dessert with coffee-soaked biscuits and mascarpone cream.' },
];

export const Deals = () => {
  // Cart and wishlist states
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  const toggleWishlist = (itemName) => {
    setWishlist((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="container mt-5">
      <div className="heading-section">
        <h3 style={{
          fontWeight: 'bold',
          fontSize: '1.8rem',
          color: '#000',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍨</span>
          Sweet Dessert Dreams
        </h3>
        <h6>End on a sweet note – treat yourself!</h6>
      </div>

      <div className="row mt-4">
        {DessertsProducts.map((prod, index) => (
          <Burgerdeal
            key={index}
            name={prod.name}
            price={prod.price}
            img={prod.img}
            description={prod.description}
            isWished={wishlist.includes(prod.name)}
            onToggleWishlist={() => toggleWishlist(prod.name)}
            onAddToCart={() => handleAddToCart(prod)}
          />
        ))}
      </div>
    </div>
  );
};
