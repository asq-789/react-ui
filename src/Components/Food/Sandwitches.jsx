import React from 'react'
import { Cards } from '../Cards/Cards';
const sandwitchesProducts = [
  { 
    name: '🥪 Grilled Chicken Sandwich', 
    price: 700, 
    img: '/s1.jpg', 
    description: 'Tender grilled chicken breast with lettuce, tomato, and mayo on toasted bread.',
    badge: '🆕 New'
  },
  { 
    name: '🧀 Triple Cheese Burst Sandwich', 
    price: 850, 
    img: '/s2.jpg', 
    description: 'Triple-layered sandwich with chicken, egg, cheese, lettuce, and mayo.',
    badge: '🌟 Bestseller'
  },
  { 
    name: '🐟 Tuna Melt Sandwich', 
    price: 780, 
    img: '/s3.jpg', 
    description: 'Creamy tuna salad with melted cheese on grilled bread.'
  },
  { 
    name: '🍖 BBQ Chicken Slaw Sandwich', 
    price: 900, 
    img: '/s4.jpg', 
    description: 'Slow-cooked shredded chicken in BBQ sauce, topped with coleslaw.'
  },
  { 
    name: '🥗 Veggie Delight Sandwich', 
    price: 1100, 
    img: 's5.jpg', 
    description: 'Fresh lettuce, tomatoes, cucumbers, olives, and cheese with herbed mayo.',
    badge: '🆕 New'
  },
  { 
    name: '🌶️ Spicy Egg & Jalapeño Sandwich', 
    price: 870, 
    img: '/s6.jpg', 
    description: 'Fluffy scrambled eggs with melted cheese and a hint of pepper.',
    isSpicy: true,
    badge: '🌶️ Spicy'
  },
];

export const Sandwitches = ({handleAddToCart,handleToggleWishlist, wishlistItems}) => {
  return (
    <div>{/* Sandwitches Deals */}
          <div className="container mt-5">
            <div className="heading-section">
            <h3
      style={{
        fontWeight: 'bold',
        fontSize: '1.8rem',
        color: '#000',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🥪</span>
      Sandwich Mania
    </h3>
    
    <h6>Layered love between slices of joy</h6>
    
            </div>
            <div className="row mt-4">
              {sandwitchesProducts.map((prod, index) => (
                <Cards
                  key={index}
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
          </div></div>
  )
}
