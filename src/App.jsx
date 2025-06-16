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
import { Home } from './Home';
import { Animeecards } from './Components/Cards/Animeecards';
import { Burgers } from './Components/Food/Burgers';
import { Appetizers } from './Components/Food/Appetizers';
import { BBQ } from './Components/Food/BBQ';
import { Biryani } from './Components/Food/Biryani';
import { Desert } from './Components/Food/Desert';
import { Drinks } from './Components/Food/Drinks';
import { Pizza } from './Components/Food/Pizza';
import { Rolls } from './Components/Food/Rolls';
import { Sandwitches } from './Components/Food/Sandwitches';
import { Deals } from './Components/Food/Deals';
import { Loginmoadal } from './Components/Loginmoadal';
import { Aboutus } from './Components/Aboutus';
import { Restaurant } from './Components/Restaurant';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
const [wishlistItems, setWishlistItems] = useState([]);
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

 
const handleToggleWishlist = (product) => {
  const exists = wishlistItems.find(item => item.name === product.name);
  if (exists) {
    setWishlistItems(wishlistItems.filter(item => item.name !== product.name));
  } else {
    setWishlistItems([...wishlistItems, product]);
  }
};
  if (!isCartLoaded) return null;

  return (
    <>
     <Loginmoadal/>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Carousel />
     <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
  <Navbarname />
</div>
<Routes>
  <Route path="/" element={<Loginmoadal />} />
        <Route path='home' element={<Home handleAddToCart={handleAddToCart}/>}/>
        <Route path='about' element={<Aboutus handleAddToCart={handleAddToCart}/>}/>
        <Route path='restaurant' element={<Restaurant handleAddToCart={handleAddToCart}/>}/>
        <Route path="/anime" element={<AnimeeDeals handleAddToCart={handleAddToCart} />} />
        <Route path="/fastfood" element={<FastFoodDeals handleAddToCart={handleAddToCart} />} />
        <Route path="/chinese" element={<PopularItems handleAddToCart={handleAddToCart} />} />
        <Route path="/burger" element={<Burgers handleAddToCart={handleAddToCart} />} />
        <Route path="/appetizers" element={<Appetizers handleAddToCart={handleAddToCart} />} />
        <Route path="/bbq" element={<BBQ  handleAddToCart={handleAddToCart} />} />
        <Route path="/biryani" element={<Biryani handleAddToCart={handleAddToCart} />} />
        <Route path="/burgerdeal" element={<Deals handleAddToCart={handleAddToCart} />} />
        <Route path="/desserts" element={<Desert handleAddToCart={handleAddToCart} />} />
        <Route path="/drinks" element={<Drinks handleAddToCart={handleAddToCart} />} />
        <Route path="/pizza" element={<Pizza handleAddToCart={handleAddToCart} />} />
        <Route path="/rolls" element={<Rolls handleAddToCart={handleAddToCart} />} />
        <Route path="/sandwiches" element={<Sandwitches handleAddToCart={handleAddToCart} />} />

</Routes>
     
      <Footer />
    
    </>
  );
}

export default App;
