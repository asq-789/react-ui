import React from 'react';
import { Cards } from '../Cards/Cards';

const biryaniProducts = [
  { id: 1, name: 'Hyderabadi Biryani', price: 750, img: '/biryani1.jpg', description: 'Aromatic basmati rice cooked with spicy marinated chicken and saffron.' },
  { id: 2, name: 'Sindhi Biryani', price: 800, img: '/biryani2.jpg', description: 'A flavorful mix of meat, potatoes, green chilies, and tangy spices.' },
  { id: 3, name: 'Mutton Biryani', price: 950, img: '/biryani3.jpg', description: 'Tender mutton layered with long-grain rice and traditional spices.' },
  { id: 4, name: 'Chicken Tikka Biryani', price: 870, img: '/biryani5.jpg', description: 'Grilled chicken tikka chunks mixed in spicy biryani rice.' },
  { id: 5, name: 'Paneer Biryani (Veg)', price: 720, img: '/biryani4.jpg', description: 'Soft paneer cubes cooked with aromatic spices and saffron rice.' },
  { id: 6, name: 'Beef Biryani', price: 880, img: '/biryani6.jpg', description: 'Juicy beef pieces simmered in rich, spiced biryani masala and rice.' },
];

export const Biryani = ({ handleAddToCart }) => {
  return (
    <div>
      <div className="container mt-5">
        <div className="heading-section">
          <h3 style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#000',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍛</span>
            Royal Biryani Treats
          </h3>
          <h6>Aromatic rice meets bold spices in every spoonful</h6>
        </div>
        <div className="row mt-4">
          {biryaniProducts.map((prod) => (
            <Cards
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
    </div>
  );
};
