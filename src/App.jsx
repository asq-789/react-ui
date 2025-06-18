import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Cards } from './Components/Cards/Cards';
import { Footer } from './Components/Footer/Index';
import { Navbarname } from './Components/Navbar/Navbarname';
import { Carousel } from './Components/Carousel/Carousel';
import { Routes, Route } from 'react-router';
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
import { Loginmoadal } from './Components/Loginmoadal';
import { Aboutus } from './Components/Aboutus';
import { Restaurant } from './Components/Restaurant';
import { Deal } from './Components/Deal';

function App() {
 const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  useEffect(() => {
    if (userEmail) {
      const storedCart = JSON.parse(localStorage.getItem(`cart_${userEmail}`)) || [];
      const storedWishlist = JSON.parse(localStorage.getItem(`wishlist_${userEmail}`)) || [];
      setCartItems(storedCart);
      setWishlistItems(storedWishlist);
    } else {
      setCartItems([]);
      setWishlistItems([]);
    }
    setIsCartLoaded(true);
  }, [userEmail]);

  useEffect(() => {
    if (userEmail && isCartLoaded) {
      localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cartItems));
      localStorage.setItem(`wishlist_${userEmail}`, JSON.stringify(wishlistItems));
    }
  }, [cartItems, wishlistItems, userEmail, isCartLoaded]);

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
      <Loginmoadal setUserEmail={setUserEmail} />
      <div style={{ width: '200%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <Navbar cartItems={cartItems} setCartItems={setCartItems} userEmail={userEmail} />
        <Carousel />
        <Navbarname />
      </div>

      <Routes>
        <Route path="/" element={<Loginmoadal setUserEmail={setUserEmail} />} />
        <Route path="home" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route path="about" element={<Aboutus handleAddToCart={handleAddToCart} />} />
        <Route path="restaurant" element={<Restaurant userEmail={userEmail} onReservationSubmit={(r) => console.log('Reservation:', r)} />} />
        <Route path="/anime" element={<AnimeeDeals handleAddToCart={handleAddToCart} />} />
        <Route path="/fastfood" element={<FastFoodDeals handleAddToCart={handleAddToCart} />} />
        <Route path="/chinese" element={<PopularItems handleAddToCart={handleAddToCart} />} />
        <Route path="/burger" element={<Burgers handleAddToCart={handleAddToCart} />} />
        <Route path="/appetizers" element={<Appetizers handleAddToCart={handleAddToCart} />} />
        <Route path="/bbq" element={<BBQ handleAddToCart={handleAddToCart} />} />
        <Route path="/biryani" element={<Biryani handleAddToCart={handleAddToCart} />} />
        <Route path="/burgerdeal" element={<Deal handleAddToCart={handleAddToCart} />} />
        <Route path="/desserts" element={<Desert handleAddToCart={handleAddToCart} />} />
        <Route path="/drinks" element={<Drinks handleAddToCart={handleAddToCart} />} />
        <Route path="/pizza" element={<Pizza handleAddToCart={handleAddToCart} />} />
        <Route path="/rolls" element={<Rolls handleAddToCart={handleAddToCart} />} />
        <Route path="/sandwiches" element={<Sandwitches handleAddToCart={handleAddToCart} />} />
      </Routes>

      <div style={{ width: '200%', maxWidth: '100vw', overflowX: 'hidden' }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
