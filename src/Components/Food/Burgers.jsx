import React from 'react'
import { Cards } from '../Cards/Cards';
const burgerProducts = [
  { 
    name: 'Classic Beef Burger', 
    price: 700, 
    img: '/img.jpg', 
    description: 'Juicy grilled beef patty with lettuce, tomato, and cheese.' 
  },
  { 
    name: 'Cheese Burst Burger', 
    price: 850, 
    img: '/bg2.jpg', 
    description: 'Melting cheese center with a crispy outer patty.' 
  },
  { 
    name: 'Zinger Burger', 
    price: 780, 
    img: '/bg3.jpg', 
    description: 'Crispy spicy chicken fillet with mayo and lettuce.' 
  },
  { 
    name: 'BBQ Beef Burger', 
    price: 900, 
    img: '/bg4.jpg', 
    description: 'Grilled beef with BBQ sauce, caramelized onions, and cheddar.' 
  },
  { 
    name: 'Double Decker Burger', 
    price: 1100, 
    img: '/bg5.jpg', 
    description: 'Two patties stacked with cheese, lettuce, and pickles.' 
  },
  { 
    name: 'Spicy Jalapeño Burger', 
    price: 870, 
    img: '/bg6.jpg', 
    description: 'Loaded with jalapeños, spicy sauce, and pepper jack cheese.' 
  },
  { 
    name: 'Mushroom Swiss Burger', 
    price: 950, 
    img: '/bg7.jpg', 
    description: 'Sauteed mushrooms with Swiss cheese on a soft bun.' 
  },
  { 
    name: 'Chicken Fajita Burger', 
    price: 880, 
    img: '/bg8.jpg', 
    description: 'Fajita-seasoned chicken with peppers and creamy sauce.' 
  },
  { 
    name: 'Veggie Delight Burger', 
    price: 790, 
    img: '/bg9.jpg', 
    description: 'Grilled veggie patty with fresh greens and tangy mayo.' 
  },
];
export const Burgers = () => {
  return (
    <div>{/* Burger Deal Section */}
    <div className="container mt-5">
      <div className="heading-section">
        <h3
          style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍔</span>
         Smash the Hunger
        </h3>
        <h6 style={{ fontSize: '1rem', color: '#666', marginTop: '4px' }}>
          Juicy, cheesy, and oh-so-satisfying burger combos!
        </h6>
      </div>
    
      <div className="row mt-4">
        {burgerProducts.map((prod, index) => (
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
    </div>
  )
}
