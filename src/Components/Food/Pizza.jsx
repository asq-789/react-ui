import React from 'react'
import { Cards } from '../Cards/Cards';
export const PizzaProducts = [
  { 
    name: '🍕 Margherita', 
    price: 700, 
    img: '/piz1.jpg', 
    description: 'Classic with tomato, mozzarella, and fresh basil',
    badge: '🌿 Classic'
  },
  { 
    name: '🌶️ Pepperoni', 
    price: 1699, 
    img: '/piz2.jpg', 
    description: 'Topped with spicy pepperoni slices and mozzarella',
    badge: '🔥 Spicy'
  },
  { 
    name: '🍗 BBQ Chicken', 
    price: 2699, 
    img: '/piz3.jpg', 
    description: 'Grilled chicken, smoky BBQ sauce, and onions',
    badge: '🍖 BBQ Special'
  },
  { 
    name: '🥦 Vegetarian', 
    price: 1599, 
    img: '/piz4.jpg', 
    description: 'Loaded with mushrooms, olives, bell peppers, and onions',
    badge: '🌱 Veg'
  },
  { 
    name: '🍍 Hawaiian', 
    price: 1060, 
    img: '/piz5.jpg', 
    description: 'A sweet and savory combo of pineapple and ham',
    badge: '🍍 Sweet & Savory'
  },
  { 
    name: '🧀 Four Cheese', 
    price: 1060, 
    img: '/piz6.jpg', 
    description: 'Blend of mozzarella, cheddar, parmesan, and gorgonzola',
    badge: '🧀 Cheesy'
  },
  { 
    name: '🔥 Tandoori Chicken', 
    price: 500, 
    img: '/piz7.jpg', 
    description: 'Spicy tandoori-marinated chicken with red onions',
    badge: '🌶️ Spicy'
  },
  { 
    name: '🌮 Fajita Pizza', 
    price: 650, 
    img: '/piz8.jpg', 
    description: 'Chicken or beef fajita strips, jalapeños, and capsicum',
    badge: '💥 Hot Pick'
  },
  { 
    name: '🥩 Meat Lovers', 
    price: 900, 
    img: '/piz9.jpg', 
    description: 'Loaded with pepperoni, sausage, beef, ham, and bacon',
    badge: '🍖 Loaded'
  }
];

export const Pizza = ({handleAddToCart,handleToggleWishlist, wishlistItems}) => {
  return (
    <div>  {/* Pixa */}
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
      <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍕</span>
      Cheesy Pizza Bliss
    </h3>
    
    <h6>Melted cheese, crispy crust – pizza heaven starts here!</h6>
    
            </div>
            <div className="row mt-4">
              {PizzaProducts.map((prod, index) => (
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
          </div></div>
  )
}
