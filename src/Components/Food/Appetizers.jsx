import React from 'react'
import { Cards } from '../Cards/Cards';
const appetizerProducts = [
  {
    name: 'Crispy Chicken Strips',
    price: 480,
    img: '/a1.jpg',
    description: 'Golden-fried chicken strips served with spicy dip.'
  },
  {
    name: 'Cheese Balls',
    price: 450,
    img: '/a2.jpg',
    description: 'Crispy on the outside, gooey cheese inside — a perfect starter.'
  },
  {
    name: 'Stuffed Jalapeños',
    price: 500,
   img: '/jalepeno.jpg',
    description: 'Spicy jalapeños stuffed with cheese and coated in crunchy crumbs.'
  },
  {
    name: 'Chicken Tempura',
    price: 520,
    img: '/a4.jpg',
    description: 'Lightly battered chicken strips served with tempura sauce.'
  },
  {
    name: 'Dynamite Chicken Bites',
    price: 560,
    img: '/a5.jpg',
    description: 'Bite-sized crispy chicken tossed in dynamite mayo sauce.'
  },
  {
    name: 'French Fries',
    price: 300,
    img: '/a6.jpg',
    description: 'Classic salted fries served hot and crispy.'
  }
];

export const Appetizers = () => {
  return (
    <div> <div className="container mt-5">
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
      <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🧆</span>
      Irresistible Appetizers
    </h3>
    
    <h6>Small plates, BIG flavor!</h6>
    
            </div>
            <div className="row mt-4">
              {appetizerProducts.map((prod, index) => (
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
