import React, { useState } from 'react';
import { Burgerdeal } from '../Cards/burgerdeal';

const burgerdealProducts = [
  { id: 1, name: 'Chocolate Lava Cakes', price: 700, img: '/burgerdeal.png', description: 'Warm chocolate cake with a molten center, served fresh.' },
  { id: 2, name: 'Mango Mousse', price: 1699, img: '/burgerdeal.png', description: 'Creamy mango mousse with a tropical fruity finish.' },
  { id: 3, name: 'Strawberry Cheesecake', price: 2699, img: '/deal1.jpg', description: 'Classic New York-style cheesecake topped with strawberries.' },
  { id: 4, name: 'Baklava', price: 1599, img: '/deal3.jpg', description: 'Rich Middle Eastern pastry made with layers of filo and nuts.' },
  { id: 5, name: 'Gulab Jamun', price: 1060, img: '/deal.jpg', description: 'Soft milk-solid dumplings soaked in rose-flavored syrup.' },
  { id: 6, name: 'Tiramisu', price: 1060, img: '/burger2.jpg', description: 'Italian layered dessert with coffee-soaked biscuits and mascarpone cream.' },
];

export const Deals = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
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
        {burgerdealProducts.map((prod) => (
          <Burgerdeal
            key={prod.id}
            name={prod.name}
            price={prod.price}
            img={prod.img}
            description={prod.description}
            isWished={wishlist.includes(prod.id)}
            onToggleWishlist={() => toggleWishlist(prod.id)}
            onAddToCart={() => handleAddToCart(prod)}
          />
        ))}
      </div>
    </div>
  );
};
