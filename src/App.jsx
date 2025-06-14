import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Cards } from './Components/Cards/Cards';
import { Footer } from './Components/Footer/Index';
import { Navbarname } from './Components/Navbar/Navbarname';
import { Carousel } from './Components/Carousel/Carousel';
import { Routes,Route } from 'react-router';
import AnimeeDeals from './Components/Food/AnimeeDeals';
import FastFoodDeals from './Components/Food/FastFoodDeals';
import PopularItems from './Components/Food/PopularItems';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setIsCartLoaded(true);
  }, []);

  useEffect(() => {
    if (isCartLoaded) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems, isCartLoaded]);

  const handleAddToCart = (product) => {
    const existingIndex = cartItems.findIndex(item => item.name === product.name);

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

  const AnimeeProducts = [
    { name: 'Shrimp Chowmin', price: 700, img: '/animee1.jpeg' },
    { name: 'Veg fried rice', price: 1599, img: '/animee2.jpeg' },
  ];

  if (!isCartLoaded) return null;

  return (
    <>
     {/* <BrowserRouter> */}
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Carousel />
      <Navbarname />
<Routes>
  <Route path='/' element={<AnimeeDeals/>}/>
  
        <Route path="/animee" element={<AnimeeDeals handleAddToCart={handleAddToCart} />} />
        <Route path="/fastfood" element={<FastFoodDeals handleAddToCart={handleAddToCart} />} />
        <Route path="/popular" element={<PopularItems handleAddToCart={handleAddToCart} />} />
    
</Routes>
      {/* Animee Deals
    <div className="container mt-5">
        <div className="heading-section">
          <h5 style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#000',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🔥</span>
            Animee Deals..
          </h5>
          <h6 style={{
            fontSize: '1rem',
            color: '#666',
            marginTop: '4px'
          }}>
            Most Ordered right now
          </h6>
        </div>
     
      
      <div className="row mt-4">
    {AnimeeProducts.map((prod, index) => (
      <Cards
        key={index}
        name={prod.name}
        price={prod.price}
        img={prod.img}
        onAddToCart={() => handleAddToCart(prod)}
      customClass="animee-card" // 👈 pass special class here

      />
    ))}
  </div>
</div>

      {/* Fast Food Deals */}
      {/* <div className="container mt-5">
        <div className="heading-section">
          <h5 style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#000',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🔥</span>
            Fast Food Deals..
          </h5>
          <h6 style={{
            fontSize: '1rem',
            color: '#666',
            marginTop: '4px'
          }}>
            Most Ordered right now
          </h6>
        </div>
        <div className="row mt-4">
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
      </div> */}

      {/* Popular Items */}
      {/* <div className="container mt-5">
        <div className="heading-section">
          <h5 style={{
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#000',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '1.6rem', marginRight: '10px' }}>🍜</span>
            Popular Items..
          </h5>
          <h6 style={{
            fontSize: '1rem',
            color: '#666',
            marginTop: '4px'
          }}>
            Most Ordered Chinese foods are here
          </h6>
        </div>
        <div className="row mt-4">
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
      </div> */} 
{/* <Routes>
  <Route path='/' element={<Cards/>}/>
</Routes> */}
      <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
