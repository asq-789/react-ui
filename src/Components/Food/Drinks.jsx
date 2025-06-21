import React from 'react'
import { Cards } from '../Cards/Cards';
export const drinkProducts = [
  {
    name: '🌿 Mint Margarita',
    price: 350,
    img: '/d1.jpg',
    description: 'A refreshing blend of mint, lemon, and soda served chilled.',
    badge: '❄️ Chilled'
  },
  {
    name: '☕ Cold Coffee',
    price: 400,
    img: '/d2.jpg',
    description: 'Creamy iced coffee topped with whipped cream.',
    badge: '⭐ Bestseller'
  },
  {
    name: '🍋 Fresh Lime Soda',
    price: 300,
    img: '/d3.jpg',
    description: 'Zesty lime soda available in sweet, salty, or mixed flavor.',
    badge: '🧊 Refreshing'
  },
  {
    name: '🍍 Pina Colada',
    price: 450,
    img: '/d4.jpg',
    description: 'Pineapple and coconut mocktail served over crushed ice.',
    badge: '🍹 Mocktail'
  },
  {
    name: '🍓 Strawberry Shake',
    price: 420,
    img: '/d5.jpg',
    description: 'Smooth strawberry milkshake topped with fresh cream.',
    badge: '🍓 Fresh'
  },
  {
    name: '🍑 Peach Iced Tea',
    price: 390,
    img: '/d6.jpg',
    description: 'Chilled black tea infused with juicy peach flavor.',
    badge: '🌞 Summer Hit'
  }
];


export const Drinks = ({handleAddToCart,handleToggleWishlist, wishlistItems}) => {
  return (
    <div> {/*drinks*/}
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
      <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🥤</span>
      Cool Refreshments
    </h3>
    
    <h6>Fizz, chill, and flavor in every sip!</h6>
    
            </div>
            <div className="row mt-4">
              {drinkProducts.map((prod, index) => (
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
