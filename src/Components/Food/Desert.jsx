import React from 'react'
import { Cards } from '../Cards/Cards';
const DessertsProducts = [
  { 
    name: '🍫 Chocolate Lava Cakes', 
    price: 700, 
    img: '/lavacake.jpg', 
    description: 'Warm chocolate cake with a molten center, served fresh.',
    badge: '🔥 Hot Pick'
  },
  { 
    name: '🥭 Mango Mousse', 
    price: 1699, 
    img: '/mangomuse.jpg', 
    description: 'Creamy mango mousse with a tropical fruity finish.',
    badge: '🆕 New'
  },
  { 
    name: '🍓 Strawberry Cheesecake', 
    price: 2699, 
    img: '/stcake.jpg', 
    description: 'Classic New York-style cheesecake topped with strawberries.',
    badge: '⭐ Bestseller'
  },
  { 
    name: '🥮 Baklava', 
    price: 1599, 
    img: '/baklava.jpg', 
    description: 'Rich Middle Eastern pastry made with layers of filo and nuts.',
    badge: '🌍 Traditional'
  },
  { 
    name: '🍯 Gulab Jamun', 
    price: 1060, 
    img: '/gulabjamun.jpg', 
    description: 'Soft milk-solid dumplings soaked in rose-flavored syrup.',
    badge: '💖 Desi Delight'
  },
  { 
    name: '☕ Tiramisu', 
    price: 1060, 
    img: '/trimusu.jpg', 
    description: 'Italian layered dessert with coffee-soaked biscuits and mascarpone cream.',
    badge: '🇮🇹 Italian Fav'
  },
  { 
    name: '🍶 Rasmalai', 
    price: 500, 
    img: '/rasmali.jpg', 
    description: 'Spongy cottage cheese balls in sweet saffron milk.',
    badge: '🎉 Sweet Treat'
  },
  { 
    name: '🍨 Icecreams', 
    price: 650, 
    img: '/icecream.jpg', 
    description: 'Assorted flavors of creamy, chilled ice creams.',
    badge: '❄️ Chilled'
  },
  { 
    name: '🍧 Brownie Sundae', 
    price: 900, 
    img: '/brownie.jpg', 
    description: 'Fudgy brownie topped with ice cream, nuts, and chocolate syrup.',
    badge: '🍫 Rich Delight'
  }
];


export const Desert = ({handleAddToCart,handleToggleWishlist, wishlistItems}) => {
  return (
    <div> {/* Desserts */}
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
      <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍨</span>
      Sweet Dessert Dreams
    </h3>
    
    <h6>End on a sweet note – treat yourself!</h6>
    
            </div>
            <div className="row mt-4">
              {DessertsProducts.map((prod, index) => (
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
          </div>
          </div>
  )
}
