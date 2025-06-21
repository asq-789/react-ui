import React from 'react';
import { Cards } from '../Cards/Cards';

export const bbqProducts = [ 
  {
    id: 1,
    name: '🍗 BBQ Chicken Wings',
    price: 890,
    img: '/b1.jpg',
    description: 'Juicy chicken wings tossed in a smoky BBQ glaze.',
    badge: '🔥 Crowd Favorite'
  },
  {
    id: 2,
    name: '🥩 Smoked Beef Ribs',
    price: 1550,
    img: '/b2.jpg',
    description: 'Tender beef ribs slow-smoked with BBQ spices and sauce.',
    badge: '🔥 Smoked Favorite'
  },
  {
    id: 3,
    name: '🍯 Honey BBQ Chicken',
    price: 1050,
    img: '/b3.jpg',
    description: 'Sweet and tangy BBQ chicken grilled to perfection.',
    badge: '🍯 Sweet BBQ'
  },
  {
    id: 4,
    name: '🐑 BBQ Lamb Chops',
    price: 1799,
    img: '/b4.jpg',
    description: 'Grilled lamb chops marinated in bold BBQ herbs and spices.',
    badge: '🥩 Meaty Must-Have'
  },
  {
    id: 5,
    name: '🌶️ Spicy BBQ Drumsticks',
    price: 970,
    img: '/b5.jpg',
    description: 'Hot and smoky drumsticks coated with a fiery BBQ rub.',
    badge: '🌶️ Heat Lover'
  },
  {
    id: 6,
    name: '🍔 BBQ Pulled Beef Sliders',
    price: 1150,
    img: '/b6.jpg',
    description: 'Shredded beef slow-cooked in BBQ sauce and served in mini buns.',
    badge: '🍖 Tender Bites'
  }
];


export const BBQ = ({ handleAddToCart, handleToggleWishlist, wishlistItems }) => {
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
               onToggleWishlist={() => handleToggleWishlist(prod)}
              isWished={wishlistItems.some((item) => item.name === prod.name)}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
