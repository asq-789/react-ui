import React from 'react';
import { Cards } from '../Cards/Cards';

const bbqProducts = [ 
  { id: 1, name: 'BBQ Chicken Wings', price: 890, img: '/b1.jpg', description: 'Juicy chicken wings tossed in a smoky BBQ glaze.' },
  { id: 2, name: 'Smoked Beef Ribs', price: 1550, img: '/b2.jpg', description: 'Tender beef ribs slow-smoked with BBQ spices and sauce.' },
  { id: 3, name: 'Honey BBQ Chicken', price: 1050, img: '/b3.jpg', description: 'Sweet and tangy BBQ chicken grilled to perfection.' },
  { id: 4, name: 'BBQ Lamb Chops', price: 1799, img: '/b4.jpg', description: 'Grilled lamb chops marinated in bold BBQ herbs and spices.' },
  { id: 5, name: 'Spicy BBQ Drumsticks', price: 970, img: '/b5.jpg', description: 'Hot and smoky drumsticks coated with a fiery BBQ rub.' },
  { id: 6, name: 'BBQ Pulled Beef Sliders', price: 1150, img: '/b6.jpg', description: 'Shredded beef slow-cooked in BBQ sauce and served in mini buns.' },
];

export const BBQ = ({ handleAddToCart }) => {
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
            <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍖</span>
            BBQ Feast Fiesta
          </h3>
          <h6>Savor the smoky bites, grilled to perfection!</h6>
        </div>
        <div className="row mt-4">
          {bbqProducts.map((prod) => (
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
