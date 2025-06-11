import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Cards } from './Components/Cards/Cards';
import { Footer } from './Components/Footer/Index';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setIsCartLoaded(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart with quantity logic
  const handleAddToCart = (product) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.name === product.name
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const Products = [
    { name: 'Beef Jalapeno Dynamite burger', price: 700, img: '/img.jpg' },
    { name: '3 Beef tender burgers', price: 1699, img: '/burger2.jpg' },
    { name: 'Burgers with Fries', price: 950, img: '/deal.jpg' },
    { name: 'Dragon Chicken with Rice and Noodles', price: 2699, img: '/chinesedeal.jpg' },
    { name: 'Khawsa with Chicken fried rice', price: 1599, img: '/cdeal2.jpg' },
    { name: 'Dragon Beef and Chicken', price: 1060, img: '/cdeal3.jpg' },
  ];

  const PopularProducts = [
    { name: 'Shrimp Chowmin', price: 700, img: '/chowmin.jpg' },
    { name: 'Vegetable Chowmin', price: 1699, img: '/noodles.jpg' },
    { name: 'Prawns veg Soup', price: 2699, img: '/soup.jpg' },
    { name: 'Veg fried rice', price: 1599, img: '/veg.jpg' },
    { name: 'Mix Chowmin', price: 1060, img: '/prawnsnoodles.jpg' },
    { name: 'Hakka Noodles', price: 1060, img: '/hakka.jpg' },
    { name: 'Chicken Momos', price: 500, img: '/momos.jpg' },
    { name: 'Red Sauce', price: 650, img: '/pasta.jpg' },
    { name: 'Alferado Pasta', price: 900, img: '/alferado.jpg' },
  ];

  if (!isCartLoaded) return null;

  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />

      <h5 style={{ fontWeight: 'bold', fontSize: '1.6rem', color: '#000', display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px' }}>🔥</span>
        Summer Deals..
      </h5>
      <h6>Most Ordered right now</h6>

      <div className="container mt-4">
        <div className="row">
          {Products.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>

     <h5 style={{ fontWeight: 'bold', fontSize: '1.6rem', color: '#000', display: 'flex', alignItems: 'center' }}>
  <span style={{ marginRight: '8px' }}>🍜</span>
  Popular Items..
</h5>
<h6>Most Ordered Chinese foods are here</h6>

      <div className="container mt-4">
        <div className="row">
          {PopularProducts.map((prod, index) => (
            <Cards
              key={index}
              name={prod.name}
              price={prod.price}
              img={prod.img}
              onAddToCart={() => handleAddToCart(prod)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
